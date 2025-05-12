"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import dynamic from "next/dynamic";

// Dynamically import the map component with no SSR
const MapWithNoSSR = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] bg-gray-100 flex items-center justify-center">
      Loading map...
    </div>
  ),
});

/**
 * Props for `LocationSlice`.
 */
export type LocationSliceProps =
  SliceComponentProps<Content.LocationSliceSlice>;

/**
 * Component for "LocationSlice" Slices.
 */
const LocationSlice: FC<LocationSliceProps> = ({ slice }) => {
  const position: [number, number] = [
    slice.primary.location.latitude,
    slice.primary.location.longitude,
  ];

  return (
    <div className="h-[600px]">
      <MapWithNoSSR position={position} />
    </div>
  );
};

export default LocationSlice;
