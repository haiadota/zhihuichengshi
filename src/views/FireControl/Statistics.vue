<template>
    <div ref="main" class="main"></div>
</template>

<script>
    export default {
        name: "Statistics",

        data() {
            return {}
        },
        computed: {
            option() {
                return {

                    tooltip: {},
                    radar: {
                        // shape: 'circle',
                        name: {
                            textStyle: {
                                color: '#ededed',
                                borderRadius: 3,
                                padding: [-13, -10],
                                fontSize: 10
                            }
                        },
                        indicator: [
                            {name: '能力1', max: 6500},
                            {name: '能力6', max: 16000},
                            {name: '能力5', max: 30000},
                            {name: '能力4', max: 38000},
                            {name: '能力3', max: 52000},
                            {name: '能力2', max: 25000}
                        ],
                        axisLine: {         //坐标轴轴线
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        },
                        splitLine: {        // 坐标轴在 grid 区域中的分隔线
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        },
                    },

                    series: [{
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data: [
                            {
                                value: [4300, 2000, 28000, 35000, 50000, 19000],
                                name: '预算分配（Allocated Budget）',
                                areaStyle: {
                                    normal: {
                                        color: new this.$echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [
                                            {
                                                color: '#4f86ad',
                                                offset: 0.2,
                                            }
                                        ])
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: '#4f86ad'     //区域线条颜色
                                    }
                                },
                            },
                            {
                                value: [5000, 14000, 28000, 31000, 42000, 3000],
                                name: '实际开销（Actual Spending）',
                                areaStyle: {
                                    normal: {
                                        color: new this.$echarts.graphic.RadialGradient(0.01, 0.01, 0.01, [
                                            {
                                                color: '#429782',
                                                offset: 0.2
                                            }
                                        ])
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: '#429782'     //区域线条颜色
                                    }
                                },
                            }
                        ]
                    }]
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

<style scoped>
    .main {
        height: 3rem;
    }
</style>