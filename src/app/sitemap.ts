import { MetadataRoute } from 'next';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => [
  {
    url: 'https://aliezan.github.io/aliezan-portfolio/',
    lastModified: new Date(),
  },
];

export default sitemap;
