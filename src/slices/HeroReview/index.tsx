import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ReviewCard from "@/app/components/testimonials/ReviewCard";

/**
 * Props for `HeroReview`.
 */
export type HeroReviewProps = SliceComponentProps<Content.HeroReviewSlice>;

/**
 * Component for "HeroReview" Slices.
 */
const HeroReview: FC<HeroReviewProps> = ({ slice }) => {
  return (
    <section
      className="flex flex-col items-center gap-4 px-10 pb-30"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="text-center">{slice.primary.title}</h2>
      <div className="flex flex-col md:flex-row gap-4">
        {slice.primary.review_cards.map((item, index) => {
          return (
            <ReviewCard
              key={index}
              review={item.review_text}
              backgroundColor={item.card_color}
              name={item.reviewers_name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HeroReview;
