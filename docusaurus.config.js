// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config = {
  title: 'Topay Documentation',
  tagline: 'Blockchains are Safe !',
  favicon: 'img/Brand/icon.png',

  url: 'https://docs.topayfoundation.com',
  baseUrl: '/',

  organizationName: 'TOPAY-FOUNDATION',
  projectName: 'topaydocs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/TOPAY-FOUNDATION/topaydocs.git',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/TOPAY-FOUNDATION/topaydocs.git',
          onInlineTags: 'ignore', // Ignore inline tags warning
          onInlineAuthors: 'ignore', // Ignore inline authors warning
          onUntruncatedBlogPosts: 'ignore', // Ignore untruncated posts warning
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/Brand/TOPAY.png',
    navbar: {
      title: 'Topay Documentation',
      logo: {
        alt: 'TOPAY Logo',
        src: 'img/Brand/icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/TOPAY-FOUNDATION/topaydocs.git',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/uZNAzSJYgW',
            },
            {
              label: 'X',
              href: 'https://x.com/topayfoundation',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/TOPAY-FOUNDATION/topaydocs.git',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TOPAY Foundation, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
