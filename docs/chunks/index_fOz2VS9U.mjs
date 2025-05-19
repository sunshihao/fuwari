import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_tr3ymE8J.mjs';

const html = () => "<p>这个博客模板是使用 <a href=\"https://astro.build/\">Astro</a> 构建的…</p>";

				const frontmatter = {"title":"Fuwari 简易指南","published":"2024-04-01T00:00:00.000Z","description":"如何使用这个博客模板。","image":"./cover.jpeg","tags":["Fuwari","博客","自定义"],"category":"指南","lang":"zh","draft":false,"minutes":1,"words":14,"excerpt":"这个博客模板是使用 Astro 构建的…"};
				const file = "/Users/ssh/Home/workspace/Blog/astro/fuwari/src/content/posts/zh/guide/index.md";
				const url = undefined;
				function rawContent() {
					return "   \n                  \n                     \n                          \n                     \n                             \n            \n          \n            \n   \n\n这个博客模板是使用 [Astro](https://astro.build/) 构建的...";
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
