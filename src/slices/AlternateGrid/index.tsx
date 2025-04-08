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
  const renderContent = () => {
    switch (slice.variation) {
      case "default":
        return (
          <section
            className="px-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 pb-20"
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
          </section>
        );

      case "imageLeft":
        return (
          <section
            className="px-10 flex flex-col md:flex-row-reverse items-center justify-center md:justify-between gap-6 pb-20"
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
          </section>
        );

      default:
        return (
          <section>
            <h1>No content found</h1>
          </section>
        );
    }
  };

  return renderContent();
};

export default AlternateGrid;
