<template>
    <div id="wrapper">
        <input type="submit" id="button1" value="提交" />
    </div>
</template>

<script>
    export default{
        name : 'Buttom'
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>

    #wrapper {
        padding:20px 0;
        width:600px;
        margin:0 auto;
    }

    input {
        margin:0 auto;
        display:block;
    }
    input#button1 {
        /* General Propertoes */
        height:35px;
        width:200px;
        border:1px solid #858fa6;
        background:#4a5775;
        /* CSS3 Styling */
        background:-moz-linear-gradient(top, #606c88, #3f4c6b);
        background:-webkit-gradient(linear, left top, left bottom, from(#606c88), to(#3f4c6b));
        -moz-border-radius:5px;
        -webkit-border-radius:5px;
        border-radius:5px;
        -moz-box-shadow:0px 0px 5px #000;
        -webkit-box-shadow:0px 0px 5px #000;
        box-shadow:0px 0px 5px #000;
        font-family:'AirstreamRegular', Georgia, 'Times New Roman', serif;
        color:#e5edff;
        text-shadow:0px 0px 5px rgba(0, 0, 0, 0.75);
        font-size:30px;
    }
    input#button1:hover, input#button1:focus {
        border-color:#adbad9;
    }

    input#button1:active {
        background:-moz-linear-gradient(bottom, #606c88, #3f4c6b);
        background:-webkit-gradient(linear, left bottom, left top, from(#606c88), to(#3f4c6b));
        text-shadow:0px 0px 2px #000;
    }

</style>
