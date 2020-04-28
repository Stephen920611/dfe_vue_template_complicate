<template>
        <div>
            <!--<common-subtitle title="帮扶责任落实"></common-subtitle>-->
            <el-form ref="form">
                <div>
                    <el-row>
                        <el-col :offset="0" :span="24">1. 贫困户对帮扶责任人的帮扶工作是否认可</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="0" :span="24" class="float-right margin-t-10">
                            <el-radio-group v-model="form.dc1" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row v-show="form.dc1 === '0'">
                        <el-col :offset="0" :span="24" class="float-left margin-t-10">
                            <el-input
                                    v-model="form.dc1Text"
                                    readonly
                                    rows="4"
                                    type="textarea"
                                    placeholder=""
                                    autosize
                                    label=""
                                    class="text-area-border"
                            />
                        </el-col>
                    </el-row>

                    <el-row class="margin-t-10">
                        <el-col :offset="0" :span="24">2. 帮扶措施落实</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="0" :span="24" class="float-right margin-t-10">
                            <el-radio-group v-model="form.dc2" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row v-show="form.dc2 === '0'">
                        <el-col :offset="0" :span="24" class="float-left margin-t-10">
                            <el-input
                                    v-model="form.dc2Text"
                                    readonly
                                    rows="4"
                                    type="textarea"
                                    placeholder=""
                                    autosize
                                    label=""
                                    class="text-area-border"
                            />
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="0" :span="24">
                            <el-row class="margin-t-10 color-red font-size-14">（拍《帮扶责任卡》中帮扶记录照片）</el-row>
                            <el-row class="margin-t-15">
                                <!--<el-uploader v-model="filePath.file_type1" multiple/>-->
                                <el-col v-for="image in filePath.filePath1" class="margin-r-15 img-wrap" :span="4">
                                    <el-image
                                            width="80"
                                            height="80"
                                            :src="image"
                                            @click.native="lookImg([image])"
                                    />
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>

                    <el-row class="margin-t-10">
                        <el-col :offset="0" :span="24">3. 如果上级对本村派驻了“第一书记”，对其扶贫工作是否认可</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="0" :span="24" class="float-right margin-t-10">
                            <el-radio-group v-model="form.dc3" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row v-show="form.dc3 === '0'">
                        <el-col :offset="0" :span="24" class="float-left margin-t-10">
                            <el-input
                                    v-model="form.dc3Text"
                                    readonly
                                    rows="4"
                                    type="textarea"
                                    placeholder=""
                                    autosize
                                    label=""
                                    class="text-area-border"
                            />
                        </el-col>
                    </el-row>

                </div>
                <!-- <div style="margin: 1rem 1rem 1.5rem;">
                             <el-button round block type="info" native-type="submit" @click="onSubmit">
                                 提交
                             </el-button>
                         </div>-->
            </el-form>
        </div>

</template>
<script>
    import Vue from 'vue'
    import { fetchDPersonResponsibility } from '@/api/issueList'

    export default {
        components: {
        },
        props: ['poorId'],
        data() {
            return {
                text: '',
                filePath: {
                    filePath1: []
                },
                form: {
                    dc1: null,
                    dc2: null,
                    dc3: null,
                    dc1Text: '',
                    dc2Text: '',
                    dc3Text: '',
                    id: null,
                    personId: null
                }

            }
        },
        mounted() {
//            this.form.personId = this.poorId
//            this.getInfo({personId: this.poorId})
            this.getData()
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
                fetchDPersonResponsibility(params).then(resp => {
                    self.loading = false;
                    self.form = resp.data;

                    let {keys, values, entries} = Object;
                    //获取返回值的上传图片
                    //filePath的key
                    let filePathKeys = this.$lodash.keys(this.filePath);

                    if (resp.data.hasOwnProperty("baseImgList")) {
                        resp.data.baseImgList.forEach(item => {
                            //filePath的key遍历一下
                            filePathKeys.map( (val,idx) => {
                                let key = val.split("filePath");
                                //判断当前的key的后面的数字与baseImgList的type是否一样
                                if(item.fileType.toString() === key[1]){
                                    //对应的照片放到里面
                                    let arr = [];
                                    item.imageList.forEach(ktem => {
                                        let imgInfo = {
                                            url:''
                                        };
                                        //新修改
                                        imgInfo.url = ktem.filePath;
                                        //这里因为是img，不是uploader,所以接收的形式不一样，如果是uploader,就要push(imgInfo)
                                        arr.push( ktem.filePath)
                                    });
                                    this.filePath[val] = arr;
                                }
                            });
                        })
                    }

                    //填写原因的项--数据查询todo
                    resp.data.problemInfo.dPersonResponsibility.forEach(item=>{
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
<style lang="scss" scoped>
    .text-area-border {
        /deep/ .el-field__value {
            .el-field__control {
                border: 2px solid #999 !important;
                border-radius: 8px;
            }
        }
    }
</style>
