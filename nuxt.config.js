import session from 'express-session'

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'test_Antagosoft',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    modules: [
        ['@nuxtjs/axios', {
            baseURL: "3000",
            browserBaseURL: "3000"
        }]
    ],
    serverMiddleware: [
        session({
            secret: 'super-secret-key',
            resave: true,
            saveUninitialized: true,
            cookie: {maxAge: 24 * 60 * 60 * 1000},
        }),
    ]
};

