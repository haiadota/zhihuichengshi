<template>
    <div ref="main" class="box"></div>
</template>

<script>
    export default {
        name: "Punish",
        computed: {
            option() {
                return {
                    tooltip: {
                        formatter: "{b}: {c} ({d}%)",
                    },
                    legend: {
                        orient: '',
                        itemHeight:9,
                        itemWidth:12,
                        itemGap:2,
                        x: 'right',
                        y: 'center',
                        data: ['证件逾期', '证件可用', '证件到期', '证件过期'],
                        textStyle:{color:'#54c0c0'}
                    },
                    series: [
                        {
                            name: '',
                            type: 'pie',
                            radius: ['52%', '62%'],
                            center:['30%','52%'],
                            avoidLabelOverlap: false,
                            hoverOffset: 4,
                            label: {
                                normal: {show: false}
                            },
                            data: [
                                {value: 335, name: '证件过期', itemStyle: {color: '#35c3a1'},},
                                {value: 310, name: '证件到期', itemStyle: {color: '#408ec3'}},
                                {value: 234, name: '证件可用', itemStyle: {color: '#4baecd'}},
                                {value: 135, name: '证件逾期', itemStyle: {color: '#2466b4'}},

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