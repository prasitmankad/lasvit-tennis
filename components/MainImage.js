import React from "react";
import { buildImageObj } from "../utils/helpers";
import { imageUrlFor } from "../utils/image-url";

const MainImage = ({ mainImage, width = 1200 }) => {
  const imgUrl =
    mainImage &&
    imageUrlFor(buildImageObj(mainImage))
      .width(800)
      .height(Math.floor((9 / 16) * width))
      .fit("crop")
      .auto("format")
      .quality(100)
      .url();

  return imgUrl ? <img src={imgUrl} alt={mainImage.alt || ""} /> : <></>;
};

export default MainImage;
