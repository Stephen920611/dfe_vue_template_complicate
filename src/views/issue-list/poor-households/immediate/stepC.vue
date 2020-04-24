<!--帮扶责任落实-->
<template>
    <van-pull-refresh v-model="pullLoading" @refresh="onPullRefresh">
        <div>
            <van-form  validate-first :scroll-to-error="true" :show-error="false">
                <van-cell>
                    <van-row><van-col offset="1" span="23" class="margin-t-10">1. 贫困户对帮扶责任人的帮扶工作是否认可</van-col></van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.jc1" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.jc1=='0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.jc1Text"
                                    type="textarea"
                                    placeholder="请填写原因"
                                    autosize
                                    border=""
                                    class="text-area-border"
                                    :required="true"
                                    :rules="[{ required: true, message: '请填写原因'}]"
                            />
                        </van-col>
                    </van-row>
                    <van-row><van-col offset="1" span="23" class="margin-t-10">2. 帮扶措施落实</van-col></van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.jc2" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.jc2=='0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.jc2Text"
                                    type="textarea"
                                    placeholder="请填写原因"
                                    autosize
                                    border=""
                                    class="text-area-border"
                                    :required="true"
                                    :rules="[{ required: true, message: '请填写原因'}]"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col  offset="2" span="22">
                            <van-row class="margin-t-10 color-red font-size-14">（拍《帮扶责任卡》中帮扶记录照片）</van-row>
                            <!--<van-uploader style="margin: 10px 0" v-model="form.file_type1" multiple/>-->
                            <van-col v-for="image in filePath.filePath1" class="margin-r-15 img-wrap">
                                <van-image width="80"  height="80"
                                           :src="image"
                                           @click.native="lookImg([image])"
                                />
                            </van-col>
                        </van-col>
                    </van-row>
                </van-cell>
                <!--<div style="margin: 1rem 1rem 1.5rem;">
                    <van-button round block type="info" native-type="submit">
                        保存
                    </van-button>
                </div>-->
            </van-form>

            <!-------------------------------用overlay代替预览效果------------------------------ -->
            <overlayImage ref="overlayImg"></overlayImage>
        </div>
    </van-pull-refresh>
</template>
<script>
    import overlayImage from '../../components/previewImage/overlayImage.vue'
    import common from '@/mixins/common';
    import { Dialog,Toast,PullRefresh } from 'vant'
    import Vue from 'vue'
    Vue.use(PullRefresh)
    export default {
        props:['poorId'],
        mixins: [common],
        data() {
            return {
                // 下拉刷新控制
                pullLoading: false,
                form:{
                    jc1:'',
                    jc1Text:'',
                    jc2:'',
                    jc2Text:'',
                    personId:null
                },
                filePath:{
                    filePath1: [],
                },
            };
        },
        components: {
            overlayImage,
        },
        mounted(){
            this.form.personId = this.poorId
            this.getInfo({personId:this.form.personId})
        },
        methods: {
            getInfo(param){
                //添加loading效果
                Toast.loading({
                    message: '加载中...',
                    duration: 0, // 持续展示
                    forbidClick: true
                });
                this.$axios.post('/work/jPersonResponsibility/get',param).then(res => {
                    Toast.clear();
                    if(res.code == 1000){
                        if(!res.data){
                            //Toast("信息未采集！");
                            return
                        }
                        let {keys, values, entries} = Object;
                        //filePath的key
                        let filePathKeys = this.$lodash.keys(this.filePath);

                        if (res.data.hasOwnProperty("baseImgList")) {
                            res.data.baseImgList.forEach(item => {
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

//                                for (let key of keys(this.filePath)) {
//                                    if (key.indexOf(item.fileType.toString()) > -1) {
//                                        item.imageList.forEach(ktem => {
//                                            this.filePath[key].push(ktem.filePath)
////                                            console.log(this.filePath[key], ktem.filePath)
//                                        })
//
//                                    }
//                                }
                            })
                        }

                        //获取返回值的上传图片
                        /*res.data.baseImgList.forEach(item=>{
                            for (let key of keys(this.filePath)) {
                                if(key.indexOf(item.fileType.toString())>-1){
                                    item.imageList.forEach(ktem=>{
                                        this.filePath[key].push(ktem.filePath)
                                        console.log(this.filePath[key],ktem.filePath)
                                    })

                                }
                            }
                        })*/




                        //将单选框返回的值转为字符串
                        for (let key of keys(res.data)) {
                            if(key.indexOf('jc')>-1){
                                res.data[key] = res.data[key]+"";
                            }
                        }
                        //填写原因的项--数据查询todo
                        res.data.problemInfo.jPersonResponsibility.forEach(item=>{
                            this.editShowInfoFunc(this.form,item);
                        })

                        //将其他
                        this.editShowInfoFunc(this.form,res.data);
                    }
                }).catch(err => {
                    Toast(err.msg || '网络不给力，请刷新重试!')
                })
            },
            //调用子组件的预览效果
            lookImg(imgUrl){
                this.$refs.overlayImg.lookImg(imgUrl)
            },
            // 下拉刷新
            onPullRefresh() {
                this.pullLoading = false;
                this.getInfo({personId:this.poorId})
            },
        },
    }
</script>
<style lang="less" scoped type="text/less">
    .text-area-border {
        /deep/ .van-field__value {
            .van-field__control {
                border: 2px solid #999 !important;
                border-radius: 8px;
            }
        }
    }
</style>
