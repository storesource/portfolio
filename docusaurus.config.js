// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: process.env.PORTFOLIO_NAME,
  tagline: 'developer',
  url: process.env.PORTFOLIO_URL,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'storesource', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','jp'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode:{
        defaultMode: 'dark'
      },
      navbar: {
        title: 'home',
        // logo: {
        //   alt: 'home',
        //   src: '',
        // },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'about me',
          // },
          /**{to: '/blog', label: 'Blog', position: 'left'},*/ // Disabing Blog in Header
          {
            href: 'https://github.com/storesource',
            label: 'github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'docs',
            items: [
              {
                label: 'about me',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'community',
            items: [
              {
                label: 'linkedin',
                href: 'https://in.linkedin.com/in/prashant-singh-22536752',
              },
              {
                label: 'stack overflow',
                href: 'https://stackoverflow.com/users/9697724/tomeheya',
              }
            ],
          },
          {
            title: 'more',
            items: [
              {
                label: 'github',
                href: 'https://github.com/storesource',
              },
              {
                label: 'blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} ${process.env.PORTFOLIO_NAME}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  customFields: {
    // Put your custom environment here
    contactEmail: process.env.CONTACT_EMAIL,
    resumePdfLink: process.env.RESUME_PDF_LINK
  },
};

module.exports = config;
