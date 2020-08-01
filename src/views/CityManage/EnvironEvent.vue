<template>
    <div ref="main" class="box"></div>
</template>

<script>
    export default {
        name: "Event",
        data() {
            return {
                myChart: null,
            }
        },
        computed: {
            option() {
                return {
                    textStyle: {
                        fontFamily: 'RuiZi',
                        color: '#15ffff'
                    },
                    color: ['#5793f3', '#d14a61', '#675bba'],
                    tooltip: {
                        trigger: 'none',
                        axisPointer: {type: 'cross'}
                    },
                    grid: {left: 0, right: 0, top: '18%', bottom: '20%'},
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                onZero: false,
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return '降水量  ' + params.value
                                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                    }
                                }
                            },
                            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                        }
                    ],
                    yAxis: [{show: false, type: 'value'}],
                    series: [
                        {
                            name: '2016 降水量',
                            type: 'line',
                            markPoint: {
                                symbolSize: 40,
                                itemStyle: {
                                    borderColor: '#75b2e4',
                                    color: 'rgba(255, 255, 255, 0)'
                                },
                                data: [{type: 'max',}]
                            },
                            smooth: true,
                            lineStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#c2e3fe' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#006fc1' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            },
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(57,214,217,1)' // 0% 处的颜色
                                    }, {
                                        offset: 0.4, color: 'rgba(91,151,181,0.6)' // 100% 处的颜色
                                    }, {
                                        offset: 0.6, color: 'rgba(85,101,133,0.4)' // 100% 处的颜色
                                    }, {
                                        offset: 1, color: 'rgba(55,56,62,0)' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            },
                            data: [4, 6, 11, 18, 28, 39, 31, 46, 55, 48, 30, 1]
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
</style>