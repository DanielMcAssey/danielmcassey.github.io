<script setup lang="ts">
defineProps({
    number: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: false,
    },
});
</script>

<template>
    <div class="text-center uppercase">
        <h1 class="font-bold text-5xl">
            <span class="text-primary-200 bg-slate-500/40 p-2">{{ number.toString(10).padStart(2, '0') }}</span><span class="ml-4 text-white">{{ title }}</span>
        </h1>
        <p v-if="subtitle" class="font-extralight text-2xl mt-6 text-primary-50">
            {{ subtitle }}
        </p>
    </div>
</template>

<style scoped>

</style>
