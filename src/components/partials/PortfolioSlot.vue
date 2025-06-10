<script setup lang="ts">

defineProps({
    name: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
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
    <div class="bg-slate-800 hover:bg-slate-700 shadow flex flex-nowrap">
        <div class="bg-slate-600 flex justify-center items-center p-4 min-w-40 w-40">
            <img :src="imageUrl" :alt="name" class="w-full" loading="lazy" />
        </div>
        <div class="p-4">
            <a :href="url" :title="name" target="_blank" class="underline text-xl text-primary font-bold hover:text-primary-300"><h3>{{ name }}</h3></a>
            <h4 class="text-primary-300 italic mt-0.5">{{ job }}</h4>
            <p class="mt-2 font-text text-white text-sm">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>
