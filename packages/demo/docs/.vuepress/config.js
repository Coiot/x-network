const path = require("path")

module.exports = {
  title: "Vuepress Theme Book",
  description: "A simple demo of the vuepress-theme-book",
  theme: "vuepress-theme-book",
  themeConfig: {
    logo: "/logo.png",
    searchPlaceholder: "Search...",
    lastUpdated: "Last Updated",
    docsRepo: "Coiot/x-network/",
    docsDir: "docs",
    editLinks: false,
    editLinkText: "Edit this page on Github",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Github",
        link:
          "https://github.com/Coiot/x-network"
      },
    ],
    sidebar: {
      "/": [
        {
          title: "",
          collapsable: false,
          sidebarDepth: 0,
          children: [["/", "Home"]]
        },
        {
          title: "",
          collapsable: false,
          sidebarDepth: 0,
          children: [["/theme-configuration", "Configuration 🔧"]]
        },
        {
          title: "Random",
          collapsable: false,
          children: [
            ["/random/dev", "Dev 💻"],
            ["/random/website", "Websites using this theme 👌"],
            ["/random/emoji", "Emoji 😃"],
            ["/random/lorem", "Lorem Ipsum 🌟"]
          ]
        },
        {
          title: "Extras",
          collapsable: false,
          children: [
            ["/extras/contributing", "Contributing ✨"],
            ["/extras/license", "License 📚"]
          ]
        }
      ]
    }
  },
  plugins: [
    'vuepress-plugin-janitor',
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.medium img',
        delay: 1000,
        options: {
          background: 'rgba(27, 27, 27, 0.9)',
          scrollOffset: 110,
        }
      }
    ],
    'vuepress-plugin-autometa',
    ['vuepress-plugin-clean-urls',
      {
        normalSuffix: '/'
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "../assets")
      }
    }
  }
}
