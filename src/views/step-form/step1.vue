/**
* @description
* @Version Created by Qina on 2020/3/10.
* @Author Qina
* @license dongfangdianzi
*/
<template>
    <div class="app-container step1-container">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item class="step-form-btns" >
                <el-button type="primary" @click="back('ruleForm')" disabled >上一步</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    //import tabPane from './components/TabPane'
    export default {
        name: 'Step1',
//  components: { tabPane },
        data() {
            return {
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: false, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: false, message: '请选择活动区域', trigger: 'change' }
                    ],
                    /*date1: [
                        { required: false, type: 'date',  message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { required: false, type: 'date', message: '请选择时间', trigger: 'change' }
                    ],*/
                    type: [
                        { type: 'array', required: false, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: false, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                }
            }
        },
        mounted: function () {
        },
        methods: {
            submitForm: function (formName) {
                let self = this;
                this.$refs[formName].validate((valid) => {
                    //判断是否校验成功valid true/false
                    if (valid) {
//                        可以把表单的数据存在store，方便取用，不用页面传参
                        self.$emit('submitForm',self.ruleForm)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }

                });
            },

            /**
             * 重置表单
             * @param formData 表单数据名
             */
            resetForm(formName){
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped lang="scss" type="text/scss">
    .step1-container {
        .step-form-btns {
            text-align: center;
            &>>>.el-form-item__content{
                margin-left: 0 !important;
            }
        }
        .el-form {
            width: 560px;
            margin: 0 auto;
            .line{
                text-align: center;
            }
        }
    }
</style>
