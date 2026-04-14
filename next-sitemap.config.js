/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.rcompleteautocare.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  exclude: [
    '/components/*',
    '/car-wont-start-crown-point-in/car-wont-start-crown-point-in',
    '/sitemap.xml',
  ],
}