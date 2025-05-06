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
    <Bounded>
      <section
        className="flex flex-col justify-center gap-10"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="">
          <h2>{slice.primary.title}</h2>
          <p className="max-w-4xl text-pretty leading-relaxed">
            {slice.primary.description}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-4">
          {slice.primary.add_staff.map((item, index) => (
            <div
              key={index}
              className="flex items-center h-full gap-4 text-primary-700"
            >
              <div className="bg-secondary-700 relative inset-0 h-full w-50 rounded-4xl ">
                <PrismicNextImage
                  className="object-cover absolute inset-x-0 h-[140%]  w-full bottom-0"
                  field={item.image}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">{item.name}</h3>
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
