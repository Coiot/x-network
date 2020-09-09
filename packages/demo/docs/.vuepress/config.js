const path = require("path")

module.exports = {
  title: "UofA Latinx Network",
  description: "Latinx Network of the University of Arkansas",
  theme: "vuepress-theme-book",
  themeConfig: {
    logo: "/logo.jpg",
    searchPlaceholder: "Search...",
    lastUpdated: "Last Updated",
    docsRepo: "Coiot/x-network/tree/master/packages/demo/docs",
    docsDir: "docs",
    editLinks: false,
    editLinkText: "Edit this page on Github",
    nav: [
      // { text: "Home", link: "/" },
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
          children: [
            ["/", "Upcoming Events"]
            // ["/archive", "Archive"]
          ]
        },
        {
          title: "The Network",
          collapsable: false,
          children: [
            ["/network/rsos", "RSOs"],
            ["/network/faculty_and_staff", "Faculty & Staff"],
            ["/network/scholarships", "Scholarships"],
            ["/network/resources_and_links", "Resources & Links"],
            ["/network/organizations", "Organizations"]
          ]
        },
        {
          title: "Join",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            ["/join/chat_groups", "Chat Groups"],
            ["/join/contribute", "How to Contribute"]]
        },
        {
          title: "Allies",
          collapsable: true,
          children: [
            ["/allies/license", "License 📚"]
          ]
        },
      ]
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['script', { name: 'src', content: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
  ],
  plugins: [
    'vuepress-plugin-janitor',
    [
      'vuepress-plugin-medium-zoom',
      {
        delay: 1000,
        options: {
          background: 'rgba(27, 27, 27, 0.5)',
          scrollOffset: 80,
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
