import './_page_.b6d28cd3_DUlhRhFk.mjs';
import { c as createComponent, a as renderComponent, r as renderTemplate } from './astro/server_tr3ymE8J.mjs';
import $$ArchivePanel from './ArchivePanel_DHexmO5-.mjs';
import { $ as $$MainGridLayout, U as UNCATEGORIZED } from './MainGridLayout_DiGC4aYx.mjs';
import { i as i18n, I as I18nKey } from './content-utils_B-LF4kEy.mjs';

const $$Uncategorized = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.archive) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ArchivePanel", $$ArchivePanel, { "categories": [UNCATEGORIZED] })} ` })}`;
}, "/Users/ssh/Home/workspace/Blog/astro/fuwari/src/pages/archive/category/uncategorized.astro", void 0);

const $$file = "/Users/ssh/Home/workspace/Blog/astro/fuwari/src/pages/archive/category/uncategorized.astro";
const $$url = "/archive/category/uncategorized/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Uncategorized,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
