<template>
    <div class="box">
        <Theme :value="'物联监测'"></Theme>
        <ComboBox title="普通单位" :arr="arr1" :flag="flag" num="1" idPrefix="ptdw" @handleShow="handleShowList">
        </ComboBox>
        <ComboBox title="重点单位" :arr="arr2" :flag="flag" num="2" idPrefix="zddw" @handleShow="handleShowList">
        </ComboBox>
        <ComboBox title="普通建筑" :arr="arr3" :flag="flag" num="3" idPrefix="ptjz" @handleShow="handleShowList">
        </ComboBox>
        <ComboBox title="重点建筑" :arr="arr4" :flag="flag" num="4" idPrefix="zdjz" @handleShow="handleShowList">
        </ComboBox>
    </div>
</template>

<script>
    import Theme from '@/components/Theme.vue'
    import ComboBox from '@/components/ComboBox.vue'

    export default {
        name: "BuildingMonitor",
        components: {Theme, ComboBox},
        data() {
            return {
                flag: '0',
                arr1: ['', '', '', '', '', ''],
                arr2: ['', '', '', '', '', '', ''],
                arr3: ['', '', '', '', ''],
                arr4: ['', '', '', '', '', ''],
                checked1: [],
                checked2: [],
                checked3: [],
                checked4: [],
            }
        },
        methods: {
            handleShowList(value) {
                this.flag = this.flag == value ? '0' : value
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>