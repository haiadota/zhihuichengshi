<template>
    <div>
        <Theme :value="'综合事件'"></Theme>
        <div class="row1">
            <span>所属区域</span>
            <span>事件</span>
            <span>数量</span>
        </div>
        <div class="row2" v-for="(p,index) in 8" :key="index">
            <span>长春市高新区</span>
            <span>占道经营</span>
            <span>02</span>
            <!--<div class="border"></div>-->
        </div>
    </div>
</template>

<script>
    import Theme from '@/components/Theme.vue'

    export default {
        name: "Event",
        components: {Theme},
    }
</script>

<style lang="scss" scoped>
    .row1 {
        span {
            font-size: 0.32rem;
            color: #15ffff;
            width: 1.5rem;
            height: 0.32rem;
            display: inline-block;
            text-align: center;
            margin-right: 0.3rem;
            margin-left: 0.5rem;
            background: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(3, 245, 255, 0.3), rgba(255, 0, 0, 0));
        }

        span:nth-of-type(1) {
            margin-left: 0.5rem !important;
        }
    }

    .row2 {
        height: 0.5rem;
        margin: 0.5rem 0;
        border-bottom: 0.04rem solid transparent;
        /*border-image: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(3, 245, 255, 1));*/
        /*border-image: -webkit-linear-gradient(#F80, #2ED) 20 20;*/
        /*border-image: -moz-linear-gradient(#F80, #2ED) 20 20;*/
        /*border-image: -o-linear-gradient(#F80, #2ED) 20 20;*/
        border-image: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(3, 245, 255, 1)) 10 10;

        span {
            font-size: 0.3rem;
            color: #1dfff5;
            margin: 0 0.4rem;
        }

        span:nth-of-type(2) {
            margin-left: 0.6rem;
        }

        span:nth-of-type(3) {
            margin-left: 1rem;
        }
    }


</style>