<template>
    <div ref="main" class="main"></div>
</template>

<script>
    export default {
        name: "NewDistrict",
        computed: {
            option() {
                return {
                    tooltip: {},
                    radar: {
                        name: {textStyle: {color: '#3fabad',padding:[-10,-10]}},
                        splitArea: {show: false},
                        radius: '70%',
                        indicator: [
                            {name: '0.1', max: 3500},
                            {name: '0.1', max: 1600},
                            {name: '0.1', max: 3000},
                            {name: '0.1', max: 3800},
                            {name: '0.1', max: 3200},
                            {name: '0.1', max: 2500},
                            {name: '0.1', max: 3200},
                            {name: '0.1', max: 2500}
                        ]
                    },
                    series: [{
                        name: '民生民情',
                        type: 'radar',
                        itemStyle: {opacity: 0},
                        areaStyle: {color: 'rgba(79,178,177,0.5)'},
                        lineStyle: {color: '#86d9e0'},
                        data: [{value: [2000, 1200, 2400, 2100, 2200, 1600, 1800, 2100],}]
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
    .main {
        height: 100%;
        width: 100%;
    }
</style>