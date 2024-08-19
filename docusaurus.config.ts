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
            'https://github.com/tgilabs/public-docs/tree/Production/',
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
          html: '<i class="fas fa-users"></i> קהילה',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'servers',
          html: '<i class="fas fa-gamepad"></i> שרתי משחק',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'lab',
          html: '<i class="fas fa-flask"></i> המעבדה',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'legal',
          html: '<i class="fas fa-gavel"></i> מדיניות',
          position: 'left',
        },
        {
          type: 'dropdown',
          html: '<i class="fas fa-plus"></i> משאבים נוספים',
          position: 'right',
          items: [
            {
              href: 'https://www.tegriai.com',
              html: '<i class="fas fa-home"></i> אתר טגי',
            },
            {
              href: 'https://workway.co.il',
              html: '<i class="fas fa-briefcase"></i> WorkWay',
            },
            {
              href: 'https://cloud.ims-network.net/he',
              html: '<i class="fas fa-cloud"></i> הענן שלנו',
            },

          ],
        },
        {
          href: 'https://discord.gg/tgi',
          html: '<i class="fa-brands fa-discord"></i>',
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