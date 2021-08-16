const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-caches-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/vikrantbhandarwar/myportfolio/.cache/caches/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/vikrantbhandarwar/myportfolio/src/pages/404.tsx"))),
  "component---src-pages-blog-tsx": hot(preferDefault(require("/Users/vikrantbhandarwar/myportfolio/src/pages/blog.tsx"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/Users/vikrantbhandarwar/myportfolio/src/pages/contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/vikrantbhandarwar/myportfolio/src/pages/index.tsx"))),
  "component---src-pages-resume-tsx": hot(preferDefault(require("/Users/vikrantbhandarwar/myportfolio/src/pages/resume.tsx"))),
  "component---src-templates-blog-post-index-tsx": hot(preferDefault(require("/Users/vikrantbhandarwar/myportfolio/src/templates/BlogPost/index.tsx")))
}

