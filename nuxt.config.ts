// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxtjs/axios',
        ['nuxt-mail', {
            message: {
                to: 'dimaabagas73@gmail.com',
            },
            smtp: {
                host: 'smtp.mailtrap.io',
                port: 2525,
                auth: {
                    username: '',
                    password: ''
                }
            }
        }]
    ],
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        dataValue: 'theme',
        classSuffix: '',
    }
})
