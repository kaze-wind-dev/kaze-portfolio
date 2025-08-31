import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AnimationConfig = {
  opacity?: {
    start: number;
    end: number;
  };
  y?: {
    start: number;
    end: number;
  };
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
  triggerStart?: string;
};

export const useScrollAnimation = (config?: AnimationConfig) => {
  const animationContainer = useRef(null);
  const animationItems = useRef<HTMLElement[]>([]);

  const defaultConfig = {
    opacity: {
      start: 0,
      end: 1,
    },
    y: {
      start: 80,
      end: 0,
    },
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
    stagger: 0.4,
    triggerStart: "top 50%",
    ...config,
  };

  const addToAnimationRefs = (el: HTMLElement | null): void => {
    if (el && !animationItems.current.includes(el)) {
      animationItems.current.push(el);
      // 要素追加時に初期状態を設定
      gsap.set(el, {
        opacity: defaultConfig.opacity.start,
        y: defaultConfig.y.start,
      });
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (animationContainer.current && animationItems.current.length > 0) {
      ScrollTrigger.create({
        trigger: animationContainer.current,
        start: defaultConfig.triggerStart,
        once: true,
        onEnter: () => {
          animationItems.current.forEach((el, index) => {
            gsap.to(el, {
              opacity: defaultConfig.opacity.end,
              y: defaultConfig.y.end,
              duration: defaultConfig.duration,
              delay: defaultConfig.delay + index * defaultConfig.stagger,
              ease: defaultConfig.ease,
            });
          });
        },
      });
    }

    // クリーンアップ
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return {
    animationContainer,
    addToAnimationRefs,
  };
};
