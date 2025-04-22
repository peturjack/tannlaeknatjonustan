import { type FC } from "react";
import { type Content } from "@prismicio/client";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";

/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText: FC<RichTextProps> = ({ slice }) => {
  return (
    <section
      className=" w-3/4 mx-auto prose-base pb-20
     prose-h3:text-primary-base prose-h3:font-bold "
    >
      <PrismicRichText field={slice.primary.content} />
    </section>
  );
};

export default RichText;
