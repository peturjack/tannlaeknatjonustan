"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";
import React from "react";
type Props = {
  nav: Content.NavbarDocument;
};
const Nav = ({ nav }: Props) => {
  const pathname = usePathname();
  return (
    <>
      <nav className="h-[6rem] px-[2rem] flex justify-between items-center text-primary-base">
        <div className="flex-1">
          <PrismicNextImage field={nav.data.logo} />
        </div>
        <div className="space-x-4 flex-1 text-center">
          {nav.data.navlinks.map((item, index) => (
            <PrismicNextLink
              key={index}
              className={`${
                "/" + item.link.text?.toLowerCase() === pathname
                  ? "bg-secondary-500 py-2 px-3 rounded-full text-white"
                  : ""
              }`}
              field={item.link}
            />
          ))}
        </div>
        <div className="flex-1 text-right">
          <span>icon</span>
        </div>
      </nav>
    </>
  );
};

export default Nav;
