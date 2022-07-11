import gsap from "gsap";
import { onMounted, reactive } from "vue";

interface IAnimationStates {
  selector: string;
  whenClosed: gsap.TweenVars;
  whenOpen: gsap.TweenVars;
}

interface IOptions {
  isOpen: boolean;
  app: IAnimationStates;
  asideOverlay: IAnimationStates;
}

export const useAside = () => {
  const options = reactive<IOptions>({
    isOpen: false,
    app: {
      selector: "#app",
      whenClosed: {
        ease: "power2.inOut",
        duration: 1.25,
        grid: "1fr / 0.5fr 1fr",
      },
      whenOpen: {
        ease: "power2.inOut",
        duration: 1.5,
        grid: "1fr / 0.025fr 1fr",
      },
    },
    asideOverlay: {
      selector: ".aside-overlay",
      whenClosed: {
        width: "10px",
        ease: "bounce",
        duration: 0.5,
      },
      whenOpen: {
        width: "100%",
      },
    },
  });

  console.log("options", options);
  const toggleAside = () => {
    const animationWhenOpen = () => {
      const tl = gsap.timeline({ duration: 1 });
      tl.to(".main", { opacity: 0 });
      tl.to(options.asideOverlay.selector, {
        ...options.asideOverlay.whenOpen,
      });
      tl.to(options.app.selector, { ...options.app.whenOpen });
      tl.to(".main", { opacity: 1 }, "-=0.75");
    };

    const animationWhenClosed = () => {
      const tl = gsap.timeline({ duration: 1 });
      tl.to(".main", { opacity: 0 });
      tl.to(options.asideOverlay.selector, {
        ...options.asideOverlay.whenClosed,
      });
      tl.to(options.app.selector, { ...options.app.whenClosed }, "-=0.5");
      tl.to(".main", { opacity: 1 }, "-=0.5");
    };

    options.isOpen = !options.isOpen;
    if (options.isOpen) animationWhenOpen();
    else animationWhenClosed();
  };

  return { toggleAside };
};
