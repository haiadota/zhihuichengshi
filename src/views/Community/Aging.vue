<template>
    <div class="container">
        <p>老龄人口实时统计</p>
        <div class="row1">
            <span class="left">社区</span>
            <span>人口</span>
            <span>60岁以上</span>
            <span>80岁以上</span>
        </div>
        <div class="row2">
            <span class="left">社给区</span>
            <span>110</span>
            <span>4422</span>
            <span>4441</span>
        </div>
        <p>本周新增老龄人口</p>
        <div class="row1 grid">
            <span class="left">项目</span>
            <span>项目</span>
            <span>通知到达</span>
            <span>完成率</span>
        </div>
        <div class="row2 grid2">
            <span class="left">社给区</span>
            <span>10</span>
            <span>422</span>
            <span>25%</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Aging"
    }
</script>

<style lang="scss" scoped>

    .container {
        height: 3.2rem;
    }

    p {
        font-size: 0.36rem;
        color: #15ffff;
        text-align: center;
    }

    .row1 {
        height: 0.48rem;
        background-color: rgba(42, 63, 67, 0.7);
        margin-top: 0.1rem;
        line-height: 0.48rem;
    }

    span {
        font-size: 0.3rem;
        color: #15ffff;
        margin-right: 0.88rem;
    }

    .left {
        margin-left: 0.2rem;
    }

    .row2 {
        margin-top: 0.01rem;

        span:nth-of-type(2) {
            margin-left: -0.2rem;
        }

        span:nth-of-type(4) {
            margin-left: 0.5rem;
        }
    }

    p:nth-of-type(2) {
        margin-top: 0.3rem;
    }

    .grid {
        span {
            margin-right: 1.05rem;
        }
    }

    .grid2 {
        span {
            margin-right: 1.15rem;
        }
    }
</style>