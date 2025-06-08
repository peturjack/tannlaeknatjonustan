import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Banner from "./Banner";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import BannerContainer from "./BannerContainer";

/**
 * Props for `BannerSlice`.
 */
export type BannerSliceProps = SliceComponentProps<Content.BannerSliceSlice>;

/**
 * Component for "BannerSlice" Slices.
 */
const BannerSlice: FC<BannerSliceProps> = async ({ slice }) => {
  const client = createClient();
  const threeLatestNews = await client.getAllByType("article_posts", {
    limit: 3,
  });
  return (
    <section
      className="overflow-hidden py-22"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Background to be blurred */}
      <div className="relative mx-auto w-[1178px]">
        <PrismicNextImage
          className="absolute -left-75 -top-35 rotate-160 -scale-y-100 pointer-events-none select-none"
          field={slice.primary.left_side_illustration}
        />
        <PrismicNextImage
          className="absolute -right-75 -top-35 rotate-180 -scale-y-100 pointer-events-none select-none"
          field={slice.primary.right_side_illustration}
        />
        {/* Glass effect container */}
        <div
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          className="backdrop-blur-[20px] w-[1178px] mx-auto bg-white/20 p-2
      rounded-md border border-white/30 z-20"
        >
          <BannerContainer>
            {threeLatestNews.map((item) => (
              <Banner
                key={item.id}
                title={item.data.title}
                excerpt={item.data.excerpt}
              />
            ))}
          </BannerContainer>
        </div>
      </div>
    </section>
  );
};

export default BannerSlice;
