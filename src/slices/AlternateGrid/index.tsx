import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `AlternateGrid`.
 */
export type AlternateGridProps =
  SliceComponentProps<Content.AlternateGridSlice>;

/**
 * Component for "AlternateGrid" Slices.
 */
const AlternateGrid: FC<AlternateGridProps> = ({ slice }) => {
  return (
    <div
      className={`w-3/4 mx-auto flex flex-col 
        ${slice.variation === "imageLeft" ? "md:flex-row-reverse" : "md:flex-row"} 
      items-center justify-center md:justify-between gap-6`}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex-1">
        <PrismicNextImage
          className="w-full object-cover rounded-2xl"
          field={slice.primary.image}
        />
      </div>
      <div className="flex-1 text-primary-600">
        <PrismicRichText field={slice.primary.body} />
      </div>
    </div>
  );
};
export default AlternateGrid;
