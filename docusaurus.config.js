// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Figura Wiki",
  tagline: "Wiki for FiguraMC",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://wiki.figuramc.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL_OVERRIDE ?? "/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "figuramc", // Usually your GitHub org/user name.
  projectName: "wiki", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/figuramc/wiki/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Figura Wiki",
        logo: {
          alt: "Figura Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "html",
            position: "left",
            value: "<b>•</b>",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "tutorials",
            label: "Tutorials",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "api",
            label: "API",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // TODO: these aren't being centered correctly, figure out why
          //   {
          //     title: 'Links',
          //     items: [
          //       {
          //         label: 'Modrinth',
          //         to: 'https://modrinth.com/mod/figura',
          //       },
          //       {
          //         label: 'Curseforge',
          //         to: 'https://curseforge.com/minecraft/mc-mods/figura',
          //       },
          //       {
          //         label: 'Github',
          //         to: 'https://github.com/figuramc',
          //       },
          //     ],
          //   },
          //   {
          //     title: 'Community',
          //     items: [
          //       {
          //         label: 'Discord',
          //         href: 'https://discord.com/invite/figuramc',
          //       },
          //       {
          //         label: 'Reddit',
          //         href: 'https://reddit.com/r/figura',
          //       },
          //     ],
          //   },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FiguraMC`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["lua"],
      },
    }),
  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        disableVersioning: true,
      },
    ],
  ],
};

module.exports = config;
