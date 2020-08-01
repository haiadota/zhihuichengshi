<template>
    <div class="box main_view">
        <LeftView>
            <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        </LeftView>
        <MidView></MidView>
        <RightView>
            <template v-slot:sidebar>
                <Sidebar :sidebarList="sidebarList"></Sidebar>
            </template>
        </RightView>
    </div>
</template>

<script>
    import MidView from '@/components/MidView.vue'
    import LeftView from '@/components/LeftView.vue'
    import RightView from '@/components/RightView.vue'
    import Sidebar from '@/components/Sidebar.vue'
    import Theme from '@/components/Theme.vue'

    export default {
        name: 'Home',
        components: {
            MidView,
            LeftView,
            RightView,
            Sidebar,
            Theme
        },
        data() {
            return {
                sidebarList: [
                    {text: '今日在线', icon: 'icon-zaixian', name: ''},
                    {text: '警力分布', icon: 'icon-shijian', name: ''},
                    {text: '物联监测', icon: 'icon-jiance', name: ''},
                    {text: '综合事件', icon: 'icon-jiance', name: ''}

                ],
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>

</style>

