<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
// import talkBot from "@/views/talkBot.vue";
// import { mobileType } from '@/utils'

export default {
    components: {
        // talkBot,
    },
    data() {
        return {
            query: '',
        }
    },
    mounted(){
        document.addEventListener('resize',() =>{
            const curHeight = window.innerHeight;
            console.log('curHeight',curHeight)
        })
    }
}
</script>

<style lang="less" scoped>
#app{
    text-align: center;
}
</style>
