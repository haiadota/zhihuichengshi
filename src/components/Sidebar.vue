<template>
    <div class="sidebar" @mouseenter="widescreenShow">
        <div class="colours_bg"></div>
        <div class="btn_group">
            <div v-for="(item,index) in sidebarList" :key="index" class="butt" @click="handleClick(item.name,index)">
                <transition name="scale">
                    <div v-if="index == currentIndex" class="active" key="active">
                        <div class="first_circle">
                            <div class="second_circle">
                                <div>
                                    <i :class="['icon_size','iconfont',item.icon]"></i>
                                    <p class="btn_text selectablefalse">{{item.text}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="inactive" key="inactive">
                        <div class="first_circle">
                            <div class="second_circle">
                                <div class="third_circle"></div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "Sidebar",
        props: {sidebarList: Array},
        data() {
            return {
                currentIndex: 0,
            }
        },
        created() {
            if(this.sidebarList) {
                let value = document.location.hash.split('/')[2]
                if(value) {
                    for (let i = 0; i < this.sidebarList.length; i++) {
                        if (value == this.sidebarList[i].name) {
                            this.currentIndex = i
                        }
                    }
                }
            }
        },
        methods: {
            ...mapMutations(['widescreenShow']),
            handleClick(name, index) {
                this.currentIndex = index
                this.$router.push({name: name})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        z-index: 1;
        position: absolute;
        top: 10%;
        left: 0;
        width: 1.4rem;
        transform: translateX(-50%);

        .colours_bg {
            opacity: 0.8;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-0.05rem);
            width: 0.08rem;
            height: 100%;
            background: linear-gradient(#066fc7, #116fc5, #009dda, #009dda, #0dd0d8, #0dd0d8, #16cf9c, #0acf9a);
        }

        .btn_group {
            width: 100%;

            .butt {
                width: 1.35rem;
                height: 1.35rem;
                position: relative;

                .active {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255, 255, 255, 0.25);
                    box-shadow: 0 0 1.3rem 0.3rem rgba(255, 255, 255, 0.35);

                    .first_circle {
                        width: 70%;
                        height: 70%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.15);
                    }

                    .second_circle {
                        width: 80%;
                        height: 80%;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.3);
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .icon_size {
                            font-size: .5rem;
                            color: #32349a;
                        }

                        .btn_text {
                            font-family: 'RuiZi';
                            font-size: .28rem;
                            color: #fffefd;
                            white-space: nowrap;
                            position: absolute;
                            left: -5px;
                            top: 50%;
                            transform: translate(-100%, -50%);
                        }
                    }
                }

                .inactive {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .first_circle {
                        width: 0.5rem;
                        height: 0.5rem;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.25);
                        box-shadow: 0 0 0.5rem 0.2rem rgba(255, 255, 255, 0.2);
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .second_circle {
                        width: 70%;
                        height: 70%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.15);
                    }

                    .third_circle {
                        width: 70%;
                        height: 70%;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.25);
                        position: relative;
                    }
                }
            }
        }
    }

    .scale-enter-active {
        animation: scale-in .5s;
    }

    .scale-leave-active {
        animation: scale-in .5s reverse;
    }

    @keyframes scale-in {
        from {
            transform: scale(0);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
</style>