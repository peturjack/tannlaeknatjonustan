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
  return (
    <Bounded
      className="flex flex-col gap-5 "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="space-y-6">
        <h2>{slice.primary.title}</h2>
        <div className=" prose-base prose-lg prose-h3:text-primary-600 prose-p:leading-relaxed prose-p:text-gray-600">
          <PrismicRichText
            field={slice.variation === "default" ? slice.primary.content : null}
          />
        </div>
      </div>
    </Bounded>
  );
};

export default TitleAndRichText;
