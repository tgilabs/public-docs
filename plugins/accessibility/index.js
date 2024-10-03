// src/docusaurus-plugin/index.js
module.exports = function (context, options) {
  return {
    name: 'nagishli-plugin',
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'script',
            attributes: {
              charset: 'utf-8',
              src: '/plugins/accessibility/nagishli_beta.js',
              defer: true,
            },
          },
        ],
      };
    },
  };
};
