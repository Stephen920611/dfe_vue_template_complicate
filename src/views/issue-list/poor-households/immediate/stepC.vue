<!--帮扶责任落实-->
<template>
        <div>
            <el-form ref="form">
                <el-cell>
                    <el-row>
                        <el-col :offset="1" :span="23" class="margin-t-10">1. 贫困户对帮扶责任人的帮扶工作是否认可</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="1" :span="23" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jc1" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-show="form.jc1=='0'" :offset="2" :span="22" class="margin-t-10">
                            <el-input
                                    v-model="form.jc1Text"
                                    readonly
                                    rows="4"
                                    type="textarea"
                                    placeholder="请填写原因"
                                    autosize
                                    border=""
                                    class="text-area-border"
                            />
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="1" :span="23" class="margin-t-10">2. 帮扶措施落实</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="1" :span="23" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jc2" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-show="form.jc2=='0'" :offset="2" :span="22" class="margin-t-10">
                            <el-input
                                    v-model="form.jc2Text"
                                    readonly
                                    rows="4"
                                    type="textarea"
                                    placeholder="请填写原因"
                                    autosize
                                    border=""
                                    class="text-area-border"
                            />
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="1" :span="23">
                            <el-row class="margin-t-10 color-red font-size-14">（拍《帮扶责任卡》中帮扶记录照片）</el-row>
                            <!--<el-uploader style="margin: 10px 0" v-model="form.file_type1" multiple/>-->
                            <el-col v-for="image in filePath.filePath1" class="margin-r-15 img-wrap">
                                <el-image
                                        width="80"
                                        height="80"
                                        :src="image"
                                        @click.native="lookImg([image])"
                                />
                            </el-col>
                        </el-col>
                    </el-row>
                </el-cell>
                <!--<div style="margin: 1rem 1rem 1.5rem;">
                            <el-button round block type="info" native-type="submit">
                                保存
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
                // 下拉刷新控制
                pullLoading: false,
                form: {
                    jc1: '',
                    jc1Text: '',
                    jc2: '',
                    jc2Text: '',
                    personId: null
                },
                filePath: {
                    filePath1: []
                }
            }
        },
        mounted() {
//            this.form.personId = this.poorId
//            this.getInfo({personId: this.form.personId})
        },
        methods: {

        }
    }
</script>
<style lang="scss" scoped type="text/less">
    .text-area-border {
        /deep/ .el-field__value {
            .el-field__control {
                border: 2px solid #999 !important;
                border-radius: 8px;
            }
        }
    }
</style>
