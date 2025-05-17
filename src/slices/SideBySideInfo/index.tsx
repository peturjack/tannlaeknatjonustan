import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/container/Bounded";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `SideBySideInfo`.
 */
export type SideBySideInfoProps =
  SliceComponentProps<Content.SideBySideInfoSlice>;

/**
 * Component for "SideBySideInfo" Slices.
 */
const SideBySideInfo: FC<SideBySideInfoProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mb-[2rem] text-center">
        <h2>{slice.primary.title}</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-[2.5rem] items-center ">
        <div className="md:w-1/2">
          <PrismicNextImage
            className="h-[23rem] object-cover"
            field={slice.primary.illustration}
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-4 text-primary-500 ">
          {slice.primary.info_group.map((item, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <h3>{item.heading}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default SideBySideInfo;
