import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TitleAndRichText`.
 */
export type TitleAndRichTextProps =
  SliceComponentProps<Content.TitleAndRichTextSlice>;

/**
 * Component for "TitleAndRichText" Slices.
 */
const TitleAndRichText: FC<TitleAndRichTextProps> = ({ slice }) => {
  return (
    <section
      className="flex flex-col items-center text-center pb-30"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2>{slice.primary.title}</h2>
      <div className="text-primary-600">
        <PrismicRichText
          field={slice.variation === "default" ? slice.primary.content : null}
        />
      </div>
    </section>
  );
};

export default TitleAndRichText;
