"use client";
import { KeyTextField } from "@prismicio/client";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { motion } from "motion/react";
import React from "react";

type Props = {
  review: KeyTextField;
  backgroundColor: KeyTextField;
  name: KeyTextField;
};

export default function ReviewCard({ review, backgroundColor, name }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      viewport={{ once: true }}
      className={`reviewCard border-1 border-gray-200`}
    >
      <p>{review}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-400">{name}</span>
        <div className={`${backgroundColor}`}>
          <BiSolidQuoteAltRight className="size-10" />
        </div>
      </div>
    </motion.div>
  );
}
