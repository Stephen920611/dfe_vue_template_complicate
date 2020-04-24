<template>
  <van-pull-refresh v-model="pullLoading" @refresh="onPullRefresh">
    <div>
      <!--<common-subtitle title="帮扶责任落实"></common-subtitle>-->
      <van-form validate-first :scroll-to-error="true" :show-error="false">
        <van-cell>
          <van-row>
            <van-col offset="1" span="23">1. 贫困户对帮扶责任人的帮扶工作是否认可</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.dc1" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row v-show="form.dc1 === '0'">
            <van-col offset="2" span="22" class="float-left margin-t-10">
              <van-field
                v-model="form.dc1Text"
                readonly
                rows="4"
                type="textarea"
                placeholder=""
                autosize
                label=""
                class="text-area-border"
                :required="true"
                :rules="[{ required: true, message: '请填写原因'}]"
              />
            </van-col>
          </van-row>

          <van-row class="margin-t-10">
            <van-col offset="1" span="23">2. 帮扶措施落实</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.dc2" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row v-show="form.dc2 === '0'">
            <van-col offset="2" span="22" class="float-left margin-t-10">
              <van-field
                v-model="form.dc2Text"
                readonly
                rows="4"
                type="textarea"
                placeholder=""
                autosize
                label=""
                class="text-area-border"
                :required="true"
                :rules="[{ required: true, message: '请填写原因'}]"
              />
            </van-col>
          </van-row>
          <van-row>
            <van-col offset="1" span="23">
              <van-row class="margin-t-10 color-red font-size-14">（拍《帮扶责任卡》中帮扶记录照片）</van-row>
              <van-row class="margin-t-15">
                <!--<van-uploader v-model="filePath.file_type1" multiple/>-->
                <van-col v-for="image in filePath.filePath1" class="margin-r-15 img-wrap">
                  <van-image
                    width="80"
                    height="80"
                    :src="image"
                    @click.native="lookImg([image])"
                  />
                </van-col>
              </van-row>
            </van-col>
          </van-row>

          <van-row class="margin-t-10">
            <van-col offset="1" span="23">3. 如果上级对本村派驻了“第一书记”，对其扶贫工作是否认可</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.dc3" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row v-show="form.dc3 === '0'">
            <van-col offset="2" span="22" class="float-left margin-t-10">
              <van-field
                v-model="form.dc3Text"
                readonly
                rows="4"
                type="textarea"
                placeholder=""
                autosize
                label=""
                class="text-area-border"
                :required="true"
                :rules="[{ required: true, message: '请填写原因'}]"
              />
            </van-col>
          </van-row>

        </van-cell>
        <!-- <div style="margin: 1rem 1rem 1.5rem;">
                     <van-button round block type="info" native-type="submit" @click="onSubmit">
                         提交
                     </van-button>
                 </div>-->
      </van-form>
      <!-------------------------------用overlay代替预览效果------------------------------ -->
      <overlayImage ref="overlayImg" />

    </div>
  </van-pull-refresh>

</template>
<script>
import commonSubtitle from '@/components/common/commonSubtitle.vue'
import overlayImage from '../../components/previewImage/overlayImage.vue'
import common from '@/mixins/common'
import Vue from 'vue'
import { Dialog, Toast, PullRefresh } from 'vant'
Vue.use(Dialog).use(Toast).use(PullRefresh)

export default {
  components: {
    commonSubtitle,
    overlayImage
  },
  mixins: [common],
  props: ['poorId'],
  data() {
    return {
      // 下拉刷新控制
      pullLoading: false,
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
    this.form.personId = this.poorId
    this.getInfo({ personId: this.poorId })
  },
  methods: {
    // 获取信息
    getInfo(param) {
      // 添加loading效果
      Toast.loading({
        message: '加载中...',
        duration: 0, // 持续展示
        forbidClick: true
      })
      this.$axios.post('/work/dPersonResponsibility/get', param).then(res => {
        Toast.clear()
        if (res.code == 1000) {
          if (!res.data) {
            // Toast("信息未采集！");
            return
          }
          const { keys, values, entries } = Object
          // 获取返回值的上传图片
          // filePath的key
          const filePathKeys = this.$lodash.keys(this.filePath)

          if (res.data.hasOwnProperty('baseImgList')) {
            res.data.baseImgList.forEach(item => {
              // filePath的key遍历一下
              filePathKeys.map((val, idx) => {
                const key = val.split('filePath')
                // 判断当前的key的后面的数字与baseImgList的type是否一样
                if (item.fileType.toString() === key[1]) {
                  // 对应的照片放到里面
                  const arr = []
                  item.imageList.forEach(ktem => {
                    const imgInfo = {
                      url: ''
                    }
                    // 新修改
                    imgInfo.url = ktem.filePath
                    // 这里因为是img，不是uploader,所以接收的形式不一样，如果是uploader,就要push(imgInfo)
                    arr.push(ktem.filePath)
                  })
                  this.filePath[val] = arr
                }
              })

              //                                for (let key of keys(this.filePath)) {
              //                                    if (key.indexOf(item.fileType.toString()) > -1) {
              //                                        item.imageList.forEach(ktem => {
              //                                            this.filePath[key].push(ktem.filePath)
              // //                                            console.log(this.filePath[key], ktem.filePath)
              //                                        })
              //
              //                                    }
              //                                }
            })
          }
          /* res.data.baseImgList.forEach(item=>{
                            for (let key of keys(this.filePath)) {
                                if(key.indexOf(item.fileType.toString())>-1){
                                    item.imageList.forEach(ktem=>{
                                        this.filePath[key].push(ktem.filePath)
//                                        console.log(this.filePath[key],ktem.filePath)
                                    })

                                }
                            }
                        })*/
          // 将单选框返回的值转为字符串
          for (const key of keys(res.data)) {
            if (key.indexOf('dc') > -1) {
              res.data[key] = res.data[key] + ''
            }
          }
          // 填写原因的项--数据查询todo
          res.data.problemInfo.dPersonResponsibility.forEach(item => {
            this.editShowInfoFunc(this.form, item)
          })

          this.editShowInfoFunc(this.form, res.data)
        }
      }).catch(err => {
        Toast(err.msg || '网络不给力，请刷新重试!')
      })
    },

    // 调用子组件的预览效果
    lookImg(imgUrl) {
      this.$refs.overlayImg.lookImg(imgUrl)
    },
    // 下拉刷新
    onPullRefresh() {
      this.pullLoading = false
      this.getInfo({ personId: this.poorId })
    }
  }
}
</script>
<style lang="less" scoped>
    @import "../../../../style/bookBuilding/style-book-build-info.less";
</style>
<style lang="less" scoped>
    .text-area-border {
        /deep/ .van-field__value {
            .van-field__control {
                border: 2px solid #999 !important;
                border-radius: 8px;
            }
        }
    }
</style>
