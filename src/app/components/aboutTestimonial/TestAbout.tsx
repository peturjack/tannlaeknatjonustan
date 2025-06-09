import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import React from "react";
import { Bounded } from "../container/Bounded";
import { ScrollToHash } from "../scrollComponent/ScrollToHash";

const TestAbout = async () => {
  const client = createClient();
  const testimonials = await client.getAllByType("testimonial_cards");
  return (
    <section>
      <ScrollToHash />
      <Bounded as="div">
        <div className="flex flex-col gap-12 md:px-28.75">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              id={`about-${item.id}`}
              className={clsx(
                // Responsive: stack on mobile, alternate on md+
                "flex flex-col lg:flex-row items-center justify-center gap-8 scroll-mt-32 min-h-[300px] lg:min-h-[400px]",
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              <PrismicNextImage
                height={800}
                width={800}
                field={item.data.image}
                className="rounded-4xl shadow-lg w-full lg:w-1/3 object-cover md:h-[400px] mb-4 lg:mb-0"
              />
              <div className="w-full lg:w-2/3 flex flex-col justify-center px-2 lg:px-8">
                <h3 className=" font-bold mb-2 text-primary-base text-center md:text-left">
                  {item.data.title}
                </h3>
                <p className=" text-center lg:text-left">
                  {item.data.full_description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Bounded>
    </section>
  );
};

export default TestAbout;
