<template>
    <div class="main">
        <div>
            <div class="fa fa-user-circle-o"><span> 总指挥</span></div>
            <div><span class="fa fa-phone"></span><span> 13856553600</span></div>
        </div>
        <div class="two">
            <div class="line"></div>
            <div class="transverse"></div>
            <div class="num1"></div>
            <div class="num2"></div>
            <div class="num3"></div>
            <div class="num4"></div>
        </div>
        <div class="row">
            <div class="clock" v-for="p in 4" :key="p">
                <div class="fa fa-user-circle-o"></div>
                <span class="conduct"> 总指挥</span>
                <span class="number">13856553600</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "DutyRoster"
    }
</script>

<style lang="scss" scoped>

    .fa {
        font-size: 0.4rem;
        margin: 0.1rem 0 0 2.1rem;
    }

    .fa-phone {
        margin-top: 0.1rem;
        color: white;
    }

    span {
        color: #00ffff;
    }

    .two {
        width: 6rem;
    }

    .line {
        width: 0.05rem;
        height: 0.5rem;
        background-color: #00ffff;
        margin: 0.2rem 0 0 3.4rem;
    }

    .transverse {
        width: 6rem;
        height: 0.05rem;
        background-color: #00ffff;
        margin: 0 0 0 0.4rem;
    }

    .num1 {
        width: 0.05rem;
        height: 0.5rem;
        background-color: #00ffff;
        margin: 0 0 0 0.4rem;
    }

    .num2 {
        width: 0.05rem;
        height: 0.5rem;
        background-color: #00ffff;
        margin: -0.5rem 0 0 2.5rem;
    }

    .num3 {
        width: 0.05rem;
        height: 0.5rem;
        background-color: #00ffff;
        margin: -0.5rem 0 0 4.4rem;
    }

    .num4 {
        width: 0.05rem;
        height: 0.5rem;
        background-color: #00ffff;
        margin: -0.5rem 0 0 6.35rem;
    }

    .clock {
        width: 2rem;
        height: 1rem;
        margin: 0 0.29rem 0 -0.3rem;
        display: inline-block;

        .fa {
            display: block;
            margin: 0.1rem 0 0 0.55rem;
        }

        .conduct {
            margin: 1rem 0 0 0.4rem;
        }
    }

    .row {
        height: 1rem;
        width: 8rem;
    }

</style>