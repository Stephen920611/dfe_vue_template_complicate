<template>
    <div>
        <!--<common-subtitle title="行业扶贫政策落实"></common-subtitle>-->
        <el-form ref="form">
            <!---------------------------a.兜底保障政策落实情况----------------------------->
            <el-divider></el-divider>
            <div>a.兜底保障政策落实情况</div>
            <el-divider></el-divider>
            <div>
                <!---------------------------1.低保----------------------------->
                <el-row>
                    <el-col :offset="1">1.低保</el-col>
                </el-row>
                <el-row class="margin-t-10">
                    <el-col :offset="2" :span="22">①符合条件的贫困人口纳入低保</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dba11" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="margin-t-10">
                    <el-col v-show="form.dba11 === '0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
                                v-model="form.dba11Text"
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
                    <el-col :offset="2" :span="22">②成年重度残疾人，残疾等级为三级的精神、智力残疾人单人纳入低保</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dba12" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dba12 === '0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
                                v-model="form.dba12Text"
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
                    <el-col :offset="2" :span="22">③2019年4月份以来未被取消低保</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dba13" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dba13 === '0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
                                v-model="form.dba13Text"
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
                    <el-col :offset="2" :span="22">④低保金按月足额发放</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dba14" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dba14 === '0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
                                v-model="form.dba14Text"
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
                <!---------------------------2.特困供养----------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">2.特困供养</el-col>
                </el-row>

                <el-row class="margin-t-10">
                    <el-col :offset="2" :span="22">①分散供养特困补助按月足额发放</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dba21" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dba21 === '0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
                                v-model="form.dba21Text"
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
                    <el-col :offset="2" :span="22">②符合条件的贫困人口纳入特困供养</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dba22" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dba22 === '0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
                                v-model="form.dba22Text"
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

                <!---------------------------3.对符合代缴条件的贫困人口由政府全额代缴不低于100元的居民基本养老保险费----------------------------->
                <!--<el-row class="margin-t-10">
                              <el-col :offset="1">3.对符合代缴条件的贫困人口由政府全额代缴不低于100元的居民基本养老保险费</el-col>
                          </el-row>
                          <el-row>
                              <el-col :offset="2" :span="22" class="float-right margin-t-10">
                                  <el-radio-group v-model="form.dba3" disabled direction="horizontal">
                                      <el-radio :label="1">是</el-radio>
                                      <el-radio :label="0">否</el-radio>
                                      <el-radio :label="2">不涉及</el-radio>
                                  </el-radio-group>
                              </el-col>
                          </el-row>
                          <el-row>
                              <el-col :offset="2" :span="22" class="margin-t-10" v-show="form.dba3 === '0'">
                                  <el-input
                                          readonly
                                          rows="4"
                                          v-model="form.dba3Text"
                                          type="textarea"
                                          placeholder=""
                                          autosize
                                          label=""
                                          class="text-area-border"
                                          :required="true"
                                          :rules="[{ required: true, message: '请填写原因'}]"
                                  />
                              </el-col>
                          </el-row>-->

                <!---------------------------4.年满60周岁未领取国家规定的基本养老保险待遇的贫困人口，纳入城乡居民基本养老保险制度，按月发放城乡居民养老保险待遇----------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">3.年满60周岁未领取国家规定的基本养老保险待遇的贫困人口，纳入城乡居民基本养老保险制度，按月发放城乡居民养老保险待遇</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dba4" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dba4 === '0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
                                v-model="form.dba4Text"
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

                <!---------------------------5.是否享受“参加居民基本养老保险的重度残疾人提出申请，经审核后可以提前5年发放养老金”政策。----------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">4.是否享受“参加居民基本养老保险的重度残疾人提出申请，经审核后可以提前5年发放养老金”政策。</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dba5" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dba5 === '0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
                                v-model="form.dba5Text"
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

            <!---------------------------b.残疾人政策落实情况----------------------------->
            <el-divider></el-divider>
            <div>b.残疾人政策落实情况</div>
            <el-divider></el-divider>
            <div>
                <!---------------------------1.享受低保待遇的持证贫困残疾人生活补贴按月足额发放----------------------------->
                <el-row>
                    <el-col :offset="1">1.享受低保待遇的持证贫困残疾人生活补贴按月足额发放</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbb1" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbb1 === '0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
                                v-model="form.dbb1Text"
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
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（拍残疾人证照片）</el-row>
                        <el-row class="margin-t-15">
                            <!--<van-uploader v-model="filePath.filePath1" multiple/>-->
                            <el-col v-for="image in filePath.filePath1" class="margin-r-15 img-wrap">
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

                <!---------------------------2.一、二级重度残疾人护理补贴按月足额发放----------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">2.一、二级重度残疾人护理补贴按月足额发放</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbb2" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbb2 === '0'" :offset="1" :span="23" class="margin-t-10">
                        <el-input
                                v-model="form.dbb2Text"
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

                <!---------------------------3.一、二级重度残疾人是否进行家庭无障碍改造----------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">3.一、二级重度残疾人是否进行家庭无障碍改造</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbb3" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbb3 === '0'" :offset="1" :span="23" class="margin-t-10">
                        <el-input
                                v-model="form.dbb3Text"
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
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（拍实施无障碍改造照片）</el-row>
                        <el-row class="margin-t-15">
                            <!--<van-uploader v-model="filePath.filePath2" multiple/>-->
                            <el-col v-for="image in filePath.filePath2" class="margin-r-15 img-wrap">
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

                <!---------------------------4.一、二级重度残疾人没有家庭无障碍改造需求----------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">4.一、二级重度残疾人没有家庭无障碍改造需求</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbb4" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbb4 === '0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
                                v-model="form.dbb4Text"
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

                <!---------------------------5.残疾人是否享受康复服务----------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">5.残疾人是否享受康复服务</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbb5" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbb5 === '0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
                                v-model="form.dbb5Text"
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

                <!---------------------------6.残疾人无康复服务需求----------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">6.残疾人无康复服务需求</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbb6" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbb6 === '0'" :offset="1" :span="23" class="margin-t-10">
                        <el-input
                                v-model="form.dbb6Text"
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

                <!---------------------------7.有办证意愿且符合办证条件的残疾人已办理残疾人证----------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">7.有办证意愿且符合办证条件的残疾人已办理残疾人证</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbb7" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbb7 === '0'" :offset="1" :span="23" class="margin-t-10">
                        <el-input
                                v-model="form.dbb7Text"
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

            <!---------------------------c.就业扶贫政策落实情况----------------------------->
            <el-divider></el-divider>
            <div>c.就业扶贫政策落实情况</div>
            <el-divider></el-divider>
            <div>
                <!---------------------------有意愿、有条件的贫困人口职业技能培训是否落实----------------------------->
                <el-row>
                    <el-col :offset="1">有意愿、有条件的贫困人口职业技能培训是否落实</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbc1" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbc1 === '0'" :offset="1" :span="23" class="margin-t-10">
                        <el-input
                                v-model="form.dbc1Text"
                                readonly
                                rows="4"
                                type="textarea"
                                placeholder="请填写原因"
                                autosize
                                label=""
                                class="text-area-border"
                        />
                    </el-col>
                </el-row>

            </div>

            <!---------------------------d.金融扶贫政策落实情况----------------------------->
            <el-divider></el-divider>
            <div>d.金融扶贫政策落实情况</div>
            <el-divider></el-divider>
            <div>
                <!---------------------------富民生产贷----------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">富民生产贷</el-col>
                </el-row>

                <el-row class="margin-t-10">
                    <el-col :offset="2" :span="22">①已发放富民生产贷的企业与贫困户按规定签订《帮扶协议书》</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbd21" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbd21 === '0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
                                v-model="form.dbd21Text"
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
                    <el-col :offset="2" :span="22">
                        <el-row class="margin-t-10 color-red font-size-14">（拍《帮扶协议书》照片）</el-row>
                        <el-row class="margin-t-15">
                            <!--<van-uploader v-model="filePath.filePath3" multiple/>-->
                            <el-col v-for="image in filePath.filePath3" class="margin-r-15 img-wrap">
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
                    <el-col :offset="2" :span="22">②贫困户了解帮扶协议书内容，帮扶企业按时间节点兑现帮扶协议</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbd22" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbd22 === '0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
                                v-model="form.dbd22Text"
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

            <!---------------------------e.孝善养老扶贫政策落实情况----------------------------->
            <el-divider></el-divider>
            <div>e.孝善养老扶贫政策落实情况</div>
            <el-divider></el-divider>
            <div>
                <!---------------------------1.符合条件的贫困老年人，参加孝善养老----------------------------->
                <el-row>
                    <el-col :offset="1">1.符合条件的贫困老年人（含无子女或子女无赡养能力的），参加孝善养老</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbe1" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbe1 === '0'" :offset="1" :span="23" class="margin-t-10">
                        <el-input
                                v-model="form.dbe1Text"
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

                <!---------------------------2.有赡养协议，赡养费足额实际给付----------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">2.有赡养协议，赡养费足额实际给付</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbe2" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbe2 === '0'" :offset="1" :span="23" class="margin-t-10">
                        <el-input
                                v-model="form.dbe2Text"
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
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（拍孝善养老协议书）</el-row>
                        <el-row class="margin-t-15">
                            <!--<van-uploader v-model="filePath.filePath4" multiple/>-->
                            <el-col v-for="image in filePath.filePath4" class="margin-r-15 img-wrap">
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

                <!---------------------------3.孝善奖补资金及时到位----------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">3.孝善奖补资金及时到位</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbe3" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbe3 === '0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
                                v-model="form.dbe3Text"
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

            <!---------------------------f.公益扶贫专岗政策落实情况----------------------------->
            <el-divider></el-divider>
            <div>f.公益扶贫专岗政策落实情况</div>
            <el-divider></el-divider>
            <div>
                <!---------------------------1.符合条件有意愿的贫困人口参加公益专岗----------------------------->
                <el-row>
                    <el-col :offset="1">1.符合条件有意愿的贫困人口参加公益专岗</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbf1" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbf1 === '0'" :offset="1" :span="23" class="margin-t-10">
                        <el-input
                                v-model="form.dbf1Text"
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

                <!---------------------------2.签订上岗协议、误工补贴足额给付----------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">2.签订上岗协议、误工补贴足额给付</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbf2" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbf2 === '0'" :offset="1" :span="23" class="margin-t-10">
                        <el-input
                                v-model="form.dbf2Text"
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
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（拍公益专岗协议书）</el-row>
                        <el-row class="margin-t-15">
                            <!--<van-uploader v-model="filePath.filePath5" multiple/>-->
                            <el-col v-for="image in filePath.filePath5" class="margin-r-15 img-wrap">
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

                <!---------------------------3.上岗人员符合岗位要求，实际付出劳动----------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">3.上岗人员符合岗位要求，实际付出劳动</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbf3" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbf3 === '0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
                                v-model="form.dbf3Text"
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

            <!---------------------------g.其他政策落实情况----------------------------->
            <el-divider></el-divider>
            <div>g.其他政策落实情况</div>
            <el-divider></el-divider>
            <div>
                <!---------------------------1.改厕----------------------------->
                <el-row>
                    <el-col :offset="1">1.改厕</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbg1" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbg1 === '0'" :offset="1" :span="23" class="margin-t-10">
                        <el-input
                                v-model="form.dbg1Text"
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
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（拍厕所照片）</el-row>
                        <el-row class="margin-t-15">
                            <!--<van-uploader v-model="filePath.filePath6" multiple/>-->
                            <el-col v-for="image in filePath.filePath6" class="margin-r-15 img-wrap">
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

                <!---------------------------2.户内通生活用电----------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">2.户内通生活用电</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dbg2" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-show="form.dbg2 === '0'" :offset="1" :span="23" class="margin-t-10">
                        <el-input
                                v-model="form.dbg2Text"
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
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（拍通电照片）</el-row>
                        <el-row class="margin-t-15">
                            <!--<van-uploader v-model="filePath.filePath7" multiple/>-->
                            <el-col v-for="image in filePath.filePath7" class="margin-r-15 img-wrap">
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
            </div>

            <!--<div style="margin: 1rem 1rem 1.5rem;">
                        <van-button round block type="info" native-type="submit" @click="onSubmit">
                            提交并跳转到下一项
                        </van-button>
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
                filePath: {
                    filePath1: [],
                    filePath2: [],
                    filePath3: [],
                    filePath4: [],
                    filePath5: [],
                    filePath6: [],
                    filePath7: []
                },
                form: {
                    dba11Text: '',
                    dba12Text: '',
                    dba13Text: '',
                    dba14Text: '',
                    dba21Text: '',
                    dba22Text: '',
                    //                    dba3Text: "",
                    dba4Text: '',
                    dba5Text: '',
                    dbb1Text: '',
                    dbb2Text: '',
                    dbb3Text: '',
                    dbb4Text: '',
                    dbb5Text: '',
                    dbb6Text: '',
                    dbb7Text: '',
                    dbc1Text: '',
                    dbd21Text: '',
                    dbd22Text: '',
                    dbe1Text: '',
                    dbe2Text: '',
                    dbe3Text: '',
                    dbf1Text: '',
                    dbf2Text: '',
                    dbf3Text: '',
                    dbg1Text: '',
                    dbg2Text: '',

                    dba11: '',
                    dba12: '',
                    dba13: '',
                    dba14: '',
                    dba21: '',
                    dba22: '',
                    //                    dba3: "",
                    dba4: '',
                    dba5: '',
                    dbb1: '',
                    dbb2: '',
                    dbb3: '',
                    dbb4: '',
                    dbb5: '',
                    dbb6: '',
                    dbb7: '',
                    dbc1: '',
                    dbd21: '',
                    dbd22: '',
                    dbe1: '',
                    dbe2: '',
                    dbe3: '',
                    dbf1: '',
                    dbf2: '',
                    dbf3: '',
                    dbg1: '',
                    dbg2: '',
                    id: null,
                    personId: null,
                    baseImgList: [],
                    problemInfo: {}
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
<style lang="scss" scoped>
    .text-area-border {
        /deep/ .van-field__value {
            .van-field__control {
                border: 2px solid #999 !important;
                border-radius: 8px;
            }
        }
    }
</style>
