<template>
        <div class="container">
            <img src="@/assets/img/bg1.jpg">
            <div class="image"><img src="@/assets/img/1.jpeg"></div>
            <div class="top">用数据改变未来</div>
        </div>
</template>

<script>


export default {
  name: 'Home',

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .container {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        background-position: center;
        background-attachment: fixed;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .top {
        background:  #ffffff2e;
        width: 100%;
        position: absolute;
        bottom: 0;
        line-height: 70px;
        left: 0px;
        right: 0px;
        color: #fff;
        text-align: center;
        font-size: 22px;
        font-weight: 600;
    }

    .image {
        width: 50%;
        height: 70%;
        text-align: center;
        padding: 70px 2%;
        border-radius: 2px;
        position: absolute;
        top: 13.5%;
        left: 25.3%;
    }
</style>
