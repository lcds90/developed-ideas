import gsap from "gsap";
import { reactive } from "vue";

export const useAside = () => {
    const options = reactive({
        isOpen: false,
        whenOpen: {
          overlay: "-30vw",
          sidebar: "-95%",
        },
        whenClosed: {
          overlay: "0%",
          sidebar: "0%",
        },
      });
      
      const toggleAside = () => {
        const animationWhenOpen = () => {
          const tl = gsap.timeline({ duration: 1 });
          tl.to(".aside", {
            x: options.whenOpen.sidebar,
          });
          tl.to(".aside-overlay", {
            width: "100px",
          });
          tl.to("#app", {
            grid: "1fr / 0.2fr 1fr",
          });
        };
      
        const animationWhenClosed = () => {
          const tl = gsap.timeline({ duration: 1 });
          tl.to(".aside", {
            x: options.whenClosed.sidebar,
          });
          tl.to(".aside-overlay", {
            duration: 2,
            width: "10px",
            ease: "bounce",
          });
          tl.to(
            "#app",
            {
              grid: "1fr / 0.5fr 1fr",
            },
            "-=2.5"
          );
        };
      
        options.isOpen = !options.isOpen;
        if (options.isOpen) animationWhenOpen();
        else animationWhenClosed();
      };

      return { toggleAside }
}