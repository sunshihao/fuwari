import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 获取用户首选语言 - 只在浏览器中执行
function getUserPreferredLanguage(): string {
  // 如果不在浏览器环境中，直接返回默认语言
  if (typeof window === 'undefined') {
    return 'en';
  }
  
  // 在浏览器中检查 localStorage
  if (typeof localStorage !== 'undefined') {
    const savedLang = localStorage.getItem('preferred-lang');
    if (savedLang) {
      return savedLang;
    }
  }
  
  // 在浏览器中检查 navigator.language
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.replace('-', '_').toLowerCase();
    console.log('browserLang---', browserLang);
    // 检查是否支持该语言
    const supportedLangs = ['en', 'zh'];
    for (const lang of supportedLangs) {
      if (browserLang.startsWith(lang)) {
        return browserLang;
      }
    }
  }
  
  // 默认返回英语
  return 'en';
}

// 导出 getUserPreferredLanguage 函数，使其可以在其他文件中使用
export { getUserPreferredLanguage };

// 设置默认语言，构建时使用
const defaultLang = 'en';

export const siteConfig: SiteConfig = {
	title: "William Sun's  Blog",
	subtitle: "A spirit of independence and a mind of freedom",
	lang: 'en', // 使用静态设置的英语作为默认语言
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/demo-banner.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/sunshihao", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "William Sun",
	bio: "A spirit of independence and a mind of freedom.",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/saicaca/fuwari",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};


// 在浏览器中动态更新语言
if (typeof window !== 'undefined') {
  // 确保代码在浏览器环境中运行
  window.addEventListener('DOMContentLoaded', () => {
    const userLang = getUserPreferredLanguage();
    // 如果用户语言与默认语言不同，可以在这里处理
    // 例如：重定向到对应语言的页面
    if (userLang !== defaultLang) {
      // 获取当前路径
      const currentPath = window.location.pathname;
      // 检查路径是否已经包含语言代码
      const hasLangPrefix = /^\/[a-z]{2}(\/|$)/.test(currentPath);
      
      if (!hasLangPrefix) {
        // 如果路径不包含语言代码，则重定向到用户语言的页面
        window.location.href = `/${userLang}${currentPath}`;
      }
    }
  });
}