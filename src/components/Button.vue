<template>
    <button
        :type="type"
        :class="[
            'px-4 py-1 rounded-md transition-colors duration-200 hover:cursor-pointer',
            variantClass,
            { 'w-full': grid },
            $attrs.class,
        ]"
        v-bind="$attrs"
    >
        <slot></slot>
    </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'button',
    },
    variant: {
        type: String,
        default: 'primary',
    },
    grid: {
        type: Boolean,
        default: false,
    },
});

const variantClass = computed(() => {
    switch (props.variant) {
        case 'primary':
        default:
            return 'bg-blue-500 text-white hover:bg-blue-700'
    }
});
</script>