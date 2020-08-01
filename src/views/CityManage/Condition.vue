<template>
    <div ref="main" class="box"></div>
</template>

<script>

    export default {
        name: "Condition",
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
                    color: ['#29ffff'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        top: '10%',
                        left: '0',
                        right: '3%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['环卫车辆', '环卫车辆', '环卫车辆', '环卫车辆'],
                            axisLabel: {
                                interval: 0
                            }
                        }
                    ],
                    yAxis: [{type: 'value', show: false}],
                    series: [
                        {
                            name: '',
                            type: 'bar',
                            barWidth: '15%',
                            label: {
                                show: true,
                                position: 'top',
                                offset: [8,0],
                                backgroundColor: '#2e6e60',
                                padding: [1,2]
                            },
                            itemStyle: {
                                barBorderRadius: 4,
                            },
                            data: [100, 52, 200, 220]
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