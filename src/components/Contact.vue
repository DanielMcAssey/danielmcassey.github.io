<script setup lang="ts">
import SectionTitle from './partials/SectionTitle.vue';
import Button from 'primevue/button';
</script>

<template>
    <div>
        <SectionTitle :number="4" title="Contact" subtitle="Lets work together" />
        <div class="font-text text-center bg-slate-800 shadow px-4 py-8 mt-12 flex flex-wrap md:flex-nowrap gap-8">
            <div class="text-white text-sm space-y-4">
                <p>
                    Thank you for taking the time to view my website.
                </p>
                <p>
                    If you are interested in working with me or want to know more, don't hesitate to contact me.
                </p>
                <p>
                    <a href="mailto:hello@glokon.me?subject=I want to find out more" title="My Email" class="underline text-primary hover:text-primary-300">hello@glokon.me</a>
                </p>
            </div>
            <form class="grid grid-cols-6 gap-2 w-full md:min-w-80" method="POST" action="https://api.web3forms.com/submit">
                <input type="hidden" name="access_key" value="eba345ce-38be-40a4-803b-3c6922f48cb1">
                <div class="col-span-6 md:col-span-3">
                    <input type="text"
                           class="w-full"
                           name="name"
                           autocomplete="name"
                           required
                           placeholder="Your Name" />
                </div>
                <div class="col-span-6 md:col-span-3">
                    <input type="email"
                           class="w-full"
                           name="email"
                           autocomplete="email"
                           required
                           placeholder="Your Email" />
                </div>
                <div class="col-span-6">
                    <textarea name="message"
                              class="w-full h-full"
                              rows="5"
                              required
                              placeholder="Your message"></textarea>
                </div>
                <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
                <div class="col-span-6">
                    <Button label="Send Message" type="submit" icon="fas fa-paper-plane" severity="primary" class="w-full" />
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>
