import i18n from "i18next";
import {initReactI18next, useTranslation } from "react-i18next";

const translationEn = {title:"WE BUILD FUTURE!", subTitle:"NOT JUST TECH"}
const translationId = {title:"KITA MEMBANGUN MASA DEPAN", subTitle:"TIDAK HANYA TEKNOLOGI"}

i18n 
.use(initReactI18next)
.init({
  resources:{
    en:{
      translation: translationEn ,
    },
    id:{
      translation: translationId,
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }

})