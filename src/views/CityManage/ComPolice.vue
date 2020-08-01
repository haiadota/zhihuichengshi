<template>
    <div>
        <div class="title">
            <span class="car"></span>
            <span class="middle">{{title}}</span>
            <span :class="['fa arrow',current?'fa-angle-down':'fa-angle-right']" @click="handleShow(num)"></span>
        </div>
        <ul class="list" :style="{height:(current?arr.length*0.8+'rem':'0')}">
            <li v-for="(p,n) in arr" class="cell" :key="idPrefix+n">
                <input type="checkbox" :id="idPrefix+n" :value="n" v-model="checkedArr" class="check">
                <span class="car-pic"></span>
                <label :for="idPrefix+n" class="text">吉AE383Q</label>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ComPolice",
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
        .middle{
            flex: 1;
        }

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

    .car-pic {
        background: url(/image/car.png) no-repeat;
        display: inline-block;
        height: 0.5rem;
        width: 0.65rem;
        background-size: 83% 100%;
        top: 0.15rem;
        left: 0.1rem;
        position: relative;
    }

    .car {
        height: 0.5rem;
        width: 0.65rem;
        background: url(/image/folder.png) no-repeat;
        background-size: 83% 100%;
        display: inline-block;
    }
</style>