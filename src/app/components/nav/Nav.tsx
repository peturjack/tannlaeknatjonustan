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
import tooth from "../../public/Tooth.svg";
import Image from "next/image";
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
        className="h-[var(--header-height)] px-[2rem] fixed left-0 right-0 top-0 z-2000 bg-white flex justify-between
         items-center text-primary-base  "
      >
        <div>
          <Link href={"/"}>
            <PrismicNextImage
              className={`min-w-[100px] hidden md:block`}
              field={nav.data.logo}
            />
            <Image className="md:hidden" alt="tooth" src={tooth} />
          </Link>
        </div>

        <div>
          <div className="flex items-center gap-[2rem] lg:gap-[5rem]">
            <div className="space-x-[3rem] text-center text-lg">
              {nav.data.navlinks.map((item, index) => (
                <PrismicNextLink
                  key={index}
                  className={`hidden lg:inline-flex ${
                    "/" + item.link.text?.toLowerCase() === pathname
                      ? "bg-primary-500 text-white py-2 px-3 "
                      : ""
                  }`}
                  field={item.link}
                />
              ))}
            </div>
            <div className="flex justify-end gap-4">
              <HiOutlineMenu
                onClick={toggleOpen}
                className="size-8 lg:hidden cursor-pointer"
              />
            </div>
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
            className="bg-white fixed inset-0 z-3000 text-primary-base"
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
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
