import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/app/components/container/Bounded";

/**
 * Props for `OurTeamSlice`.
 */
export type OurTeamSliceProps = SliceComponentProps<Content.OurTeamSliceSlice>;

/**
 * Component for "OurTeamSlice" Slices.
 */
const OurTeamSlice: FC<OurTeamSliceProps> = ({ slice }) => {
  return (
    <Bounded yPadding="base">
      <section
        className="flex flex-col justify-center md:items-center gap-10"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="text-center text-primary-600 max-w-2xl mx-auto">
          <h2>{slice.primary.title}</h2>
          <p className="max-w-4xl text-pretty text-lg leading-relaxed">
            {slice.primary.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-12">
          {slice.primary.add_staff.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 text-primary-700"
            >
              {/* Green background with image overflowing bottom */}
              <div className="relative bg-secondary-500 flex items-end justify-center w-40 h-40 rounded-3xl shrink-0 overflow-visible">
                <PrismicNextImage
                  height={200}
                  width={112}
                  className="object-cover w-28 h-45 rounded-2xl absolute left-1/2 -translate-x-1/2 bottom-0"
                  field={item.image}
                  style={{ zIndex: 1 }}
                />
              </div>
              {/* Staff info */}
              <div className="flex flex-1 flex-col gap-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span>{item.occupation}</span>
                <span>{item.workplace}</span>
                <span>{item.email}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Bounded>
  );
};

export default OurTeamSlice;
