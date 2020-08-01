<template>
    <div class="sun">
        <div class="row">
            <span>面积</span>
            <div class="Container Container1">
                <div class="progress1"></div>
            </div>
        </div>
        <div class="row">
            <span>面积</span>
            <div class="Container">
                <div class="progress2"></div>
            </div>
        </div>
        <div class="row">
            <span>面积</span>
            <div class="Container">
                <div class="progress3"></div>
            </div>
        </div>
        <div class="row">
            <span>面积</span>
            <div class="Container">
                <div class="progress4"></div>
            </div>
        </div>
        <div class="row">
            <span>外来</span>
            <div class="Container">
                <div class="progress5"></div>
            </div>
        </div>
        <div class="complaint" v-for="(n,index) in 5" :key="index">
            <div class="fa fa-envelope-o"><span class="text"> &nbsp;投诉<span class="number"> 2 </span>件</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SunShine"
    }
</script>

<style lang="scss" scoped>

    .sun {
        width: 7rem;
        height: 3.6rem;
    }

    .row {
        width: 6.9rem;
        height: 0.2rem;
        margin-bottom: 0.15rem;
    }

    .Container {
        height: 0.15rem;
        width: 80%;
        background-color: rgba(42, 63, 67, 0.7);;
        margin: -0.2rem 0 1rem 1rem;
    }

    .progress1 {
        background-color: #00ffff;
        height: 0.15rem;
        width: 10%;
    }

    b {
        color: #fff;
        font-weight: 100;
        font-size: 12px;
        position: absolute;
        left: 40%;
    }

    span {
        font-size: 0.3rem;
        color: #15ffff;
    }

    .progress2 {
        background-color: #00ffff;
        height: 0.15rem;
        width: 15%;
    }

    .progress3 {
        background-color: #00ffff;
        height: 0.15rem;
        width: 30%;
    }

    .progress4 {
        background-color: #00ffff;
        height: 0.15rem;
        width: 70%;
    }

    .progress5 {
        background-color: #00ffff;
        height: 0.15rem;
        width: 90%;
    }

    .fa-envelope-o {
        color: #15ffff;
        font-size: 0.35rem;
    }

    .text {
        font-size: 0.3rem !important;
    }

    .number {
        color: #9aff30;
    }

    .complaint {
        display: inline-block;
        margin: 0.15rem 0.5rem 0 0.8rem;

        span {
            font-size: 0.4rem;
        }
    }
</style>