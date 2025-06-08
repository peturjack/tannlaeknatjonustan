import { KeyTextField } from "@prismicio/client";
import React from "react";
type Props = {
  title: KeyTextField;
  excerpt: KeyTextField;
};

const Banner = ({ title, excerpt }: Props) => {
  return (
    <div className="w-[400px]">
      <h4 className="text-[20px] text-primary-600">{title}</h4>
      <p className="line-clamp-1 text-primary-600">{excerpt}</p>
    </div>
  );
};

export default Banner;
