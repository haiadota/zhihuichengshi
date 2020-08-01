<template>
    <div id="app">
        <transition name="light-fade" mode="out-in">
            <div v-if="flag" class="light_circle" key="light_circle"></div>
            <div v-else class="light_ellipse" key="light_ellipse"></div>
        </transition>
        <!--<div :class="flag?'light_ellipse':'light_circle'"></div>-->
        <div class="container">
            <Header></Header>
            <div class="chart_view">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Footer from './components/Footer'

    export default {
        name: "app",
        components: {
            Header,
            Footer
        },
        computed: {
            flag() {
                return this.$store.state.widescreenFlag
            }
        },
        methods: {}
    };
</script>

<style lang="scss" scoped>
    #app {
        font-family: 'RuiZi';
        font-size: 0.16rem;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .light_circle {
        width: 100%;
        height: 100%;
        background: radial-gradient(
                        circle at 50% 42%,
                        rgba(0, 0, 0, 0),
                        rgba(8, 15, 16, 0.2) 20%,
                        rgba(8, 15, 16, 0.49) 39%,
                        rgba(8, 15, 16, 0.52) 43%,
                        rgba(8, 15, 16, 0.6) 47%,
                        rgba(8, 15, 16, 0.6) 50%,
                        rgba(8, 15, 16, 0.5)
        );
    }

    .light_ellipse {
        width: 100%;
        height: 100%;
        background: radial-gradient(
                        ellipse 48% 80% at 38% 33%,
                        rgba(0, 0, 0, 0),
                        rgba(8, 15, 16, 0.43) 70%,
                        rgba(8, 15, 16, 0.55) 80%,
                        rgba(8, 15, 16, 0.55) 89%,
                        rgba(8, 15, 16, 0.5)
        );
    }

    .container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .chart_view {
            width: 100%;
            position: absolute;
            top: $headerH + $headerB;
            bottom: 0;
        }
    }

    .light-fade-enter {
        opacity: 0.9;
    }

    .light-fade-leave {
        opacity: 1;
    }

    .light-fade-enter-active {
        transition: opacity 0.4s;
    }

    .light-fade-leave-active {
        opacity: 0.9;
        transition: opacity 0.4s;
    }
</style>