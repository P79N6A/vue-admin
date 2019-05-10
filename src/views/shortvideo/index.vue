<template>
<div class="main" :style ="note">
<!--输入框-->
    <div style="display: flex">
        <div class="leftinput_container">
            <div class="left_input">
                <label class="field field_type2">
                    <input class="field__input" placeholder="title" v-model.lazy.trim="title">
                    <span class="field__label">短视频标题</span>
                    <span class="field__line"></span>
                </label>
            </div>
        </div>

        <div class="rightinput_container">
            <div class="right_input">
                <label class="field field_type2">
                    <input class="field__input" placeholder="url"  v-model.lazy.trim="img_url">
                    <span class="field__label">短视频封面地址（url）</span>
                    <span class="field__line"></span>
                </label>
            </div>
        </div>
    </div>
<!--点击按钮-->
    <center><button class="bubbly-button" @click="submitForm">短视频识别</button></center>
<!--    结果显示部分-->
    <div class="father">
<!--        左边包括视频标题以及图片两部分-->
        <div class="left">
            <div class="left_title" v-show="title_value">
                <div class="input_title">短视频标题:{{title}}</div>
            </div>
            <!--图片设置preview="0"用于使用vue-photo-preview插件-->
            <div class="left_img" v-show="img_value">
                <img :src="img_src" preview="0" class="img1" >
            </div>
        </div>
<!--        中间部分包括箭头-->
        <div class="middle" v-show="arrow_value">
            <img src="@/assets/img/arrow.png" width="200" height="50" class="arrow">
        </div>
<!--        右边部分为结果部分，以表格形式展示-->
        <div class="right" v-show="result_value">

                <div class="result_table">
                    <el-table
                        :data="tableData"
                        max-height="300"
                        border
                        stripe="true"
                        style="width: 100%"
                        :row-style="tableRowStyle"
                        :header-cell-style="tableHeaderStyle"
                    >
                        <el-table-column
                            prop="tag"
                            label="标签"
                            width="105">
                        </el-table-column>
                        <el-table-column
                            prop="confidence"
                            label="可信度"
                            width="110">
                        </el-table-column>
                        <el-table-column
                            prop="category_tag_level"
                            label="标签级别">
                        </el-table-column>
                    </el-table>
                </div>
        </div>
    </div>
    <!--模态框部分-->
    <!--问号图标-->
    <div class="modalicon" @click="show">
        <i class="el-icon-question" style="font-size: 69px;color: #207d59;"></i>
        <div style="background-color: #207d59;width: 70px;height: 25px;text-align: center;line-height:25px;font-size: 16px;font-weight: bolder;color: white">识别说明</div>
    </div>
    <!--定义模态框内容-->
    <modal name="description" :draggable="true" :adaptive="true">
        <!--隐藏模态框图标置于右上角-->
        <div slot="top-right">
            <i class="el-icon-error" style="font-size: 60px;color:#FF0000;" @click="hide"></i>
        </div>
        <div class="distitle">短视频识别说明</div>
        <div class="dis">
            <ul>
                <li>
                    请输入至少一项
                </li>
                <li>
                    若输入为一项，结果为单项识别结果
                </li>
                <li>
                    若输入为两项，结果为综合识别结果
                </li>
            </ul>
        </div>
    </modal>
</div>
</template>

