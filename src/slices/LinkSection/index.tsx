import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { PrismicNextLink } from "@prismicio/next";

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
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 max-w-3/4 mx-auto "
    >
      {slice.primary.treatments.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          {item.link.map((link) => (
            <div key={link.key} className="flex flex-row">
              <PrismicNextLink field={link} />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default LinkSection;
