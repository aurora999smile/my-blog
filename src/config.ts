export default {
  site: {
    title: "噜噜的博客",
    subtitle: "记录学习、分享生活",
    description: "噜噜的个人博客，分享技术学习和生活日常",
    keywords: "blog, astro, 噜噜",
    author: "噜噜",
    language: "zh-CN",
  },

  sidebar: {
    avatar: "/images/avatar.jpg",
    position: "right",
  },

  widgets: ["recent_posts", "category", "tag", "tagcloud"],

  menu: [
    { name: "home", url: "/" },
    { name: "archives", url: "/archives" },
    { name: "about", url: "/about" },
  ],

  banner: "/images/banner.jpg",

  banner_srcset: {
    enable: false,
  },

  footer: {
    since: 2026,
    powered: true,
    count: true,
    busuanzi: true,
    icp: {
      icpnumber: "",
      beian: "",
      recordcode: "",
    },
    moe_icp: {
      icpnumber: "",
    }
  },

  analytics: {
    baidu_analytics: false,
    google_analytics: false,
    clarity: false,
  },

  social: {
    github: "https://github.com/aurora999smile",
  },

  valine: {
    enable: false,
    appId: "",
    appKey: "",
    pageSize: 10,
    avatar: "mp",
    lang: "zh-cn",
    placeholder: "留下你的评论...",
    guest_info: "nick,mail,link",
    recordIP: true,
    highlight: true,
    visitor: false,
    serverURLs: "",
  },

  waline: {
    enable: false,
    serverURL: "",
    lang: "zh-CN",
    locale: {},
    emoji: [
      "https://unpkg.com/@waline/emojis@1.2.0/weibo",
      "https://unpkg.com/@waline/emojis@1.2.0/bilibili",
    ],
    meta: ["nick", "mail", "link"],
    requiredMeta: ["nick", "mail"],
    wordLimit: 0,
    pageSize: 10,
    pageview: true,
  },

  gitalk: {
    enable: false,
    clientID: "",
    clientSecret: "",
    repo: "",
    owner: "",
    admin: [],
  },

  giscus: {
    enable: false,
    repo: "",
    repoId: "",
    category: "",
    categoryId: "",
    mapping: "pathname",
    strict: 0,
    reactionsEnabled: 1,
    emitMetadata: 0,
    inputPosition: "bottom",
  },

  utterances: {
    enable: false,
    repo: "owner/repo",
    issue_term: "title",
    theme: "auto",
  },

  twikoo: {
    enable: false,
    envId: "",
    region: "",
  },

  disqus: {
    enable: false,
    shortname: "",
    count: true,
  },

  friend: [],

  copyright: {
    enable: true,
    content: {
      author: true,
      link: true,
      title: true,
      date: false,
      updated: false,
      license: true,
      license_type: 'by-nc-sa',
    },
  },

  preloader: {
    enable: true,
    text: "少女祈祷中...",
    rotate: true,
  },

  firework: {
    enable: true,
    disable_on_mobile: false,
    options: {
      excludeElements: ["a", "button"],
      particles: [
        {
          shape: "circle",
          move: ["emit"],
          easing: "easeOutExpo",
          colors: [
            "var(--red-1)",
            "var(--red-2)",
            "var(--red-3)",
            "var(--red-4)",
          ],
          number: 20,
          duration: [1200, 1800],
          shapeOptions: {
            radius: [16, 32],
            alpha: [0.3, 0.5],
          },
        },
        {
          shape: "circle",
          move: ["diffuse"],
          easing: "easeOutExpo",
          colors: ["var(--red-0)"],
          number: 1,
          duration: [1200, 1800],
          shapeOptions: {
            radius: 20,
            alpha: [0.2, 0.5],
            lineWidth: 6,
          },
        },
      ],
    },
  },

  home_categories: {
    enable: false,
    content: [
      {
        categories: ""
      },
    ]
  },

  triangle_badge: {
    enable: false,
    type: "github",
    link: "https://github.com/aurora999smile",
  },

  outdate: {
    enable: false,
    daysAgo: 180,
  },

  share: [
    "weibo",
    "twitter",
    "facebook",
    "linkedin",
    "reddit",
    "qq",
    "weixin",
  ],

  sponsor: {
    enable: false,
    qr: [],
  },
};
