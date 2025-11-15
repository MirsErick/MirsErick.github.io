<template>
    <div class="header" :style="{background: `url(@/assets/cat.jpg) left top / cover no-repeat` }">
        <router-link v-for="item in nav" :to="item.path" :key="item.path">{{ item.title }}</router-link>
    </div>
</template>
<script>
export default {
    name: "Header",
    data(){
        return {
            nav:[
                { title: '首页', path: '/home'},
                { title: '关于', path: '/about'},
            ]
        }
    },
    mounted() {
        // console.log('@',this.$router)
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
.header{
    padding: 5px;
    text-align: right;
    background: #4F5DA2; // 5201314
    line-height: 50px;
  a{
      text-decoration: none;
      color: #fff;
      font-family: '楷体_GB2312';
      font-weight: 600;
      margin-left: 10px;
  }
}
</style>
