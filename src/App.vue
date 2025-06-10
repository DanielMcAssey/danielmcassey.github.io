<script setup lang="ts">
import Experience from './components/Experience.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Services from './components/Services.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';
</script>

<template>
    <Header />
    <main class="mt-36 space-y-24 w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
        <Hero id="home" />
        <Services id="services" />
        <Portfolio id="portfolio" />
        <Experience id="experience" />
        <Contact id="contact" />
    </main>
    <Footer class="mt-24" />
</template>

<style scoped>

</style>
