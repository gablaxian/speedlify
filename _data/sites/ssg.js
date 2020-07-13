module.exports = {
  name: "SSG", // optional, falls back to object key
  description: "Static Site Generator web sites",
  options: {
    frequency: 60 * 23, // 24 hours
    // if the sites don’t share assets on the same domain, we can reset
    // chrome with each run instead of each site in every run (it’s faster)
    freshChrome: "run",
  },
  urls: [
    "https://www.11ty.dev/",
    "https://www.gatsbyjs.org/",
    "https://gohugo.io/",
    "https://nextjs.org/",
    "https://nuxtjs.org/",
    "https://docsify.js.org/",
    "https://jekyllrb.com/",
    "https://sapper.svelte.dev/",
  ],
};
