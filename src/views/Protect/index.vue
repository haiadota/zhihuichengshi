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
            <Theme :value="'2019年空气质量类别占比'"></Theme>
            <div class="right_side">
                <AirQuality></AirQuality>
            </div>
            <Theme :value="'2019年首要污染物占比'"></Theme>
            <div class="right_side">
                <Pollution></Pollution>
            </div>
            <Theme :value="'污染地块'"></Theme>
            <div class="right_side">
                <Block></Block>
            </div>
            <Theme :value="'视频监控'"></Theme>
            <div class="right_side">
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
    import AirQuality from './AirQuality.vue'
    import Block from './Block.vue'
    import Pollution from './Pollution.vue'
    import Monitor from './Monitor.vue'

    export default {
        name: 'FireControl',
        components: {
            MidView,
            LeftView,
            RightView,
            Sidebar,
            Theme,
            AirQuality,
            Block,
            Pollution,
            Monitor
        },
        data() {
            return {
                sidebarList: [
                    {text: '', icon: 'icon-zaixian', name: ''},
                    {text: '', icon: 'icon-shijian', name: ''},
                    {text: '水环境', icon: 'icon-jiance', name: 'Water'},
                    {text: '气环境', icon: 'icon-surveillance', name: 'Air'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

    .right_side {
        height: calc(25% - 1rem);
        width: 100%;
    }

</style>

