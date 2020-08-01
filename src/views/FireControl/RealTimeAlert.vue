<template>
    <div>
        <div v-for="(user,index) in users" class="left-grid" :key="index">
            <p class="name"> {{user.name}}</p>
            <p class="message">{{user.message}}</p>
            <p class="address">{{user.address}}</p>
            <div class="button">
                <button name="查看详情">查看详情</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RealTimeAlert',
        data() {
            return {
                users: [{name: '华天大酒店', message: '信息条数：2条', address: '地址：长春市净月区'},
                    {name: '华天大酒店', message: '信息条数：2条', address: '地址：长春市净月区'},
                    {name: '华天大酒店', message: '信息条数：2条', address: '地址：长春市净月区'},
                    {name: '华天大酒店', message: '信息条数：2条', address: '地址：长春市净月区'},
                    {name: '华天大酒店', message: '信息条数：2条', address: '地址：长春市净月区'},
                ]
            }
        }
    }
</script>

<style scoped>
    .left-grid {
        width: 6.9rem;
        height: 2.8rem;
        background-color: rgba(18, 24, 24, 0.5);
        margin-bottom: 0.04rem;
        border-radius: 0.1rem;
    }

    .name {
        color: #15ffff;
        font-size: 0.4rem;
        margin-left: 0.5rem;
        padding-top: 0.5rem;
    }

    .message {
        color: #cecbca;
        font-size: 0.3rem;
        margin-left: 0.5rem;
        padding-top: 0.45rem;
    }

    .address {
        color: #cecbca;
        font-size: 0.3rem;
        margin-left: 0.5rem;
        padding-top: 0.4rem;
    }

    button {
        width: 1.4rem;
        height: 0.5rem;
        background-color: rgba(18, 24, 24, 0.5);
        color: #cecbca;
        border: 0.015rem solid #a3a6a5;
        border-radius: 0.1rem;
        margin: -0.5rem 0 0 5.32rem;


    }

</style>