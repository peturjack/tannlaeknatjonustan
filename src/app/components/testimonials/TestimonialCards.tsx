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
    <div className="flex flex-1 justify-self-center text-left flex-col gap-2">
      <div className="md:w-full">
        <PrismicNextImage className="aspect-auto rounded-2xl" field={image} />
      </div>
      <h3 className="text-primary-600">{title}</h3>
      <p className="line-clamp-3">{description}</p>
      <div className="text-center">
        <Button
          className={`${isButton ? "block" : "hidden"}`}
          text={button}
          variant="primaryOutlined"
        />
      </div>
    </div>
  );
};

export default TestimonialCards;
