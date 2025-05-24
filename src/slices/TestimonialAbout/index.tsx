import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import TestAbout from "@/app/components/aboutTestimonial/TestAbout";

/**
 * Props for `TestimonialAbout`.
 */
export type TestimonialAboutProps =
  SliceComponentProps<Content.TestimonialAboutSlice>;

/**
 * Component for "TestimonialAbout" Slices.
 */
const TestimonialAbout: FC<TestimonialAboutProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TestAbout />
    </section>
  );
};

export default TestimonialAbout;
