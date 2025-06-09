import { KeyTextField, LinkField } from "@prismicio/client";
import Link from "next/link";
import React from "react";
type Props = {
  title: KeyTextField;
  excerpt: KeyTextField;
  link: LinkField | string;
};

const Banner = ({ title, excerpt, link }: Props) => {
  return (
    <Link href={`/articles/${link}`} className="w-[400px]">
      <h4 className="text-[20px] text-primary-600">{title}</h4>
      <p className="line-clamp-1 text-primary-600">{excerpt}</p>
    </Link>
  );
};

export default Banner;
