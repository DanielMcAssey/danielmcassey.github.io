<script setup lang="ts">
import Experience from './components/Experience.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Services from './components/Services.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';
import Section from './components/Section.vue';

import heroBackground from '/src/assets/backgrounds/hero.png';
import servicesBackground from '/src/assets/backgrounds/services.png';
import experienceBackground from '/src/assets/backgrounds/experience.png';
import contactBackground from '/src/assets/backgrounds/contact.png';
</script>

<template>
    <Header />
    <main class="mt-16 w-full">
        <Section id="home" :background-url="heroBackground" backdrop-classes="backdrop-blur-sm" v-slot="slotProps">
            <Hero :class="slotProps.class" />
        </Section>
        <Section id="services" :background-url="servicesBackground" backdrop-classes="backdrop-blur-sm" v-slot="slotProps">
            <Services :class="slotProps.class" />
        </Section>
        <Section :background-url="experienceBackground" backdrop-classes="backdrop-grayscale-[.50] backdrop-blur-sm" v-slot="slotProps">
            <Portfolio id="portfolio" :class="slotProps.class" />
            <Experience id="experience" :class="slotProps.class" />
        </Section>
        <Section id="contact" :background-url="contactBackground" backdrop-classes="backdrop-grayscale-[.75]" v-slot="slotProps">
            <Contact :class="slotProps.class" />
        </Section>
    </main>
    <Footer />
</template>

<style scoped>

</style>
