<template>
        <div>
            <!--<common-subtitle title="贫困户满意度"></common-subtitle>-->
            <el-form>
                <div>
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
                </div>

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
    import { fetchDPersonPropose } from '@/api/issueList'
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
            this.getData();
        },
        methods: {

            /**
             *  编辑回显使用
             * formData[Object]：是定义的回显参数
             * formData[infoData]:带参数值的详情信息
             *
             */
            editShowInfoFunc:(formData,infoData)=>{
                let {keys, values, entries} = Object;
                for(let key of keys(infoData)){
                    if(formData.hasOwnProperty(key)){
                        formData[key] = infoData[key]
                    }
                }
            },

            getData(){
                let params = {
                    personId: this.$route.query.hasOwnProperty('id') ? this.$route.query.id : '',
                };
                let self = this;
                self.loading = true;
                fetchDPersonPropose(params).then(resp => {
                    self.loading = false;
                    self.form = resp.data;

                    //填写原因的项--数据查询todo
                    resp.data.problemInfo.dPersonPropose.forEach(item=>{
                        self.editShowInfoFunc(this.form,item);
                    });
                    //转其他的
//                    self.editShowInfoFunc(this.form,resp.data);

                }).catch(err => {
                    self.loading = false;
                    this.$message({
                        message: err.msg,
                        type: 'error'
                    })
//                    self.$message.error(err.msg)
                });
            },


        }
    }
</script>
