import baseEn from './en';
import baseIt from './it';
import enJson from './locales/en.json';
import itJson from './locales/it.json';

export default {
    en: { ...baseEn, ...enJson },
    it: { ...baseIt, ...itJson },
};
