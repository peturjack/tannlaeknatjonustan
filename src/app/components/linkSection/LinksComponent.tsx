/* import {
  Content,
  GroupField,
  KeyTextField,
  LinkField,
} from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import { Simplify } from "../../../../prismicio-types";

type Props = {
  treatments: GroupField<
    Simplify<Content.LinkSectionSliceDefaultPrimaryTreatmentsItem>
  >;
};

const LinkComponent = ({ treatments }: Props) => {
  return (
    <div>
      {treatments.map(
        (item: { title: KeyTextField; links: LinkField[] }, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            {item.links.map((link, index) => (
              <PrismicNextLink key={index} field={link} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default LinkComponent;
 */
