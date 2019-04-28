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
					<input class="input__field input__field--isao" type="text" id="input-39" name = 'img_url' v-model="img_url"/>
					<label class="input__label input__label--isao" for="input-39" data-content="img_url" >
						<span class="input__label-content input__label-content--isao">img_url</span>
					</label>
            </span>
            <span class="input input--isao">
					<input class="input__field input__field--isao" type="text" id="input-40" name = 'url' v-model="video_url"/>
					<label class="input__label input__label--isao" for="input-39" data-content="video_url" >
						<span class="input__label-content input__label-content--isao">video_url</span>
					</label>
            </span>
            <input type="submit" id="button1" value="提交" @click="submitForm"/>
        </form>

        <!--结果显示部分-->
        <div class="father">
            <!--左边div包括title，图片以及video展示-->
            <div class="left">
                <div class="left_title" v-show="title_value">
                    <div class="input_title">title:XXXXXXXXXXXXXXXX</div>
                </div>
                <div class="left_img" v-show="img_value">
                <img src = "@/assets/img/1.jpg" class="img1">
                </div>
                <div class="left_video" v-show="video_value">
                    这里是video
                </div>
            </div>
            <div class="middle" v-show="arrow_value">
                <img src="@/assets/img/arrow.png" width="200" height="50" class="arrow">
            </div>
            <div class="right" v-show="table_value">
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
        <!--模态框部分-->
        <!--问号图标-->
        <div class="modalicon" @click="show">
            <i class="el-icon-question" style="font-size: 57px;color: #87CEFA;"></i>
        </div>
        <!--定义模态框内容-->
        <modal name="description" :draggable="true" :adaptive="true">
            <!--隐藏模态框图标置于右上角-->
            <div slot="top-right">
                <i class="el-icon-error" style="font-size: 60px;color:#FF0000;" @click="hide"></i>
            </div>
            <div class="distitle">输入说明</div>
            <div class="dis">请输入title、img_url以及video_url至少一项</div>
        </modal>
        <!--页脚装饰部分-->
        <div class="horizontalline"><img src="@/assets/img/horizontalline.png"></div>
   </div>
</template>

<script>

    export default{
        data(){
            return{
                title: '',
                img_url: '',
                video_url:'',
                note:{
                    //添加背景图片
                    backgroundImage: "url(" + require("@/assets/img/bg2.jpg") + ") ",
                },
                title_value:false,
                img_value:false,
                video_value:false,
                arrow_value:false,
                table_value:false
            }
        },
        methods:{
            //显示警告框
            showAlert(){
                this.$swal('请输入至少一项！');
            },
            //弹出模态框方法
            show(){
                this.$modal.show('description');
            },
            //隐藏模态框方法
            hide(){
                this.$modal.hide('description');
            },
            submitForm(e){
                var title = this.title;
                var img_url = this.img_url;
                var video_url = this.video_url;


                // 阻止页面刷新,取消默认行为
                e.preventDefault();

                //如果表单数据均为空时，显示警告
                if(((!title)&(!img_url)&(!video_url))){
                    this.showAlert();
                    return false;
                }

                console.log(title);
                console.log(img_url);
                console.log(video_url);

//                判断输入哪些内容，渲染不同的效果
                this.arrow_value = true;
                this.table_value = true;
                if (title&img_url&video_url){
                    this.title_value = true;
                    this.img_value = true;
                    this.video_value = true;
                }else if(title&img_url&!video_url){
                    this.title_value = true;
                    this.img_value = true;
                    this.video_value = false;
                }else if(!title&img_url&video_url){
                    this.title_value = false;
                    this.img_value = true;
                    this.video_value = true;
                }else if(title&!img_url&video_url){
                    this.title_value = true;
                    this.img_value = false;
                    this.video_value = true;
                }else if(title&!img_url&!video_url){
                    this.title_value = true;
                    this.img_value = false;
                    this.video_value = false;
                }else if(!title&img_url&!video_url){
                    this.title_value = false;
                    this.img_value = true;
                    this.video_value = false;
                }else if(!title&!img_url&video_url){
                    this.title_value = false;
                    this.img_value = false;
                    this.video_value = true;
                }

                //点击提交按钮之后，清空输入框数据
//                this.title = " ";
//                this.img_url = " ";
//                this.video_url = " "
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
/*输入框部分样式*/
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
    width: 28%;
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
/*结果显示部分样式，最右边div宽度自适应，整个div高度自适应*/
.father{
    display: flex;
}
.left{
    width: 53%;
    background-color: #055198;
}
.left_title{
    width: auto;
    height: 100px;
    position: relative;
}
.input_title{
    position: absolute;
    width: 550px;
    height: 60px;
    background-color: #d4dfe6;
    color: #121647;
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    line-height: 60px;
    top:50%;
    left:50%;
    margin-left: -275px;
    margin-top: -30px;
    border-radius: 5px;
}
.left_img{
    width: auto;
    height: 380px;
    position: relative;
}
.img1{
    position: absolute;
    width: 550px;
    height: 330px;
    padding: 10px 10px 10px 10px;
    background: #cadbe9;
    border: 1px solid #040404;
    z-index: 1;
    top:50%;
    left:50%;
    margin-left: -275px;
    margin-top: -175px;

}
.left_video{
    width: auto;
    height: 600px;
    background-color: #7f7f7f;
}

.middle{
    width: 18%;
    position: relative;
}
.arrow{
    position: absolute;
    z-index: 1;
    top:50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -25px;
}

.right{
    flex: 1;
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
    z-index: 100;
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

/*模态框样式*/
.modalicon{
    position: fixed;
    width: 4%;
    height: 8%;
    right: 0.5%;
    z-index: 110;
    top:38%;
}
.distitle{
    height: 115px;
    background-color: #87CEFA;
    color: #ffffff;
    text-align: center;
    font-size: 27px;
    line-height: 115px;
}
.dis{
    height: 185px;
    text-align: center;
    line-height: 185px;
    font-size: 25px;
    color: #696969;
}
/*页脚装饰*/
.horizontalline{
    position: fixed;
    top: 90%;
    right: 0%;

}
</style>

