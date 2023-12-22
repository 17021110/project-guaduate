import { createI18n } from "vue-i18n";
import languages from "./locales/index";
import { getLanguage } from "@/utils/index";
const { en, vi } = languages;
const locale = getLanguage();
//i18next
const i18n = createI18n({
  legacy: false,
  locale: locale,
  fallbackLocale: "vi",
  globalInjection: true,
  messages: {
    en,
    vi,
  },
});

const translate = (key: string, title?: string, params?: any[]): string => {
  if (!key) {
    return "";
  }
  let strReplace = i18n.global.t(key);

  if (title) {
    strReplace = strReplace.replace("%s", i18n.global.t(title));
  }

  if (params) {
    if (params.length < strReplace.split("%n").length - 1) {
      for (let i = 1; i <= strReplace.split("%n").length - params.length; i++) {
        params.push("");
      }
    }
    let count = 0;
    for (let i = 1; i < strReplace.length; i++) {
      if (strReplace[i] + strReplace[i - 1] === "n%") {
        strReplace = strReplace.replace("%n", params[count]);
        count++;
      }
    }
  }

  return strReplace;
};

export { i18n, translate };