<script>

    export default {
        data(){
            return{

            note:{
                //添加背景图片
                backgroundImage: "url(" + require("@/assets/img/bg3.jpg") + ") ",
            },
                //图片地址初始值
                img_src:'',
                //表格内容初始值
                tableData: [{
                    tag: '体育',
                    confidence: '82%',
                    category_tag_level: '1'
                }, {
                    tag: '体育',
                    confidence: '82%',
                    category_tag_level: '1'
                }, {
                    tag: '体育',
                    confidence: '82%',
                    category_tag_level: '1'
                }, {
                    tag: '体育',
                    confidence: '82%',
                    category_tag_level: '1'
                }, {
                    tag: '体育',
                    confidence: '82%',
                    category_tag_level: '123'
                }, {
                    tag: '体育',
                    confidence: '82%',
                    category_tag_level: '123'
                }, {
                    tag: '体育',
                    confidence: '82%',
                    category_tag_level: '123'
                }],
                //给条件渲染赋初始值
                title_value:false,
                img_value:false,
                arrow_value:false,
                result_value:false,
            };
        },
        methods : {
            //点击按钮产生的气泡效果
            animateButton (e) {
                e.preventDefault;
                //reset animation
                e.target.classList.remove('animate');

                e.target.classList.add('animate');
                setTimeout(function () {
                    e.target.classList.remove('animate');
                }, 700);
            },
            //设置table tr行的样式
            tableRowStyle({row, rowIndex}){
                return 'background-color:#f0fff0;font-size:20px; text-align: center;'
            },
            //设置table header的样式
            tableHeaderStyle({row,column,rowIndex,columnIndex}){
                    return 'background-color:#3b5b8e;font-size:23px;color:white;text-align:center'
            },
            //弹出模态框
            show(){
                this.$modal.show('description');
            },
            //隐藏模态框
            hide(){
                this.$modal.hide('description');
            },
            //显示警告框
            showAlert(){
                this.$swal('请输入至少一项！');
            },
            //点击识别按钮
            submitForm () {
                //产生气泡效果
                var classname = document.getElementsByClassName("bubbly-button");

                for (var i = 0; i < classname.length; i++) {
                    classname[ i ].addEventListener('click', this.animateButton, false);
                }

                var title = this.title;
                var img_url = this.img_url;

                //如果表单数据均为空时，显示警告
                if(((!title)&(!img_url))){
                    this.showAlert();
                    return false;
                }
                // 判断输入哪些内容，渲染不同的效果
                this.arrow_value = true;
                this.result_value = true;
                if(title&&img_url){
                    this.title_value = true;
                    this.img_value = true
                }
                if(title&&(!img_url)){
                    this.title_value = true;
                    this.img_value = false
                }
                if ((!title)&&(img_url)){
                    this.title_value = false;
                    this.img_value = true;
                }

                //将表单提交的img_url绑定到img_src属性上
                this.img_src = img_url;
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.main{
    width: 100%;
    height: 100%;
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: scroll;
}



/*输入框样式*/
.field{
    --uiFieldPaddingTop: var(--fieldPaddingTop, 0px);
    --uiFieldPaddingRight: var(--fieldPaddingRight, 0px);
    --uiFieldPaddingBottom: var(--fieldPaddingBottom, 0px);
    --uiFieldPaddingLeft: var(--fieldPaddingLeft, 0px);

    --uiFieldBorderColor: var(--fieldBorderColor, transpatent);
    --uiFieldBorderTop: var(--fieldBorderTop, 0px);
    --uiFieldBorderRight: var(--fieldBorderRight, 0px);
    --uiFieldBorderBottom: var(--fieldBorderBottom, 0px);
    --uiFieldBorderLeft: var(--fieldBorderLeft, 0px);

    --uiFieldBgColor: var(--fieldBgColor, transpatent);
    --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);
    --uiFieldAnimationDuration: var(--fieldAnimationDuration, .3s);
    --uiFieldFonstSize: var(--fieldFontSize, 16px);

    position: relative;
}

.field__input{
    width: 100%;
    box-sizing: border-box;
    background-color: var(--uiFieldBgColor);

    /* for iOS */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;

    border-style: solid;
    border-width: 4px;
    border-color: var(--uiFieldBorderColor);

    border-top-width: var(--uiFieldBorderTop);
    border-right-width: var(--uiFieldBorderRight);
    /*border-bottom-width: var(--uiFieldBorderBottom);*/
    border-left-width: var(--uiFieldBorderLeft);

    padding-top: var(--uiFieldPaddingTop);
    padding-right: var(--uiFieldPaddingRight);
    padding-bottom: var(--uiFieldPaddingBottom);
    padding-left: var(--uiFieldPaddingLeft);

    font-family: inherit;
    font-size: 100%;
    color: inherit;
}

.field__input::-webkit-input-placeholder{
    color: var(--uiFieldPlaceholderColor);
    opacity: 0;
}

.field__input::-moz-placeholder{
    color: var(--uiFieldPlaceholderColor);
    opacity: 0;
}

.field__input:focus{
    outline: none;
}

.field__input:focus::-webkit-input-placeholder{
    -webkit-transition: opacity var(--uiFieldAnimationDuration) ease-out var(--uiFieldAnimationDuration);
    transition: opacity var(--uiFieldAnimationDuration) ease-out var(--uiFieldAnimationDuration);
    opacity: 1;
}

.field__input:focus::-moz-placeholder{
    -webkit-transition: opacity var(--uiFieldAnimationDuration) ease-out var(--uiFieldAnimationDuration);
    transition: opacity var(--uiFieldAnimationDuration) ease-out var(--uiFieldAnimationDuration);
    opacity: 1;
}

.field__label{
    position: absolute;
    top: calc(0px + var(--uiFieldPaddingTop) + var(--uiFieldBorderTop));
    left: calc(0px + var(--uiFieldPaddingLeft) + var(--uiFieldBorderLeft));

    pointer-events: none;
    font-size: .9em;

    -webkit-transition: top var(--uiFieldAnimationDuration) cubic-bezier(0.9,-0.15, 0.1, 1.15), opacity var(--uiFieldAnimationDuration) ease-out;

    transition: top var(--uiFieldAnimationDuration) cubic-bezier(0.9,-0.15, 0.1, 1.15), opacity var(--uiFieldAnimationDuration) ease-out;
    will-change: top, opacity;
}

.field__input:not(:placeholder-shown) ~ .field__label{
    opacity: 0;
    top: calc(0px + var(--uiFieldPaddingTop) + var(--uiFieldBorderTop));
}

.field__input:focus ~ .field__label{
    opacity: 1;
    top: calc(-1 * calc(var(--uiFieldPaddingTop) + var(--uiFieldBorderTop) + 30px));
}

.field_type2{
    --uiFieldBorderBottom: var(--fieldBorderBottom, 4px);
    --uiFieldPaddingTop: var(--fieldPaddingTop, 5px);
    --uiFieldPaddingRight: var(--fieldPaddingRight, 15px);
    --uiFieldPaddingBottom: var(--fieldPaddingBottom, 10px);
    --uiFieldPaddingLeft: var(--fieldPaddingLeft, 15px);
}

.field_type2 .field__line{
    width: 0;
    height: var(--uiFieldBorderBottom);
    background-color: var(--fieldBorderColorActive);

    position: absolute;
    bottom: 0;
    left: 0;

    will-change: width;
    -webkit-transition: width var(--uiFieldAnimationDuration) ease-out;
    transition: width var(--uiFieldAnimationDuration) ease-out;
}

.field_type2 .field__input:focus ~ .field__line{
    width: 100%;
}


.field{
    --fieldBorderColor: #496860;
    --fieldBorderColorActive: #99FF99;
    --fieldPlaceholderColor:#5cb48e;
    display: block;
    color: #2F4F4F;
    font-size: 26px;
    font-family: "Comic Sans MS", "幼圆", "黑体", sans-serif;
}

.leftinput_container{
    width: 50%;
    height: 200px;
    float:left;
    position: relative;
}


.left_input{
    width: 80%;
    max-width: 600px;
    padding-top: 5rem;
    padding-bottom: 5rem;
    text-align: center;
    position: absolute;
    top:20%;
    left: 18%;
}

.rightinput_container{
    height: 200px;
    flex: 1;
    position: relative;
}

.right_input{
    width: 80%;
    max-width: 600px;
    padding-top: 5rem;
    padding-bottom: 5rem;
    text-align: center;
    position: absolute;
    top:20%;
    left: 10%;
}
/*点击按钮样式*/
.bubbly-button {
    font-family: 'Helvetica', 'Arial', sans-serif;
    display: inline-block;
    font-size: 1.2em;
    padding: 0.7em 1.5em;
    margin-top: 50px;
    margin-bottom: 60px;
    -webkit-appearance: none;
    appearance: none;
    background-color: #ff0081;
    color: #fff;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    position: relative;
    transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
    box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);
    z-index: 10;
}
.bubbly-button:focus {
    outline: 0;
}
.bubbly-button:before, .bubbly-button:after {
    position: absolute;
    content: '';
    display: block;
    width: 140%;
    height: 100%;
    left: -20%;
    z-index: -1000;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
}
.bubbly-button:before {
    display: none;
    top: -75%;
    background-image: radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 20%, #ff0081 20%, transparent 30%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
}
.bubbly-button:after {
    display: none;
    bottom: -75%;
    background-image: radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
}
.bubbly-button:active {
    transform: scale(0.9);
    background-color: #e60074;
    box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
}
.bubbly-button.animate:before {
    display: block;
    animation: topBubbles ease-in-out 0.75s forwards;
}
.bubbly-button.animate:after {
    display: block;
    animation: bottomBubbles ease-in-out 0.75s forwards;
}

@keyframes topBubbles {
    0% {
        background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
    }
    50% {
        background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
    }
    100% {
        background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
        background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
    }
}
@keyframes bottomBubbles {
    0% {
        background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
    }
    50% {
        background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
    }
    100% {
        background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
        background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
    }
}
/*结果显示部分样式，最右边div宽度自适应，整个div高度自适应*/
.father{
        display: flex;
        margin-top: 40px;
        margin-bottom: 40px;
}
.left{
    width: 52%;
    background-color:#f0fff0;
    z-index: 10;
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
    background-color: #3b5b8e;
    color: #ffffff;
    text-align: center;
    font-size: 22px;
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
    background: #3b5b8e;
    border: 1px solid #040404;
    z-index: 1;
    top:50%;
    left:50%;
    margin-left: -275px;
    margin-top: -165px;

}
.middle{
    width: 13%;
    position: relative;
    /*background-color: red;*/
}
.arrow{
    position: absolute;
    z-index: 1;
    top:50%;
    left: 50%;
    margin-left: -70px;
    margin-top: -25px;
}
.right{
    flex: 1;
    position: relative;
    z-index: 10;
}

.result_table{
    position: absolute;
    width: 358px;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
}
/*模态框样式*/
.modalicon{
    position: fixed;
    right: 0.8%;
    top:35%;

}
.distitle{
    height: 115px;
    background-color:#40e0d0;
    color: #ffffff;
    text-align: center;
    font-size: 30px;
    line-height: 115px;
}
.dis{
    height: 185px;
    text-align: center;
    color: #696969;
}
.dis ul li
{
    border-bottom: 3px double #D3D3D3;
    padding: 10px 0;
    font-weight: 500;
    font-size: 24px;
}
</style>
