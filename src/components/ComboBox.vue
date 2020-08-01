<template>
    <div>
        <div class="title">
            <span>{{title}}</span>
            <span :class="['fa arrow',current?'fa-angle-down':'fa-angle-right']" @click="handleShow(num)"></span>
        </div>
        <ul class="list" :style="{height:(current?arr.length*0.8+'rem':'0')}">
            <li v-for="(p,n) in arr" class="cell" :key="idPrefix+n">
                <input type="checkbox" :id="idPrefix+n" :value="n" v-model="checkedArr" class="check">
                <label :for="idPrefix+n" class="text">高层建筑</label>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ComboBox",
        props: {
            title: String,
            arr: Array,
            flag: String,
            num: String,
            idPrefix: String,
        },
        computed: {
            current() {
                return this.flag == this.num
            }
        },
        data() {
            return {
                checkedArr: []
            }
        },
        methods: {
            handleShow(num) {
                this.$emit('handleShow', num)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        width: 100%;
        height: .8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .3rem;

        .arrow {
            width: .3rem;
            text-align: right;
            font-size: .5rem;
            cursor: pointer;
        }
    }

    .list {
        overflow: hidden;
        border-bottom: 0.02rem solid #00ffff;
        transition: all 0.5s ease;

        .cell {
            line-height: .8rem;

            .check {
                width: .4rem;
                height: .4rem;
            }

            .text {
                color: #15ffff;
                font-size: .3rem;
                padding-left: .4rem;
                cursor: pointer;
            }
        }
    }
</style>