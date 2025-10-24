<template>
    <button
        :type="type"
        :class="buttonClass"
        v-bind="$attrs"
    >
        <slot></slot>
    </button>
</template>

<script setup>
import { computed, useAttrs } from 'vue';

const props = defineProps({
    type: { type: String, default: 'button' },
    variant: { type: String, default: 'primary' },
    grid: { type: Boolean, default: false },
});
const attrs  = useAttrs();

const buttonClass = computed(() => {
    const classes = [
        'px-4 py-1 rounded-md transition-colors duration-200 bg-blue-500 text-white',
        props.grid ? 'w-full' : '',
        attrs.class || '',
    ];

    if (attrs.disabled) {
        classes.push('opacity-75');
    } else {
        switch (props.variant) {
            case 'primary':
            default:
                classes.push('hover:bg-blue-600 hover:cursor-pointer');
        }
    }

    return classes.join(' ');
});
</script>