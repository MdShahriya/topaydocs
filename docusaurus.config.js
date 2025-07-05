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

  onBrokenLinks: 'warn',
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
          editUrl: 'https://github.com/TOPAY-FOUNDATION',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/TOPAY-FOUNDATION',
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
      title: 'Topay Foundation',
      logo: {
        alt: 'Topay Foundation Logo',
        src: 'img/Brand/icon.png',
      },
      hideOnScroll: true,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '📚 Documentation',
        },
        {to: '/blog', label: '📝 Blog', position: 'left'},
        {
          type: 'dropdown',
          label: '🔗 Resources',
          position: 'left',
          items: [
            {
              label: 'Community',
              href: 'https://discord.gg/ZaEUMrAW',
            },
            {
              label: 'Support',
              href: 'mailto:support@topayfoundation.com',
            },
          ],
        },
        {
          href: 'https://github.com/TOPAY-FOUNDATION',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'html',
          position: 'right',
          value: '<a href="https://topayfoundation.com/donate" class="button button--primary button--sm" style="margin-left: 8px;">💝 Donate</a>',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '📖 Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/Introduction_to_Topay_Foundation',
            },
            {
              label: 'Security Guide',
              to: '/docs/security/Crypto_Security_Fundamentals',
            },
            {
              label: 'Guides',
              to: '/docs/guides/Basic_Protocols_for_Scam_Prevention',
            },
          ],
        },
        {
          title: '🌐 Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/ZaEUMrAW',
            },
            {
              label: 'X',
              href: 'https://x.com/topayfoundation',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/topayfoundation',
            },
            {
              label: 'Reddit',
              href: 'https://reddit.com/r/topay',
            },
          ],
        },
        {
          title: '🔗 Resources',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/TOPAY-FOUNDATION',
            },
            {
              label: 'Quantum Threats',
              to: '/docs/Quantum-threats-&-Scams/Quantum-Threats-in-Blockchain-Technology',
            },
            {
              label: 'Ethical Finance',
              to: '/docs/ethical-finance-&-blockchain/Ethical-Finance-&-Blockchain',
            },
          ],
        },
        {
          title: '🏢 Organization',
          items: [
            {
              label: 'About Us',
              href: 'https://topayfoundation.com/about',
            },
            {
              label: 'Contact',
              href: 'mailto:contact@topayfoundation.com',
            },
            {
              label: 'Privacy Policy',
              href: 'https://topayfoundation.com/privacy',
            },
            {
              label: 'Terms of Service',
              href: 'https://topayfoundation.com/terms',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TOPAY Foundation. Built with ❤️ for a safer crypto future.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
