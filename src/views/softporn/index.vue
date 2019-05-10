<template>
    <div class="main" :style ="note">
        <!--页面头部-->
        <header><img src="@/assets/img/2.png"></header>
        <!--输入框部分-->
        <form class="content">
			<span class="input input--isao">
                <!--数据双向绑定使用v-model.lazy="title"，转变为使用change事件进行同步-->
                <!--数据双向绑定使用v-model.trim="title"，自动过滤用户输入的首尾空白字符-->
					<input class="input__field input__field--isao" type="text" id="input-38" name ="title" v-model.lazy.trim="title"/>
					<label class="input__label input__label--isao" for="input-38" data-content="视频标题" >
						<span class="input__label-content input__label-content--isao">视频标题</span>
					</label>
			</span>
            <span class="input input--isao">
					<input class="input__field input__field--isao" type="text" id="input-39" name = 'img_url' v-model.lazy.trim="img_url"/>
					<label class="input__label input__label--isao" for="input-39" data-content="视频封面地址（url）" >
						<span class="input__label-content input__label-content--isao">视频封面地址（url）</span>
					</label>
            </span>
            <span class="input input--isao">
					<input class="input__field input__field--isao" type="text" id="input-40" name = 'url' v-model.lazy.trim="video_url"/>
					<label class="input__label input__label--isao" for="input-39" data-content="视频地址（url）" >
						<span class="input__label-content input__label-content--isao">视频地址（url）</span>
					</label>
            </span>
            <input type="submit" id="button1" value="软色情识别" @click="submitForm"/>
        </form>

        <!--结果显示部分-->
        <div class="father">
            <!--左边div包括title，图片以及video展示-->
            <div class="left">
                <div class="left_title" v-show="title_value">
                    <div class="input_title">视频标题:{{title}}</div>
                </div>
                <!--图片设置preview="0"用于使用vue-photo-preview插件-->
                <div class="left_img" v-show="img_value">
                <img :src="img_src" preview="0" class="img1" >
                </div>
                <div class="left_video" v-show="video_value">
                    <div class="show_video">
                        <video-player  class="video-player vjs-custom-skin"
                                       ref="videoPlayer"
                                       :playsinline="true"
                                       :options="playerOptions"
                        ></video-player>
                    </div>
                </div>
            </div>
            <div class="middle" v-show="arrow_value">
                <img src="@/assets/img/arrow.png" width="200" height="50" class="arrow">
            </div>
            <div class="right" v-show="table_value">
                <div class="table">
                    <div class="table-header">
                        <div class="table-title">结果</div>
                    </div>
                    <div class="table-content-holder">
                        <ul>
                            <li v-for="(value,name) in object">
                                {{name}}:{{value}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!--模态框部分-->
        <!--问号图标-->
        <div class="modalicon" @click="show">
            <i class="el-icon-question" style="font-size: 69px;color: #87CEFA;"></i>
            <div style="background-color: lightskyblue;width: 70px;height: 25px;text-align: center;line-height:25px;font-size: 16px;font-weight: bolder">识别说明</div>
        </div>
        <!--定义模态框内容-->
        <modal name="description" :draggable="true" :adaptive="true">
            <!--隐藏模态框图标置于右上角-->
            <div slot="top-right">
                <i class="el-icon-error" style="font-size: 60px;color:#FF0000;" @click="hide"></i>
            </div>
            <div class="distitle">软色情识别说明</div>
            <div class="dis">
                <ul>
                    <li>
                        请输入至少一项
                    </li>
                    <li>
                        若输入为一项，结果为单项识别结果
                    </li>
                    <li>
                        若输入为两项或者三项，结果为综合识别结果
                    </li>
                </ul>
            </div>
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
                //图片url
                img_src:'',
                //结果数据
                object:{ },
                //给条件渲染赋初始值
                title_value:false,
                img_value:false,
                video_value:false,
                arrow_value:false,
                table_value:false,

                // 视频播放
                playerOptions : {
                    playbackRates : [ 0.5, 1.0, 1.5, 2.0 ], //可选择的播放速度
                    autoplay : false, //如果true,浏览器准备好时开始回放。
                    muted : false, // 默认情况下将会消除任何音频。
                    loop : false, // 视频一结束就重新开始。
                    preload : 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language : 'zh-CN',
                    aspectRatio : '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid : true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources : [ {
                        type : "",
                        src : ''//url地址
                    } ],
                    poster : "", //封面地址
                    // width: document.documentElement.clientWidth,
                    notSupportedMessage : '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar : {
                        timeDivider : true,//当前时间和持续时间的分隔符
                        durationDisplay : true,//显示持续时间
                        remainingTimeDisplay : false,//是否显示剩余时间功能
                        fullscreenToggle : true  //全屏按钮
                    }
                }
            }
        },
        methods:{
            //显示警告框
            showAlert(){
                this.$swal('请输入至少一项！');
            },
            showvideoAlert(){
              this.$swal('video_url格式错误，请输入正确的格式');
            },
            //弹出模态框
            show(){
                this.$modal.show('description');
            },
            //隐藏模态框
            hide(){
                this.$modal.hide('description');
            },
            //点击提交按钮
            submitForm(e){
                var title = this.title;
                var img_url = this.img_url;
                var video_url = this.video_url;
                // 阻止页面刷新,取消默认行为
                e.preventDefault();

                //如果表单数据均为空时，显示警告
                if(((!title)&&(!img_url)&&(!video_url))){
                    this.showAlert();
                    return false;
                }
                //如果video_url不含'cdn-proxy.qiyi.domain'，显示警告
                if(video_url&&!(video_url.includes('cdn-proxy.qiyi.domain'))){
                    this.showvideoAlert();
                    return false;
                }

                console.log(title);
                console.log(img_url);
                console.log(video_url);

                // 显示loading动画
                let loader = this.$loading.show({
                    // 动画参数配置
                    loader:'dots',
                    width:150,
                    height:100,
                    color:'#70be42',
                    opacity:0.6,
                });

//                判断输入哪些内容，渲染不同的效果
                this.arrow_value = true;
                this.table_value = true;
                if (title&&img_url&&video_url){
                    this.title_value = true;
                    this.img_value = true;
                    this.video_value = true;
                }else if(title&&img_url&&!video_url){
                    this.title_value = true;
                    this.img_value = true;
                    this.video_value = false;
                }else if(!title&&img_url&&video_url){
                    this.title_value = false;
                    this.img_value = true;
                    this.video_value = true;
                }else if(title&&!img_url&&video_url){
                    this.title_value = true;
                    this.img_value = false;
                    this.video_value = true;
                }else if(title&&!img_url&&!video_url){
                    this.title_value = true;
                    this.img_value = false;
                    this.video_value = false;
                }else if(!title&&img_url&&!video_url){
                    this.title_value = false;
                    this.img_value = true;
                    this.video_value = false;
                }else if(!title&&!img_url&&video_url){
                    this.title_value = false;
                    this.img_value = false;
                    this.video_value = true;
                }

                //将表单提交的img_url绑定到img_src属性上
                this.img_src = img_url;

                //将表单提交的video_url绑定到视频的src内
                this.playerOptions.sources[0].src = video_url;


                //发送post请求，将返回的数据赋值给object对象
                this.$axios.post('http://homepage-backed.online.qiyi.qae/vulgar', {
                    user:{
                      username:'vulgar-test',
                      password:123
                    },
                    title: title,
                    img_url: img_url.split(),
                    video_url:video_url.split()
                })
                    .then((res) => {
                        //将返回的数据处理之后放入object内，并且隐藏loading动画
                        let result = res.data.data.tags[0];
                        console.log(result);
                        //将结果的小数转换成百分数并且只保留一位小数
                        if(result.tag == 'PORN'){
                            result.score = Number(result.score*100).toFixed(1)+'%';
                        }else {
                            result.score = Number((1-result.score)*100).toFixed(1)+'%';
                        }

                        //全局替换数据的属性值，先将json转换为字符串，再转回json
                        let result1 = JSON.parse(JSON.stringify(result).replace(/tag/g,"识别结果"));
                        let result2 = JSON.parse(JSON.stringify(result1).replace(/NORMAL/g,"非软色情"));
                        let result3 = JSON.parse(JSON.stringify(result2).replace(/PORN/g,"软色情"));
                        let result4 = JSON.parse(JSON.stringify(result3).replace(/score/g,"可信度"));
                        this.object = result4;
                        console.log(result4);
                        loader.hide();

                    })
                    .catch(()=>{
                        this.object = {'识别结果':'出错啦！！！'};
                        loader.hide();
                    });

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
    max-width: 500px;
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
    font-size:25px;
    margin-top: 40px;
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
    margin-top: 60px;
    margin-bottom: 40px;
}
.left{
    width: 52%;
    background-color: #055198;
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
    background-color: #d4dfe6;
    color: #121647;
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
    background: #cadbe9;
    border: 1px solid #040404;
    z-index: 1;
    top:50%;
    left:50%;
    margin-left: -275px;
    margin-top: -165px;

}
.left_video{
    width: auto;
    height: 349px;
    position: relative;
}
.show_video{
    position: absolute;
    width: 550px;
    background-color: #00D1B2;
    top:50%;
    left: 50%;
    margin-top: -155px;
    margin-left: -275px;
}

.middle{
    width: 12%;
    position: relative;
}
.arrow{
    position: absolute;
    z-index: 1;
    top:50%;
    left: 50%;
    margin-left: -50px;
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
    transform: translateY(-50%) translateX(-50%);
    z-index: 100;
}


.table-header{
    height: 80px;
    width: 380px;
    position: relative;
    background-color: #bbc0ce;
}
.table-title{
    position: absolute;
    width: 100px;
    height: 44px;
    top:50%;
    left: 50%;
    margin-top:-21px;
    margin-left:-50px;
    font-size:38px;
    text-align: center;
    line-height: 44px;
}
.table-content-holder{
    padding: 0 8%;
    margin-bottom: 40px;
}
.table ul
{
    padding: 0;
    list-style: none;
    margin-top: 22px;
}
.table ul li
{
    border-bottom: 3px solid #ede9f3;
    padding: 14px 0;
    font-weight: bold;
    font-size: 24px;
    color: #055198;
/*
    强制不换行
*/
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}

/*模态框样式*/
.modalicon{
    position: fixed;
    right: 0.8%;
    top:38%;

}
.distitle{
    height: 115px;
    background-color: #87CEFA;
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
    border-bottom: 3px dashed #D3D3D3;
    padding: 10px 0;
    font-weight: 500;
    font-size: 24px;

}
/*页脚装饰*/
.horizontalline{
    position: fixed;
    top: 90%;
    right: 0%;

}
</style>

