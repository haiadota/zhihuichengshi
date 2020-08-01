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
                <Sidebar></Sidebar>
            </template>
            <Theme :value="'工程数量状态统计'"></Theme>
            <div class="right_first">
                <Project></Project>
            </div>
            <Theme :value="'新区建设规模统计'"></Theme>
            <div class="right_second">
                <Radar></Radar>
            </div>
            <Theme :value="'在线项目工人统计'"></Theme>
            <div class="right_third">
                <Worker></Worker>
            </div>
            <Theme :value="'在线监控视频统计'"></Theme>
            <div class="right_forth">
                <Monitor></Monitor>
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
    import Project from './Project.vue'
    import Radar from '@/views/Running/RightModule/Radar.vue'
    import Worker from './Worker.vue'
    import Monitor from './Monitor.vue'

    export default {
        name: "Connect",
        components: {
            LeftView,
            MidView,
            RightView,
            Sidebar,
            Theme,
            Project,
            Radar,
            Worker,
            Monitor
        }
    }
</script>

<style lang="scss" scoped>
    .right_first {
        height: calc(25% - 1rem);
    }

    .right_second {
        height: calc(28% - 1rem);
    }
    .right_third {
        height: calc(25% - 1rem);
    }
</style>