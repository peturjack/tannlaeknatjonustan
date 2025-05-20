import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { Bounded } from "@/app/components/container/Bounded";

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
    <Bounded as="section" yPadding="noT-sm">
      <div
        className={clsx(
          "flex flex-col items-center justify-center md:justify-between gap-6 ",
          slice.variation === "imageLeft" && "lg:flex-row-reverse",
          slice.variation === "default" && "lg:flex-row"
        )}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="flex-1 h-full">
          <PrismicNextImage
            className="w-full h-full object-cover rounded-2xl"
            field={slice.primary.image}
          />
        </div>
        <div className="flex-1 h-full flex items-center text-primary-600 prose-base prose-lg prose-h3:text-primary-base">
          <PrismicRichText field={slice.primary.body} />
        </div>
      </div>
    </Bounded>
  );
};
export default AlternateGrid;
