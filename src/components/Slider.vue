<!-- App.vue -->
<template>
    <div class="slider">
        <div v-pop-in="{ distance: 100, duration: 500 }"
             v-for="(item, index) in 10"
             :key="index"
             :class="`item b${index+1}`">
<!--            <img :src="item.url" alt="">-->
            <h3 class="title">
                slider {{ index }}
            </h3>
        </div>
    </div>
</template>

<script>
const commonUrl = 'https://haowallpaper.com/link/common/file/previewFileImg/'
export default {
    name: 'App',
    data(){
        return {
            // list:[
            //     {name: '1', url: commonUrl+'17202184441482624'},
            //     {name: '2', url: commonUrl+'15714184947994944'},
            //     {name: '3', url: commonUrl+'15714186831368512'},
            //     {name: '4', url: commonUrl+'15975185231629696'},
            //     {name: '5', url: commonUrl+'15774843827097920'},
            //     {name: '6', url: commonUrl+'15774846679683392'},
            // ]
        }
    }
};
</script>

<style lang="less" scoped>
.slider{
    margin: 1em auto;
    width: 80%;
}
@keyframes typing{
    from{
        clip-path: inset(0 100% 0 0);
    }
    to{
        clip-path: inset(0 0 0 0);
    }
}
.item{
    width: 100%;
    aspect-ratio: 2/1;
    margin: 5vw 0;
    border-radius: 5px;
    box-shadow:  0 0 10px rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10vw;
    color: #fff;
    .title{
        animation: typing 1s ease-in-out;
    }
    img{
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
    }
}

.item.b1{
    background-color: red;
}
.item.b2{
    background-color: greenyellow;
}
.item.b3{
    background-color: orange;
}
.item.b4{
    background-color: skyblue;
}
.item.b5{
    background-color: yellow;
}
.item.b6{
    background-color: pink;
}
.item.b7{
    background-color: lemonchiffon;
}
.item.b8{
    background-color: palevioletred;
}
.item.b9{
    background-color: seagreen;
}
.item.b10{
    background-color: rebeccapurple;
}
</style>
