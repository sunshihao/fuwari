import './_page_.b6d28cd3_DUlhRhFk.mjs';
import { c as createComponent, b as createAstro, a as renderComponent, r as renderTemplate } from './astro/server_tr3ymE8J.mjs';
import $$PostPage from './PostPage_CYF-GSQf.mjs';
import $$Pagination from './Pagination_B2C-J-5k.mjs';
import { P as PAGE_SIZE, $ as $$MainGridLayout } from './MainGridLayout_DiGC4aYx.mjs';
import { a as getSortedPosts } from './content-utils_B-LF4kEy.mjs';

const $$Astro = createAstro("https://fuwari.vercel.app/");
const getStaticPaths = async ({ paginate }) => {
  const allBlogPosts = await getSortedPosts();
  return paginate(allBlogPosts, { pageSize: PAGE_SIZE });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  if (!page || !page.data) {
    return Astro2.redirect("/404");
  }
  const len = page.data.length;
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostPage", $$PostPage, { "page": page })} ${renderComponent($$result2, "Pagination", $$Pagination, { "class": "mx-auto onload-animation", "page": page, "style": `animation-delay: calc(var(--content-delay) + ${len * 50}ms)` })} ` })}`;
}, "/Users/ssh/Home/workspace/Blog/astro/fuwari/src/pages/[...page].astro", void 0);

const $$file = "/Users/ssh/Home/workspace/Blog/astro/fuwari/src/pages/[...page].astro";
const $$url = "/[...page]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ as $, _page as _ };
