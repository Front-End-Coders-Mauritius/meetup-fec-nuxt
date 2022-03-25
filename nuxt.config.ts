import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    css: [
        "~/assets/css/tailwind.css"
    ],
    head: {
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: 'description',
            name: 'description',
            content: 'my website description'
          },
          { property: "og:image:width", content: "740" },
          { property: "og:image:height", content: "300" },
          { name: "twitter:site", content: "/img/meetupFEC.png" },
          { name: "twitter:card", content: "/img/meetupFEC.png" },
        ],
      }
})