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
            <Theme :value="'车辆/人员/设施/实时在线情况'"></Theme>
            <div class="right">
                <Condition></Condition>
            </div>
            <Theme :value="'渣土车处罚统计'"></Theme>
            <div class="right">
                <Punish></Punish>
            </div>
            <Theme :value="'环卫事件统计'"></Theme>
            <div class="right">
                <EnvironEvent></EnvironEvent>
            </div>
            <Theme :value="'环卫站箱统计'"></Theme>
            <div class="right">
                <Box></Box>
            </div>
        </RightView>
    </div>
</template>

<script>

    import MidView from '@/components/MidView.vue'
    import LeftView from '@/components/LeftView.vue'
    import RightView from '@/components/RightView.vue'
    import Sidebar from '@/components/Sidebar.vue'
    import Condition from './Condition'
    import Theme from '@/components/Theme.vue'
    import Box from './Box.vue'
    import Punish from './Punish.vue'
    import EnvironEvent from './EnvironEvent.vue'


    export default {
        name: "index",
        components: {
            MidView,
            LeftView,
            RightView,
            Sidebar,
            Condition,
            Theme,
            Punish,
            Box,
            EnvironEvent


        },
        data() {
            return {
                sidebarList: [
                    {text: '综合事件', icon: 'icon-zaixian', name: 'Event'},
                    {text: '警力分布', icon: 'icon-shijian', name: 'Police'},
                    {text: '环卫资源', icon: 'icon-jiance', name: 'Environment'}

                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .right {
        height: calc(25% - 1rem);
        width: 100%;
    }
</style>