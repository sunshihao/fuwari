import { getCollection } from "astro:content";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { getCurrentLanguage } from "../i18n/translation";

// 修改 getSortedPosts 函数，添加语言筛选
export async function getSortedPosts(lang?: string) {
  const posts = await getCollection("posts", ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });
  
  // 如果指定了语言，则筛选该语言的文章
  const filteredPosts = lang 
    ? posts.filter(post => {
        // 优先使用 frontmatter 中的 lang 字段
        if (post.data.lang) {
          return post.data.lang === lang;
        }
        
        // 如果没有 lang 字段，则根据文件路径判断
        const pathParts = post.id.split('/');
        if (pathParts.length > 0) {
          return pathParts[0] === lang;
        }
        
        return false;
      })
    : posts;
  
  // 按发布日期排序
  return filteredPosts.sort(
    (a, b) => b.data.published.valueOf() - a.data.published.valueOf()
  );
}

export async function getTagList(): Promise<Tag[]> {
	const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const countMap: { [key: string]: number } = {};
	allBlogPosts.map((post: { data: { tags: string[] } }) => {
		post.data.tags.map((tag: string) => {
			if (!countMap[tag]) countMap[tag] = 0;
			countMap[tag]++;
		});
	});

	// sort tags
	const keys: string[] = Object.keys(countMap).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	return keys.map((key) => ({ name: key, count: countMap[key] }));
}

export type Category = {
	name: string;
	count: number;
};

export async function getCategoryList(): Promise<Category[]> {
	const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
	const count: { [key: string]: number } = {};
	allBlogPosts.map((post: { data: { category: string | number } }) => {
		if (!post.data.category) {
			const ucKey = i18n(I18nKey.uncategorized);
			count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
			return;
		}
		count[post.data.category] = count[post.data.category]
			? count[post.data.category] + 1
			: 1;
	});

	const lst = Object.keys(count).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	const ret: Category[] = [];
	for (const c of lst) {
		ret.push({ name: c, count: count[c] });
	}
	return ret;
}
