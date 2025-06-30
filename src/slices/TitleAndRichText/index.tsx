import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/container/Bounded";

/**
 * Props for `TitleAndRichText`.
 */
export type TitleAndRichTextProps =
  SliceComponentProps<Content.TitleAndRichTextSlice>;

/**
 * Component for "TitleAndRichText" Slices.
 */
const TitleAndRichText: FC<TitleAndRichTextProps> = ({ slice }) => {
  if (slice.variation === "default") {
    return (
      <div
        className="flex flex-col gap-5"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="space-y-6">
          <h2>{slice.primary.title}</h2>
          <div className="prose-base prose-lg prose-h3:text-primary-600 prose-p:leading-relaxed prose-p:text-gray-600">
            <PrismicRichText field={slice.primary.content} />
          </div>
        </div>
      </div>
    );
  } else if (slice.variation === "headingAndText") {
    return (
      <Bounded
        as="section"
        yPadding="noT-sm"
        className="flex flex-col gap-8 mt-[var(--header-height)]"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="text-center">
          <h1 className=" font-bold text-primary-600 mb-4">
            {slice.primary.title}
          </h1>
          <div className="max-w-2xl mx-auto text-lg text-gray-700">
            <p>{slice.primary.text}</p>
          </div>
        </div>
      </Bounded>
    );
  } else {
    return null;
  }
};

export default TitleAndRichText;
