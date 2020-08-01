<template>
    <div ref="main" class="main"></div>
</template>

<script>
    export default {
        name: "Dangerous",
        computed: {
            option() {
                return {
                    tooltip: {
                        trigger: 'item',
                        formatter: "({d}%)"
                    },
                    legend: {
                        orient: 'horizontal',
                        left: 170,
                        itemGap: 1,
                        textStyle: {
                            color: '#15ffff',
                            fontSize: 8
                        },
                        itemWidth:
                            10,
                        itemHeight:
                            10,
                    },
                    series: [
                        {
                            center: ['42%', '60%'],      //饼状图位置
                            type: 'pie',
                            radius: ['40%', '45%'],     //每个环的半径大小
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '10'
                                    }
                                }
                            },
                            data: [
                                {
                                    value: 1200,
                                    name: '生物灾害',
                                    itemStyle: {
                                        color: '#3099cd'
                                    }
                                },
                                {
                                    value: 1000,
                                    itemStyle: {
                                        color: '#136065',
                                        opacity: 0.5
                                    }
                                }
                            ]
                        },
                        {
                            center: ['42%', '60%'],
                            type: 'pie',
                            radius: ['50%', '55%'],     //圆环大小
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '10'
                                    }
                                }
                            },
                            labelLine: {
                                show: true
                            },
                            data: [
                                {
                                    value: 1600,
                                    name: '气象灾害',
                                    itemStyle: {
                                        color: '#62ffce'
                                    }
                                },
                                {
                                    value: 1000,
                                    // name:'自然灾害',
                                    itemStyle: {
                                        color: '#136065',
                                        opacity: 0.5
                                    }
                                }
                            ]
                        },
                        {
                            center: ['42%', '60%'],
                            type: 'pie',
                            radius: ['60%', '65%'],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                color: '#00cccd'
                            },
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '10'
                                    }
                                }
                            },
                            data: [
                                {
                                    value: 2000,
                                    name: '地质灾害',
                                    itemStyle: {
                                        color: '#00cccd'
                                    }
                                },
                                {
                                    value: 1000,
                                    // name:'自然灾害',
                                    itemStyle: {
                                        color: '#136065',
                                        opacity: 0.5
                                    }
                                }
                            ]
                        },
                        {
                            center: ['42%', '60%'],
                            type: 'pie',
                            radius: ['70%', '75%'],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                color: '#99ffff'
                            },
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '10'
                                    }
                                }
                            },
                            data: [
                                {
                                    value: 2400,
                                    name: '海洋灾害',
                                    itemStyle: {
                                        color: '#99ffff'
                                    }
                                },
                                {
                                    value: 1000,
                                    // name:'自然灾害',
                                    itemStyle: {
                                        color: '#136065',
                                        opacity: 0.5
                                    }
                                }
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

<style scoped>
    .main {
        width: 100%;
        height: 80%;
    }
</style>