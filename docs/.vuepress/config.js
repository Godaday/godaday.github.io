
import { defaultTheme} from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'

export default {

    title:'VuePress',
    description:'站点SEO描述',
    locales: {

    },
    sidebar: {
        collapsible:true
        },
    plugins: [
        backToTopPlugin(),
        nprogressPlugin(),
        ],
    theme: defaultTheme({
        // URL
        logo: 'https://vuejs.org/images/logo.png',
        // 默认主题配置c
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: 'commands',
                link: '/commands',
            },
            {
                text: 'vim',
                link: '/vim-command',
            },
            ],
    }),
}