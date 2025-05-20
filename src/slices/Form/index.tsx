import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/container/Bounded";
import { PrismicNextLink } from "@prismicio/next";

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
      <div className="max-w-lg mx-auto bg-white p-8">
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {slice.primary.name}
            </label>
            <input
              type="text"
              className="w-full border border-primary-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300"
              placeholder="Fullt nafn"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {slice.primary.surname}
            </label>
            <input
              type="text"
              className="w-full border border-primary-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300"
              placeholder="Eftirnafn"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {slice.primary.email}
            </label>
            <input
              type="email"
              className="w-full border border-primary-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300"
              placeholder="Netfang"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {slice.primary.message}
            </label>
            <textarea
              className="w-full border border-primary-200 resize-nonerounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300"
              rows={4}
              placeholder="Hvað getum við aðstoðað með?"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            <PrismicNextLink field={slice.primary.button} />
          </button>
        </form>
      </div>
    </Bounded>
  );
};

export default Form;
