<template>
    <div class="box" ref="main"></div>
</template>

<script>
    export default {
        name: "Doughnut",
        data() {
            return {
                myChart: null,
                num: 45,
                placeHolderStyle: {
                    label: {show: false},
                    labelLine: {show: false},
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                }
            }
        },
        computed: {
            option() {
                return {
                    textStyle: {
                        fontFamily: 'RuiZi'
                    },
                    series: [{
                        name: '',
                        type: 'pie',
                        clockWise: true,
                        radius: ['66%', '78%'],//大小
                        startAngle: 70,
                        itemStyle: {
                            normal: {
                                color: '#5affdb',
                                label: {
                                    color: '#00e4ff',
                                    fontSize: '160%',
                                },
                                labelLine: {
                                    length: 0,
                                    length2: 30,
                                    show: true,
                                    color: '#fff'
                                }
                            }
                        },
                        data: [
                            {'name': '故障', 'value': 6},
                            {
                                value: 6,
                                name: '',
                                itemStyle: this.placeHolderStyle
                            },
                            {'name': '误报', 'value': 2},
                            {
                                value: 6,
                                name: '',
                                itemStyle: this.placeHolderStyle
                            },
                            {'name': '未处理', 'value': 4},
                            {
                                value: 6,
                                name: '',
                                itemStyle: this.placeHolderStyle
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
</style>