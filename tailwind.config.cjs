/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        screens: {
            xxs: '340px',
            xs: '410px',
            sm: '480px',
            s: '590px',
            md: '720px',
            m: '840px',
            lg: '976px',
            l: '1200px',
            xl: '1440px'
        },
        extend: {
            colors: {
                darkPurple: 'hsl(274, 66%, 15%)',
                lightPurple: 'hsl(272, 88%, 49%)',
                smokeDarkBlue: 'hsl(226, 39%, 31%)',
                bgColor: 'hsl(280, 100%, 99%)',
                pink: 'hsl(302, 42%, 55%)',
                raspberry: 'hsl(338, 100%, 54%)'
            }
        },
    },
    plugins: [],
}
