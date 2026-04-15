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
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      { userAgent: '*', allow: '/' },
      // AI search engine crawlers — explicitly allowed
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
    ],
  },
}