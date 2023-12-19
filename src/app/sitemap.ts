import { MetadataRoute } from 'next';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => [
  {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    lastModified: new Date(),
  },
];

export default sitemap;
