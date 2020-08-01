<template>
    <div ref="main" class="main"></div>
</template>

<script>
    export default {
        name: "Project",
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
                    legend: {
                        itemWidth: 15,
                        itemHeight: 8,
                        textStyle: {
                            fontFamily: 'RuiZi',
                            color: '#15ffff',
                        }
                    },
                    tooltip: {},
                    grid: {
                        left: '15%',
                        top: '15%',
                        bottom: '15%'
                    },
                    dataset: {
                        dimensions: ['product', '在线', '已读', '未读'],
                        source: [
                            {product: '长德', '在线': 43, '已读': 85, '未读': 93},
                            {product: '空港', '在线': 83, '已读': 73, '未读': 55},
                            {product: '北湖', '在线': 86, '已读': 65, '未读': 82},
                            {product: '高新', '在线': 72, '已读': 53, '未读': 39}
                        ]
                    },
                    xAxis: [{
                        type: 'category',
                        axisTick: {show: false},
                        axisLine: {show: false,}
                    }],
                    yAxis: [{
                        axisLine: {
                            lineStyle: {
                                color: '#00ffff'
                            }
                        },
                        type: 'value',
                        splitArea: {
                            show: false
                        },
                        splitLine: {show: false}  //网格线
                    }],
                    // Declare several bar series, each will be mapped
                    // to a column of dataset.source by default.
                    series:
                        [
                            {
                                type: 'pictorialBar',
                                symbol: 'rect',
                                symbolRepeat: true,
                                symbolSize: [6, 2.5],
                                itemStyle: {color: '#92f7f5'},
                            },
                            {
                                type: 'pictorialBar',
                                symbol: 'rect',
                                symbolRepeat: true,
                                symbolSize: [6, 2.5],
                                itemStyle: {color: '#62eabb'},
                            },
                            {
                                type: 'pictorialBar',
                                symbol: 'rect',
                                symbolRepeat: true,
                                symbolSize: [6, 2.5],
                                itemStyle: {color: '#21ffd6'},
                                barGap: '30%'
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
    .main {
        width: 100%;
        height: 100%;
    }
</style>