<template>
    <div ref="main" class="main"></div>
</template>

<script>
    export default {
        name: "AirQuality",
        computed: {
            option() {
                return {
                    series: [
                        {
                            type: 'pie',
                            radius: ['60%', '70%'],
                            center: ['50%', '45%'],       //饼状图位置
                            avoidLabelOverlap: false,
                            labelLine: {
                                normal: {
                                    show: true,
                                    length: 10,
                                    length2: 30
                                }
                            },
                            itemStyle: {
                                normal: {       //颜色渐变
                                    borderColor: 'rgba(43,52,66,0.7)',
                                    borderWidth: 2.5,
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#003d84'},
                                            {offset: 0.3, color: '#0da1c5'},
                                            {offset: 1, color: '#01f8fb'}
                                        ]
                                    )
                                }
                            },
                            data: [
                                {
                                    value: 335,
                                    name: '优',
                                    label: {
                                        normal: {
                                            formatter: '\n\n{b|{b}}',
                                            padding: [0, -20],
                                            rich: {
                                                b: {
                                                    fontSize: 10,
                                                    color: '#02e4ff'
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    value: 310, name: '良',
                                    label: {
                                        normal: {
                                            formatter: '\n\n{b|{b}}',
                                            padding: [0, -20],
                                            rich: {
                                                b: {
                                                    fontSize: 10,
                                                    color: '#02e4ff'
                                                }
                                            }
                                        }
                                    },
                                },
                                {
                                    value: 234, name: '轻度污染',
                                    label: {
                                        normal: {
                                            formatter: '\n\n{b|{b}}',
                                            padding: [0, -30],
                                            rich: {
                                                b: {
                                                    fontSize: 10,
                                                    color: '#02e4ff'
                                                }
                                            }
                                        }
                                    },
                                },
                                {
                                    value: 350, name: '重度污染',
                                    label: {
                                        normal: {
                                            formatter: '\n\n{b|{b}}',
                                            padding: [0, -30],
                                            rich: {
                                                b: {
                                                    fontSize: 10,
                                                    color: '#02e4ff'
                                                }
                                            }
                                        }
                                    },
                                },
                                {
                                    value: 548, name: '中度污染',
                                    label: {
                                        normal: {
                                            formatter: '{b|{b}}\n',
                                            padding: [0, -30],
                                            rich: {
                                                b: {
                                                    fontSize: 10,
                                                    color: '#02e4ff'
                                                }
                                            }

                                        }
                                    },

                                },
                                {
                                    value: 0,
                                    name: '空气质量类别',
                                    label: {
                                        position: 'center',
                                        color: '#00cefd',
                                        fontSize: 10,
                                    }
                                }
                            ]
                        }
                    ]
                };
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
        width: 100%;
        height: 100%;
    }
</style>