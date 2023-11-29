// const lightCodeTheme = require('prism-react-renderer/themes/github')
// const darkCodeTheme = require('prism-react-renderer/themes/dracula')

module.exports = {
  title: 'Swetrix Docs',
  tagline: 'Ultimate open-source analytics to satisfy all your needs',
  url: 'https://docs.swetrix.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'swetrix', // github org name
  projectName: 'docs', // github repo name
  trailingSlash: false,
  scripts: [
    {
      src: 'https://swetrix.org/swetrix.js', defer: true,
    },
    {
      src: '/js/setupswetrix.js', defer: true,
    }
  ],
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Swetrix',
        src: 'img/logo_blue.png',
        srcDark: 'img/logo_white.png',
        href: 'https://swetrix.com',
        target: '_blank',
        style: {
          height: '28px',
        }
      },
      items: [
        {
          href: '/',
          label: 'Docs',
          position: 'left',
          target: '_self',
          activeBasePath: '/',
        },
        {
          href: 'https://github.com/Swetrix',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub organisation',
        },
        // {
        //   type: "localeDropdown",
        //   position: "left"
        // }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/swetrix',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/ZVK8Tw2E8j',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/swetrix',
            },
            {
              label: 'Email',
              href: 'mailto:contact@swetrix.com',
            },
          ],
        },
      ],
      copyright: `Copyright © 2021-${new Date().getFullYear()} Swetrix. Built with Docusaurus.`,
    },
    algolia: {
      appId: 'O1G1A8JI1K',
      apiKey: '4571f2913147bee4d59f82805c995d52',
      indexName: 'swetrix',
    },
    prism: {
      additionalLanguages: ['php'],
      // theme: lightCodeTheme,
      // darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/swetrix/docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  // plugins: [
  //   async function myPlugin(context, options) {
  //     return {
  //       name: "docusaurus-tailwindcss",
  //       configurePostCss(postcssOptions) {
  //         postcssOptions.plugins.push(require("tailwindcss"));
  //         postcssOptions.plugins.push(require("autoprefixer"));
  //         return postcssOptions;
  //       },
  //     };
  //   },
  // ],
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'cn', 'ru'],
  //   localeConfigs: {
  //     en: {
  //       label: 'English',
  //     },
  //     cn: {
  //       label: '中文',
  //     },
  //     ru: {
  //       label: 'Русский',
  //     },
  //   }
  // },
};
