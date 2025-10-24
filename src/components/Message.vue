<template>
    <span v-if="isShow"
        :class="messageClass"
    >
        {{ message }}
    </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    error: String,
});

const isShow = computed(() => {
    return props.error;
});

const message = computed(() => {
    return props.error;
});

const messageClass = computed(() => {
    const classes = ['text-sm'];

    if (props.error) {
        classes.push('text-red-500');
    }

    return classes;
});
</script>