<!--两不愁三保障和饮水安全-->
<template>
        <div v-loading="loading">
            <el-form ref="form">
                <!--********************* a. 人均纯收入 *********************-->
                <el-divider></el-divider>
                <div>a. 人均纯收入</div>
                <el-divider></el-divider>
                <div>
                    <el-row class="margin-t-10">
                        <el-col :offset="1" :span="23">1. 2019年人均纯收入  {{form.jaa1 === '' ? '--' : form.jaa1}}  元</el-col>
                       <!-- <el-col :offset="1" :span="9">
                            <el-input v-model="form.jaa1" readonly type="number" label="" placeholder=""
                                       style="padding:0 !important;"/>
                        </el-col>
                        <el-col :span="3">元</el-col>-->
                    </el-row>
                    <el-row class="margin-t-10">
                        <el-col :offset="1" :span="23">
                            <el-row class="margin-t-10 color-red font-size-14">（拍本人家中2019年度收入明细表）</el-row>
                            <el-row class="margin-t-15">
                                <!--<el-uploader v-model="form.file_type1" multiple/>-->
                                <el-col v-for="image in filePath.filePath1" class="margin-r-15 img-wrap" :key="image">
                                    <el-image
                                            :src="image"
                                            class="img-content"
                                            :preview-src-list="filePath.filePath1"
                                            @click.native="lookImg([image])"
                                    />
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                    <el-row class="margin-t-10">
                        <el-col :offset="1" :span="23" class="margin-t-10">2. 2020年人均纯收入预计达到4500元以上</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="1" :span="23" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jaa2" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-show="form.jaa2=='0'" :offset="2" :span="22" class="margin-t-10">
                            <el-input
                                    v-model="form.jaa2Text"
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
                </div>

                <!--********************* b. 教育扶贫政策落实情况 ********** ***********-->
                <el-divider></el-divider>
                <div>b. 教育扶贫政策落实情况</div>
                <el-divider></el-divider>
                <div>
                    <el-row>
                        <el-col :offset="1" :span="23" class="margin-t-10">1. 义务教育阶段学生接受义务教育</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="1" :span="23" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jab11" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-show="form.jab11=='0'" :offset="2" :span="22" class="margin-t-10">
                            <el-input
                                    v-model="form.jab11Text"
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

                    <!--<el-row>
                                  <el-col :offset="2" class="margin-t-10">① 接受义务教育</el-col>
                                  <el-col :offset="1" :span="23" class="float-right margin-t-10">
                                      <el-radio-group v-model="form.jab11" direction="horizontal">
                                          <el-radio :label="1">正常上学</el-radio>
                                          <el-radio :label="2">送教上门</el-radio>
                                      </el-radio-group>
                                  </el-col>
                              </el-row>
                              <el-row>
                                  <el-col :offset="2" class="margin-t-10">② 失辍学</el-col>
                                  <el-col :offset="1" :span="23" class="float-right margin-t-10">
                                      <el-radio-group v-model="form.jAb12" direction="horizontal">
                                          <el-radio :label="1">因贫</el-radio>
                                          <el-radio :label="2">因其他</el-radio>
                                      </el-radio-group>
                                  </el-col>
                              </el-row>
                              <el-row>
                                  <el-col :offset="2" class="margin-t-10">③ 不涉及</el-col>
                                  <el-col :offset="1" :span="23" class="float-right margin-t-10">
                                      <el-radio-group v-model="form.jAb13" direction="horizontal">
                                          <el-radio :label="1"></el-radio>
                                      </el-radio-group>
                                  </el-col>
                              </el-row>-->
                    <el-row>
                        <el-col :offset="1" :span="23" class="margin-t-10">2.学前到大学教育资助、减免政策落实到位</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="1" :span="23" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jab2" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-show="form.jab2=='0'" :offset="2" :span="22" class="margin-t-10">
                            <el-input
                                    v-model="form.jab2Text"
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
                </div>
                <!--********************* c. 健康和医保扶贫政策落实情况 *********************-->
                <el-divider></el-divider>
                <div>c. 健康和医保扶贫政策落实情况</div>
                <el-divider></el-divider>
                <div>
                    <el-row>
                        <el-col :offset="1" :span="23" class="margin-t-10">1.健康扶贫政策</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="margin-t-10">① 是否知道县域内定点医院</el-col>
                        <el-col :offset="2" :span="22" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jac16" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-show="form.jac16=='0'" :offset="2" :span="22" class="margin-t-10">
                            <el-input
                                    v-model="form.jac16Text"
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
                        <el-col :offset="2" :span="22" class="margin-t-10">② 享受“先诊疗、后付费”政策（县域内定点医院住院不交押金）</el-col>
                        <el-col :offset="2" :span="22" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jac11" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-show="form.jac11=='0'" :offset="2" :span="22" class="margin-t-10">
                            <el-input
                                    v-model="form.jac11Text"
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
                        <el-col :offset="2" :span="22" class="margin-t-10">③ 家庭医生签约服务</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jac12" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-show="form.jac12=='0'" :offset="2" :span="22" class="margin-t-10">
                            <el-input
                                    v-model="form.jac12Text"
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
                        <el-col :offset="2" :span="22">
                            <el-row class="margin-t-10 font-size-14">其中：慢性病签约服务</el-row>
                            <!--<el-uploader style="margin: 10px 0" v-model="form.file_type2" multiple/>-->
                            <el-row>
                                <el-col :offset="0" :span="24" class="float-right margin-t-10">
                                    <el-radio-group v-model="form.jac121" disabled direction="horizontal">
                                        <el-radio :label="1">是</el-radio>
                                        <el-radio :label="0">否</el-radio>
                                        <el-radio :label="2">不涉及</el-radio>
                                    </el-radio-group>
                                </el-col>
                            </el-row>
                            <el-row class="margin-t-10 color-red font-size-14">(拍《签约服务手册》中体现慢性病签约服务的内容）</el-row>
                            <el-row>
                                <el-col v-show="form.jac121=='0'" :offset="2" :span="22" class="margin-t-10">
                                    <el-input
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
                                </el-col>
                            </el-row>
                            <el-col v-for="image in filePath.filePath2" class="margin-r-15 img-wrap" :key="image">
                                <el-image
                                        class="img-content"
                                        :preview-src-list="filePath.filePath2"
                                        :src="image"
                                        @click.native="lookImg([image])"
                                />
                            </el-col>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="margin-t-10">④ 享受医疗机构减免政策（县域内定点医院两免两减半）</el-col>
                        <el-col :offset="2" :span="22" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jac13" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-show="form.jac13=='0'" :offset="2" :span="22" class="margin-t-10">
                            <el-input
                                    v-model="form.jac13Text"
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
                        <el-col :offset="2" :span="22" class="margin-t-10">⑤ 严重精神障碍患者免费救治政策落实到位</el-col>
                        <el-col :offset="2" :span="22" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jac14" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-show="form.jac14=='0'" :offset="2" :span="22" class="margin-t-10">
                            <el-input
                                    v-model="form.jac14Text"
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
                        <el-col :offset="2" :span="22" class="margin-t-10">⑥ 严重精神障碍患者随访制度落实到位</el-col>
                        <el-col :offset="2" :span="22" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jac15" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-show="form.jac15=='0'" :offset="2" :span="22" class="margin-t-10">
                            <el-input
                                    v-model="form.jac15Text"
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
                        <el-col :offset="1" :span="23" class="margin-t-10">2.医保扶贫政策</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="margin-t-10">①参加居民基本医疗保险（大病保险）或职工基本医疗保险</el-col>
                        <el-col :offset="2" :span="22" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jac21" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-show="form.jac21=='0'" :offset="2" :span="22" class="margin-t-10">
                            <el-input
                                    v-model="form.jac21Text"
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
                        <el-col :offset="2" :span="22" class="margin-t-10">② 享受医疗救助政策（定点医院住院、政策规定报销药品，查看住院结算单中“医疗救助”栏）
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jac22" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-show="form.jac22=='0'" :offset="2" :span="22" class="margin-t-10">
                            <el-input
                                    v-model="form.jac22Text"
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
                        <el-col :offset="2" :span="22" class="margin-t-10">③ 享受“一站式”即时结算服务（定点医院住院）</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jac23" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-show="form.jac23=='0'" :offset="2" :span="22" class="margin-t-10">
                            <el-input
                                    v-model="form.jac23Text"
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
                        <el-col :offset="1" :span="23" class="margin-t-10">3.其他扶贫政策</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="margin-t-10">① 享受医疗商业补充保险（扶贫特惠保险险种之一，由政府全额补贴购买）</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jac3" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-show="form.jac3=='0'" :offset="2" :span="22" class="margin-t-10">
                            <el-input
                                    v-model="form.jac3Text"
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
                        <el-col :offset="2" :span="22">
                            <el-row class="margin-t-10 color-red font-size-14">（拍《扶贫特惠保险卡》照片）</el-row>
                            <!--<el-uploader style="margin: 10px 0" v-model="form.file_type3" multiple/>-->
                            <el-col v-for="image in filePath.filePath3" class="margin-r-15 img-wrap" :key="image">
                                <el-image
                                        class="img-content"
                                        :preview-src-list="filePath.filePath3"
                                        :src="image"
                                        @click.native="lookImg([image])"
                                />
                            </el-col>
                        </el-col>
                    </el-row>
                </div>
                <!--********************* d. 住房安全保障政策落实情况 *********************-->
                <el-divider></el-divider>
                <div>d. 住房安全保障政策落实情况</div>
                <el-divider></el-divider>
                <div>
                    <el-row>
                        <el-col :offset="1" :span="23" class="margin-t-10">0. 房屋整体情况</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="margin-t-10">① 户外房屋整体
                            <el-row class="margin-t-10 color-red font-size-14">（拍户外房屋整体）</el-row>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22">
                            <!--<el-uploader style="margin: 10px 0" v-model="form.file_type4" multiple/>-->
                            <el-col v-for="image in filePath.filePath4" class="margin-r-15 img-wrap" :key="image">
                                <el-image
                                        class="img-content"
                                        :preview-src-list="filePath.filePath4"
                                        :src="image"
                                        @click.native="lookImg([image])"
                                />
                            </el-col>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="margin-t-10">② 内房顶
                            <el-row class="margin-t-10 color-red font-size-14">（拍内房顶）</el-row>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22">
                            <!--<el-uploader style="margin: 10px 0" v-model="form.file_type5" multiple/>-->
                            <el-col v-for="image in filePath.filePath5" class="margin-r-15 img-wrap" :key="image">
                                <el-image
                                        class="img-content"
                                        :preview-src-list="filePath.filePath5"
                                        :src="image"
                                        @click.native="lookImg([image])"
                                />
                            </el-col>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="margin-t-10">③ 内墙
                            <el-row class="margin-t-10 color-red font-size-14">（拍内墙）</el-row>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22">
                            <!--<el-uploader style="margin: 10px 0" v-model="form.file_type6" multiple/>-->
                            <el-col v-for="image in filePath.filePath6" class="margin-r-15 img-wrap" :key="image">
                                <el-image
                                        class="img-content"
                                        :preview-src-list="filePath.filePath6"
                                        :src="image"
                                        @click.native="lookImg([image])"
                                />
                            </el-col>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="margin-t-10">④ 外墙
                            <el-row class="margin-t-10 color-red font-size-14">（拍外墙）</el-row>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22">
                            <!-- <el-uploader style="margin: 10px 0" v-model="form.file_type7" multiple/>-->
                            <el-col v-for="image in filePath.filePath7" class="margin-r-15 img-wrap" :key="image">
                                <el-image
                                        class="img-content"
                                        :preview-src-list="filePath.filePath7"
                                        :src="image"
                                        @click.native="lookImg([image])"
                                />
                            </el-col>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :offset="1" :span="23" class="margin-t-10">1. 现居住的房屋安全鉴定及改造情况
                            <el-row class="margin-t-10 color-red font-size-14">（拍房屋安全鉴定报告）</el-row>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22">
                            <!-- <el-uploader style="margin: 10px 0" v-model="form.file_type8" multiple/>-->
                            <el-col v-for="image in filePath.filePath8" class="margin-r-15 img-wrap" :key="image">
                                <el-image
                                        class="img-content"
                                        :preview-src-list="filePath.filePath8"
                                        :src="image"
                                        @click.native="lookImg([image])"
                                />
                            </el-col>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="margin-t-10">① 2019年10月以来房屋安全鉴定报告</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jad11" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-col v-show="form.jad11=='0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
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
                    </el-col>
                    <el-row>
                        <el-col :offset="2" :span="22" class="margin-t-10">
                            ② 鉴定安全等级为C、D级房屋经过改造是否安全（2019年10月以来改造验收合格报告或2019年10月以来房屋安全鉴定报告）
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jad12" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-col v-show="form.jad12=='0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
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
                    </el-col>
                    <el-row>
                        <el-col :offset="2" :span="22" class="margin-t-10">
                            ③ 鉴定安全等级为C、D级房屋的贫困户，安置后的房屋是否安全（2019年10月以来房屋安全鉴定报告）
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jad13" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-col v-show="form.jad13=='0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
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
                    </el-col>
                    <el-row>
                        <el-col :offset="2" :span="22" class="margin-t-10">④ 补助资金及时拨付到位 </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jad14" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-col v-show="form.jad14=='0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
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
                    </el-col>

                </div>
                <!--********************* e 饮水安全政策落实情况 *********************-->
                <el-divider></el-divider>
                <div>e. 饮水安全政策落实情况</div>
                <el-divider></el-divider>
                <div>
                    <el-row>
                        <el-col :offset="1" :span="23" class="margin-t-10">1. 靠自来水保障饮水安全</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="margin-t-10">① 村通自来水，贫困户家中自来水正常供水（村级提供2019年10月以来水质检测合格报告）
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jae11" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-col v-show="form.jae11=='0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
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
                    </el-col>
                    <el-row>
                        <el-col :offset="2" :span="22">
                            <el-row class="margin-t-10 color-red font-size-14">（拍家用自来水照片）</el-row>
                            <!--<el-uploader style="margin: 10px 0" v-model="form.file_type9" multiple/>-->
                            <el-col v-for="image in filePath.filePath9" class="margin-r-15 img-wrap" :key="image">
                                <el-image
                                        class="img-content"
                                        :preview-src-list="filePath.filePath9"
                                        :src="image"
                                        @click.native="lookImg([image])"
                                />
                            </el-col>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="margin-t-10">
                            ② 距离村庄较远不具备自来水入户条件，采取符合安全饮水标准的措施保障饮水安全（有2019年10月以来水质检测合格报告）
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="2" :span="22" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jae12" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-col v-show="form.jae12=='0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
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
                    </el-col>
                    <el-row>
                        <el-col :offset="1" :span="23" class="margin-t-10">
                            2. 靠村内集中供水点（净化水设施等）保障饮水安全，取水方便 （村级提供2019年10月以来水质检测合格报告）
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="1" :span="23" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jae2" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-col v-show="form.jae2=='0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
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
                    </el-col>
                    <el-row>
                        <el-col :offset="1" :span="23" class="margin-t-10">
                            3. 靠村内集中供水点（净化水设施等）保障饮水安全，对行动不便的贫困群众，安排专人帮扶送水保障饮水安全
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="1" :span="23" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jae3" disabled direction="horizontal">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="0">否</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-col v-show="form.jae3=='0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
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
                    </el-col>

                    <el-row>
                        <el-col :offset="1" :span="23" class="margin-t-10">4. 村内无任何集中供水设施，贫困户饮水安全无保障</el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="1" :span="23" class="float-right margin-t-10">
                            <el-radio-group v-model="form.jae4" disabled direction="horizontal">
                                <el-radio :label="0">是</el-radio>
                                <el-radio :label="2">不涉及</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-col v-show="form.jae4=='0'" :offset="2" :span="22" class="margin-t-10">
                        <el-input
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
                    </el-col>
                </div>
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
    import { fetchJPersonSafeguard } from '@/api/issueList'

    export default {
        components: {
        },
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
                pullLoading: false,
                loading:true
            }
        },
        mounted() {
//            this.form.personId = this.poorId
//            this.getInfo({personId: this.form.personId})
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
                fetchJPersonSafeguard(params).then(resp => {
                    self.loading = false;
                    if(resp.data){
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
                        resp.data.problemInfo.jPersonSafeguard.forEach(item=>{
                            self.editShowInfoFunc(this.form,item);
                        });
                        //转其他的
//                    self.editShowInfoFunc(this.form,resp.data);


                    }


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
<style lang="scss" scoped >
    .info {
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .text-area-border {
        /deep/ .el-field__value {
            .el-field__control {
                border: 2px solid #999 !important;
                border-radius: 8px;
            }
        }
    }
    .img-content{
        width: 100px;
        height: 100px;
    }
</style>
