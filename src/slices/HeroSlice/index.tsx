import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Button from "@/app/components/button/Button";
import { Bounded } from "@/app/components/container/Bounded";
import clsx from "clsx";

/**
 * Props for `HeroSlice`.
 */
export type HeroSliceProps = SliceComponentProps<Content.HeroSliceSlice>;

/**
 * Component for "HeroSlice" Slices.
 */
const HeroSlice: FC<HeroSliceProps> = ({ slice }) => {
  /* 
     lg:px-[4.25rem]  in section className
     lg:rounded-[2rem] in video className
     pb-15 md:pb-30 in main section
  */

  const renderContent = () => {
    switch (slice.variation) {
      case "default":
        return (
          <section className="min-h-screen flex flex-col items-center">
            <div className="relative h-screen w-full mt-[var(--header-height)] ">
              <video
                className="absolute inset-0  h-[calc(100%-var(--header-height))] w-full lg:w-[90%] lg:rounded-[2rem] mx-auto object-cover object-top"
                src={slice.primary.hero_video.text}
                muted
                playsInline
                autoPlay={true}
                loop={true}
              />
            </div>

            <div className="flex flex-col items-center gap-8">
              <PrismicNextImage
                className="w-[250px] md:w-[350px]"
                field={slice.primary.logo}
              />
              <Button
                variant="secondaryDefault"
                text={slice.primary.cta_button}
                className={`${slice.primary.cta_button.variant}
             duration-150 ease-in-out
             py-[0.75rem] px-[3rem]
           rounded-[0.3125rem] text-[1.125rem]
           `}
              />
            </div>
          </section>
        );
      case "imageLeftAndTextRight":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 md:gap-30 items-center min-h-screen">
            <PrismicNextImage
              className=" mt-[var(--header-height)] h-[calc(100%-var(--header-height))] object-cover"
              field={slice.primary.image}
            />

            <div className="max-w-3/4 mx-auto lg:mx-0 flex flex-col gap-6">
              <h1>{slice.primary.title}</h1>
              <p>{slice.primary.description}</p>
              {isFilled.keyText(slice.primary.cta_button.text) ? (
                <div>
                  <Button
                    variant="primaryDefault"
                    text={slice.primary.cta_button}
                  />
                </div>
              ) : null}
            </div>
          </div>
        );
      case "imageTopTextBelow":
        return (
          <div className="min-h-screen flex flex-col">
            <div className="h-screen">
              <PrismicNextImage
                className=" mt-[var(--header-height)] h-[calc(100%-var(--header-height))] w-full object-cover object-top "
                field={slice.primary.image}
              />
            </div>
            <Bounded>
              <div className=" flex flex-col gap-6">
                <h1>{slice.primary.title}</h1>
                <p className="leading-relaxed">{slice.primary.description}</p>

                <div
                  className={clsx(slice.primary.add_button ? "flex" : "hidden")}
                >
                  <Button
                    variant="primaryDefault"
                    text={slice.primary.cta_button}
                  />
                </div>
              </div>
            </Bounded>
          </div>
        );
    }
  };
  return renderContent();
};

export default HeroSlice;
