<template>
    <div ref="main" class="main"></div>
</template>

<script>
    export default {
        name: "Box",
        data() {
            return {
                myChart: null
            }
        },
        computed: {
            option() {
                return {
                    color: ['#3398DB'],
                    grid: {
                        top: '25%',
                        left: '3%',
                        right: '7%',
                        bottom: '0%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        data: ['高新', '长德', '空港', '北湖'],
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#15ffff',
                                fontSize: 10.
                            }
                        },

                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#00ffff'
                            }
                        }
                    }],
                    yAxis: [{
                        name: '单位[百]',
                        nameTextStyle: {
                            color: '#3dd3e3',
                            fontSize: 8,
                        },
                        max: 400,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#00ffff'
                            }
                        },
                        axisTick: {     //坐标轴刻线
                            length: 1,
                        },

                        splitLine: {
                            show: false,            //栅格线
                        },

                        axisLabel: {            //坐标轴刻度标签设置
                            textStyle: {
                                color: '#3dd3e3',
                                fontSize: 10,
                            }
                        }
                    }],
                    series: [{
                        type: 'bar',
                        barWidth: '60%',
                        data: [110, 52, 200, 394],
                        itemStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: 'rgba(21,255,255,0.1)'},
                                        {offset: 1, color: 'rgba(21,255,255,0.5)'},
                                        {offset: 1, color: 'rgba(70,217,233,1)'}
                                    ]
                                )
                            },
                        },
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
        height: 100%;
        width: 100%;
    }
</style>