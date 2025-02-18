import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

type ImageData = {
  imageUrl: string;
  blurDataUrl: string;
};

export const getBase64 = async (imageUrl: string) => {
  try {
    const file = await fs.readFile(`./public/${imageUrl}`);
    const { base64 } = await getPlaiceholder(file);
    return base64;
  } catch (e) {
    console.error("Error generating blur data:", e);
    return undefined;
  }
};

export const getImagesData = async (images: string[]): Promise<ImageData[]> => {
  const promises = images.map(async (imageUrl) => {
    const blurDataUrl = await getBase64(imageUrl);
    return {
      imageUrl,
      blurDataUrl: blurDataUrl || "",
    };
  });

  return Promise.all(promises);
};
