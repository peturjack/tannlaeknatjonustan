"use client";
import { motion } from "motion/react";
import { ImageField, KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import React, { FC } from "react";
import { PrismicLink } from "@prismicio/react";

interface TestimonialCardsProps {
  image: ImageField;
  title: string | KeyTextField;
  description: string | KeyTextField;
  isButton?: boolean;
  button?: LinkField;
  cardId?: string; // Add this prop
}

const TestimonialCards: FC<TestimonialCardsProps> = ({
  image,
  title,
  description,
  isButton,
  button,
  cardId,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="flex flex-1 justify-self-center text-left flex-col gap-3 "
    >
      <div className="md:w-full  rounded-2xl ">
        <PrismicNextImage className="aspect-auto rounded-2xl" field={image} />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-primary-600">{title}</h3>
          <p className="line-clamp-3 text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      {isButton && button && cardId && (
        <PrismicLink
          field={button}
          href={`/about#about-${cardId}`}
          className="mt-4 inline-block bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 transition"
        />
      )}
    </motion.div>
  );
};

export default TestimonialCards;
