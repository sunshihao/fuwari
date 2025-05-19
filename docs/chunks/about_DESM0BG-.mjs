import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_tr3ymE8J.mjs';

const html = () => "<section><h1 id=\"about\">About<a class=\"anchor\" href=\"#about\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h1><p>This is the demo site for <a href=\"https://github.com/saicaca/fuwari\">Fuwari</a>.</p><a id=\"GCl380fa-card\" class=\"card-github fetch-waiting no-styling\" href=\"https://github.com/saicaca/fuwari\" target=\"_blank\" repo=\"saicaca/fuwari\"><div class=\"gc-titlebar\"><div class=\"gc-titlebar-left\"><div class=\"gc-owner\"><div id=\"GCl380fa-avatar\" class=\"gc-avatar\"></div><div class=\"gc-user\">saicaca</div></div><div class=\"gc-divider\">/</div><div class=\"gc-repo\">fuwari</div></div><div class=\"github-logo\"></div></div><div id=\"GCl380fa-description\" class=\"gc-description\">Waiting for api.github.com...</div><div class=\"gc-infobar\"><div id=\"GCl380fa-stars\" class=\"gc-stars\">00K</div><div id=\"GCl380fa-forks\" class=\"gc-forks\">0K</div><div id=\"GCl380fa-license\" class=\"gc-license\">0K</div><span id=\"GCl380fa-language\" class=\"gc-language\">Waiting...</span></div><script id=\"GCl380fa-script\" type=\"text/javascript\" defer>\n      fetch('https://api.github.com/repos/saicaca/fuwari', { referrerPolicy: \"no-referrer\" }).then(response => response.json()).then(data => {\n        if (data.description) {\n          document.getElementById('GCl380fa-description').innerText = data.description.replace(/:[a-zA-Z0-9_]+:/g, '');\n        } else {\n          document.getElementById('GCl380fa-description').innerText = \"Description not set\"\n        }\n        document.getElementById('GCl380fa-language').innerText = data.language;\n        document.getElementById('GCl380fa-forks').innerText = Intl.NumberFormat('en-us', { notation: \"compact\", maximumFractionDigits: 1 }).format(data.forks).replaceAll(\" \", '');\n        document.getElementById('GCl380fa-stars').innerText = Intl.NumberFormat('en-us', { notation: \"compact\", maximumFractionDigits: 1 }).format(data.stargazers_count).replaceAll(\" \", '');\n        const avatarEl = document.getElementById('GCl380fa-avatar');\n        avatarEl.style.backgroundImage = 'url(' + data.owner.avatar_url + ')';\n        avatarEl.style.backgroundColor = 'transparent';\n        if (data.license?.spdx_id) {\n          document.getElementById('GCl380fa-license').innerText = data.license?.spdx_id\n        } else {\n          document.getElementById('GCl380fa-license').innerText = \"no-license\"\n        };\n          document.getElementById('GCl380fa-card').classList.remove(\"fetch-waiting\");\n          console.log(\"[GITHUB-CARD] Loaded card for saicaca/fuwari | GCl380fa.\")\n      }).catch(err => {\n        const c = document.getElementById('GCl380fa-card');\n        c.classList.add(\"fetch-error\");\n         console.warn(\"[GITHUB-CARD] (Error) Loading card for saicaca/fuwari | GCl380fa.\")\n      })\n    </script></a><blockquote>\n<section><h3 id=\"sources-of-images-used-in-this-site\">Sources of images used in this site<a class=\"anchor\" href=\"#sources-of-images-used-in-this-site\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3><ul>\n<li><a href=\"https://unsplash.com/\">Unsplash</a></li>\n<li><a href=\"https://www.pixiv.net/artworks/108916539\">星と少女</a> by <a href=\"https://www.pixiv.net/users/93273965\">Stella</a></li>\n<li><a href=\"https://civitai.com/posts/586908\">Rabbit - v1.4 Showcase</a> by <a href=\"https://civitai.com/user/Rabbit_YourMajesty\">Rabbit_YourMajesty</a></li>\n</ul></section>\n</blockquote></section>";

				const frontmatter = {"minutes":1,"words":24,"excerpt":"This is the demo site for Fuwari."};
				const file = "/Users/ssh/Home/workspace/Blog/astro/fuwari/src/content/spec/about.md";
				const url = undefined;
				function rawContent() {
					return "# About\nThis is the demo site for [Fuwari](https://github.com/saicaca/fuwari).\n\n::github{repo=\"saicaca/fuwari\"}\n\n> ### Sources of images used in this site\n> - [Unsplash](https://unsplash.com/)\n> - [星と少女](https://www.pixiv.net/artworks/108916539) by [Stella](https://www.pixiv.net/users/93273965)\n> - [Rabbit - v1.4 Showcase](https://civitai.com/posts/586908) by [Rabbit_YourMajesty](https://civitai.com/user/Rabbit_YourMajesty)";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"about","text":"About#"},{"depth":3,"slug":"sources-of-images-used-in-this-site","text":"Sources of images used in this site#"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
