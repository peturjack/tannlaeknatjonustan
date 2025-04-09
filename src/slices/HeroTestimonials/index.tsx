import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import TestimonialCards from "@/app/components/testimonials/TestimonialCards";
import { createClient } from "@/prismicio";

/**
 * Props for `HeroTestimonials`.
 */
export type HeroTestimonialsProps =
  SliceComponentProps<Content.HeroTestimonialsSlice>;

/**
 * Component for "HeroTestimonials" Slices.
 */
const HeroTestimonials: FC<HeroTestimonialsProps> = async ({ slice }) => {
  const client = createClient();
  const testimonials = await client.getAllByType("testimonial_cards", {
    limit: 3,
    orderings: [{ field: "document.last_publication_date", direction: "desc" }],
  });

  return (
    <section
      className="flex flex-col items-center gap-4 px-10 pb-15 md:pb-30 
      
      "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="">{slice.primary.title}</h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
       
        "
      >
        {testimonials.map((card, index) => {
          return (
            <div
              key={card.id}
              className={` intersect:motion-opacity-in-0 intersect:motion-translate-y-in-25
                motion-duration-1000 motion-ease-in-out intersect-once
                motion-delay-${index * 200}`}
            >
              <TestimonialCards
                image={card.data.image}
                title={card.data.title}
                description={card.data.description}
                isButton={card.data.isbutton}
                button={card.data.button}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HeroTestimonials;
