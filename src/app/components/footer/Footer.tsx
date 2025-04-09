import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import React from "react";

const Footer = async () => {
  const client = createClient();
  const footer = await client.getAllByType("footer");

  return (
    <footer className=" bg-primary-700 text-white">
      <div className="flex flex-col md:flex-row py-15 px-20 gap-10 md:gap-20">
        <section>
          <PrismicNextImage field={footer[0].data.logo} />
          <div className="flex md:justify-center gap-2">
            {footer[0].data.socials.map((item, index) => (
              <PrismicNextImage
                className="size-10"
                key={index}
                field={item.social_icon}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="flex flex-col gap-2">
            {footer[0].data.quick_links.map((item, index) => (
              <PrismicNextLink key={index} field={item.link} />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {footer[0].data.contact_info.map((item, index) => (
              <span key={index}>{item.info}</span>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
