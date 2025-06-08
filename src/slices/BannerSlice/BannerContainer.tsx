"use client";
import React from "react";
import { motion } from "motion/react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const BannerContainer = ({ children, className = "" }: Props) => {
  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <motion.div
        className="flex flex-nowrap w-max overflow-hidden"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          duration: 16,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
      </motion.div>
    </div>
  );
};

export default BannerContainer;
