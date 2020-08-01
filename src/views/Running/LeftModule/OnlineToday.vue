<template>
    <div class="box">
        <Theme :value="'今日在线'"></Theme>
        <div class="first_chart" ref="main"></div>
    </div>
</template>

<script>
    import Theme from '@/components/Theme.vue'

    export default {
        name: "OnlineToday",
        components: {Theme},
        data() {
            return {
                myChart: null,
            }
        },
        computed: {
            option() {
                return {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        y: 'center',
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            selectedMode: 'single',
                            center: ['70%','50%'],
                            radius: [0, '85%'],
                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [
                                {value: 335, name: '直达'},
                                {value: 679, name: '营销广告'},
                                {value: 1548, name: '搜索引擎'}
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
    .first_chart {
        width: 100%;
        height: calc(25% - 1rem);
    }
</style>