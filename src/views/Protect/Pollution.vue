<template>
    <div ref="main" class="box"></div>
</template>

<script>
    export default {
        name: "Pollution",
        computed: {
            option() {
                return {
                    tooltip: {
                        show: true,
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)",
                        textStyle:{
                            fontSize:6,
                        }
                    },
                    legend: {
                        orient: '',
                        itemHeight:10,
                        itemWidth:10,
                        itemGap:2,
                        x: 'right',
                        data: ['PM2.5', 'CO', 'SO2', 'NO2'],
                        textStyle:{
                            fontSize:8,
                            color:'#54c0c0'
                        }
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['60%', '75%'],
                            center:['45%','52%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'outside'
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        fontSize: '14',
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: true,
                                    length: 5,
                                    length2: 5
                                }
                            },
                            data: [
                                {value: 335, name: 'PM2.5', itemStyle: {color: '#4baecd'}},
                                {value: 310, name: 'CO', itemStyle: {color: '#408ec3'}},
                                {
                                    value: 234,
                                    name: 'SO2',
                                    selected: 'true',
                                    label: {
                                        show: true
                                    },
                                    labelLine: {
                                        normal: {
                                            show: true,
                                            length: 5,
                                            length2: 5
                                        }
                                    },
                                    itemStyle: {
                                        color: '#35c3a1'
                                    }
                                },
                                {value: 135, name: 'NO2', itemStyle: {color: '#2466b4'}},

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
</style>