import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import tailwindcssPrimeUi from 'tailwindcss-primeui';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Convergence', ...defaultTheme.fontFamily.sans],
                text: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms, typography, containerQueries, tailwindcssPrimeUi],
};
