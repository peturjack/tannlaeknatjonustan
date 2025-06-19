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
        className="flex flex-col justify-center md:items-center gap-10 w-full"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="text-center text-primary-600 max-w-2xl mx-auto px-4">
          <h2>{slice.primary.title}</h2>
          <p className="max-w-4xl text-pretty text-lg leading-relaxed">
            {slice.primary.description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-15 px-2">
          {slice.primary.add_staff.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-6 text-primary-700 w-full max-w-[225px] mx-auto"
            >
              {/* Green background with image overflowing bottom */}
              <div
                className="relative bg-secondary-500 flex items-end justify-center
               w-full h-[225px] rounded-3xl shrink-0 overflow-visible mx-auto"
              >
                <PrismicNextImage
                  height={200}
                  width={112}
                  className="object-cover w-40  h-60 rounded-2xl absolute left-1/2 -translate-x-1/2 bottom-0"
                  field={item.image}
                  style={{ zIndex: 1 }}
                />
              </div>
              {/* Staff info */}
              <div className="flex-1 flex flex-col gap-1 ">
                <h3 className="font-semibold">{item.name}</h3>
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
