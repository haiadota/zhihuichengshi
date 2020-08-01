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
            <div class="container1">
                <Theme :value="'事件统计'"></Theme>
                <Incident></Incident>
            </div>
            <div class="container2">
                <Theme :value="'危险源统计'"></Theme>
                <Dangerous></Dangerous>
            </div>
            <div class="container3">
                <Theme :value="'企业统计'"></Theme>
                <Enterprise></Enterprise>
            </div>
        </RightView>
    </div>

</template>

<script>
    import MidView from '@/components/MidView.vue'
    import LeftView from '@/components/LeftView.vue'
    import RightView from '@/components/RightView.vue'
    import Sidebar from '@/components/Sidebar.vue'
    import Theme from '@/components/Theme.vue'
    import Incident from './Incident.vue'
    import Dangerous from './Dangerous.vue'
    import Enterprise from './Enterprise.vue'

    export default {
        name: "Supervision",
        components: {
            MidView,
            LeftView,
            RightView,
            Sidebar,
            Incident,
            Theme,
            Dangerous,
            Enterprise
        },
        data() {
            return {
                sidebarList: [
                    {text: '最新事件', icon: 'icon-shijian', name: 'NewEvent'},
                    {text: '应急预案', icon: 'icon-zaixian', name: 'Emergency'},
                    {text: '物联监测', icon: 'icon-jiance', name: ''},
                    {text: '视频监控', icon: 'icon-surveillance', name: ''},
                ],
            }
        }
    }
</script>

<style scoped>
    .container1 {
        height: 34%;
    }

    .container2 {
        height: 30%;
    }

    .container3 {
        height: 36%;
    }
</style>