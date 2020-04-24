<!--行业扶贫政策落实-->
<template>
  <van-pull-refresh v-model="pullLoading" @refresh="onPullRefresh">
    <div>
      <van-form validate-first :scroll-to-error="true" :show-error="false">
        <!--********************* a 兜底保障政策落实情况 *********************-->
        <van-cell title="a. 兜底保障政策落实情况" />
        <van-cell>
          <van-row>
            <van-col offset="1" span="23">1. 低保</van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">① 符合条件的贫困人口纳入低保</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jba11" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jba11=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jba11Text"
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
            <van-col offset="2" span="22" class="margin-t-10">② 成年重度残疾人，残疾等级为三级的精神、智力残疾人单人纳入低保</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jba12" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jba12=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jba12Text"
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
            <van-col offset="2" span="22" class="margin-t-10">③ 2019年4月份以来未被取消低保</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jba13" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jba13=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jba13Text"
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
            <van-col offset="2" span="22" class="margin-t-10">④ 低保金按月足额发放</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jba14" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jba14=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jba14Text"
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
            <van-col offset="1" span="23">2. 特困供养</van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">① 分散供养特困补助按月足额发放</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jba21" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jba21=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jba21Text"
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
            <van-col offset="2" span="22" class="margin-t-10">② 符合条件的贫困人口纳入特困供养</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jba22" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jba22=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jba22Text"
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
        <!--********************* b. 残疾人政策落实情况 *********************-->
        <van-cell title="b. 残疾人政策落实情况" />
        <van-cell>
          <van-row>
            <van-col offset="1" span="23" class="margin-t-10">1. 享受低保待遇的持证贫困残疾人生活补贴按月足额发放</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbb1" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jbb1=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbb1Text"
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
              <van-row class="margin-t-10 color-red font-size-14">（拍残疾人证照片）</van-row>
              <!--<van-uploader style="margin: 10px 0" v-model="form.file_type1" multiple/>-->
              <van-col v-for="image in filePath.filePath1" class="margin-r-15 img-wrap">
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
            <van-col offset="1" span="23" class="margin-t-10">2. 一、二级重度残疾人护理补贴按月足额发放</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbb2" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jbb2=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbb2Text"
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
            <van-col offset="1" span="23" class="margin-t-10">3. 一、二级重度残疾人是否进行家庭无障碍改造</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbb3" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jbb3=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbb3Text"
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
              <van-row class="margin-t-10 color-red font-size-14">（拍实施无障碍改造照片）</van-row>
              <!--<van-uploader style="margin: 10px 0" v-model="form.file_type2" multiple/>-->
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
            <van-col offset="1" span="23" class="margin-t-10">4. 一、二级重度残疾人没有家庭无障碍改造需求</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbb4" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jbb4=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbb4Text"
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
            <van-col offset="1" span="23" class="margin-t-10">5. 残疾人是否享受康复服务</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbb5" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jbb5=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbb5Text"
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
            <van-col offset="1" span="23" class="margin-t-10">6.残疾人无康复服务需求</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbb6" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jbb6=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbb6Text"
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
            <van-col offset="1" span="23" class="margin-t-10">7.有办证意愿且符合办证条件的残疾人已办理残疾人证</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbb7" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jbb7=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbb7Text"
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

        <!--********************* c. 金融扶贫政策落实情况 *********************-->

        <van-cell title="c.金融扶贫政策落实情况" />
        <van-cell>

          <!---------------------------2.富民生产贷----------------------------->
          <van-row class="margin-t-10">
            <van-col offset="1">1. 富民生产贷</van-col>
          </van-row>

          <van-row class="margin-t-10">
            <van-col offset="2" span="22">①已发放富民生产贷的企业与贫困户按规定签订《帮扶协议书》</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbc1" direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-if="form.jbc1 === '0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbc1Text"
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
              <van-row class="margin-t-10 color-red font-size-14">（拍《帮扶协议书》照片）</van-row>
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

          <van-row class="margin-t-10">
            <van-col offset="2" span="22">②贫困户了解帮扶协议书内容，帮扶企业按时间节点兑现帮扶协议</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbc2" direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-if="form.jbc2 === '0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbc2Text"
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

        <!--********************* e. 孝善养老扶贫政策落实情况(虽然是d，但是按照e来，因为是插入的，所以页面显示为d) *********************-->
        <van-cell title="d.孝善养老扶贫政策落实情况" />
        <van-cell>

          <!---------------------------1.符合条件的贫困老年人（含无子女或子女无赡养能力的），参加孝善养老----------------------------->
          <van-row>
            <van-col offset="1">1.符合条件的贫困老年人（含无子女或子女无赡养能力的），参加孝善养老</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbe1" direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-if="form.jbe1 === '0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbe1Text"
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

          <!---------------------------2.有赡养协议，赡养费足额实际给付----------------------------->
          <van-row>
            <van-col offset="1">2.有赡养协议，赡养费足额实际给付</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbe2" direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-if="form.jbe2 === '0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbe2Text"
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
              <van-row class="margin-t-10 color-red font-size-14">（拍孝善养老协议书）</van-row>
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

          <!---------------------------3.孝善奖补资金及时到位----------------------------->
          <van-row class="margin-t-10">
            <van-col offset="1">3.孝善奖补资金及时到位</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbe3" direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-if="form.jbe3 === '0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbe3Text"
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
        <!--********************* f. 公益扶贫专岗政策落实情况(虽然是e，但是按照f来，因为是插入的，所以页面显示为e) *********************-->

        <van-cell title="e.公益扶贫专岗政策落实情况" />
        <van-cell>
          <!---------------------------1.符合条件有意愿的贫困人口参加公益专岗----------------------------->
          <van-row>
            <van-col offset="1">1.符合条件有意愿的贫困人口参加公益专岗</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbf1" direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-if="form.jbf1 === '0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbf1Text"
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

          <!---------------------------2.签订上岗协议、误工补贴足额给付----------------------------->
          <van-row class="margin-t-10">
            <van-col offset="1">2.签订上岗协议、误工补贴足额给付</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbf2" direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-if="form.jbf2 === '0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbf2Text"
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
              <van-row class="margin-t-10 color-red font-size-14">（拍公益专岗协议书）</van-row>
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

          <!---------------------------3.上岗人员符合岗位要求，实际付出劳动----------------------------->
          <van-row class="margin-t-10">
            <van-col offset="1">3.上岗人员符合岗位要求，实际付出劳动</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbf3" direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
                <van-radio name="2">不涉及</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-if="form.jbf3 === '0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbf3Text"
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

        <!--********************* d. 其他政策落实情况(虽然是f，但是按照d来，因为是插入的，所以页面显示为f) *********************-->
        <van-cell title="f. 其他政策落实情况" />
        <van-cell>
          <van-row>
            <van-col offset="1" span="23">1. 改厕</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbd1" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jbd1=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbd1Text"
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
              <van-row class="margin-t-10 color-red font-size-14">（拍厕所照片）</van-row>
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
            <van-col offset="1" span="23">2. 户内通生活用电</van-col>
          </van-row>
          <van-row>
            <van-col class="float-right margin-t-10">
              <van-radio-group v-model="form.jbd2" disabled direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="0">否</van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
          <van-row>
            <van-col v-show="form.jbd2=='0'" offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbd2Text"
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
              <van-row class="margin-t-10 color-red font-size-14">（拍通电照片）</van-row>
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
            <van-col offset="1" span="23">3. 其他帮扶措施</van-col>
          </van-row>
          <van-row>
            <van-col offset="2" span="22" class="margin-t-10">
              <van-field
                v-model="form.jbd3"
                readonly
                rows="4"
                value=""
                label=""
                type="textarea"
                placeholder="请输入其他帮扶措施"
                autosize
                border=""
                class="text-area-border"
                :required="true"
                :rules="[{ required: true, message: '请填写原因'}]"
              />
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
      // 下拉刷新控制
      pullLoading: false,
      form: {
        jba11: '',
        jba11Text: '',
        jba12: '',
        jba12Text: '',
        jba13: '',
        jba13Text: '',
        jba14: '',
        jba14Text: '',
        jba21: '',
        jba21Text: '',
        jba22: '',
        jba22Text: '',
        jbb1: '',
        jbb1Text: '',
        jbb2: '',
        jbb2Text: '',
        jbb3: '',
        jbb3Text: '',
        jbb4: '',
        jbb4Text: '',
        jbb5: '',
        jbb5Text: '',
        jbb6: '',
        jbb6Text: '',
        jbb7: '',
        jbb7Text: '',
        jbc1: '',
        jbc1Text: '',
        jbc2: '',
        jbc2Text: '',
        jbe1: '',
        jbe1Text: '',
        jbe2: '',
        jbe2Text: '',
        jbe3: '',
        jbe3Text: '',
        jbf1: '',
        jbf1Text: '',
        jbf2: '',
        jbf2Text: '',
        jbf3: '',
        jbf3Text: '',
        jbd1: '',
        jbd1Text: '',
        jbd2: '',
        jbd2Text: '',
        jbd3: '',
        personId: null
      },
      filePath: {
        filePath1: [],
        filePath2: [],
        filePath4: [],
        filePath5: [],
        filePath6: [],
        filePath7: [],
        filePath8: []
      }
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
      this.$axios.post('/work/jPersonIndustury/get', param).then(res => {
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
            if (key.indexOf('jb') > -1) {
              res.data[key] = res.data[key] + ''
            }
          }
          // 填写原因的项--数据查询todo
          res.data.problemInfo.jPersonIndustury.forEach(item => {
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
    .text-area-border {
        /deep/ .van-field__value {
            .van-field__control {
                border: 2px solid #999 !important;
                border-radius: 8px;
            }
        }
    }
</style>
