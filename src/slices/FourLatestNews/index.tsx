import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/container/Bounded";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

/**
 * Props for `FourLatestNews`.
 */
export type FourLatestNewsProps =
  SliceComponentProps<Content.FourLatestNewsSlice>;

/**
 * Component for "FourLatestNews" Slices.
 */
const FourLatestNews: FC<FourLatestNewsProps> = async ({ slice }) => {
  const client = createClient();
  const articles = await client.getAllByType("article_posts", { limit: 4 });

  return (
    <Bounded
      yPadding="noT-sm"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-[720px] mx-auto">
        <h2 className=" text-center">{slice.primary.title}</h2>
        <p className="mb-8 text-center">{slice.primary.description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 object-center">
        {articles.map((item) => (
          <Link
            key={item.id}
            href={`/articles/${item.uid}`}
            className="group flex flex-col bg-white border border-primary-100 rounded-xl 
                duration-300 overflow-hidden"
          >
            <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
              <PrismicNextImage
                field={item.data.cover_image}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col flex-1 p-5">
              <h3 className=" font-bold text-xl text-primary-700 mb-2 group-hover:text-primary-500 transition-colors">
                {item.data.title}
              </h3>

              <p className="text-gray-600 text-base bg-primary-50 rounded mb-4 line-clamp-3">
                {item.data.excerpt}
              </p>

              <span className="mt-auto text-sm text-gray-400">
                {item.data.date &&
                  new Date(item.data.date).toLocaleDateString("is-IS", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Bounded>
  );
};

export default FourLatestNews;
