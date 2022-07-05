export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62c4638f6980f131c941a3e0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-fp2w6uzm",
                  apiId: "b1067b35-1f5e-4f3c-87bf-6a7e9fc8d977",
                },
                {
                  buildHookId: "62c4638fbf920130cfa4ccf6",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-uwr1fpz4",
                  apiId: "7aead478-1dad-4516-bec8-ccd11ba8e2cb",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/cgmaniac-dev/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-uwr1fpz4.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
