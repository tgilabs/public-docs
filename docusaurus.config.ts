import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'הויקיפדיה של TeGriAi',
  tagline: 'ברוכים הבאים לעולם שלנו! הקהילה הישראלית הכי גדולה ברשת',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://wiki.tegriai.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tgilabs', // Usually your GitHub org/user name.
  projectName: 'public-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'he',
    locales: ['he'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/background.jpeg',
    navbar: {
      title: 'הויקיפדיה של TeGriAi',
      logo: {
        alt: 'TeGriAi Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'community',
          label: 'קהילה',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'events',
          label: 'אירועים',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'lab',
          label: 'המעבדה 🧪',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'history',
          label: 'היסטוריה',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'legal',
          label: 'מדיניות',
          position: 'left',
        },
        {
          href: 'https://cloud.ims-network.net/he',
          label: 'הענן שלנו',
          position: 'right',
        },
        {
          href: 'https://discord.gg/tgi',
          label: 'דיסקורד',
          position: 'right',
        },
        {
          href: 'https://workway.co.il',
          label: 'WorkWay',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [

      ],
      copyright: ` ${new Date().getFullYear()} TeGriAI © כל הזכויות שמורות . 
      <br> מופעל על ידי <a href="https://www.tegriai.com/lab">מעבדות טגי</a> 
      <br> הפרוייקט הזה הוא פרוייקט בקוד פתוח ברשיון <a href="https://github.com/tgilabs/public-docs?tab=CC-BY-4.0-1-ov-file">CC-BY-4.0 license</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
