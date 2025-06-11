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
    <div class="group shadow flex flex-wrap sm:flex-nowrap">
        <div class="bg-slate-600/70 flex justify-center items-center p-4 min-w-full w-full max-h-40 sm:max-h-full sm:min-w-40 sm:w-40">
            <img :src="imageUrl" :alt="name" class="max-w-full max-h-full" loading="lazy" />
        </div>
        <div class="p-4 bg-slate-800 group-hover:bg-slate-700">
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
