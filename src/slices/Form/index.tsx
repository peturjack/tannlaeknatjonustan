import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/container/Bounded";
import FormComponent from "./Form";

/**
 * Props for `Form`.
 */
export type FormProps = SliceComponentProps<Content.FormSlice>;

/**
 * Component for "Form" Slices.
 */
const Form: FC<FormProps> = ({ slice }) => {
  return (
    <Bounded
      as="section"
      yPadding="noT-sm"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <FormComponent
        name={slice.primary.name}
        surname={slice.primary.surname}
        email={slice.primary.email}
        message={slice.primary.message}
        button={slice.primary.button_text}
      />
    </Bounded>
  );
};

export default Form;
