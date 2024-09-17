module.exports = function () {
    return {
      name: 'hostages-ticker-plugin',
      injectHtmlTags() {
        return {
          postBodyTags: [
            {
              tagName: 'div',
              attributes: {
                id: 'bthn',
                lang: 'he',
              },
            },
            {
              tagName: 'script',
              innerHTML: `
                (function () {
                  var script = document.createElement("script");
                  script.type = "text/javascript";
                  script.src = "https://bringthemhomenow.net/1.1.0/hostages-ticker.js";
                  script.setAttribute("integrity", "sha384-DHuakkmS4DXvIW79Ttuqjvl95NepBRwfVGx6bmqBJVVwqsosq8hROrydHItKdsne");
                  script.setAttribute("crossorigin", "anonymous");
                  document.body.appendChild(script);
                })();
              `,
            },
          ],
        };
      },
    };
  };
  