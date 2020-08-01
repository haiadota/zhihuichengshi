<template>
    <div class="box main_view">
        <LeftView>
            <transition name="fade" mode="out-in">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </LeftView>
        <MidView></MidView>
        <RightView>
            <template v-slot:sidebar>
                <Sidebar :sidebarList="sidebarList"></Sidebar>
            </template>
            <div class="right_first">
                <div class="circle_area">
                    <div class="top">
                        <Annulus></Annulus>
                    </div>
                    <Dial></Dial>
                </div>
                <ul class="data_area">
                    <li class="data_item" v-for="(item,index) in airArr" :key="index">
                        <span class="white_txt">{{item.name}}<span class="little">{{item.mark}}</span></span>
                        <span class="color_txt">{{item.value}}</span>
                    </li>
                </ul>
            </div>
            <Theme :value="'交通出行'"></Theme>
            <div class="right_second">
                <div class="left_part">
                    <div class="title">拥堵指数</div>
                    <div class="mid">2.7</div>
                    <div class="line">
                        <div class="solid" :style="{width:congestionIndex}"></div>
                    </div>
                </div>
                <ul class="right_part">
                    <li v-for="(item,n) in secondArr" :key="n" class="cell">
                        <i :class="[item.circle, 'icon']"></i><span class="text">{{item.text}}</span>
                    </li>
                </ul>
            </div>
            <Theme :value="'公共安全'"></Theme>
            <div class="right_third">
                <div v-for="(item,n) in 4" :key="n" class="cell">
                    <i class="icon"></i>
                    <div class="text">
                        <p class="upper">102</p>
                        <p class="under">高新技术开发区</p>
                    </div>
                </div>
            </div>
            <Theme :value="'民生民情'"></Theme>
            <div class="right_fourth">
                <Radar></Radar>
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
    import Dial from '@/components/Dial.vue'
    import Annulus from './RightModule/Annulus'
    import Radar from './RightModule/Radar'

    export default {
        name: 'Running',
        components: {
            MidView,
            LeftView,
            RightView,
            Sidebar,
            Theme,
            Dial,
            Annulus,
            Radar
        },
        data() {
            return {
                secondArr: [
                    {circle: 'white', text: '开运街飞跃中路'},
                    {circle: 'green', text: '光谷大街飞跃中路'},
                    {circle: 'blue', text: '繁荣路飞跃中路'},
                ],
                congestionIndex: '40%',
                sidebarList: [
                    {text: '今日在线', icon: 'icon-zaixian', name: 'OnlineToday'},
                    {text: '城市事件', icon: 'icon-shijian', name: 'CityEvent'},
                    {text: '物联监测', icon: 'icon-jiance', name: 'BuildingMonitor'},
                    {text: '视频监控', icon: 'icon-surveillance', name: ''},
                ],
                airArr: [
                    {name: 'PM2.5', mark: '', value: '35'},
                    {name: 'SO', mark: '2', value: '2'},
                    {name: 'PM10', mark: '', value: '48'},
                    {name: 'NO', mark: '2', value: '10'},
                    {name: 'CO', mark: '', value: '48'},
                    {name: 'O', mark: '3', value: '10'}
                ]
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .right_first {
        height: calc(18% - .2rem);
        padding-bottom: .2rem;
        display: flex;
        align-items: center;

        .circle_area {
            height: 100%;
            width: 3.5rem;
            position: relative;
            .top{
                position: absolute;
                width: 100%;
                height: 100%;
            }
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
                    font-size: .26rem;

                    .little {
                        display: inline-block;
                        transform-origin: left bottom;
                        transform: scale(.6);
                    }
                }

                .color_txt {
                    width: 45%;
                    color: #38ff98;
                    font-size: .28rem;
                }
            }
        }
    }

    .right_second {
        display: flex;
        height: calc(26% - 1.9rem);
        padding: .3rem 0 .6rem;

        .left_part {
            height: 100%;
            width: 50%;
            background: url("/image/indexBG.png") no-repeat;
            background-size: 100% 100%;
            position: relative;
            text-align: center;

            .title {
                position: absolute;
                width: 100%;
                line-height: .28rem;
                top: -0.14rem;
                font-size: .28rem;
            }

            .mid {
                font-size: .8rem;
                letter-spacing: 0.1rem;
                height: 73%;
                line-height: 2.7rem;
            }

            .line {
                width: 80%;
                height: 0.1rem;
                margin: 0 auto;
                border-radius: 0.05rem;
                background: rgba(64, 164, 163, 0.3);

                .solid {
                    height: 100%;
                    border-radius: inherit;
                    background: #fff;
                }
            }
        }

        .right_part {
            height: 100%;
            width: 50%;
            box-sizing: border-box;
            padding-left: .5rem;

            .cell {
                width: 100%;
                display: flex;
                align-items: center;
                font-size: .26rem;
                line-height: .8rem;

                .text {
                    flex: 1;
                    text-indent: .3rem;
                }

                .icon {
                    height: .24rem;
                    width: .25rem;
                    border-radius: 50%;
                    box-shadow: 0 0 .1rem .04rem #7b7137;
                }

                .white {
                    background: #1ef5ff;
                }

                .green {
                    background: #0acaa5;
                }

                .blue {
                    background: #006ef5;
                }
            }
        }
    }
    .right_third{
        height: calc(22% - 1rem);
        display: flex;
        flex-wrap: wrap;
        .cell{
            width: 50%;
            height: 40%;
            display: flex;
            align-items: center;
            .icon{
                width: .84rem;
                height: .84rem;
                border-radius: 50%;
                background-color: #35bcbe;
                background-image: url("/image/ok.png");
                background-repeat: no-repeat;
                background-size: 60% 60%;
                background-position: center;
            }
            .text{
                flex: 1;
                    text-indent: .2rem;
                .upper{
                    font-size: .32rem;
                    margin-bottom: .1rem;
                }
                .under{
                    font-size: .26rem;
                }
            }
        }
    }
    .right_fourth{
        width: 100%;
        height: calc(34% - 1rem);
    }
</style>

