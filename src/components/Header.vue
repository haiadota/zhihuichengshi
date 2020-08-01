<template>
    <div class="main event_all">
        <div class="title selectablefalse">
            <div class="text_area">
                <p class="zh">城市运行三维可视化管理平台</p>
                <p class="en">
                    <i>
                        <span class="big">T</span>HREE-DIMENSIONAL
                        <span class="big">V</span>ISUAL
                        <span class="big">M</span>ANAGEMENT
                        <span class="big">P</span>LATFORM
                        <span class="big">F</span>OR
                        <span class="big">U</span>RBAN
                        <span class="big">O</span>PERATION
                    </i>
                </p>
            </div>
        </div>
        <div class="line_between"></div>
        <div class="clock">
            <DateTime></DateTime>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import DateTime from "@/components/DateTime.vue";

    export default {
        name: "Header",
        components: {
            DateTime,
        },
        methods: {
            ...mapMutations(['widescreenShow'])
        }
    };
</script>
<style lang="scss" scoped>
    .main {
        height: $headerH;
        border-bottom: $headerB solid #242424;
        background-color: #080f10;
        background-image: url(/image/titleBg.png);
        background-size: 20% 70%;
        background-repeat: no-repeat;
        background-position: center center;
        display: flex;

        .title {
            width: 11rem;
            font-family: "RuiZi";
            text-align: center;

            .text_area {

                .zh {
                    color: #00ffff;
                    padding: 0.3rem 0 .1rem;
                    font-size: 0.66rem;
                    letter-spacing: 0.06rem;
                    text-shadow: 0 0 0.3rem #fff;
                }

                .en {
                    font-size: 0.12rem;
                    color: #04fffd;
                    transform: scale(.8);

                    .big {
                        font-size: 0.18rem;
                    }
                }
            }
        }

        .line_between {
            margin: 0.35rem 0 0 0.05rem;
            width: 0.04rem;
            height: 0.8rem;
            background: #00ffff;
        }

        .clock {
            width: 3.5rem;
            padding-left: 0.5rem;
        }
    }
</style>