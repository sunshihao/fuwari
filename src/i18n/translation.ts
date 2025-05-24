import { defaultLanguage } from "./languages";
import { en } from "./languages/en";
import { zh } from "./languages/zh";
import I18nKey from "./i18nKey";

// 导入所有语言翻译
const translations: Record<string, Record<I18nKey, string>> = {
  en,
  zh,
  // 添加更多语言
};

// 当前语言，默认为英语
let currentLang = defaultLanguage;

// 设置当前语言
export const setLanguage = (lang: string): void => {
  if (translations[lang]) {
    currentLang = lang;
  } else {
    console.warn(`Language ${lang} not supported, falling back to ${defaultLanguage}`);
    currentLang = defaultLanguage;
  }
};

// 获取当前语言
export const getCurrentLanguage = (): string => {
  return currentLang;
};

// 获取翻译文本
export const i18n = (key: I18nKey): string => {
  if (!translations[currentLang]) {
    return translations[defaultLanguage][key] || key;
  }
  return translations[currentLang][key] || translations[defaultLanguage][key] || key;
};

// 初始化语言
export const initLanguage = (): void => {
  // 优先使用浏览器语言
  const browserLang = navigator.language.split("-")[0];
  
  // 从URL或localStorage获取语言设置
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  const storedLang = localStorage.getItem("language");
  
  // 优先级：浏览器语言 > URL参数 > localStorage > 默认语言
  const lang = (translations[browserLang] ? browserLang : null) || urlLang || storedLang || defaultLanguage;
  setLanguage(lang);
  localStorage.setItem("language", lang);
};
