"use client";
import { FC, useMemo } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import dynamic from "next/dynamic";
import Clickable from "./Clickable";

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
  const position = useMemo<[number, number]>(
    () => [
      slice.primary.location?.latitude || 0,
      slice.primary.location?.longitude || 0,
    ],
    [slice.primary.location?.latitude, slice.primary.location?.longitude]
  );

  return (
    <div className=" flex flex-col lg:flex-row gap-4 p-4">
      {/* Map Section */}
      <div className=" h-[300px] lg:flex-1 lg:h-[600px]">
        <MapWithNoSSR position={position} />
      </div>

      {/* Information Section */}

      <div className=" lg:h-[600px] flex flex-col gap-6 ">
        <Clickable />

        <div className="flex flex-col  gap-6 text-gray-700">
          <div className="flex flex-col justify-center">
            <h3 className=" font-semibold text-primary-500">Nafn á stofu</h3>
            <p className="text-lg text-gray-600">
              Tannlæknaþjónustan Reykjavík
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className=" font-semibold text-primary-500">Staðsetning</h3>
            <p className="text-lg text-gray-600">
              Laugavegur 12, 101 Reykjavík
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-primary-500">Símanúmer</h3>
            <p className="text-lg text-gray-600">+354 555-1234</p>
          </div>
          <div className="flex flex-col">
            <h3 className=" font-semibold text-primary-500">Opnunartímar</h3>
            <p className="text-lg text-gray-600">Mán - Fös: 09:00 - 17:00</p>
          </div>
          <div className="flex flex-col">
            <h3 className=" font-semibold text-primary-500">Þjónusta</h3>
            <p className="text-lg text-gray-600">
              Almenn tannlæknaþjónusta, tannhreinsun, tannréttingar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSlice;
