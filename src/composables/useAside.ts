import gsap from "gsap";
import { onMounted, reactive } from "vue";

interface IAnimationStates {
  selector: string,
  whenClosed: gsap.TweenVars,
  whenOpen: gsap.TweenVars,
}

interface IOptions {
  isOpen: boolean;
  app: IAnimationStates,
  asideOverlay: IAnimationStates,
}

export const useAside = () => {
  const options = reactive<IOptions>({
    isOpen: false,
    app: {
      selector: '#app',
      whenClosed: {
        grid: "1fr / 0.5fr 1fr",
        duration: 3,
      },
      whenOpen: {
        grid: "1fr / 0.1fr 1fr",
      },
    },
    asideOverlay: {
      selector: '.aside-overlay',
      whenClosed: {
        width: "10px",
        ease: "bounce",
        duration: 1.5,
      },
      whenOpen: {
        width: "100%",
      },
    }
  });

  console.log('options', options);
  const toggleAside = () => {
    const animationWhenOpen = () => {
      const tl = gsap.timeline({ duration: 1 });
      tl.to(options.asideOverlay.selector, { ...options.asideOverlay.whenOpen });
      tl.to(options.app.selector, { ...options.app.whenOpen });
    };

    const animationWhenClosed = () => {
      const tl = gsap.timeline({ duration: 1 });
      tl.to(options.asideOverlay.selector, { ...options.asideOverlay.whenClosed });
      tl.to(options.app.selector, { ...options.app.whenClosed });
    };

    options.isOpen = !options.isOpen;
    if (options.isOpen) animationWhenOpen();
    else animationWhenClosed();
  };

  onMounted(() => {
    gsap.set(options.app.selector, options.app.whenClosed);
  })

  return { toggleAside }
}