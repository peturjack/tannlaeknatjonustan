import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
  PrismicLink,
} from "@prismicio/react";
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
  // Determine flex direction
  // "titleAndButton" and "imageLeft" both have image on the right
  const flexDirection =
    slice.variation === "imageLeft" || slice.variation === "titleAndButton"
      ? "lg:flex-row-reverse"
      : "lg:flex-row"; // "default" is image left

  return (
    <Bounded as="section" yPadding="noT-sm">
      <div
        className={clsx(
          "flex flex-col items-center justify-center md:justify-between gap-6",
          flexDirection
        )}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="flex-1">
          <PrismicNextImage
            className="object-cover rounded-md"
            field={slice.primary.image}
          />
        </div>
        <div className="flex-1 h-full flex justify-start lg:items-center prose-base prose-lg prose-h3:text-primary-base">
          <div className="lg:max-w-[500px] mx-0 lg:mx-auto flex flex-col justify-center w-full">
            {slice.variation === "titleAndButton" ? (
              <div>
                {slice.primary.title && (
                  <h2 className="mb-4 text-center">{slice.primary.title}</h2>
                )}
                {slice.primary.body && <p>{slice.primary.body}</p>}
                {slice.primary.button.text && (
                  <div className="flex justify-center">
                    <PrismicLink
                      field={slice.primary.button}
                      className="inline-block mt-4 px-6 py-2 border-2 border-primary-base text-primary-base  rounded-md"
                    >
                      {slice.primary.button.text}
                    </PrismicLink>
                  </div>
                )}
              </div>
            ) : (
              <PrismicRichText field={slice.primary.body} />
            )}
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default AlternateGrid;
