import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TreatmentHero`.
 */
export type TreatmentHeroProps =
  SliceComponentProps<Content.TreatmentHeroSlice>;

/**
 * Component for "TreatmentHero" Slices.
 */
const TreatmentHero: FC<TreatmentHeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for treatment_hero (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TreatmentHero;
