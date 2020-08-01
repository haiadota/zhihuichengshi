<template>
    <div>
        <Theme :value="'最新事件'"></Theme>
        <div class="border">
            <div class="image-border image-border1"></div>
            <div class="image-border image-border2"></div>
            <div class="image-border image-border3"></div>
            <div class="image-border image-border4"></div>
            <div class="left-block">处理</div>
            <div class="right-block">未处理</div>
        </div>
        <div class="left-grid num1">
            <p class="name"> 长春爆炸事件</p>
            <p class="describe">事件描述</p>
            <p class="time">2019-12-18 11:25:01</p>
            <div class="box_imp"><span>特别重大</span></div>
        </div>
        <div class="left-grid">
            <p class="name"> 长春爆炸事件</p>
            <p class="describe">事件描述</p>
            <p class="time">2019-12-18 11:25:01</p>
            <div class="box1"><span>一般</span></div>
        </div>
        <div class="left-grid">
            <p class="name"> 长春爆炸事件</p>
            <p class="describe">事件描述</p>
            <p class="time">2019-12-18 11:25:01</p>
            <div class="box1"><span>一般</span></div>
        </div>
        <div class="left-grid">
            <p class="name"> 长春爆炸事件</p>
            <p class="describe">事件描述</p>
            <p class="time">2019-12-18 11:25:01</p>
            <div class="box1"><span>一般</span></div>
        </div>
        <div class="left-grid">
            <p class="name"> 长春爆炸事件</p>
            <p class="describe">事件描述</p>
            <p class="time">2019-12-18 11:25:01</p>
            <div class="box1"><span>一般</span></div>
        </div>
        <div class="left-grid">
            <p class="name"> 长春爆炸事件</p>
            <p class="describe">事件描述</p>
            <p class="time">2019-12-18 11:25:01</p>
            <div class="box1"><span>一般</span></div>
        </div>

    </div>
</template>
<div>
    <Theme :value="'最新事件'"></Theme>
</div>
<script>

    import Theme from '@/components/Theme.vue'

    export default {
        name: "NewEvent",
        components: {
            Theme
        }
    }
</script>

<style lang="scss" scoped>

    .image-border {
        position: relative;
        width: 0.3rem;
        height: 0.5rem;
        display: inline-block;

    }

    .image-border1 {
        left: 0.1rem;
        border-left: 0.05rem solid #006ee9;
        border-top: 0.05rem solid #006ee9;
    }

    .image-border2 {
        left: 6.15rem;
        border-right: 0.05rem solid #006ee9;
        border-top: 0.05rem solid #006ee9;
    }

    .image-border3 {
        top: 0.5rem;
        left: -0.6rem;
        border-bottom: 0.05rem solid #006ee9;
        border-left: 0.05rem solid #006ee9;
    }

    .image-border4 {
        top: 0.5rem;
        left: 5.45rem;
        border-right: 0.05rem solid #006ee9;
        border-bottom: 0.05rem solid #006ee9;
    }

    .left-block {
        background-color: rgba(0, 110, 233, 0.3);
        width: 2.41rem;
        height: 0.74rem;
        left: 0.29rem;
        top: -0.45rem;
        position: relative;
        text-align: center;
        line-height: 0.72rem;
        border-radius: 0.05rem;
        color: #0899ff;
        font-size: 0.36rem;
        border: 0.02rem #006ee9 solid;
    }

    .right-block {
        background-color: rgba(0, 255, 199, 0.3);
        width: 3.8rem;
        height: 0.74rem;
        left: 2.85rem;
        top: -1.225rem;
        position: relative;
        text-align: center;
        line-height: 0.72rem;
        border-radius: 0.05rem;
        color: #16f1f1;
        font-size: 0.36rem;
        border: 0.02rem #00ffc7 solid;
    }

    .left-grid {
        width: 6.9rem;
        height: 2.3rem;
        background-color: rgba(23, 88, 148, 0.15);
        top: -0.7rem;
        position: relative;
        margin-bottom: 0.1rem;
        border-radius: 0.1rem;
    }

    .num1 {
        background-color: rgba(255, 152, 0, 0.15);

        .name {
            color: #ff9800;
        }

        .describe {
            color: #ff9800;
        }

        .time {
            color: #ff9800;
        }
    }

    .name {
        color: #15ffff;
        font-size: 0.4rem;
        margin-left: 0.5rem;
        padding-top: 0.25rem;
    }

    .describe {
        color: #15ffff;
        font-size: 0.4rem;
        margin-left: 0.5rem;
        padding-top: 0.25rem;
    }

    .time {
        color: #15ffff;
        font-size: 0.4rem;
        margin-left: 0.5rem;
        padding-top: 0.25rem;
    }

    .box_imp {
        width: 2.1rem;
        height: 0.6rem;
        background-image: url(/image/red_tag.png);
        top: -2rem;
        left: 4.8rem;
        position: relative;
        font-size: 0.36rem;
        line-height: 0.6rem;

        span {
            margin-left: 0.5rem;
            color: #ff9800;
        }
    }

    .box1 {
        width: 2.1rem;
        height: 0.6rem;
        background-image: url(/image/blue_tag.png);
        top: -2rem;
        left: 4.8rem;
        position: relative;
        font-size: 0.36rem;
        line-height: 0.6rem;

        span {
            margin-left: 0.8rem;
        }
    }
</style>