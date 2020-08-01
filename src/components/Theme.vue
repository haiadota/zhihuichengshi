<template>
    <div class="main">
        <p class="tex selectablefalse">{{value}}</p>
        <div class="three_line">
            <div class="left_line"></div>
            <div class="under_line"></div>
            <div class="right_line"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Theme",
        props: ['value']
    }
</script>

<style lang="scss" scoped>
    .main {
        width: 100%;
        height: 1rem;

        .tex {
            font-size: .36rem;
        }

        .three_line {
            height: 0.5rem;
            display: flex;
            align-items: center;
            position: relative;

            .left_line {
                width: .5rem;
                height: .06rem;
                background: #00ffff;
            }

            .under_line {
                flex: 1;
                height: 0.021rem;
                background: rgba(0, 255, 255, 0.6);
                box-shadow: 0 0 0.6rem 0.12rem rgba(255, 255, 255, 0.2);
            }

            .right_line {
                width: .22rem;
                height: .03rem;
                position: absolute;
                right: 0;
                top: 0.19rem;
                background: #00ffff;
            }
        }
    }

    .tex {
        color: #9afffd;
    }
</style>