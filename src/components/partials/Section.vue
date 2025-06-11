<script setup lang="ts">
defineProps({
    backgroundUrl: {
        type: String,
        required: false,
    },
    backdropClasses: {
        type: String,
        default: '',
    }
});
</script>

<template>
    <div class="group bg-cover bg-no-repeat bg-center w-full" :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }">
        <div class="w-full" :class="backdropClasses">
            <slot class="py-20 sm:py-24 group-first:pt-0 w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto" />
        </div>
    </div>
</template>

<style scoped>

</style>
