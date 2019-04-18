<template>
    <div class="date">
    <img src="./1.jpg" width="550" height="330">
        <div class="float-right">
            <div class="table ">
                <div class="table-header">
                    <div class="table-title">result</div>
                </div>
                <div class="table-content-holder">
                    <ul>
                        <li>score:0.9</li>
                        <li>label:view</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name :'Date'
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>


img{
    float: left;
    padding: 10px 10px 15px 10px;
    background: #bbc0ce;
    border: 1px solid #040404;
    position: absolute;
    z-index: 1;
    margin-left: 10%;
    margin-top: 50px;
}

.float-right{
    height: 400px;
    margin-left: 600px;
    position: relative;
}

.table{
    position: absolute;
    text-align: center;
    border-radius: 15px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0px 0px 10px 3px #ede9f3;
    top: 20%;
    left: 35%;
}


.table-header{
    height: 80px;
    width: 280px;
    position: relative;
    background-color: #bbc0ce;
}
.table-title{
    position: absolute;
    width: 60px;
    height: 20px;
    top:50%;
    left: 50%;
    margin-top:-10px;
    margin-left:-30px;
    font-size:25px;
}
.table-content-holder{
    padding: 0 10%;
    margin-bottom: 40px;
}
.table ul
{
    padding: 0;
    list-style: none;
    margin-top: 25px;
}
.table ul li
{
    border-bottom: 2px solid #ede9f3;
    padding: 12px 0;
    font-weight: 500;
}

</style>

