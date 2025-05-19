import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_tr3ymE8J.mjs';

const html = () => "<p>This blog template is built with <a href=\"https://astro.build/\">Astro</a>…</p>";

				const frontmatter = {"title":"Simple Guides for Fuwari","published":"2024-04-01T00:00:00.000Z","description":"How to use this blog template.","image":"./cover.jpeg","tags":["Fuwari","Blogging","Customization"],"category":"Guides","lang":"en","draft":false,"minutes":1,"words":7,"excerpt":"This blog template is built with Astro…"};
				const file = "/Users/ssh/Home/workspace/Blog/astro/fuwari/src/content/posts/en/guide/index.md";
				const url = undefined;
				function rawContent() {
					return "   \n                               \n                     \n                                             \n                     \n                                             \n                \n          \n            \n   \n\nThis blog template is built with [Astro](https://astro.build/)...";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
