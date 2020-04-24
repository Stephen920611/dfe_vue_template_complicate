<!--两不愁三保障和饮水安全-->
<template>
  <van-pull-refresh v-model="pullLoading" @refresh="onPullRefresh">
    <div>
      <van-form validate-first :scroll-to-error="true" :show-error="false">
        <!--********************* a. 人均纯收入 *********************-->
        <van-cell title="a. 人均纯收入" />
        <van-cell>
          <van-row class="margin-t-10">
            <van-col offset="1" span="10">1. 2019年人均纯收入</van-col>
            <van-col offset="1" span="9">
              <van-field v-model="form.jaa1" readonly type="number" label="" placeholder="" style="padding:0 !important;" />
            </van-col>
            <van-col span="3">元</van-col>
          </van-row>
          <van-row class="margin-t-10">
            <van-col offset="1" span="23">
              <van-row class="margin-t-10 color-red font-size-14">（拍本人家中2019年度收入明细表）</van-row>
              <van-row class="margin-t-15">
                <!--<van-uploader v-model="form.file_type1" multiple/>-->
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

          <van-row>
            <van-col offset="1" span="23" class="margin-t-10">2. 2020年人均纯收入预计达到4500元以上</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jaa2" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jaa2=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jaa2Text"
                readonly
                rows="4"
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
        </van-cell>

        <!--********************* b. 教育扶贫政策落实情况 ********** ***********-->
        <van-cell title="b. 教育扶贫政策落实情况" />
        <van-cell>
          <van-row>
            <van-col offset="1" span="23" class="margin-t-10">1. 义务教育阶段学生接受义务教育</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jab11" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jab11=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jab11Text"
                readonly
                rows="4"
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

          <!--<van-row>
                        <van-col offset="2" class="margin-t-10">① 接受义务教育</van-col>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.jab11" direction="horizontal">
                                <van-radio name="1">正常上学</van-radio>
                                <van-radio name="2">送教上门</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" class="margin-t-10">② 失辍学</van-col>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.jAb12" direction="horizontal">
                                <van-radio name="1">因贫</van-radio>
                                <van-radio name="2">因其他</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" class="margin-t-10">③ 不涉及</van-col>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.jAb13" direction="horizontal">
                                <van-radio name="1"></van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>-->
          <van-row>
            <van-col offset="1" span="23" class="margin-t-10">2.学前到大学教育资助、减免政策落实到位</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jab2" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jab2=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jab2Text"
                readonly
                rows="4"
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
        </van-cell>
        <!--********************* c. 健康和医保扶贫政策落实情况 *********************-->
        <van-cell title="c. 健康和医保扶贫政策落实情况" />
        <van-cell>
          <van-row>
            <van-col offset="1" span="23" class="margin-t-10">1.健康扶贫政策</van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">① 是否知道县域内定点医院</van-col>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jac16" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jac16=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jac16Text"
                readonly
                rows="4"
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
            <van-col offset="2" span="22" class="margin-t-10">② 享受“先诊疗、后付费”政策（县域内定点医院住院不交押金）</van-col>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jac11" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jac11=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jac11Text"
                readonly
                rows="4"
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
            <van-col offset="2" span="22" class="margin-t-10">③ 家庭医生签约服务</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jac12" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jac12=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jac12Text"
                readonly
                rows="4"
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
            <van-col offset="2" span="22">
              <van-row class="margin-t-10 font-size-14">其中：慢性病签约服务</van-row>
              <!--<van-uploader style="margin: 10px 0" v-model="form.file_type2" multiple/>-->
              <van-row>
                <van-col class="float-right margin-t-10">
                  <van-radio-group v-model="form.jac121" disabled direction="horizontal">
                    <van-radio name="1">是</van-radio>
                    <van-radio name="0">否</van-radio>
                    <van-radio name="2">不涉及</van-radio>
                  </van-radio-group>
                </van-col>
              </van-row>
              <van-row class="margin-t-10 color-red font-size-14">(拍《签约服务手册》中体现慢性病签约服务的内容）</van-row>
              <van-row>
                <van-col v-show="form.jac121=='0'" offset="2" span="22" class="margin-t-10">
                  <van-field
                    v-model="form.jac121Text"
                    readonly
                    rows="4"
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

              <van-col v-for="image in filePath.filePath2" class="margin-r-15 img-wrap">
                <van-image
                  width="80"
                  height="80"
                  :src="image"
                  @click.native="lookImg([image])"
                />
              </van-col>
            </van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">④ 享受医疗机构减免政策（县域内定点医院两免两减半）</van-col>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jac13" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jac13=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jac13Text"
                readonly
                rows="4"
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
            <van-col offset="2" span="22" class="margin-t-10">⑤ 严重精神障碍患者免费救治政策落实到位</van-col>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jac14" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jac14=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jac14Text"
                readonly
                rows="4"
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
            <van-col offset="2" span="22" class="margin-t-10">⑥ 严重精神障碍患者随访制度落实到位</van-col>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jac15" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jac15=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jac15Text"
                readonly
                rows="4"
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
            <van-col offset="1" span="23" class="margin-t-10">2.医保扶贫政策</van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">①参加居民基本医疗保险（大病保险）或职工基本医疗保险</van-col>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jac21" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jac21=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jac21Text"
                readonly
                rows="4"
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
            <van-col offset="2" span="22" class="margin-t-10">② 享受医疗救助政策（定点医院住院、政策规定报销药品，查看住院结算单中“医疗救助”栏）</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jac22" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jac22=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jac22Text"
                readonly
                rows="4"
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
            <van-col offset="2" span="22" class="margin-t-10">③ 享受“一站式”即时结算服务（定点医院住院）</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jac23" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jac23=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jac23Text"
                readonly
                rows="4"
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
            <van-col offset="1" span="23" class="margin-t-10">3.其他扶贫政策</van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">① 享受医疗商业补充保险（扶贫特惠保险险种之一，由政府全额补贴购买）</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jac3" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jac3=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jac3Text"
                readonly
                rows="4"
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
            <van-col offset="2" span="22">
              <van-row class="margin-t-10 color-red font-size-14">（拍《扶贫特惠保险卡》照片）</van-row>
              <!--<van-uploader style="margin: 10px 0" v-model="form.file_type3" multiple/>-->
              <van-col v-for="image in filePath.filePath3" class="margin-r-15 img-wrap">
                <van-image
                  width="80"
                  height="80"
                  :src="image"
                  @click.native="lookImg([image])"
                />
              </van-col>
            </van-col>
          </van-row>
        </van-cell>
        <!--********************* d. 住房安全保障政策落实情况 *********************-->
        <van-cell title="d. 住房安全保障政策落实情况" />
        <van-cell>
          <van-row>
            <van-col offset="1" span="23" class="margin-t-10">0. 房屋整体情况</van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">① 户外房屋整体
              <van-row class="margin-t-10 color-red font-size-14">（拍户外房屋整体）</van-row>
            </van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22">
              <!--<van-uploader style="margin: 10px 0" v-model="form.file_type4" multiple/>-->
              <van-col v-for="image in filePath.filePath4" class="margin-r-15 img-wrap">
                <van-image
                  width="80"
                  height="80"
                  :src="image"
                  @click.native="lookImg([image])"
                />
              </van-col>
            </van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">② 内房顶
              <van-row class="margin-t-10 color-red font-size-14">（拍内房顶）</van-row>
            </van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22">
              <!--<van-uploader style="margin: 10px 0" v-model="form.file_type5" multiple/>-->
              <van-col v-for="image in filePath.filePath5" class="margin-r-15 img-wrap">
                <van-image
                  width="80"
                  height="80"
                  :src="image"
                  @click.native="lookImg([image])"
                />
              </van-col>
            </van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">③ 内墙
              <van-row class="margin-t-10 color-red font-size-14">（拍内墙）</van-row>
            </van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22">
              <!--<van-uploader style="margin: 10px 0" v-model="form.file_type6" multiple/>-->
              <van-col v-for="image in filePath.filePath6" class="margin-r-15 img-wrap">
                <van-image
                  width="80"
                  height="80"
                  :src="image"
                  @click.native="lookImg([image])"
                />
              </van-col>
            </van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">④ 外墙
              <van-row class="margin-t-10 color-red font-size-14">（拍外墙）</van-row>
            </van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22">
              <!-- <van-uploader style="margin: 10px 0" v-model="form.file_type7" multiple/>-->
              <van-col v-for="image in filePath.filePath7" class="margin-r-15 img-wrap">
                <van-image
                  width="80"
                  height="80"
                  :src="image"
                  @click.native="lookImg([image])"
                />
              </van-col>
            </van-col>
          </van-row>

          <van-row>
            <van-col offset="1" span="23" class="margin-t-10">1. 现居住的房屋安全鉴定及改造情况
              <van-row class="margin-t-10 color-red font-size-14">（拍房屋安全鉴定报告）</van-row>
            </van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22">
              <!-- <van-uploader style="margin: 10px 0" v-model="form.file_type8" multiple/>-->
              <van-col v-for="image in filePath.filePath8" class="margin-r-15 img-wrap">
                <van-image
                  width="80"
                  height="80"
                  :src="image"
                  @click.native="lookImg([image])"
                />
              </van-col>
            </van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">① 2019年10月以来房屋安全鉴定报告</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jad11" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-col v-show="form.jad11=='0'" offset="2" span="22" class="margin-t-10">
            <van-field
              v-model="form.jad11Text"
              readonly
              rows="4"
              type="textarea"
              placeholder="请填写原因"
              autosize
              border=""
              class="text-area-border"
              :required="true"
              :rules="[{ required: true, message: '请填写原因'}]"
            />
          </van-col>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">② 鉴定安全等级为C、D级房屋经过改造是否安全（2019年10月以来改造验收合格报告或2019年10月以来房屋安全鉴定报告）
            </van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jad12" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-col v-show="form.jad12=='0'" offset="2" span="22" class="margin-t-10">
            <van-field
              v-model="form.jad12Text"
              readonly
              rows="4"
              type="textarea"
              placeholder="请填写原因"
              autosize
              border=""
              class="text-area-border"
              :required="true"
              :rules="[{ required: true, message: '请填写原因'}]"
            />
          </van-col>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">③ 鉴定安全等级为C、D级房屋的贫困户，安置后的房屋是否安全（2019年10月以来房屋安全鉴定报告） </van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jad13" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-col v-show="form.jad13=='0'" offset="2" span="22" class="margin-t-10">
            <van-field
              v-model="form.jad13Text"
              readonly
              rows="4"
              type="textarea"
              placeholder="请填写原因"
              autosize
              border=""
              class="text-area-border"
              :required="true"
              :rules="[{ required: true, message: '请填写原因'}]"
            />
          </van-col>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">④ 补助资金及时拨付到位 </van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jad14" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-col v-show="form.jad14=='0'" offset="2" span="22" class="margin-t-10">
            <van-field
              v-model="form.jad14Text"
              readonly
              rows="4"
              type="textarea"
              placeholder="请填写原因"
              autosize
              border=""
              class="text-area-border"
              :required="true"
              :rules="[{ required: true, message: '请填写原因'}]"
            />
          </van-col>

        </van-cell>
        <!--********************* e 饮水安全政策落实情况 *********************-->
        <van-cell title="e. 饮水安全政策落实情况" />
        <van-cell>
          <van-row>
            <van-col offset="1" span="23" class="margin-t-10">1. 靠自来水保障饮水安全</van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">① 村通自来水，贫困户家中自来水正常供水（村级提供2019年10月以来水质检测合格报告）</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jae11" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-col v-show="form.jae11=='0'" offset="2" span="22" class="margin-t-10">
            <van-field
              v-model="form.jae11Text"
              readonly
              rows="4"
              type="textarea"
              placeholder="请填写原因"
              autosize
              border=""
              class="text-area-border"
              :required="true"
              :rules="[{ required: true, message: '请填写原因'}]"
            />
          </van-col>
          <van-row>
            <van-col offset="2" span="22">
              <van-row class="margin-t-10 color-red font-size-14">（拍家用自来水照片）</van-row>
              <!--<van-uploader style="margin: 10px 0" v-model="form.file_type9" multiple/>-->
              <van-col v-for="image in filePath.filePath9" class="margin-r-15 img-wrap">
                <van-image
                  width="80"
                  height="80"
                  :src="image"
                  @click.native="lookImg([image])"
                />
              </van-col>
            </van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">
              ② 距离村庄较远不具备自来水入户条件，采取符合安全饮水标准的措施保障饮水安全（有2019年10月以来水质检测合格报告）
            </van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jae12" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-col v-show="form.jae12=='0'" offset="2" span="22" class="margin-t-10">
            <van-field
              v-model="form.jae12Text"
              readonly
              rows="4"
              type="textarea"
              placeholder="请填写原因"
              autosize
              border=""
              class="text-area-border"
              :required="true"
              :rules="[{ required: true, message: '请填写原因'}]"
            />
          </van-col>
          <van-row>
            <van-col offset="1" span="23" class="margin-t-10">2. 靠村内集中供水点（净化水设施等）保障饮水安全，取水方便 （村级提供2019年10月以来水质检测合格报告）</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jae2" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-col v-show="form.jae2=='0'" offset="2" span="22" class="margin-t-10">
            <van-field
              v-model="form.jae2Text"
              readonly
              rows="4"
              type="textarea"
              placeholder="请填写原因"
              autosize
              border=""
              class="text-area-border"
              :required="true"
              :rules="[{ required: true, message: '请填写原因'}]"
            />
          </van-col>
          <van-row>
            <van-col offset="1" span="23" class="margin-t-10">3. 靠村内集中供水点（净化水设施等）保障饮水安全，对行动不便的贫困群众，安排专人帮扶送水保障饮水安全</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jae3" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-col v-show="form.jae3=='0'" offset="2" span="22" class="margin-t-10">
            <van-field
              v-model="form.jae3Text"
              readonly
              rows="4"
              type="textarea"
              placeholder="请填写原因"
              autosize
              border=""
              class="text-area-border"
              :required="true"
              :rules="[{ required: true, message: '请填写原因'}]"
            />
          </van-col>

          <van-row>
            <van-col offset="1" span="23" class="margin-t-10">4. 村内无任何集中供水设施，贫困户饮水安全无保障</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jae4" disabled direction="horizontal">
                <van-radio name="0">是</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-col v-show="form.jae4=='0'" offset="2" span="22" class="margin-t-10">
            <van-field
              v-model="form.jae4Text"
              readonly
              rows="4"
              type="textarea"
              placeholder="请填写原因"
              autosize
              border=""
              class="text-area-border"
              :required="true"
              :rules="[{ required: true, message: '请填写原因'}]"
            />
          </van-col>
        </van-cell>
        <!--<div style="margin: 1rem 1rem 1.5rem;">
                    <van-button round block type="info" native-type="submit">
                        保存
                    </van-button>
                </div>-->
      </van-form>
      <!-------------------------------用overlay代替预览效果------------------------------ -->
      <overlayImage ref="overlayImg" />
    </div>
  </van-pull-refresh>

</template>
<script>
import overlayImage from '../../components/previewImage/overlayImage.vue'
import common from '@/mixins/common'
import { Dialog, Toast, PullRefresh } from 'vant'
import Vue from 'vue'
Vue.use(PullRefresh)
export default {
  components: {
    overlayImage
  },
  mixins: [common],
  props: ['poorId'],
  data() {
    return {
      filePath: {
        filePath1: [],
        filePath2: [],
        filePath3: [],
        filePath4: [],
        filePath5: [],
        filePath6: [],
        filePath7: [],
        filePath8: [],
        filePath9: []
      },
      form: {
        jaa1: '',
        jaa2: '',
        jaa2Text: '',
        jab11: '',
        jab11Text: '',
        jab2: '',
        jab2Text: '',
        jac16: '',
        jac16Text: '',
        jac11: '',
        jac11Text: '',
        jac12: '',
        jac12Text: '',
        jac121: '',
        jac121Text: '',
        jac13: '',
        jac13Text: '',
        jac14: '',
        jac14Text: '',
        jac15: '',
        jac15Text: '',
        jac21: '',
        jac21Text: '',
        jac22: '',
        jac22Text: '',
        jac23: '',
        jac23Text: '',
        jac3: '',
        jac3Text: '',
        jad11: '',
        jad11Text: '',
        jad12: '',
        jad12Text: '',
        jad13: '',
        jad13Text: '',
        jad14: '',
        jad14Text: '',
        jae11: '',
        jae11Text: '',
        jae12: '',
        jae12Text: '',
        jae2: '',
        jae2Text: '',
        jae3: '',
        jae3Text: '',
        jae4: '',
        jae4Text: '',
        personId: null
      },
      // 下拉刷新控制
      pullLoading: false
    }
  },
  mounted() {
    this.form.personId = this.poorId
    this.getInfo({ personId: this.form.personId })
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
      this.$axios.post('/work/jPersonSafeguard/get', param).then(res => {
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
                                    console.log(this.filePath[key],ktem.filePath)
                                })

                                }
                            }
                        })*/

          // 将单选框返回的值转为字符串
          for (const key of keys(res.data)) {
            if (key.indexOf('ja') > -1) {
              res.data[key] = res.data[key] + ''
            }
            if (res.data['jaa1'] == null) {
              res.data['jaa1'] = ''
            }
          }
          // 填写原因的项--数据查询todo
          res.data.problemInfo.jPersonSafeguard.forEach(item => {
            this.editShowInfoFunc(this.form, item)
          })

          // 将其他
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
<style lang="less" scoped type="text/less">
    .info {
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
    }
    .text-area-border {
        /deep/ .van-field__value {
            .van-field__control {
                border: 2px solid #999 !important;
                border-radius: 8px;
            }
        }
    }
</style>
