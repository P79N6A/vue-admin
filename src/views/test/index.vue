<template>
    <div class="main" :style ="note">
        <!--页面头部-->
        <header><img src="@/assets/img/2.png"></header>
        <!--输入框部分-->
        <form class="content">
			<span class="input input--isao">
					<input class="input__field input__field--isao" type="text" id="input-38" name ="title" v-model="title"/>
					<label class="input__label input__label--isao" for="input-38" data-content="title" >
						<span class="input__label-content input__label-content--isao">title</span>
					</label>
			</span>
            <span class="input input--isao">
					<input class="input__field input__field--isao" type="text" id="input-39" name = 'url' v-model="url"/>
					<label class="input__label input__label--isao" for="input-39" data-content="url" >
						<span class="input__label-content input__label-content--isao">url</span>
					</label>
            </span>
            <input type="submit" id="button1" value="提交" @click="submitForm"/>
        </form>

        <!--结果显示部分-->
        <div style="display:flex; " v-show="value">
            <div class="left">
                <img src = "@/assets/img/1.jpg" class="img1">
            </div>
            <div class="middle">
                <img src="@/assets/img/arrow.png" width="200" height="50" class="img2">
            </div>
            <div class="right">
                <div class="table">
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
   </div>
</template>

<script src="https://cdn.bootcss.com/sweetalert/1.1.3/sweetalert.min.js"></script>
<script>

    export default{
        data(){
            return{
                title: '',
                url: '',
                note:{
                    //添加背景图片
                    backgroundImage: "url(" + require("@/assets/img/bg2.jpg") + ") ",
                },
                //value控制结果显示
                value:false

            }
        },
        methods:{
            //输入标题警告框
            showAlerttitle(){
                this.$swal('请输入标题!');
            },
            //输入url警告框
            showAlerturl(){
                this.$swal('请输入url!');
            },
            submitForm(e){
                var title = this.title;
                var url = this.url;

                console.log(title);
                console.log(url);

                // 阻止页面刷新,取消默认行为
                e.preventDefault();

                //验证表单数据是否为空
                if(!title){
                    this.showAlerttitle();
                    return false;
                }

                if(!url){
                    this.showAlerturl();
                    return false;
                }



                //点击提交按钮之后，显示结果
                this.value = true;

                //点击提交按钮之后，清空输入框数据
                this.title = " ";
                this.url = " ";
            }
        }
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.main{
    width: 100%;
    height: 100%;
    position: absolute;
    overflow:auto;
}
header{
    width: 100%;
    height: 40px;
}
.content {
    font-size: 150%;
    padding: 1.5em 0;
    text-align: center;
}
.input {
    position: relative;
    z-index: 1;
    display: inline-block;
    margin: 1em;
    max-width: 370px;
    width: calc(100% - 2em);
    vertical-align: top;
}

.input__field {
    position: relative;
    display: block;
    float: right;
    padding: 0.8em;
    width: 60%;
    border: none;
    border-radius: 0;
    background: #f0f0f0;
    color: #aaa;
    font-weight: bold;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-appearance: none; /* for box shadows to show on iOS */
}

.input__field:focus {
    outline: none;
}

.input__label {
    display: inline-block;
    float: right;
    padding: 0 1em;
    width: 40%;
    color: #6a7989;
    font-weight: bold;
    font-size: 70.25%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.input__label-content {
    position: relative;
    display: block;
    padding: 1.6em 0;
    width: 100%;
}

.input__field--isao {
    z-index: 10;
    padding: 0.75em 0.1em 0.25em;
    width: 100%;
    background: transparent;
    color: #dadada;
}

.input__label--isao {
    position: relative;
    overflow: hidden;
    padding: 0;
    width: 100%;
    color: #dadada;
    text-align: left;
    font-size: 25px;
}

.input__label--isao::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 7px;
    background: #dadada;
    -webkit-transform: scale3d(1, 0.4, 1);
    transform: scale3d(1, 0.4, 1);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transition: -webkit-transform 0.3s, background-color 0.3s;
    transition: transform 0.3s, background-color 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.input__label--isao::after {
    content: attr(data-content);
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.75em 0.15em;
    color: #da7071;
    opacity: 0;
    -webkit-transform: translate3d(0, 50%, 0);
    transform: translate3d(0, 50%, 0);
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    pointer-events: none;
}

.input__field--isao:focus + .input__label--isao::before {
    background-color: #da7071;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}

.input__field--isao:focus + .input__label--isao {
    pointer-events: none;
}

.input__field--isao:focus + .input__label--isao::after {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

.input__label-content--isao {
    padding: 0.75em 0.15em;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.input__field--isao:focus + .input__label--isao .input__label-content--isao {
    opacity: 0;
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
}

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
.left{
    width: 53%;
    height: 400px;
    position: relative;
}
.img1{
    position: absolute;
    width: 550px;
    height: 330px;
    padding: 10px 10px 10px 10px;
    background: #bbc0ce;
    border: 1px solid #040404;
    z-index: 1;
    top:50%;
    left:50%;
    margin-left: -280px;
    margin-top: -175px;

}
.middle{
    height: 400px;
    width: 18%;
    position: relative;
}
.img2{
    position: absolute;
    z-index: 1;
    top:50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -25px;
}


.right{
    flex: 1;
    height: 400px;
    position: relative;
}

.table{
    position: absolute;
    text-align: center;
    border-radius: 15px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0px 0px 10px 3px #ede9f3;
    top:50%;
    left: 50%;
    margin-left: -140px;
    margin-top: -120px;
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

