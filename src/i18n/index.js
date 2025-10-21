import { createI18n } from 'vue-i18n';
import ja from './messages/ja.json';

const i18n = createI18n({
    legacy: false,
    locale: 'ja',
    messages: { ja },
    missingWarn: false,
    fallbackWarn: false,
});

export default i18n;