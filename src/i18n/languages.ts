export interface Language {
  code: string;
  name: string;
  dir?: "ltr" | "rtl";
  dateFormat?: string;
}

export const defaultLanguage = "en";

export const languages: Record<string, Language> = {
  en: {
    code: "en",
    name: "English",
    dir: "ltr",
    dateFormat: "MMMM D, YYYY"
  },
  zh: {
    code: "zh",
    name: "中文",
    dir: "ltr",
    dateFormat: "YYYY年MM月DD日"
  },
  // 添加更多语言
};

export const getLanguageFromURL = (pathname: string): string => {
  const langCodeMatch = pathname.match(/\/([a-z]{2})(\/|$)/);
  return langCodeMatch ? langCodeMatch[1] : defaultLanguage;
};