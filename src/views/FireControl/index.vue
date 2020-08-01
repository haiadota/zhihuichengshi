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
            <Theme :value="'视频监控'"></Theme>
            <Monitor></Monitor>
            <Theme :value="'火灾报警监控子系统'"></Theme>
            <div class="right_first selectablefalse">
                <div class="upper">
                    <div class="outer">
                        <div class="inner">
                            <p class="count">23</p>
                            <p class="status">已联网</p>
                        </div>
                    </div>
                </div>
                <Doughnut></Doughnut>
            </div>
            <Theme :value="'近一周舆情统计'"></Theme>
            <Statistics></Statistics>
            <Theme :value="'支队值班表'"></Theme>
            <DutyRoster></DutyRoster>
        </RightView>
    </div>
</template>

<script>
    import MidView from '@/components/MidView.vue'
    import LeftView from '@/components/LeftView.vue'
    import RightView from '@/components/RightView.vue'
    import Sidebar from '@/components/Sidebar.vue'
    import Theme from '@/components/Theme.vue'
    import Monitor from './Monitor.vue'
    import Statistics from './Statistics.vue'
    import DutyRoster from './DutyRoster.vue'
    import Doughnut from './Doughnut.vue'

    export default {
        name: 'FireControl',
        components: {
            MidView,
            LeftView,
            RightView,
            Sidebar,
            Theme,
            Doughnut,
            Monitor,
            Statistics,
            DutyRoster
        },
        data() {
            return {
                airArr: [
                    {name: 'PM2.5', mark: '', value: '35'},
                    {name: 'SO', mark: '2', value: '2'},
                    {name: 'PM10', mark: '', value: '48'},
                    {name: 'NO', mark: '2', value: '10'},
                    {name: 'CO', mark: '', value: '48'},
                    {name: 'O', mark: '3', value: '10'}
                ],
                sidebarList: [
                    {text: '实时警情', icon: 'icon-zaixian', name: 'RealTimeAlert'},
                    {text: '消防预案', icon: 'icon-shijian', name: 'Plan'},
                    {text: '物联监测', icon: 'icon-jiance', name: ''},
                    {text: '视频监控', icon: 'icon-surveillance', name: ''},
                ],
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .right_first {
        width: 100%;
        height: calc(22% - 1rem);
        position: relative;

        .upper {
            width: 100%;
            height: 100%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;

            .outer {
                width: 2.4rem;
                height: 2.4rem;
                border: .04rem solid #5affdb;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

                .inner {
                    width: 1.7rem;
                    height: 1.7rem;
                    border: .04rem solid #5affdb;
                    border-radius: 50%;
                    background: rgba(75, 124, 110, 0.3);
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    .count {
                        font-size: .34rem;
                        padding-bottom: .06rem;
                    }

                    .status {
                        font-size: .28rem;
                    }
                }
            }
        }
    }
</style>

