"use client";
import React from "react";
import { useAnimate } from "motion/react";
import type { AnimationPlaybackControls } from "motion";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const BannerContainer = ({ children, className }: Props) => {
  const [scope, animate] = useAnimate();
  const controlsRef = React.useRef<AnimationPlaybackControls | null>(null);

  React.useEffect(() => {
    controlsRef.current = animate(
      scope.current,
      { x: ["-50%", "0%"] },
      {
        duration: 16,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }
    );
    return () => controlsRef.current?.stop();
  }, [animate, scope]);

  const handleMouseEnter = () => {
    controlsRef.current?.pause();
  };

  const handleMouseLeave = () => {
    controlsRef.current?.play();
  };

  return (
    <div
      className={`overflow-hidden w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={scope} className="flex flex-nowrap w-max overflow-hidden">
        {children}
        {children} {/* Duplicate for seamless loop */}
      </div>
    </div>
  );
};

export default BannerContainer;
