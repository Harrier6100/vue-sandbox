<template>
    <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        :class="[
            'block w-full px-2 py-1 border border-gray-300 text-gray-700 placeholder-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300',
        ]"
    >
</template>

<script setup>
const props = defineProps({
    modelValue: String,
    placeholder: String,
    type: {
        type: String,
        default: 'text',
    },
    id: String,
});
</script>