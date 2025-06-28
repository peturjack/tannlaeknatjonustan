"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiSearch } from "react-icons/fi";
const Searchbar = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <AnimatePresence initial={false}>
      <div className="flex">
        {!open && (
          <motion.button
            key="icon"
            className="flex items-center justify-center bg-white text-primary-base "
            onClick={() => setOpen(true)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            aria-label="Open search"
            type="button"
          >
            <FiSearch className="size-6 cursor-pointer" />
          </motion.button>
        )}
        <AnimatePresence>
          {open && (
            <motion.div
              layout
              key="bar"
              className="flex items-center w-[150px] md:-w-[250px] h-12 bg-white rounded-full shadow 
             overflow-hidden gap-2"
              initial={{
                paddingLeft: 0,
                paddingRight: 0,
                border: "none",
                width: 0,
                opacity: 0,
              }}
              animate={{
                paddingLeft: 16,
                paddingRight: 16,
                width: 250,
                border: "solid #d1d5dc 1px",
                opacity: 1,
              }}
              exit={{
                paddingLeft: 0,
                paddingRight: 0,
                width: 0,
                opacity: 0,
                border: "none",
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <FiSearch className="size-6 text-gray-400 " />
              <motion.input
                type="text"
                value={value}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                autoFocus
                onBlur={() => setOpen(false)}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search..."
                className=" bg-transparent outline-none text-gray-800 "
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
};

export default Searchbar;
