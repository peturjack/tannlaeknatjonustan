import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";
type VariantType =
  | "primaryDefault"
  | "primaryOutlined"
  | "secondaryDefault"
  | "secondaryOutlined";
type Props = {
  variant: VariantType;
  text?: LinkField;
  className?: string;
};
const Button = ({ variant, text, className }: Props) => {
  const variantStyles = {
    primaryDefault: "bg-primary-base text-white hover:bg-primary-hover",
    primaryOutlined:
      "border border-primary-base text-primary-base hover:bg-primary-100",
    secondaryDefault: "bg-secondary-base text-white hover:bg-secondary-hover",
    secondaryOutlined:
      "border border-secondary-base text-secondary-base hover:bg-secondary-100",
  };
  return (
    <PrismicNextLink
      field={text}
      className={`${className} ${variantStyles[variant]} 
      px-4 py-2 rounded-lg font-medium transition-colors`}
    />
  );
};

export default Button;
