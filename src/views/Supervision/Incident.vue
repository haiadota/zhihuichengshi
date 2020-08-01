<template>
    <div ref="main" class="main"></div>
</template>

<script>
    export default {
        name: "Incident",
        computed: {
            option() {
                return {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['环比增长', '同比增长', '事件变量'],
                        itemGap: 5,
                        itemWidth: 7,            //图例标记图形的宽高
                        itemHeight: 7,
                        textStyle: {
                            color: '#04fffd',
                            fontSize: 8
                        }
                    },
                    grid: {         //定位
                        top: '30%',
                        left: '0%',
                        right: '1%',
                        bottom: '1%',
                        containLabel:
                            true
                    },
                    xAxis: {
                        type: 'category',
                        data:
                            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                        axisTick:
                            {
                                length: 0
                            },
                        axisLabel: {
                            color: '#04fffd',
                            fontSize: 8
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#04fffd',
                                width: 0.1
                            }
                        },
                    },
                    yAxis: {
                        name: '单位：%',
                        nameTextStyle:
                            {
                                fontSize: 8,
                            }
                        ,
                        type: 'value',
                        max:
                            100,
                        axisTick:
                            {
                                length: 0,
                            }
                        ,
                        axisLabel: {
                            color: '#04fffd',
                            fontSize: 8
                        }
                        ,
                        axisLine: {
                            lineStyle: {
                                color: '#04fffd',
                                width:
                                    0.1
                            }
                        }
                        ,
                        splitLine: {
                            show: true,
                            lineStyle:
                                {
                                    opacity: 0.3
                                }
                        }
                        ,
                        splitArea: {     //栅格区域
                            show: true,
                            areaStyle:
                                {
                                    color: '#2d343a',
                                    opacity: 0.3
                                }
                        }
                    }
                    ,
                    series: [
                        {
                            name: '环比增长',
                            data: [60, 63, 68, 75, 65, 55, 60, 76, 77, 70, 68, 89],
                            color: '#64cc0a',
                            type: 'line',
                            smooth: true,
                            symbol: 'none',      //拐点样式

                        },
                        {
                            name: '同比增长',
                            data: [40, 39, 51, 54, 37, 30, 35, 40, 50, 45, 40, 50],
                            color: '#0069cf',
                            type: 'line',
                            smooth: true,
                            symbol: 'none',
                        },
                        {
                            name: '事件变量',
                            data: [25, 17, 31, 34, 20, 10, 20, 15, 30, 22, 10, 40],
                            color: '#00ffff',
                            type: 'line',
                            smooth: true,
                            symbol: 'none',
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

<style lang="scss" scoped>
    .main {
        height: calc(100% - 1rem);
        width: 100%;
    }
</style>