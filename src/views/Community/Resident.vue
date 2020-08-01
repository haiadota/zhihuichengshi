<template>
    <div class="container">
        <p>矛盾纠纷</p>
        <div class="row">
            <span class="num1">1.长春市万达小区案件通知</span><span class="num2 tip">未解决</span>
        </div>
        <div class="row">
            <span class="num1">2.长春市万达小区案件通知</span><span class="num2">已解决</span>
        </div>
        <div class="row">
            <span class="num1">3.长春市万达小区案件通知</span><span class="num2 tip">未解决</span>
        </div>
        <div class="row">
            <span class="num1">4.长春市万达小区案件通知</span><span class="num2">已解决</span>
        </div>
        <div class="row">
            <span class="num1">5.长春市万达小区案件通知</span><span class="num2 tip">未解决</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Resident"
    }
</script>

<style lang="scss" scoped>
    .container {
        height: 3rem;
    }

    p {
        text-align: center;
        font-size: 0.36rem;
        color: #15ffff;
    }

    span {
        font-size: 0.3rem;
        color: #15ffff;
    }

    .num2 {
        margin-left: 2rem;

    }

    .row {
        margin-top: 0.15rem;
    }

    .tip {
        color: #ffff00;
    }
</style>