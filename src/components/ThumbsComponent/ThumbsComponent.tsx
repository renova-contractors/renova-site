import React from "react";
import { ThumbsSwiper } from "../ThumbsSwiper/ThumbsSwiper";

type Album = {
  images: { src: string; alt?: string }[];
  title?: string;
  heading?: string;
  paragraph?: string;
  timeline?: string;
};

type ImagesBlock = {
  firstAlbum: Album;
  secondAlbum: Album;
  hero?: any;
};

export const ThumbsComponent: React.FC<{ data: ImagesBlock; category?: string }> = ({ data, category }) => {
  if (!data?.firstAlbum?.images?.length && !data?.secondAlbum?.images?.length) return null;

  return (
    <section className="component-mb flex max-sm:flex-col gap-10 max-sm:gap-5 justify-between">
      {data?.firstAlbum?.images?.length ? (
        <ThumbsSwiper data={data.firstAlbum} category={category} />
      ) : null}

      {data?.secondAlbum?.images?.length ? (
        <ThumbsSwiper data={data.secondAlbum} category={category} />
      ) : null}
    </section>
  );
};
