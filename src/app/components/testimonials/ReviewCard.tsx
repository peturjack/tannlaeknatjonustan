import { KeyTextField } from "@prismicio/client";
import React from "react";

type Props = {
  review: KeyTextField;
  backgroundColor: KeyTextField;
  name: KeyTextField;
};

export default function ReviewCard({ review, backgroundColor, name }: Props) {
  return (
    <div className={`reviewCard ${backgroundColor}`}>
      <p>{review}</p>
      <span>{name}</span>
    </div>
  );
}
