<script setup lang="ts">

defineProps({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div class="bg-slate-800 hover:bg-slate-700 p-4 shadow">
        <h3 class="uppercase text-lg text-primary font-bold">{{ name }}</h3>
        <div class="mt-4 space-y-2">
            <p v-for="descriptionItem in description" class="font-text text-white text-sm">
                {{ descriptionItem }}
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>
