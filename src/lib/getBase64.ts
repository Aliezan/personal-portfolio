import { getPlaiceholder } from "plaiceholder";

type ImageData = {
  imageUrl: string;
  blurDataUrl: string;
};

export const getBase64 = async (imageUrl: string) => {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (e) {
    console.error(e);
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
