<script setup lang="ts">

defineProps({
    label: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <a class="text-white font-text transition duration-200 hover:text-primary hover:ease-in-out focus:text-primary-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90"
       :href="url"
       :title="label">{{ label }}</a>
</template>

<style scoped>

</style>
