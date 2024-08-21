// generate-sitemap.ts
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { createGzip } from 'zlib';

// Define your site's routes
const links = [
  { url: '/', changefreq: 'daily', priority: 0.7 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact-us', changefreq: 'monthly', priority: 0.7 },
  { url: '/software-tech', changefreq: 'monthly', priority: 0.7 },
  { url: '/projects', changefreq: 'monthly', priority: 0.7 },
  // Add additional routes as needed
];

const sitemapStream = new SitemapStream({ hostname: 'https://iqbal-portfolio-delta.vercel.app/' });
const gzip = createGzip();
const writeStream = createWriteStream('./public/sitemap.xml.gz');

sitemapStream.pipe(gzip).pipe(writeStream);

links.forEach(link => {
  sitemapStream.write(link);
});

sitemapStream.end();

streamToPromise(sitemapStream)
  .then(() => {
    console.log('Sitemap successfully created!');
  })
  .catch(err => {
    console.error('Error creating sitemap:', err);
  });
