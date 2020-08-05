import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [{
            path: '/component',
            component: () =>
                import ( /* webpackChunkName:'component'*/ './../components/component')
        },
        {
            path: '/',
            name: 'index',
            meta: {
                title: '默认首页'
            },
            component: () =>
                import ( /* webpackChunkName:'index'*/ './../components/index'),
            alias: 'index'
        },
        // {
        //     path: '/indexSA',
        //     name: 'indexSA',
        //     meta: {
        //         title: '超级管理员'
        //     },
        //     component: () =>
        //         import ( /* webpackChunkName:'indexSA'*/ '@/views/board/indexSA'),
        //     alias: 'indexSA'
        // },
        // {
        //     path: '/indexA',
        //     name: 'indexA',
        //     meta: {
        //         title: '管理员'
        //     },
        //     component: () =>
        //         import ( /* webpackChunkName:'indexA'*/ '@/views/board/indexA'),
        //     alias: 'indexA'
        // },
        // {
        //     path: '/indexU',
        //     name: 'indexU',
        //     meta: {
        //         title: '超级用户'
        //     },
        //     component: () =>
        //         import ( /* webpackChunkName:'indexU'*/ '@/views/board/indexU'),
        //     alias: 'indexU'
        // },
        // {
        //     path: '/radar',
        //     name: 'radar',
        //     meta: {
        //         title: '科室设备详情'
        //     },
        //     component: () =>
        //         import ( /* webpackChunkName:'radar'*/ '@/views/board/radar')
        // },
    ]
})