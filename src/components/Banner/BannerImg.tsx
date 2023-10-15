"use client";
import { useState } from "react";
import Image from "next/image";

const BannerImg = () => {
  const imgList = [];
  for (let i = 1; i <= 4; i++) {
    imgList.push(`/img/banner${i}.jpg`);
  }
  const [imgIndex, setImgIndex] = useState<number>(0);
  return (
    <Image
      src={imgList[imgIndex]}
      alt="banner"
      fill
      objectFit="cover"
      //   https://react.dev/learn/queueing-a-series-of-state-updates
      onClick={() => {
        setImgIndex((prev) => (prev + 1) % imgList.length);
      }}
    />
  );
};

export default BannerImg;
