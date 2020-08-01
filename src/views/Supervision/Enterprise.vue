<template>
    <div ref="main" class="main"></div>
</template>

<script>
    export default {
        name: "Enterprise",
        computed: {
            option() {
                return {
                    series: [
                        {
                            type: 'pie',
                            radius: ['40%', '50%'],       //饼状图大小
                            center: ['50%', '45%'],       //饼状图位置
                            avoidLabelOverlap: false,
                            labelLine: {
                                normal: {
                                    show: true,
                                    length: 15,
                                    length2: 30
                                }
                            },
                            itemStyle: {
                                normal: {       //颜色渐变
                                    borderColor: 'rgba(43,52,66,0.7)',
                                    borderWidth: 2.5,
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,         //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                        [
                                            {offset: 0, color: '#003d84'},
                                            {offset: 0.5, color: '#0da1c5'},
                                            {offset: 1, color: '#01f8fb'}
                                        ]
                                    )
                                }
                            },
                            data: [
                                {
                                    value: 335,
                                    name: '高新产业开发区',
                                    label: {
                                        normal: {
                                            formatter: '{b|{b}}\n',
                                            padding: [0, -30],
                                            rich: {
                                                b: {
                                                    fontSize: 8,
                                                    color: '#02e4ff'
                                                }
                                            }

                                        }
                                    },
                                },
                                {
                                    value: 310, name: '高新产业开发区',
                                    label: {
                                        normal: {
                                            formatter: '\n\n{b|{b}}',
                                            padding: [0, -45],
                                            rich: {
                                                b: {
                                                    fontSize: 8,
                                                    color: '#02e4ff'
                                                }
                                            }
                                        }
                                    },
                                },
                                {
                                    value: 234, name: '高新产业开发区',
                                    label: {
                                        normal: {
                                            formatter: '\n\n{b|{b}}',
                                            padding: [0, -40],
                                            rich: {
                                                b: {
                                                    fontSize: 8,
                                                    color: '#02e4ff'
                                                }
                                            }
                                        }
                                    },
                                },
                                {
                                    value: 350, name: '高新产业开发区',
                                    label: {
                                        normal: {
                                            formatter: '\n\n{b|{b}}',
                                            padding: [0, -40],
                                            rich: {
                                                b: {
                                                    fontSize: 8,
                                                    color: '#02e4ff'
                                                }
                                            }
                                        }
                                    },
                                },
                                {
                                    value: 548, name: '高新产业开发区',
                                    label: {
                                        normal: {
                                            formatter: '{b|{b}}\n',
                                            padding: [0, -40],
                                            rich: {
                                                b: {
                                                    fontSize: 8,
                                                    color: '#02e4ff'
                                                }
                                            }
                                        }
                                    },
                                },
                                {
                                    value: 0,
                                    name: '企业统计图',
                                    label: {
                                        position: 'center',
                                        color: '#fffefd',
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

<style scoped>
    .main {
        width: 100%;
        height: calc(100% - 1rem);
    }
</style>