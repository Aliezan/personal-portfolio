import { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: '*',
      allow: '/',
    },
  ],
  sitemap: 'https://aliezan.github.io/aliezan-portfolio/sitemap.xml',
});

export default robots;
