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
    <main>
        <Hero />
        <Services />
        <Portfolio />
        <Experience />
        <Contact />
    </main>
    <Footer />
</template>

<style scoped>

</style>
