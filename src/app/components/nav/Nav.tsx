"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
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
      {!isOpen ? (
        <nav className="h-[6rem] px-[2rem] flex justify-between items-center text-primary-base over">
          <div className="flex-1">
            <PrismicNextImage field={nav.data.logo} />
          </div>
          <div className="space-x-4 flex-1 text-center invisible md:visible">
            {nav.data.navlinks.map((item, index) => (
              <PrismicNextLink
                key={index}
                className={`${
                  "/" + item.link.text?.toLowerCase() === pathname
                    ? "border-b-3 border-primary-500 py-2 px-3 "
                    : ""
                }`}
                field={item.link}
              />
            ))}
          </div>
          <div className="flex-1 justify-items-end ">
            <HiOutlineMenu
              onClick={toggleOpen}
              className="size-8 md:hidden cursor-pointer"
            />
          </div>
        </nav>
      ) : (
        <>
          <div
            className={`bg-white absolute inset-0 z-30 text-primary-base motion-ease-in-out ${
              isOpen
                ? "motion-translate-x-in-100"
                : "-motion-translate-x-out-100"
            }`}
          >
            <div className="flex justify-end h-[6rem] px-[2rem] items-center over">
              <IoCloseOutline
                onClick={toggleOpen}
                className="size-10 cursor-pointer"
              />
            </div>
            <ul className="flex flex-col items-center justify-center text-4xl gap-8">
              {nav.data.navlinks.map((item, index) => (
                <PrismicNextLink
                  onClick={toggleOpen}
                  key={index}
                  className={` intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100
                motion-duration-1000 motion-ease-in-out ${
                  "/" + item.link.text?.toLowerCase() === pathname
                    ? "border-b-3 border-primary-500 py-2 px-3"
                    : ""
                }`}
                  field={item.link}
                />
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Nav;
