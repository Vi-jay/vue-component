import  Vue from 'vue';
import  wj_Btn from './components/button.vue';
import  wj_Scroll from './components/scroll.vue';
import  wj_Date from './components/date.vue';
require('../static/css/reset.css');
require('./commonStylus/btn-base.styl');
require('./commonStylus/date-base.styl');
require('./fonts/icon.styl');

/* eslint-disable no-new */
let wj_component = new Vue();

wj_component.install = function (Vue, options) {
    Vue.mixin({   //在这里定义的东西都会被vue使用时继承过去  可以在这定义全局组件 将会被使用者继承
        created: function () {
            this.hello()
        },
        methods: {
            hello: function () {
                console.log('hello i am wangJie nice meet you!')
            }
        },
        components: {
            'wj-Btn': wj_Btn,
            'wj-Scroll': wj_Scroll,
            'wj-Date': wj_Date
        }
    });
};
export default {wj_component};
