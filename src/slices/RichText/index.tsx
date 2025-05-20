import { type FC } from "react";
import { type Content } from "@prismicio/client";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

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
      className={clsx(
        "w-3/4 mx-auto prose-base pb-20 prose-h3:text-primary-600 prose-h3:font-bold prose-p:text-gray-600 prose-lg"
      )}
    >
      <PrismicRichText field={slice.primary.content} />
    </section>
  );
};

export default RichText;
