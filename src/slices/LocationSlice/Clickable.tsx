"use client";
import clsx from "clsx";
import React, { useState } from "react";

const Clickable = () => {
  const buttonNames = [
    { btnName: "Reykjavík" },
    { btnName: "Selfoss" },
    { btnName: "Hella" },
  ];
  const [active, setActive] = useState<string>("reykjavík");

  return (
    <div className="flex gap-2">
      {buttonNames.map((item, index) => {
        return (
          <button
            className={clsx(
              " w-full cursor-pointer text-start lg:text-center text-3xl text-gray-400 py-6",
              active === item.btnName.toLowerCase() &&
                "text-primary-base bg-gray-50 border-b-2 border-gray-200"
            )}
            key={index}
            onClick={() => {
              setActive(item.btnName.toLowerCase());
            }}
          >
            {item.btnName}
          </button>
        );
      })}
    </div>
  );
};

export default Clickable;
