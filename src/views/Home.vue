<template>
    <div class="home">
    <Slider/>
    </div>
</template>
<script>
import Slider from "@/components/Slider.vue";
 export  default {
     name: 'Home',
     components:{
         Slider
     },
     data(){
         return {

         }
     },
 }
</script>
<style lang="less" scoped>
.home{

}
</style>
