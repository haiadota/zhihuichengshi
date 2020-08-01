<template>
    <div>
        <Theme :value="'应急预案'"></Theme>
        <div v-for="(plan,index) in plans" class="left-grid" :key="index">
            <div class="pic"></div>
            <div class="cover">制作中</div>
            <span class="title">{{plan.title}}</span>
            <span class="state">{{plan.state}}</span>
            <input type="button" value="查看详情" class="button">
        </div>
    </div>
</template>

<script>
    import Theme from '@/components/Theme.vue'

    export default {
        name: "Emergency",
        components: {Theme},
        data() {
            return {
                plans: [{title: '社区预案', state: '支队级 | 高层建筑'},
                    {title: '社区预案', state: '支队级 | 高层建筑'},
                    {title: '社区预案', state: '支队级 | 高层建筑'},
                    {title: '社区预案', state: '支队级 | 高层建筑'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .left-grid {
        width: 6.9rem;
        height: 2.8rem;
        background-color: rgba(23, 35, 42, 0.6);
        margin-bottom: 0.04rem;
        border-radius: 0.1rem;
    }

    .pic {
        width: 3rem;
        height: 2rem;
        top: 0.3rem;
        left: 0.2rem;
        position: relative;
        background-image: url(/image/monitor.jpg);
        background-size: 100%;
    }

    .cover {
        width: 3rem;
        height: 0.5rem;
        top: -0.2rem;
        left: 0.2rem;
        position: relative;
        background-color: rgba(19, 20, 21, 0.8);
        z-index: 11;
        line-height: 0.5rem;
        text-align: center;
        font-size: 0.3rem;
        color: #9afffd;
    }

    .title {
        top: -2rem;
        left: 3.9rem;
        position: relative;
        font-size: 0.3rem;
        color: #15ffff;
    }

    .state {
        top: -1.4rem;
        left: 2.7rem;
        position: relative;
        font-size: 0.3rem;
        color: #cecbca;
    }

    .button {
        top: -0.7rem;
        left: 1.6rem;
        position: relative;
        width: 1.4rem;
        height: 0.54rem;
        border-radius: 0.1rem;
        border: 0.35px #a6aaad solid;
        background-color: rgba(255, 255, 255, 0.05);
        font-size: 0.24rem;
        color: #fff;
    }
</style>