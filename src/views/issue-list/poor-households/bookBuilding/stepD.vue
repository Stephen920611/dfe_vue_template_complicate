<template>
    <van-pull-refresh v-model="pullLoading" @refresh="onPullRefresh">
        <div>
            <!--<common-subtitle title="贫困户满意度"></common-subtitle>-->
            <van-form>
                <van-cell>
                    <!---------------------------1.对扶贫整体工作是否满意----------------------------->
                    <van-row><van-col offset="1">1.对扶贫整体工作是否满意</van-col></van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dd1" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="1" span="22" class="margin-t-10" v-show="form.dd1 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dd1Text"
                                    type="textarea"
                                    placeholder=""
                                    autosize
                                    border=""
                            />
                        </van-col>
                    </van-row>

                    <!---------------------------2.对哪项具体扶贫工作有意见----------------------------->
                    <van-row><van-col offset="1">2.对哪项具体扶贫工作有意见</van-col></van-row>
                    <van-row>
                        <van-col offset="1" span="23">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dd2"
                                    autosize
                                    type="textarea"
                                    placeholder="请输入意见"
                            />
                        </van-col>
                    </van-row>
                </van-cell>

                <!--<div style="margin: 1rem 1rem 1.5rem;">
                    <van-button round block type="info" native-type="submit">
                        提交
                    </van-button>
                </div>-->
            </van-form>
        </div>
    </van-pull-refresh>
</template>
<script>
    import commonSubtitle from '@/components/common/commonSubtitle.vue';
    import common from '@/mixins/common';
    import Vue from 'vue'
    import { Dialog,Toast,PullRefresh } from 'vant'
    Vue.use(Dialog).use(Toast).use(PullRefresh)
    export default {
        props:['poorId'],
        mixins: [common],
        components: {
            commonSubtitle,
        },
        data() {
            return {
                // 下拉刷新控制
                pullLoading: false,
                //form表单的值
                form:{
                    dd1: "",
                    dd1Text: "",
                    dd2: "",
                },
            };
        },
        mounted(){
            this.form.personId = this.poorId;
            this.getInfo({personId:this.poorId})
        },
        methods: {
            getInfo(param){
                //添加loading效果
                Toast.loading({
                    message: '加载中...',
                    duration: 0, // 持续展示
                    forbidClick: true
                });
                this.$axios.post('/work/dPersonPropose/get',param).then(res => {
                    Toast.clear();
                    if(res.code == 1000){
                        if(!res.data){
                            //Toast("信息未采集！");
                            return
                        }
                        let {keys, values, entries} = Object;
                        //将单选框返回的值转为字符串
                        for (let key of keys(res.data)) {
                            if(key.indexOf('dd')>-1){
                                res.data[key] = res.data[key]+"";
                            }
                        }

                        //填写原因的项--数据查询todo
                        res.data.problemInfo.dPersonPropose.map(item=>{
                            this.editShowInfoFunc(this.form,item);
                        })
                        this.editShowInfoFunc(this.form,res.data);
                    }
                }).catch(err => {
                    Toast(err.msg || '网络不给力，请刷新重试!')
                })
            },

            // 下拉刷新
            onPullRefresh() {
                this.pullLoading = false;
                this.getInfo({personId:this.poorId})
            },
        },
    }
</script>
<style lang="less" scoped>
</style>
