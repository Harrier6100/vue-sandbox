<template>
    <router-view />
</template>

<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { setLocale } from 'yup';
import { getYupLocale } from '@/i18n/yupLocale';

const { locale } = useI18n();
setLocale(getYupLocale());

watch(locale, () => {
    setLocale(getYupLocale());
});
</script>