<template>
    <div class="date">
    <img src="http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1312/01/c4/29178578_1385863150056.jpg" width="550" height="330">
    <article>
        <header style="text-align: center"><h1>结果</h1></header>
        <br>
        <section>
            <h2 style="text-align: center">score:0.9</h2>
        </section>
        <br>
        <section>
            <h2 style="text-align: center">label:view</h2>
        </section>
    </article>
    </div>
</template>

<script>
    export default{
        name :'Date'
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.date{
    padding: 20px 90px;
}
img{
    float: left;
    padding: 10px 10px 15px 10px;
    background: #bbc0ce;
    border: 1px solid #040404;
    position: absolute;
    -webkit-transition: 1s;
    -moz-transition: 1s;
    transition: 1s;
    z-index: 1;
}

article{
        float: right;
        padding: 10px 10px 15px 10px;
        background: #eceef5;
        border: 1px solid #040404;
        width: 200px;
        height: 330px;
        border-radius: 10%;

}

</style>