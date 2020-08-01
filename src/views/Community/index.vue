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
            <Theme :value="'阳光社区'"></Theme>
            <SunShine></SunShine>

            <Theme :value="'老龄主题'"></Theme>
            <Aging></Aging>

            <Theme :value="'居民信息'"></Theme>
            <Resident></Resident>

            <Theme :value="'视频监控'"></Theme>
            <Video></Video>

        </RightView>
    </div>
</template>

<script>
    import MidView from '@/components/MidView.vue'
    import LeftView from '@/components/LeftView.vue'
    import RightView from '@/components/RightView.vue'
    import Sidebar from '@/components/Sidebar.vue'
    import Theme from '@/components/Theme.vue'
    // import LeftSide from './LeftSide'
    import SunShine from './SunShine'
    import Aging from './Aging'
    import Resident from './Resident'
    import Video from './Video'

    export default {
        name: 'FireControl',
        components: {
            MidView,
            LeftView,
            RightView,
            Sidebar,
            Theme,

            SunShine,
            Aging,
            Resident,
            Video

        },
        data() {
            return {
                sidebarList: [
                    {text: '重点单位', icon: 'icon-zaixian',name: 'LeftSide'},
                    {text: '', icon: 'icon-shijian',name: ''},
                    {text: '', icon: 'icon-jiance',name: ''},
                    {text: '', icon: 'icon-surveillance',name: ''},
                ],
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .right_first {
        display: flex;
        align-items: center;

        .circle_area {
            height: 2.5rem;
            width: 2.5rem;
        }

        .data_area {
            height: 1.8rem;
            display: flex;
            flex-wrap: wrap;

            .data_item {
                width: 50%;
                display: flex;
                align-items: center;
                justify-content: center;

                .white_txt {
                    width: 55%;
                    color: #15ffff;
                    font-size: .2rem;

                    .little {
                        font-size: .1rem;
                    }
                }

                .color_txt {
                    width: 45%;
                    color: #38ff98;
                    font-size: .25rem;
                }
            }
        }
    }


</style>

