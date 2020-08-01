<template>
    <div class="picture">
        <div class="row row1">
            <div class="grid" v-for="(p,index) in 3" :key="index">

            </div>
        </div>
        <div class="row row2">
            <div class="grid" v-for="(p,index) in 3" :key="index">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Video"
    }
</script>

<style lang="scss" scoped>
    .picture {
        height: 4rem;
    }

    .row {
        width: 7rem;
        height: 1.64rem;
    }

    .row2 {
        margin-top: 0.05rem;

    }

    .grid {
        width: 2.3rem;
        height: 1.6rem;
        margin-right: 0.02rem;
        display: inline-block;
        background-image: url(/image/monitor.jpg);
        background-size: 100%;
    }
</style>