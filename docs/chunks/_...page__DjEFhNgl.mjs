import './_page_.b6d28cd3_DUlhRhFk.mjs';
import { c as createComponent, b as createAstro, a as renderComponent, r as renderTemplate } from './astro/server_tr3ymE8J.mjs';
import { c as languages, d as setLanguage, a as getSortedPosts } from './content-utils_B-LF4kEy.mjs';
import { $ as $$$1 } from './_...page__Bqtszaji.mjs';
import { P as PAGE_SIZE } from './MainGridLayout_DiGC4aYx.mjs';

const $$Astro = createAstro("https://fuwari.vercel.app/");
const getStaticPaths = async ({ paginate }) => {
  const allPaths = [];
  for (const lang of Object.keys(languages)) {
    setLanguage(lang);
    const allBlogPosts = await getSortedPosts(lang);
    const paginatedPaths = paginate(allBlogPosts, {
      pageSize: PAGE_SIZE,
      params: { lang }
    });
    allPaths.push(...paginatedPaths);
  }
  return allPaths;
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const { lang } = Astro2.params;
  if (lang) setLanguage(lang);
  return renderTemplate`${renderComponent($$result, "HomePage", $$$1, { "page": page })}`;
}, "/Users/ssh/Home/workspace/Blog/astro/fuwari/src/pages/[lang]/[...page].astro", void 0);

const $$file = "/Users/ssh/Home/workspace/Blog/astro/fuwari/src/pages/[lang]/[...page].astro";
const $$url = "/[lang]/[...page]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
