<template>
    <input
        ref="inputRef"
        :id="id"
        :type="type"
        :class="inputClass"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        v-bind="$attrs"
    >
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    id: String,
    type: { type: String, default: 'text' },
    modelValue: String,
    placeholder: String,
});

const inputRef = ref(null);

const inputClass = computed(() => {
    const classes = [
        'block w-full px-2 py-1 border border-gray-300 text-gray-700 placeholder-gray-400',
        'focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300',
    ];
    return classes.join(' ');
});

defineExpose({
    focus: () => inputRef.value?.focus(),
});
</script>