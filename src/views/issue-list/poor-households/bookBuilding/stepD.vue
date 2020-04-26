<template>
        <div>
            <!--<common-subtitle title="贫困户满意度"></common-subtitle>-->
            <el-form>
                <el-cell>
                    <!---------------------------1.对扶贫整体工作是否满意----------------------------->
                    <el-row>
                        <el-col :offset="0" :span="24">1.对扶贫整体工作是否满意</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="0" :span="24" class="float-right margin-t-10">
                            <el-radio-group v-model="form.dd1" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-show="form.dd1 === '0'" :offset="0" :span="24" class="margin-t-10">
                            <el-input
                                    v-model="form.dd1Text"
                                    readonly
                                    rows="4"
                                    type="textarea"
                                    placeholder=""
                                    autosize
                                    border=""
                            />
                        </el-col>
                    </el-row>

                    <!---------------------------2.对哪项具体扶贫工作有意见----------------------------->
                    <el-row class="margin-t-10">
                        <el-col :offset="0" :span="24">2.对哪项具体扶贫工作有意见</el-col>
                    </el-row>
                    <el-row class="margin-t-10">
                        <el-col :offset="0" :span="24">
                            <el-input
                                    v-model="form.dd2"
                                    readonly
                                    rows="4"
                                    autosize
                                    type="textarea"
                                    placeholder="请输入意见"
                            />
                        </el-col>
                    </el-row>
                </el-cell>

                <!--<div style="margin: 1rem 1rem 1.5rem;">
                            <el-button round block type="info" native-type="submit">
                                提交
                            </el-button>
                        </div>-->
            </el-form>
        </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        components: {
        },
        props: ['poorId'],
        data() {
            return {
                // form表单的值
                form: {
                    dd1: '',
                    dd1Text: '',
                    dd2: ''
                }
            }
        },
        mounted() {
//            this.form.personId = this.poorId
//            this.getInfo({personId: this.poorId})
        },
        methods: {

        }
    }
</script>
