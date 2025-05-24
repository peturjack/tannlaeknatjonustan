import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { Bounded } from "../components/container/Bounded";
import ScrollToHash from "./ScrollToHash";

export default async function AboutPage() {
  const client = createClient();
  const page = await client.getByUID("page", "about").catch(() => notFound());
  const testimonials = await client.getAllByType("testimonial_cards");

  return (
    <section>
      <ScrollToHash />
      <SliceZone slices={page.data.slices} components={components} />

      <Bounded className="flex flex-col gap-12 items-stretch pb-40">
        {testimonials.map((item, idx) => (
          <div
            key={item.id}
            id={`about-${item.id}`}
            className={clsx(
              "flex items-center justify-center gap-8 scroll-mt-100 min-h-[400px]",
              idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
            )}
          >
            <PrismicNextImage
              height={500}
              width={500}
              field={item.data.image}
              className="rounded-xl shadow-lg w-1/2 object-cover"
            />
            <div className="w-1/2 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2 text-primary-base">
                {item.data.title}
              </h3>
              <p className="text-gray-700">{item.data.full_description}</p>
            </div>
          </div>
        ))}
      </Bounded>
    </section>
  );
}
