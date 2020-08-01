import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/Running',
        },
        {
            path: '/Home',
            component: resolve => require(['../views/Home/index.vue'], resolve),

        },
        {
            path: '/CityManage',
            component: resolve => require(['../views/CityManage/index.vue'], resolve),
            children: [
                {
                    path: '',
                    name: 'Event',
                    component: resolve => require(['../views/CityManage/LeftSide/Event.vue'], resolve)
                },
                {
                    path: 'Police',
                    name: 'Police',
                    component: resolve => require(['../views/CityManage/LeftSide/Police.vue'], resolve)
                },
                {
                    path: 'Environment',
                    name: 'Environment',
                    component: resolve => require(['../views/CityManage/LeftSide/Environment.vue'], resolve)
                },
            ]
        },
        {
            path: '/FireControl',
            component: resolve => require(['../views/FireControl/index.vue'], resolve),
            children: [
                {
                    path: '',
                    name: 'RealTimeAlert',
                    component: resolve => require(['../views/FireControl/LeftSide/RealTimeAlert.vue'], resolve)
                },
                {
                    path: 'Plan',
                    name: 'Plan',
                    component: resolve => require(['../views/FireControl/LeftSide/Plan.vue'], resolve)
                },
            ]
        },
        {
            path: '/Running',
            component: resolve => require(['../views/Running/index.vue'], resolve),
            children: [
                {
                    path: '',
                    name: 'OnlineToday',
                    component: resolve => require(['../views/Running/LeftModule/OnlineToday.vue'], resolve)
                },
                {
                    path: 'CityEvent',
                    name: 'CityEvent',
                    component: resolve => require(['../views/Running/LeftModule/CityEvent.vue'], resolve)
                },
                {
                    path: 'BuildingMonitor',
                    name: 'BuildingMonitor',
                    component: resolve => require(['../views/Running/LeftModule/BuildingMonitor.vue'], resolve)
                },
            ]
        },
        {
            path: '/Community',
            component: resolve => require(['../views/Community/index.vue'], resolve),
            children: [
                {
                    path: '',
                    name: 'LeftSide',
                    component: resolve => require(['../views/Community/LeftSide.vue'], resolve)
                },
            ]
        },
        {
            path: '/Connect',
            component: resolve => require(['../views/Connect/index.vue'], resolve)
        },
        {
            path: '/Supervision',
            component: resolve => require(['../views/Supervision/index.vue'], resolve),
            children: [
                {
                    path: '',
                    name: 'NewEvent',
                    component: resolve => require(['../views/Supervision/LeftSide/NewEvent.vue'], resolve)
                },
                {
                    path: 'Emergency',
                    name: 'Emergency',
                    component: resolve => require(['../views/Supervision/LeftSide/Emergency.vue'], resolve)
                }
            ]
        },
        {
            path: '/Protect',
            component: resolve => require(['../views/Protect/index.vue'], resolve),
            children: [
                {
                    path: '',
                    name: 'Water',
                    component: resolve => require(['../views/Protect/LeftSide/Water.vue'], resolve)
                },
                {
                    path: 'Air',
                    name: 'Air',
                    component: resolve => require(['../views/Protect/LeftSide/Air.vue'], resolve)
                },
            ]
        }
    ]
})
