import { siteConfig } from "../config";
import type I18nKey from "./i18nKey";
import { en } from "./languages/en";
import { es } from "./languages/es";
import { ja } from "./languages/ja";
import { ko } from "./languages/ko";
import { th } from "./languages/th";
import { zh_CN } from "./languages/zh_CN";
import { zh_TW } from "./languages/zh_TW";

export type Translation = {
  [K in I18nKey]: string;
};

const defaultTranslation = en;

const map: { [key: string]: Translation } = {
  es: es,
  en: en,
  en_us: en,
  en_gb: en,
  en_au: en,
  zh_cn: zh_CN,
  zh_tw: zh_TW,
  ja: ja,
  ja_jp: ja,
  ko: ko,
  ko_kr: ko,
  th: th,
  th_th: th,
};

export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || defaultTranslation;
}

// 获取当前语言
function getCurrentLanguage(): string {
  // 客户端渲染时，优先使用 localStorage 中保存的语言
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const savedLang = localStorage.getItem('preferred-lang');
    if (savedLang) {
      return savedLang.toLowerCase();
    }
  }
  
  // 否则使用配置中的语言
  return (siteConfig.lang || "en").toLowerCase();
}

export function i18n(key: I18nKey): string {
  const lang = getCurrentLanguage();
  return getTranslation(lang)[key];
}
