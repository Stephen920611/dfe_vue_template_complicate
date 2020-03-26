/**
 * @description
 * @Version Created by Qina on 2020/3/18.
 * @Author Qina
 * @license dongfangdianzi
 */

import Vue from 'vue'
import 'classlist-polyfill'
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

const el_scrollBar = (el) => {
    // 名字随便取，确保不会和已有属性重复即可，取名叫做_ps_
    if (el._ps_ instanceof PerfectScrollbar) {
        el._ps_.update()
    } else {
        //el上挂一份属性，https://www.npmjs.com/package/perfect-scrollbar
        el._ps_ = new PerfectScrollbar(el, {
            suppressScrollX: true,//设置为true时，无论内容宽度如何，X轴上的滚动条都将不可用
            wheelSpeed: 0.5,//滚动速度应用于鼠标滚轮事件
            swipeEasing:true, //如果此选项为true，将简化滑动滚动。
            wheelPropagation: true, //如果此选项为true，则在滚动到达侧面的末端时，mousewheel事件将传播到父元素。
        })
    }
};
//接着，自定义Vue指令,指令名你自己随便编一个，scrollBar
Vue.directive('scrollBar', {
//使用inserted钩子函数（初次创建dom）获取使用自定义指令处的dom
    inserted(el, binding, vnode) {
        const rules = ['fixed', 'absolute', 'relative'];
        let position = window.getComputedStyle(el,null).position;
        if (
            position != 'fixed' &&
            position != 'absolute' &&
            position != 'relative'
        ) {
            console.error(
                `scrollbar所在的容器的position属性必须是以下之一：${rules.join('、')}`
            )
        }
        el_scrollBar(el)
    },

    //更新dom的时候
    componentUpdated(el, binding, vnode, oldVnode) {
        let content = document.getElementById('app');
        content.scrollTop = 0;
        // console.log('content',content)
        try {
            vnode.context.$nextTick(() => {
                el_scrollBar(el)
            })
        } catch (error) {
            console.error(error);
            el_scrollBar(el)
        }
    }
});