/**
* @description
* @Version Created by Qina on 2020/3/10.
* @Author Qina
* @license dongfangdianzi
*/
<template>
    <div class="app-container step-form">
        <el-steps :active="active" finish-status="success" align-center>
            <el-step  v-for="(item,index) in steps" :key="index" :title="item.title" @click.native="changeStep(index)" ></el-step>
        </el-steps>
        <!--每个界面都有单独的上一步、下一步按钮，分别执行不同的操作-->
        <!--<step-pane1 v-show="active===0" v-on:submitForm="submitForm"  ref="stepPane1" ></step-pane1>-->
        <step-pane1 v-show="active===0" v-on:submitForm="submitForm"  ref="stepPane1" ></step-pane1>
        <step-pane2 v-show="active===1" v-on:next="next" v-on:back="back" :formData="formData" ></step-pane2>
        <step-pane3 v-show="active===2" v-on:next="next" v-on:back="back" ></step-pane3>
        <!--三个子界面共用上一步、下一步按钮-->
        <!--<div class="step-form-btns">
            <el-button style="margin-top: 12px;" @click="back" :disabled="active===0 ? true : false">上一步</el-button>
            <el-button style="margin-top: 12px;" @click="next">{{active === 2 ? '完成' : '下一步'}}</el-button>
        </div>-->

    </div>
</template>

<script>
    import stepPane1 from './step1.vue'
    import stepPane2 from './step2.vue'
    import stepPane3 from './step3.vue'

    export default {
        name: 'StepFrom',
        components: {stepPane1, stepPane2, stepPane3},
        data() {
            return {
                active: 0,//当前激活步骤
                steps:[
                    {
                        title:'步骤1'
                    },
                    {
                        title:'步骤2'
                    },
                    {
                        title:'步骤3'
                    },
                ],
                formData:null,
            }
        },
        mounted: function () {},
        methods: {
            /**
             * 步骤条点击事件
             * @param key
             */
            changeStep: function (key) {
                this.active = key;
            },
            //下一步
            next() {
                const {active} = this;
                if (this.active++ > 2){
                    this.active = 0;
                }else if(active === 2){
                    this.$message.success('成功!')
                }
            },

            //上一步
            back() {
                if (this.active-- < 0) this.active = 0;
            },

            /**
             * 表单数据的提交（第一步）
             * @param values {object} 表单的值
             */
            submitForm(values) {
//                可以把表单的数据存在store，方便取用，不用页面传参
//                console.log('表单的值',values);
                this.formData = values;
//                console.log('this.formData',this.formData);
                this.$message.success('创建成功！');
                if(this.active === 0){
                    //下一步
                    this.next();
                }

            }
        }
    }
</script>

<style scoped lang="scss" type="text/scss">
    .step-form-btns {
        text-align: center;
    }
    .step-form >>> .el-step__head {
        &:hover {
            color: #13ce66;
            border-color: #13ce66
        }
    }
    .step-form {
        .el-step:hover {
            & >>> .el-step__head, &>>> .el-step__title {
                color: #13ce66;
                border-color: #13ce66;
                cursor: pointer;
            }
        }

    }

</style>
