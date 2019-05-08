<template>
<div class="main" :style ="note">
    <div class="site-bg-overlay"></div>
<!--输入框-->
    <div style="display: flex">
        <div class="leftinput_container">
            <div class="left_input">
                <label class="field field_type2">
                    <input class="field__input" placeholder="短视频标题">
                    <span class="field__label">短视频标题</span>
                    <span class="field__line"></span>
                </label>
            </div>
        </div>

        <div class="rightinput_container">
            <div class="right_input">
                <label class="field field_type2">
                    <input class="field__input" placeholder="短视频图片（url）">
                    <span class="field__label">短视频封面地址（url）</span>
                    <span class="field__line"></span>
                </label>
            </div>
        </div>
    </div>
<!--点击按钮-->
    <center><button class="bubbly-button" @click="submitForm">短视频识别</button></center>
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
            }
        },
        methods : {
            animateButton (e) {
                e.preventDefault;
                //reset animation
                e.target.classList.remove('animate');

                e.target.classList.add('animate');
                setTimeout(function () {
                    e.target.classList.remove('animate');
                }, 700);
            },
            submitForm () {
                var classname = document.getElementsByClassName("bubbly-button");

                for (var i = 0; i < classname.length; i++) {
                    classname[ i ].addEventListener('click', this.animateButton, false);
                }
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.main{
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    /*background-position: center;*/
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
}
.site-bg-overlay{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 50px;
    left: 0;
    background: rgba(91,180,142,0.3);
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
        --fieldBorderColor: green;
        --fieldBorderColorActive: red;
        --fieldPlaceholderColor:pink;
        display: block;
        color: black;
        font-size: 28px;
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
</style>
