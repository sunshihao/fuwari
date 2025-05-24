import { LinkPreset, type NavBarLink } from "@/types/config";
import I18nKey from "@i18n/i18nKey";
import { i18n, getCurrentLanguage } from "@i18n/translation";

// 修改为函数，每次调用时都会重新获取当前语言的翻译
export function getLinkPresets(): { [key in LinkPreset]: NavBarLink } {
  // 获取当前语言
  const currentLang = getCurrentLanguage();
  
  return {
    [LinkPreset.Home]: {
      name: i18n(I18nKey.home),
      url: currentLang === 'en' ? '/' : `/${currentLang}/`,
    },
    [LinkPreset.About]: {
      name: i18n(I18nKey.about),
      url: "/about/",
    },
    [LinkPreset.Archive]: {
      name: i18n(I18nKey.archive),
      url: "/archive/",
    },
  };
}

// 为了向后兼容，保留原来的常量
export const LinkPresets = getLinkPresets();
