"use client";
import { Content } from "@prismicio/client";
import { motion } from "motion/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "motion/react";
type Props = {
  nav: Content.NavbarDocument;
};
const Nav = ({ nav }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <>
      <nav
        className="h-[6rem] px-[2rem] flex justify-between
         items-center text-primary-base  "
      >
        <div className="flex-1">
          <Link href={"/"}>
            <PrismicNextImage className="min-w-[100px]" field={nav.data.logo} />
          </Link>
        </div>
        <div className="space-x-4 flex-1 text-center text-lg">
          {nav.data.navlinks.map((item, index) => (
            <PrismicNextLink
              key={index}
              className={`hidden md:inline-flex ${
                "/" + item.link.text?.toLowerCase() === pathname
                  ? "bg-primary-500 text-white py-2 px-3 "
                  : ""
              }`}
              field={item.link}
            />
          ))}
        </div>
        <div className="flex-1 ">
          <div className="flex justify-end">
            <HiOutlineMenu
              onClick={toggleOpen}
              className="size-8 md:hidden cursor-pointer"
            />
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="bg-white fixed inset-0 z-30 text-primary-base"
          >
            <div className="flex justify-end h-[6rem] px-[2rem] items-center over">
              <IoCloseOutline
                onClick={toggleOpen}
                className="size-10 cursor-pointer"
              />
            </div>
            <ul className="flex flex-col items-center justify-center text-4xl gap-8">
              {nav.data.navlinks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.3 }}
                >
                  <PrismicNextLink
                    onClick={toggleOpen}
                    className={`${
                      "/" + item.link.text?.toLowerCase() === pathname
                        ? "bg-primary-500 text-white py-2 px-3"
                        : ""
                    }`}
                    field={item.link}
                  />
                </motion.div>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
