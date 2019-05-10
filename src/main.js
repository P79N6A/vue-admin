import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
//引入vue-sweetalert2提示框模块
import VueSweetalert2 from 'vue-sweetalert2';
const options = {
    confirmButtonColor: '#87CEFA',
    cancelButtonColor: '#ff7674'
}
//引入vue-js-modal模态框模块
import VModal from  'vue-js-modal'

//引入vue-video-player模块，播放视频
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

//引入vue-photo-preview模块，点击图片可查看原图
import Preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

//引入vue-loading-overlay模块，过渡加载动画
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
/**
 * This project originally used easy-mock to simulate data,
 * but its official service is very unstable,
 * and you can build your own service if you need it.
 * So here I use Mock.js for local emulation,
 * it will intercept your request, so you won't see the request in the network.
 * If you remove `../mock` it will automatically request easy-mock data.
 */
// import '../mock' // simulation data

//引入promise的HTTP客户端axios
import axios from 'axios';

//将axios改写为Vue的原型属性
Vue.prototype.$axios = axios;

Vue.use(ElementUI, { locale });
Vue.use(VueSweetalert2, options);
Vue.use(VModal);
Vue.use(VideoPlayer);
Vue.use(Preview);
Vue.use(Loading);

Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
