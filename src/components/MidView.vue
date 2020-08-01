<template>
    <div :class="['mid_view',{'event_all':flag}]" @mouseenter="widescreenHide"></div>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "MidView",
        computed: {
            flag() {
                return this.$store.state.widescreenFlag
            }
        },
        methods: {
            ...mapMutations(['widescreenHide'])
        }
    }
</script>

<style scoped>

</style>