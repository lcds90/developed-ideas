import gsap from "gsap";
import { reactive } from "vue";

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
      },
      whenOpen: {
        grid: "1fr / 0.015fr 1fr",
      },
    },
    asideOverlay: {
      selector: '.aside-overlay',
      whenClosed: {
        duration: 2,
        width: "10px",
        ease: "bounce",
      },
      whenOpen: {
        width: "100%",
      },
    }
  });

  console.log('options', options);
  gsap.set(options.app.selector, options.app.whenClosed);
  const toggleAside = () => {
    const animationWhenOpen = () => {
      const tl = gsap.timeline({ duration: 1 });
      tl.to(options.asideOverlay.selector, { ...options.asideOverlay.whenOpen });
      tl.to(options.app.selector, { ...options.app.whenOpen });
    };

    const animationWhenClosed = () => {
      const tl = gsap.timeline({ duration: 1 });
      tl.to(options.asideOverlay.selector, { ...options.asideOverlay.whenClosed });
      tl.to(options.app.selector, { ...options.app.whenClosed }, "-=2.5");
    };

    options.isOpen = !options.isOpen;
    if (options.isOpen) animationWhenOpen();
    else animationWhenClosed();
  };

  return { toggleAside }
}