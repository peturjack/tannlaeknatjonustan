import { notFound } from "next/navigation";
import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { Metadata } from "next";
import { PrismicNextImage } from "@prismicio/next";

type Params = { uid: string };

// Define a type for your article data if you want stronger typing
type ArticleData = {
  title?: string;
  excerpt?: string;
  cover_image?: { url?: string; alt?: string };
  date?: string;
  content?: any;
};

// Optional: set dynamic metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const post = await client
    .getByUID("article_posts", params.uid)
    .catch(() => null);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.data.title || "Grein",
    description: post.data.excerpt || "",
    openGraph: {
      title: post.data.title || "Grein",
      description: post.data.excerpt || "",
      images: post.data.cover_image?.url
        ? [{ url: post.data.cover_image.url }]
        : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const client = createClient();
  const post = await client
    .getByUID("article_posts", params.uid)
    .catch(() => notFound());

  if (!post) return notFound();

  // Format date if available
  let formattedDate = "";
  if (post.data.date) {
    try {
      formattedDate = new Date(post.data.date).toLocaleDateString("is-IS", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      formattedDate = post.data.date;
    }
  }

  return (
    <article className="max-w-3xl mx-auto mt-[var(--header-height)] pb-10 px-4">
      {post.data.cover_image?.url && (
        <PrismicNextImage
          className="w-full h-auto rounded-xl mb-6"
          field={post.data.cover_image}
        />
      )}

      <h1 className="text-4xl font-bold mb-2">{post.data.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        <span>{formattedDate}</span>
      </p>

      {post.data.content && (
        <div className="prose prose-lg max-w-none">
          <PrismicRichText field={post.data.content} />
        </div>
      )}
    </article>
  );
}
