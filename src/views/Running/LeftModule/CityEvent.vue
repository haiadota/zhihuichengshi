<template>
    <div class="box">
        <Theme :value="'城市事件'"></Theme>
        <div class="search_box">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="请输入内容" class="text">
        </div>
        <ul class="list parent-dom">
            <vuescroll :ops="ops">
                <li v-for="(item,n) in 9" :key="n" class="cell child-dom">
                    <i class="fa fa-bus"></i>
                    <div class="content">
                        <p class="upper"><span class="half">交通事故</span><span class="half">交通出行</span></p>
                        <p class="under"><span class="date">2019-10-11</span><span>12:20:04</span></p>
                    </div>
                    <i class="fa fa-wrench"></i>
                    <span class="status">处置中</span>
                </li>
            </vuescroll>
        </ul>
    </div>
</template>

<script>
    import Theme from '@/components/Theme.vue'
    import vuescroll from 'vuescroll/dist/vuescroll-native'

    export default {
        name: "CityEvent",
        components: {Theme,vuescroll},
        data() {
            return{
                ops: {
                    vuescroll: {scroller: {minZoom: 1, maxZoom: 1,}},
                    scrollPanel: {scrollingX: false,},
                    rail: {},
                    bar: {background: '#c0c0c0'},
                },
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search_box {
        width: 80%;
        padding-left: .2rem;
        height: 0.6rem;
        border: .02rem solid #20bcbf;
        display: flex;
        align-items: center;

        .fa-search {
            color: #b5b9bc;
            font-size: .4rem;
        }

        .text {
            height: 100%;
            flex: 1;
            border: none;
            background: none;
            color: #fff;
            font-size: .28rem;
            text-indent: .15rem;
        }
    }

    .list {
        height: calc(100% - 1.65rem);
        width: 100%;
overflow: hidden;
        .cell {
            width: 96%;
            height: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: .04rem solid #6f7275;

            .fa-bus {
                color: #ffcd31;
                font-size: .38rem;
            }

            .content {
                width: 60%;

                .upper {
                    color: #15ffff;
                    font-size: .32rem;
                    padding-bottom: .1rem;

                    .half {
                        display: inline-block;
                        width: 50%;
                    }
                }

                .under {
                    color: #cecbca;
                    font-size: .24rem;

                    .date {
                        padding-right: .2rem;
                    }
                }
            }

            .fa-wrench {
                color: #cecbca;
                font-size: .36rem;
            }

            .status {
                color: #15ffff;
                font-size: .34rem;
            }
        }
    }
</style>