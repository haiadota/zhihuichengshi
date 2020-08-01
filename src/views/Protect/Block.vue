<template>
    <div ref="main" class="box"></div>
</template>

<script>
    export default {
        name: "Block",
        computed: {
            option() {
                return {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: '',
                        x: 'right',
                        data: ['低度风险', '高度风险'],
                        itemHeight: 10,
                        itemWidth: 10,
                        textStyle: {
                            fontSize: 10,
                            color: '#15ffff'
                        }
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            center: ['40%', '55%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [
                                {
                                    value: 310,
                                    name: '低度风险',
                                    label: {
                                        position: 'outside',
                                        fontSize: 4,
                                    },
                                    itemStyle: {
                                        color: new this.$echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: '#00fafa'},
                                                {offset: 0.3, color: '#0da1c5'},
                                                {offset: 1, color: '#2b5357'}
                                            ]
                                        )
                                    },
                                    emphasis: {
                                        label: {
                                            show: false
                                        }
                                    }
                                },
                                {
                                    value: 310,
                                    name: '高度风险',
                                    label: {
                                        position: 'outside',
                                        fontSize: 4,
                                    },
                                    itemStyle: {
                                        color: '#00ffff'
                                    },
                                    emphasis: {
                                        label: {
                                            show: false
                                        }
                                    }
                                },
                                {
                                    value: 0,
                                    name: '风险等级',
                                    label: {
                                        formatter: '2\n{b}',
                                        position: 'center',
                                        fontSize: 10,
                                        show: true
                                    },
                                    itemStyle: {
                                        color: '#00ffff'
                                    },
                                    emphasis: {
                                        label: {
                                            show: true,
                                            fontSize: 10,
                                            fontWeight: 'normal'
                                        }
                                    }
                                }
                            ]
                        },
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

<style scoped>
</style>