<script setup lang="ts">

import SocialIcons from './partials/SocialIcons.vue';
</script>

<template>
    <footer class="bg-slate-800 text-center text-slate-400 p-8 space-y-4 font-text">
        <div>
            <img src="/src/assets/logo.png" alt="GLOKON Logo" class="h-8 mx-auto" loading="lazy" />
        </div>
        <div class="text-sm">
            <p>
                © {{ new Date().getFullYear() }} Dimensional Wave Limited t/a GLOKON®.
            </p>
        </div>
        <div class="text-2xl">
            <SocialIcons />
        </div>
        <div class="text-xs space-y-0.5">
            <p>
                GLOKON is a registered trademark of QAssist Ltd.
            </p>
            <p>
                Dimensional Wave Limited, Company Number 08031338
            </p>
            <p>
                GLOKON Limited, Company Number 08258986
            </p>
            <p>
                QAssist Ltd, Company Number 15192950
            </p>
        </div>
    </footer>
</template>

<style scoped>

</style>
