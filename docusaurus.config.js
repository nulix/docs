// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NULIX documentation",
  tagline: "NULIX documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.nulix.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "nulix", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  customFields: {
    className: "github-link",
    "aria-label": "GitHub repository",
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo-white.png",
      navbar: {
        title: "Docs",
        logo: {
          alt: "NULIX logo",
          src: "img/logo-dark.png",
          srcDark: "img/logo-light.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Getting Started",
          },
          {
            href: "https://github.com/nulix",
            position: "right",
            className: "github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      algolia: {
        appId: "OOPEVIT846",
        apiKey: "b464df9044c3a3b6f98f90599cc228ff",
        indexName: "nulix",
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: "external\\.com|domain\\.com",
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: "/docs/", // or as RegExp: /\/docs\//
        //   to: "/",
        // },
        // Optional: Algolia search parameters
        // searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: "search",
      },
      footer: {
        logo: {
          alt: "NULIX",
          src: "img/logo-dark.png",
          srcDark: "img/logo-light.png",
          href: "https://nulix.io",
          width: 150,
        },
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/",
              },
            ],
          },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          {
            title: "NULIX",
            items: [
              {
                html: `
                <a href="https://github.com/nulix" target="_blank" aria-label="GitHub repository" rel="noopener noreferrer" style="display:block;width:24px;height:24px;border-radius:100%;">
                  <div class="github-link"></div>
                </a>
                `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NULIX`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
