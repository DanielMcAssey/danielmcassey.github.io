import { createApp } from 'vue';
import './sass/app.scss';
import PrimeVue from 'primevue/config';
import { definePreset } from "@primevue/themes";
import Aura from '@primevue/themes/aura';
import App from './App.vue';

const AppTheme = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#fef4f2',
            100: '#fde7e3',
            200: '#fcd3cc',
            300: '#f9b3a8',
            400: '#f48775',
            500: '#e74e35',
            600: '#d6442c',
            700: '#b43621',
            800: '#95301f',
            900: '#7c2d20',
            950: '#43140c',
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
