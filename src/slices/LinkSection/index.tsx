import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { PrismicNextLink } from "@prismicio/next";
import { Dropdown } from "@/app/components/dropdown/Dropdown";
import { Bounded } from "@/app/components/container/Bounded";

/**
 * Props for `LinkSection`.
 */
export type LinkSectionProps = SliceComponentProps<Content.LinkSectionSlice>;
/* {slice.primary.links.map((link) => (
  <div key={link.key} className="flex flex-row">
    <PrismicNextLink field={link} />
  </div>
))} 
/**
 * Component for "LinkSection" Slices.
 */
const LinkSection: FC<LinkSectionProps> = async ({ slice }) => {
  const renderContent = () => {
    switch (slice.variation) {
      case "default":
        return (
          <Bounded
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
          >
            <h3 className="text-primary-600 mb-4">{slice.primary.title}</h3>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              {" "}
              {/* Add gap-8 here for columns */}
              {slice.primary.treatments.map((item, index) => (
                <div
                  className="flex flex-col w-full intersect:motion-opacity-in-0
                  intersect:motion-translate-y-in-25
                  motion-duration-1000 motion-ease-in-out intersect-once"
                  key={index}
                >
                  <div className="flex flex-col gap-4">
                    {/* Add gap-4 here for rows */}
                    {item.link.map((link) => (
                      <div
                        key={link.key}
                        className="flex items-center md:gap-10 py-2 border-b-2
                        border-primary-100/50 text-gray-600 group"
                      >
                        <PrismicNextLink className="w-full" field={link} />
                        <HiOutlineArrowCircleRight className="size-6 group-hover:motion-preset-oscillate text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Bounded>
        );
      case "dropdownList":
        return (
          <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="flex flex-col gap-6 max-w-3/4 mx-auto pb-15 md:pb-30
      
            "
          >
            <h2>{slice.primary.title}</h2>
            <div className="grid grid-cols-1 gap-2">
              {slice.primary.treatments.map((item, index) => (
                <div
                  className=" py-2 border-b-2 border-primary-100/50 text-gray-600 group "
                  key={index}
                >
                  <Dropdown
                    index={index}
                    question={item.question}
                    link={item.link}
                  />
                </div>
              ))}
            </div>
          </section>
        );
      case "pricingList":
        return (
          <Bounded>
            <div className="max-w-2xl mx-auto bg-white p-6">
              <h2 className="text-2xl font-bold mb-2 text-primary-base">
                {slice.primary.title}
              </h2>
              <div className="divide-y divide-primary-100">
                {slice.primary.treatments.map((item, index) => (
                  <div
                    className="flex flex-col md:flex-row md:justify-between md:items-center py-4"
                    key={index}
                  >
                    <p className="text-lg font-medium text-gray-700">
                      {item.title}
                    </p>
                    <p className="text-lg font-semibold text-primary-500">
                      {item.cost}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Bounded>
        );
    }
  };
  return renderContent();
};

export default LinkSection;
