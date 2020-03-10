/**
* @description
* @Version Created by Qina on 2020/3/10.
* @Author Qina
* @license dongfangdianzi
*/
<template>
    <div class="app-container">
        step3内容
        <div class="step-form-btns">
            <el-button style="margin-top: 12px;" @click="back">上一步</el-button>
            <el-button style="margin-top: 12px;" @click="next">完成</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Step3',
//  components: { tabPane },
        data() {
            return {
                createdTimes: 0
            }
        },
        created() {
        },
        methods: {
            //上一步
            back(){
                this.$emit('back')
            },
            //下一步
            next(){
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
