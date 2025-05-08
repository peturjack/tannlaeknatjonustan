import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { PrismicNextLink } from "@prismicio/next";
import { Dropdown } from "@/app/components/dropdown/Dropdown";

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
          <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 max-w-3/4 mx-auto pb-15 md:pb-30
      
      "
          >
            {slice.primary.treatments.map((item, index) => (
              <div
                className="flex flex-col gap-4 intersect:motion-opacity-in-0 intersect:motion-translate-y-in-25
                motion-duration-1000 motion-ease-in-out intersect-once"
                key={index}
              >
                <h3 className="text-primary-600">{item.title}</h3>
                <div className="flex flex-col">
                  {item.link.map((link) => (
                    <div
                      key={link.key}
                      className="flex justify-between items-center py-2 border-b-2 border-primary-100/50 text-gray-600 group "
                    >
                      <PrismicNextLink className="w-full" field={link} />
                      <HiOutlineArrowCircleRight className="size-6 group-hover:motion-preset-oscillate text-gray-400 " />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
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
                    answer={item.answer}
                  />
                </div>
              ))}
            </div>
          </section>
        );
    }
  };
  return renderContent();
};

export default LinkSection;
