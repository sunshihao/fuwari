import './_page_.b6d28cd3_DUlhRhFk.mjs';
import { c as createComponent, b as createAstro, a as renderComponent, r as renderTemplate } from './astro/server_tr3ymE8J.mjs';
import $$ArchivePanel from './ArchivePanel_DHexmO5-.mjs';
import { b as getCategoryList, i as i18n, I as I18nKey } from './content-utils_B-LF4kEy.mjs';
import { $ as $$MainGridLayout } from './MainGridLayout_DiGC4aYx.mjs';

const $$Astro = createAstro("https://fuwari.vercel.app/");
async function getStaticPaths() {
  const categories = await getCategoryList();
  return categories.map((category) => {
    return {
      params: {
        category: category.name
      }
    };
  });
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const category = Astro2.params.category;
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.archive), "description": i18n(I18nKey.archive) }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ArchivePanel", $$ArchivePanel, { "categories": [category] })} ` })}`;
}, "/Users/ssh/Home/workspace/Blog/astro/fuwari/src/pages/archive/category/[category].astro", void 0);

const $$file = "/Users/ssh/Home/workspace/Blog/astro/fuwari/src/pages/archive/category/[category].astro";
const $$url = "/archive/category/[category]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$category,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
