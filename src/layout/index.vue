<template>
    <div class="layout">
        <Header/>
        <router-view></router-view>
    </div>
</template>
<script>
import Header from "@/components/Header.vue";

export  default {
    name: 'index',
    components:{
        Header
    },
    data(){
        return {

        }
    },
}
</script>
<style lang="less" scoped>

</style>
