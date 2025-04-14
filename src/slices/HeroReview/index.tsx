import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ReviewCard from "@/app/components/testimonials/ReviewCard";
import { Bounded } from "@/app/components/container/Bounded";

/**
 * Props for `HeroReview`.
 */
export type HeroReviewProps = SliceComponentProps<Content.HeroReviewSlice>;

/**
 * Component for "HeroReview" Slices.
 */
const HeroReview: FC<HeroReviewProps> = ({ slice }) => {
  return (
    <Bounded
      className="flex flex-col items-center gap-4"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="mb-8">{slice.primary.title}</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
     
      "
      >
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
    </Bounded>
  );
};

export default HeroReview;
