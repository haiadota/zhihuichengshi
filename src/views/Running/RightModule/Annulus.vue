<template>
    <div class="box wrap">
        <div ref="main" class="box">
        </div>
        <div class="txt box event_none">
            <div>
                <p class="num">45</p>
                <p class="zh">优</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Annulus",
        data() {
            return {
                myChart: null,
                num: 45
            }
        },
        computed: {
            option() {
                return {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a}",
                        textStyle: {
                            fontSize: '230%'
                        }
                    },
                    color: [
                        {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(21,253,253,1)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(21,253,253,0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                        'rgba(91,255,240,1)'
                    ],
                    series: [
                        {
                            name: '空气质量',
                            type: 'pie',
                            radius: ['46%', '56%'],
                            avoidLabelOverlap: false,
                            clockwise: false,
                            labelLine: {show: false},
                            data: [
                                {value: this.num},
                                {value: 100-this.num}
                            ]
                        }
                    ]
                }
            }
        },
        mounted() {
            this.myChart = this.$echarts.init(this.$refs.main)
            this.myChart.setOption(this.option)
        },
        beforeDestroy() {
            this.$echarts.dispose(this.myChart)
        }
    }
</script>

<style lang="scss" scoped>
    .wrap {
        position: relative;

        .txt {
            position: absolute;
            top: 0;
            font-family: RuiZi;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            .num{
                font-size: .4rem;
            }
            .zh{
                font-size: .35rem;
            }
        }
    }
</style>