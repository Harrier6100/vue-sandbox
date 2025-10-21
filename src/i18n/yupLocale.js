import i18n from '@/i18n';

export const getYupLocale = () => ({
    mixed: {
        required: ({ label }) => i18n.global.t('yup.required', { field: i18n.global.t(label) }),
    },
});