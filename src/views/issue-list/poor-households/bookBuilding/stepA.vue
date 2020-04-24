<template>
    <van-pull-refresh v-model="pullLoading" @refresh="onPullRefresh">
        <div>
            <!--<common-subtitle title="两不愁三保障和饮水安全"></common-subtitle>-->
            <!---------------------------------a. 人均纯收入-------------------------------------->
            <van-form validate-first :scroll-to-error="true" :show-error="false">
                <van-cell title="a. 人均纯收入"/>
                <van-cell>
                    <!--------------------1. 2019年人均纯收入 元（拍本人家中2019年度收入明细表）-------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1" span="10">1. 2019年人均纯收入</van-col>
                        <van-col offset="1" span="9">
                            <van-field readonly v-model="form.daa1" type="number" label="" placeholder="" style="padding:0 !important;"/>
                        </van-col>
                        <van-col span="3">元</van-col>
                    </van-row>
                    <van-row class="margin-t-10">
                        <van-col offset="1" span="23">
                            <van-row class="margin-t-10 color-red font-size-14">（拍本人家中2019年度收入明细表）</van-row>
                            <van-row class="margin-t-15">
                                <!--<van-uploader v-model="filePath.filePath1" :after-read="afterRead" multiple/>-->
                                <van-col v-for="image in filePath.filePath1" class="margin-r-15 img-wrap">
                                    <van-image width="80"  height="80"
                                               :src="image"
                                               @click.native="lookImg([image])"
                                    />
                                </van-col>
                            </van-row>
                        </van-col>
                    </van-row>
                    <!------------------------2. 2020年人均纯收入预计达到4500元以上----------------------->
                    <van-row>
                        <van-col offset="1" span="23">2. 2020年人均纯收入预计达到4500元以上</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.daa2" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.daa2 === '0'">
                        <van-col offset="1" span="23" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.daa2Text"
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
                <!-----------------------------b、教育扶贫政策落实情况------------------------------>
                <van-cell title="b. 教育扶贫政策落实情况"/>
                <van-cell>
                    <!-------------------------1. 义务教育阶段学生------------------------------>
                    <van-row>
                        <van-col offset="1">1. 义务教育阶段学生接受义务教育</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dab11" disabled direction="horizontal" >
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dab11 === '0'">
                        <van-col offset="1" span="23" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dab11Text"
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

                    <!-------------------------2. 学前到大学教育资助、减免政策落实到位------------------------------>
                    <van-row class="margin-t-10">
                        <van-col offset="1">2. 学前到大学教育资助、减免政策落实到位</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dab2" disabled direction="horizontal" >
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dab2 === '0'">
                        <van-col offset="1" span="23" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dab2Text"
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
                <!-----------------------------c、健康和医保扶贫政策落实情况------------------------->
                <van-cell title="c. 健康和医保扶贫政策落实情况"/>
                <van-cell>
                    <!---------------------------1.健康扶贫政策------------------------------------>
                    <van-row>
                        <van-col offset="1">1. 健康扶贫政策</van-col>
                    </van-row>

                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">①是否知道县域内定点医院</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dac16" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dac16 === '0'">
                        <van-col offset="2" span="22" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dac16Text"
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
                        <van-col offset="2" span="22">②享受“先诊疗、后付费”政策（县域内定点医院住院不交押金）</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dac11" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dac11 === '0'">
                        <van-col offset="2" span="22" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dac11Text"
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
                        <van-col offset="2" span="22">③家庭医生签约服务</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dac12" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dac12 === '0'">
                        <van-col offset="2" span="22" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dac12Text"
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
                        <van-col offset="3" span="21">其中：慢性病签约服务</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dac121" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dac121 === '0'">
                        <van-col offset="3" span="21" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dac121Text"
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
                        <van-col offset="3" span="21">
                            <van-row class="margin-t-10 color-red font-size-14">（拍《签约服务手册》中体现慢性病签约服务的内容）</van-row>
                            <van-row class="margin-t-15">
                                <!--<van-uploader v-model="filePath.filePath2" multiple/>-->
                                <van-col v-for="image in filePath.filePath2" class="margin-r-15 img-wrap">
                                    <van-image width="80"  height="80"
                                               :src="image"
                                               @click.native="lookImg([image])"
                                    />
                                </van-col>
                            </van-row>

                        </van-col>
                    </van-row>

                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">④享受医疗机构减免政策（县域内定点医院两免两减半）</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dac13" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dac13 === '0'">
                        <van-col offset="2" span="22" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dac13Text"
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
                        <van-col offset="2" span="22">⑤严重精神障碍患者免费救治政策落实到位</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dac14" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dac14 === '0'">
                        <van-col offset="2" span="22" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dac14Text"
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
                        <van-col offset="2" span="22">⑥严重精神障碍患者随访制度落实到位</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dac15" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dac15 === '0'">
                        <van-col offset="2" span="22" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dac15Text"
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

                    <!----------------------------2.医保扶贫政策------------------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1">2. 医保扶贫政策</van-col>
                    </van-row>
                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">①参加居民基本医疗保险（大病保险）或职工基本医疗保险</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dac21" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dac21 === '0'">
                        <van-col offset="2" span="22" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dac21Text"
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
                        <van-col offset="2" span="22">②享受医疗救助政策（定点医院住院、政策规定报销药品，查看住院结算单中“医疗救助”栏）</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dac22" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dac22 === '0'">
                        <van-col offset="2" span="22" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dac22Text"
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
                        <van-col offset="2" span="22">③享受“一站式”即时结算服务（定点医院住院）</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dac23" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dac23 === '0'">
                        <van-col offset="2" span="22" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dac23Text"
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

                    <!----------------------------3.其他扶贫政策-------------------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1">3. 其他扶贫政策</van-col>
                    </van-row>
                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">享受医疗商业补充保险（扶贫特惠保险险种之一，由政府全额补贴购买）</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dac3" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dac3 === '0'">
                        <van-col offset="2" span="22" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dac3Text"
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
                        <van-col offset="3" span="21">
                            <van-row class="margin-t-10 color-red font-size-14">（拍《扶贫特惠保险卡》照片）</van-row>
                            <van-row class="margin-t-15">
                                <!--<van-uploader v-model="filePath.filePath3" multiple/>-->
                                <van-col v-for="image in filePath.filePath3" class="margin-r-15 img-wrap">
                                    <van-image width="80"  height="80"
                                               :src="image"
                                               @click.native="lookImg([image])"
                                    />
                                </van-col>
                            </van-row>
                        </van-col>
                    </van-row>
                </van-cell>

                <!----------------------------d、住房安全保障政策落实情况------------------------------->
                <van-cell title="d. 住房安全保障政策落实情况"/>
                <van-cell>
                    <!--------------------0.房屋整体情况（设置4个项目，分别是户外房屋整体、内房顶、内墙、外墙）------->
                    <van-row>
                        <van-col offset="1">0.房屋整体情况（设置4个项目，分别是户外房屋整体、内房顶、内墙、外墙）</van-col>
                    </van-row>

                    <!--①户外房屋整体-->
                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">①户外房屋整体</van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10">
                            <!--<van-uploader v-model="filePath.filePath4" multiple/>-->
                            <van-col v-for="image in filePath.filePath4" class="margin-r-15 img-wrap">
                                <van-image width="80"  height="80"
                                           :src="image"
                                           @click.native="lookImg([image])"
                                />
                            </van-col>
                        </van-col>
                    </van-row>

                    <!--②内房顶-->
                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">②内房顶</van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10">
                            <!--<van-uploader v-model="filePath.filePath5" multiple/>-->
                            <van-col v-for="image in filePath.filePath5" class="margin-r-15 img-wrap">
                                <van-image width="80"  height="80"
                                           :src="image"
                                           @click.native="lookImg([image])"
                                />
                            </van-col>
                        </van-col>
                    </van-row>

                    <!--③内墙-->
                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">③内墙</van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10">
                            <!--<van-uploader v-model="filePath.filePath6" multiple/>-->
                            <van-col v-for="image in filePath.filePath6" class="margin-r-15 img-wrap">
                                <van-image width="80"  height="80"
                                           :src="image"
                                           @click.native="lookImg([image])"
                                />
                            </van-col>
                        </van-col>
                    </van-row>

                    <!--④外墙-->
                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">④外墙</van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10">
                            <!--<van-uploader v-model="filePath.filePath7" multiple/>-->
                            <van-col v-for="image in filePath.filePath7" class="margin-r-15 img-wrap">
                                <van-image width="80"  height="80"
                                           :src="image"
                                           @click.native="lookImg([image])"
                                />
                            </van-col>
                        </van-col>
                    </van-row>


                    <!----------------------------1. 现居住的房屋安全鉴定及改造情况（拍房屋安全鉴定报告）--------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1" span="23">1. 现居住的房屋安全鉴定及改造情况</van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="1" span="23" class="margin-t-10">
                            <van-row class="margin-t-10 color-red font-size-14">（拍房屋安全鉴定报告）</van-row>
                            <van-row class="margin-t-15">
                                <!--<van-uploader v-model="filePath.filePath8" multiple/>-->
                                <van-col v-for="image in filePath.filePath8" class="margin-r-15 img-wrap">
                                    <van-image width="80"  height="80"
                                               :src="image"
                                               @click.native="lookImg([image])"
                                    />
                                </van-col>
                            </van-row>

                        </van-col>
                    </van-row>

                    <!--①2019年10月以来房屋安全鉴定报告-->
                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">①2019年10月以来房屋安全鉴定报告</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dad11" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dad11 === '0'">
                        <van-col offset="2" span="22" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dad11Text"
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

                    <!--②鉴定安全等级为C、D级房屋经过改造是否安全（2019年10月以来改造验收合格报告或2019年10月以来房屋安全鉴定报告）-->
                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">②鉴定安全等级为C、D级房屋经过改造是否安全（2019年10月以来改造验收合格报告或2019年10月以来房屋安全鉴定报告）</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dad12" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dad12 === '0'">
                        <van-col offset="2" span="22" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dad12Text"
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

                    <!--③鉴定安全等级为C、D级房屋的贫困户，安置后的房屋是否安全（2019年10月以来房屋安全鉴定报告）-->
                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">③鉴定安全等级为C、D级房屋的贫困户，安置后的房屋是否安全（2019年10月以来房屋安全鉴定报告）</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dad14" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dad14 === '0'">
                        <van-col offset="2" span="22" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dad14Text"
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

                    <!--③补助资金及时拨付到位-->
                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">③补助资金及时拨付到位</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dad13" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dad13 === '0'">
                        <van-col offset="2" span="22" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dad13Text"
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

                <!-------------------------------------e、饮水安全政策落实情况----------------------------------------------->
                <van-cell title="e. 饮水安全政策落实情况"/>
                <van-cell>
                    <van-row>
                        <van-col offset="1">1. 靠自来水保障饮水安全</van-col>
                    </van-row>

                    <!--①村通自来水，贫困户家中自来水正常供水（村级提供2019年10月以来水质检测合格报告）-->
                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">①村通自来水，贫困户家中自来水正常供水（村级提供2019年10月以来水质检测合格报告）</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dae11" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dae11 === '0'">
                        <van-col offset="1" span="23" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dae11Text"
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
                        <van-col offset="2" span="22">
                            <van-row class="margin-t-10 color-red font-size-14">（拍家用自来水照片）</van-row>
                            <van-row class="margin-t-15">
                                <!--<van-uploader v-model="filePath.filePath9" multiple/>-->
                                <van-col v-for="image in filePath.filePath9" class="margin-r-15 img-wrap">
                                    <van-image width="80"  height="80"
                                               :src="image"
                                               @click.native="lookImg([image])"
                                    />
                                </van-col>
                            </van-row>

                        </van-col>
                    </van-row>

                    <!--②距离村庄较远不具备自来水入户条件，采取符合安全饮水标准的措施保障饮水安全（有2019年10月以来水质检测合格报告）-->
                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">②距离村庄较远不具备自来水入户条件，采取符合安全饮水标准的措施保障饮水安全（有2019年10月以来水质检测合格报告）
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dae12" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dae12 === '0'">
                        <van-col offset="1" span="23" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dae12Text"
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

                    <!----------------------2. 靠村内集中供水点（净化水设施等）保障饮水安全，取水方便 （村级提供2019年10月以来水质检测合格报告）------------------>
                    <van-row class="margin-t-10">
                        <van-col offset="1" span="23">2. 靠村内集中供水点（净化水设施等）保障饮水安全，取水方便 （村级提供2019年10月以来水质检测合格报告）</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dae2" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dae2 === '0'">
                        <van-col offset="1" span="23" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dae2Text"
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

                    <!----------------------3. 靠村内集中供水点（净化水设施等）保障饮水安全，对行动不便的贫困群众，安排专人帮扶送水保障饮水安全------------------>
                    <van-row class="margin-t-10">
                        <van-col offset="1" span="23">3. 靠村内集中供水点（净化水设施等）保障饮水安全，对行动不便的贫困群众，安排专人帮扶送水保障饮水安全</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dae3" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dae3 === '0'">
                        <van-col offset="1" span="23" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dae3Text"
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

                    <!----------------------4. 村内无任何集中供水设施，贫困户饮水安全无保障------------------>
                    <van-row class="margin-t-10">
                        <van-col offset="1" span="23">4. 村内无任何集中供水设施，贫困户饮水安全无保障</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dae4" disabled direction="horizontal">
                                <van-radio name="0">是</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row v-show="form.dae4 === '0'">
                        <van-col offset="1" span="23" class="float-left margin-t-10">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dae4Text"
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
                <!--<div style="margin: 1rem 1rem 1.5rem;">
                    <van-button round block type="info" native-type="submit" @click="onSubmit">
                        提交并跳转到下一项
                    </van-button>
                </div>-->
            </van-form>

            <!-------------------------------用overlay代替预览效果------------------------------ -->
            <overlayImage ref="overlayImg"></overlayImage>
        </div>
    </van-pull-refresh>
