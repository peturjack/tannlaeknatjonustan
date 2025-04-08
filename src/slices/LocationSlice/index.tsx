import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LocationSlice`.
 */
export type LocationSliceProps =
  SliceComponentProps<Content.LocationSliceSlice>;

/**
 * Component for "LocationSlice" Slices.
 */
const LocationSlice: FC<LocationSliceProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <span>
        My location is {slice.primary.location.latitude},
        {slice.primary.location.longitude}.
      </span>
    </section>
  );
};

export default LocationSlice;
