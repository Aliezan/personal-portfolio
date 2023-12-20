import { MetadataRoute } from 'next';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => [
  {
    url: 'https://aliezan.is-a.dev/',
    lastModified: new Date(),
  },
];

export default sitemap;
