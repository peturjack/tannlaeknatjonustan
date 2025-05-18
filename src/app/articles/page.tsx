import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import { createClient } from "@/prismicio";

import { Bounded } from "../components/container/Bounded";

export default async function Page() {
  const client = createClient();

  // Fetch the archive page (for meta and slices)
  const page = await client
    .getSingle("article_archieve")
    .catch(() => notFound());

  // Fetch all articles
  const articles = await client.getAllByType("article_posts", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return (
    <div className="mt-[var(--header-height)]">
      {/* <SliceZone slices={page.data.slices} components={components} /> */}
      <div className="flex flex-col gap-[2rem] items-center text-center mb-[2.5rem]">
        <h1 className="">{page.data.title}</h1>
        <p className="max-w-[700px]">{page.data.text}</p>
      </div>
      <Bounded yPadding="noT-sm">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.uid}`}
              className="group flex flex-col bg-white border border-primary-100 rounded-xl 
                duration-300 overflow-hidden"
            >
              <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                <PrismicNextImage
                  field={article.data.cover_image}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg font-bold text-primary-700 mb-2 group-hover:text-primary-500 transition-colors">
                  {article.data.title}
                </h3>
                {article.data.excerpt && (
                  <p className="text-gray-600 text-sm bg-primary-50 rounded p-3 mb-4 line-clamp-3">
                    {article.data.excerpt}
                  </p>
                )}
                <span className="mt-auto text-xs text-gray-400">
                  {article.data.date &&
                    new Date(article.data.date).toLocaleDateString("is-IS", {
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
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getSingle("article_archieve")
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}