</template>
<script>
    import commonSubtitle from '@/components/common/commonSubtitle.vue';
    import overlayImage from '../../components/previewImage/overlayImage.vue'
    import common from '@/mixins/common';
    import Vue from 'vue'
    import { Dialog,Toast,PullRefresh } from 'vant'
    Vue.use(Dialog).use(Toast).use(PullRefresh)
    export default {
        props:['poorId'],
        mixins: [common],
        data() {
            return {
                // 下拉刷新控制
                pullLoading: false,
                text:'',
                filePath:{
                    filePath1: [],
                    filePath2: [],
                    filePath3: [],
                    filePath4: [],
                    filePath5: [],
                    filePath6: [],
                    filePath7: [],
                    filePath8: [],
                    filePath9: [],
                },
                form:{
                    baseImgList:[],
                    problemInfo:{},
                    daa1: null,
                    daa2: null,
                    dab11: null,
                    dab2: null,
                    dac16: null,
                    dac11: null,
                    dac12: null,
                    dac121: null,
                    dac13: null,
                    dac14: null,
                    dac15: null,
                    dac21: null,
                    dac22: null,
                    dac23: null,
                    dac3: null,
                    dad11: null,
                    dad12: null,
                    dad14: null,
                    dad13: null,
                    dae1: null,
                    dae11: null,
                    daa2Text:"",
                    dab11Text:"",
                    dab2Text:"",
                    dac16Text:"",
                    dac11Text:"",
                    dac12Text:"",
                    dac121Text:"",
                    dac13Text:"",
                    dac14Text:"",
                    dac15Text:"",
                    dac21Text:"",
                    dac22Text:"",
                    dac23Text:"",
                    dac3Text:"",
                    dad11Text:"",
                    dad12Text:"",
                    dad14Text:"",
                    dad13Text:"",
                    dae11Text:"",
                    dae12Text:"",
                    dae2Text:"",
                    dae3Text:"",
                    dae4Text:"",
                    dae12: null,
                    dae2: null,
                    dae3: null,
                    dae4: null,
                    id:null,
                    personId:null,
                },

            };
        },
        components: {
            commonSubtitle,
            overlayImage,
        },
        mounted(){
            this.form.personId = this.poorId
            this.getInfo({personId:this.form.personId})
        },
        methods: {
            //获取信息
            getInfo(param){
                //添加loading效果
                Toast.loading({
                    message: '加载中...',
                    duration: 0, // 持续展示
                    forbidClick: true
                });
                this.$axios.post('/work/dPersonSafeguard/get',param).then(res => {
                    Toast.clear();
                    if(res.code == 1000){
                        if(!res.data){
                            //Toast("信息未采集！");
                            return
                        }
                        let {keys, values, entries} = Object;
                        //获取返回值的上传图片
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
                        //将单选框返回的值转为字符串
                        for (let key of keys(res.data)) {
                            if(key.indexOf('da')>-1){
                                res.data[key] = res.data[key]+"";
                            }
                        }
                        //填写原因的项--数据查询todo
                        res.data.problemInfo.dPersonSafeguard.forEach(item=>{
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
<style lang="less" scoped>
    @import "../../../../style/bookBuilding/style-book-build-info.less";
</style>
<style lang="less" scoped>
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
