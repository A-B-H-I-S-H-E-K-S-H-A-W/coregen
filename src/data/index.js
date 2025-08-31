const docs = [
  {
    category: "Getting Started",
    items: [
      {
        slug: "introduction",
        title: "Introduction",
        content: `
          Welcome to the CLI tool! 🚀
          Run \`npx mycli init\` to start.
        `,
      },
      {
        slug: "installation",
        title: "Installation",
        content: `
          Install globally using:
          \`npm install -g mycli\`
        `,
      },
    ],
  },
  {
    category: "Usage",
    items: [
      {
        slug: "commands",
        title: "CLI Commands",
        content: `
          - \`mycli build\` → Builds the project
          - \`mycli dev\` → Starts dev server
        `,
      },
      {
        slug: "examples",
        title: "Examples",
        content: `
          Try running \`mycli build --prod\` for production builds.
        `,
      },
    ],
  },
  {
    category: "Advanced",
    items: [
      {
        slug: "config",
        title: "Configuration",
        content: `
          Customize via \`mycli.config.js\`
        `,
      },
    ],
  },
];

export default docs;
