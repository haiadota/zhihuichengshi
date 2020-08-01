<template>
    <div :class="['left_view selectablefalse',{ 'hide_inner': flag }]" @mouseenter="widescreenShow">
        <div class="white_bar"></div>
        <div :class="['content',{'left-hide': flag}]">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "LeftView",
        computed: {
            flag() {
                return !this.$store.state.widescreenFlag
            }
        },
        methods: {
            ...mapMutations(['widescreenShow'])
        }
    }
</script>

<style lang="scss" scoped>
    .hide_inner {
        width: 1.7rem;
    }

    .content {
        width: 6.97rem;
        height: 100%;
        transition: all 1.2s ease;
    }

    .left-hide {
        transition: all 1s ease;
        transform: translateX(-8.15rem);
    }
</style>