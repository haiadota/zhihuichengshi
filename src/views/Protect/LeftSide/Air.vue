<template>
    <div>
        <Theme :value="'气环境'"></Theme>
        <div class="row">
            <div class="air_pic"></div>
            <span>空气质量构成</span>
        </div>
        <div ref="main" class="main1"></div>
        <div class="row">
            <div class="air_pic"></div>
            <span>空气站点表</span>
        </div>

        <div class="title">
            <span>站点名称</span>
            <span>AQI</span>
            <span>空气级别</span>
        </div>
        <div class="matter">
            <span>新里程水库里</span>
            <span>45</span>
            <span>优</span>
        </div>
        <div class="matter">
            <span>新里程水库里</span>
            <span>45</span>
            <span>优</span>
        </div>
        <div class="matter">
            <span>新里程水库里</span>
            <span>45</span>
            <span>优</span>
        </div>
        <div class="matter">
            <span>新里程水库里</span>
            <span>45</span>
            <span>优</span>
        </div>
        <div class="matter">
            <span>新里程水库里</span>
            <span>45</span>
            <span>优</span>
        </div>
        <div class="row1">
            <span>查看更多</span>
            <div></div>
        </div>
    </div>
</template>

<script>
    import Theme from '@/components/Theme.vue'

    export default {
        name: "Air",
        components: {
            Theme
        },
        computed: {
            option() {
                return {
                    tooltip: {},
                    radar: {
                        name: {
                            textStyle: {
                                color: '#fff',
                                fontSize: 10,
                                padding: [-5, -10]
                            }
                        },
                        splitArea: {show: false},
                        radius: '70%',

                        indicator: [

                            {name: '优', max: 3500, color: '#15ffff'},
                            {name: '轻度污染', max: 1600, color: '#15ffff'},
                            {name: '轻度污染', max: 3000, color: '#15ffff'},
                            {name: '轻度污染', max: 3800, color: '#15ffff'},
                            {name: '轻度污染', max: 3200, color: '#15ffff'},
                            {name: '轻度污染', max: 2500, color: '#15ffff'},
                            {name: '轻度污染', max: 3200, color: '#15ffff'},
                            {name: '良', max: 2500, color: '#15ffff'}
                        ],
                        axisLine: {     //坐标轴线
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#036dae'
                            }

                        }
                    },

                    series: [{
                        name: '民生民情',
                        type: 'radar',
                        itemStyle: {opacity: 0},
                        data: [
                            {
                                value: [2000, 1200, 2400, 2100, 2200, 1600, 1800, 2100],
                                areaStyle: {color: 'rgba(39,79,90,0.7)'},        //区域填充样式
                                lineStyle: {color: '#50d5e9', opacity: 0.5}
                            },
                            {
                                value: [1000, 1400, 2400, 1100, 2700, 1200, 1800, 2100],
                                areaStyle: {color: 'rgba(91,89,58,0.7)'},
                                lineStyle: {color: '#dbc645', opacity: 0.5},

                            }
                        ]
                    }]
                }
            }
        },
        mounted() {
            this.myChart = this.$echarts.init(this.$refs.main)
            this.myChart.setOption(this.option)
        }
    }
</script>

<style lang="scss" scoped>
    .row {
        .air_pic {
            height: 0.4rem;
            width: 0.55rem;
            background: url(/image/air.png) no-repeat;
            background-size: 83% 100%;
            display: inline-block;
        }

        span {
            font-size: 0.3rem;
            color: #15ffff;
            top: -0.1rem;
            position: relative;

        }
    }

    .main1 {
        width: 7rem;
        height: 6rem;
    }

    .row:nth-of-type(4) {
        margin-top: 0.5rem;
    }

    .title {
        height: 0.8rem;
        background: rgba(61, 103, 111, 0.5);

        span {
            line-height: 0.8rem;
            text-align: center;
            margin-right: 1.5rem;
            font-size: 0.3rem;
            color: #15ffff;

        }

        span:nth-of-type(1) {
            margin-left: 0.5rem;
        }
    }

    .matter {
        height: 0.8rem;

        span {
            line-height: 0.8rem;
            text-align: center;
            margin-right: 1.2rem;
            font-size: 0.3rem;
            color: #15ffff;
        }

        span:nth-of-type(1) {
            margin-left: 0.4rem;
        }

        span:nth-of-type(3) {
            margin-left: 0.7rem;
        }
    }

    .matter:nth-of-type(odd) {
        background: rgba(61, 103, 111, 0.5);
    }

    .row1 {
        margin-top: 0.5rem;
        text-align: center;

        span {
            font-size: 0.3rem;
            color: #0bccfe;
        }

        div {
            background: url(/image/right_arrow.png) no-repeat;
            height: 0.3rem;
            width: 0.45rem;
            top: 0.05rem;
            position: relative;
            background-size: 90% 100%;
            display: inline-block;
        }
    }
</style>