import { createApp } from 'vue';
import './sass/app.scss';
import PrimeVue from 'primevue/config';
import { definePreset } from "@primevue/themes";
import Aura from '@primevue/themes/aura';
import App from './App.vue';

const AppTheme = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#f3f7fc',
            100: '#e5eef9',
            200: '#c5dcf2',
            300: '#93c0e6',
            400: '#599fd7',
            500: '#4491ce',
            600: '#2468a5',
            700: '#1e5386',
            800: '#1c4870',
            900: '#1d3e5d',
            950: '#13273e',
        },
        colorScheme: {
            light: {
                primary: {
                    color: '{primary.500}',
                    inverseColor: '#ffffff',
                },
            },
            dark: {
                primary: {
                    color: '{primary.500}',
                    inverseColor: '#ffffff',
                },
            }
        },
    }
});

createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: AppTheme,
            options: {
                darkModeSelector: 'app-dark',
                cssLayer: {
                    name: 'primevue',
                    order: 'tailwind-base, primevue, tailwind-utilities, theme'
                }
            }
        }
    })
    .mount('#app')
