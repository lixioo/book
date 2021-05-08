module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",

  base: "/book/",
  themeConfig: {
    nav: [
      {
        text: "个人心得",
        link: "/CSS/"
      },
      {
        text: "组件问题",
        link: "/ElementUI/"
      }
    ],
    sidebar: {
      "/CSS/": [
        "",
        {
          title: "日常",
          collapsable: false,
          children: ["one"]
        }
      ],
      "/ElementUI/": [
        "",
        { title: "ElemetUI相关", children: ["test"], collapsable: false }
      ]
    }
  }
}
