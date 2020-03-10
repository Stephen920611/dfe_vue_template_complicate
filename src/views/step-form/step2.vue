/**
* @description
* @Version Created by Qina on 2020/3/10.
* @Author Qina
* @license dongfangdianzi
*/
<template>
    <div class="app-container">
        step2内容{{formData}}
        <div class="step-form-btns">
            <el-button style="margin-top: 12px;" @click="back">上一步</el-button>
            <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Step2',
        props:['formData'],
        data() {
            return {
                createdTimes: 0
            }
        },
        watch:{
//            监听表单数据的变化
            formData: {//深度监听，可监听数组、对象的变化(但是val与oldVal的值是一样的)
                handler(val) {
                    this.formData = val;
                },
                deep: true,//深度监听
//                immediate: true,//直接触发
            }
        },
        methods: {
            //上一步
            back() {
                this.$emit('back')
            },
            //下一步
            next() {
                this.$emit('next')
            }
        }
    }
</script>

<style scoped lang="scss" type="text/scss">
    .step-form-btns {
        text-align: center;
    }
</style>
