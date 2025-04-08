import { ImageField, KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";
import Button from "../button/Button";

type Props = {
  image: ImageField;
  title: string | KeyTextField;
  description: string | KeyTextField;
  isButton?: boolean;
  button?: LinkField;
};

const TestimonialCards = async ({
  image,
  title,
  description,
  isButton,
  button,
}: Props) => {
  return (
    <div
      className="flex flex-1 flex-col items-center gap-2
    
    "
    >
      <div className="w-3/4 md:w-full">
        <PrismicNextImage className="aspect-auto rounded-2xl" field={image} />
      </div>
      <h3 className="text-primary-600">{title}</h3>
      <p className=" text-center line-clamp-3">{description}</p>

      <Button
        className={`${isButton ? "block" : "hidden"}`}
        text={button}
        variant="primaryOutlined"
      />
    </div>
  );
};

export default TestimonialCards;
