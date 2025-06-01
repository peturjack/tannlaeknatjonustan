"use client";
import { KeyTextField, LinkField } from "@prismicio/client";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { motion, AnimatePresence } from "motion/react";
import { PrismicNextLink } from "@prismicio/next";

// Create a simple store to share the active index
let activeIndex: number | null = null;
const listeners: Set<() => void> = new Set();

const useActiveIndex = (index: number) => {
  const [isActive, setIsActive] = useState(activeIndex === index);

  useEffect(() => {
    const updateState = () => setIsActive(activeIndex === index);
    listeners.add(updateState);
    return () => {
      listeners.delete(updateState);
    };
  }, [index]);

  const setActive = (newIndex: number | null) => {
    activeIndex = newIndex;
    listeners.forEach((listener) => listener());
  };

  return { isActive, setActive };
};

type Props = {
  question?: KeyTextField;
  link?: LinkField;
  index: number;
};

export const Dropdown = ({ link, question, index }: Props) => {
  const { isActive, setActive } = useActiveIndex(index);

  const showDropdown = () => {
    setActive(isActive ? null : index);
  };

  return (
    <div className="cursor-pointer group" onClick={showDropdown}>
      <div className="flex justify-between items-center py-2 text-gray-600">
        <h3 className="text-xl">{question}</h3>

        <motion.div
          animate={{ rotate: isActive ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <HiOutlinePlusCircle
            className={clsx(
              "size-6 text-gray-400",
              !isActive && "group-hover:motion-preset-oscillate"
            )}
          />
        </motion.div>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden leading-relaxed"
          >
            <PrismicNextLink
              field={link}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition"
            ></PrismicNextLink>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
