<template>
    <div>
        <Theme :value="'警力分布'"></Theme>
        <div class="row1">
            <input placeholder="请输入内容">
            <div class="find"></div>
        </div>
        <div class="box">
            <Theme :value="'警力分布'"></Theme>
            <ComPolice title="事发车辆" :arr="arr1" :flag="flag" num="1" idPrefix="ptdw" @handleShow="handleShowList">
            </ComPolice>
            <ComPolice title="在线人员" :arr="arr2" :flag="flag" num="2" idPrefix="zddw" @handleShow="handleShowList">
            </ComPolice>

        </div>
    </div>
</template>

<script>
    import Theme from '@/components/Theme.vue'
    import ComPolice from '../ComPolice.vue'

    export default {
        name: "Police",
        components: {Theme, ComPolice},
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
    .row1 input {
        width: 5.4rem;
        height: 0.65rem;
        background-color: rgba(0, 0, 0, 0);
        border: 0.01rem solid #25b7b9;
        text-indent: .7rem;         //改变搜索框内文字距离
    }

    input::-webkit-input-placeholder { //改变搜索框内里文字样式
        color: #63908f;
        font-size: 0.3rem;
    }

    .find {
        height: 0.4rem;
        width: 0.55rem;
        background: url(/image/find.png) no-repeat;
        background-size: 83% 100%;
        top: -0.54rem;
        left: 0.1rem;
        position: relative;
    }



    .event {
        height: 0.7rem;
        border-bottom: 0.005rem solid #259c9f;

        span {
            font-size: 0.36rem;
            color: #15ffff;
            top: -0.1rem;
            position: relative;
        }

        .fa-angle-down {
            font-size: 0.5rem;
            color: #15ffff;
            top: -0.1rem;
            position: relative;
            margin-left: 4rem;
        }
    }

    .grid {
        margin: 0.26rem 0 0 0.1rem;
    }

    .car-num {
        color: #15ffff;
        font-size: 0.36rem;
    }

    .person {
        height: 0.7rem;
        margin-top: 0.5rem;
        border-bottom: 0.005rem solid #259c9f;

        span {
            font-size: 0.36rem;
            color: #15ffff;
            top: -0.1rem;
            position: relative;
        }

        .fa-angle-right {
            font-size: 0.5rem;
            color: #15ffff;
            top: -0.1rem;
            position: relative;
            margin-left: 4rem;
        }
    }
</style>