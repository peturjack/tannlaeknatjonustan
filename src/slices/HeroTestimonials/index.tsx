import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import TestimonialCards from "@/app/components/testimonials/TestimonialCards";
import { createClient } from "@/prismicio";
import { Bounded } from "@/app/components/container/Bounded";

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
    orderings: [{ field: "document.first_publication_date", direction: "asc" }],
  });

  return (
    <Bounded
      className="flex flex-col items-center 
      
      "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="mb-8">{slice.primary.title}</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
       
        "
      >
        {testimonials.map((card) => {
          return (
            <div key={card.id}>
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
    </Bounded>
  );
};

export default HeroTestimonials;
