import { notFound } from "next/navigation";
import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";

type Params = { uid: string };

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { uid } = await params;
  const client = createClient();
  const post = await client
    .getByUID("article_posts", uid)
    .catch(() => notFound()); // <-- return null, not notFound()

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
          height={400}
          className="w-full h-[400px] object-cover rounded-xl mb-6"
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
