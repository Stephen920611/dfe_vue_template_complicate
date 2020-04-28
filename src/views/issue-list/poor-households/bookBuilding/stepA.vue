<template>

    <div>
        <!---------------------------------a. 人均纯收入-------------------------------------->
        <el-form ref="form"  v-loading="loading">
            <el-divider></el-divider>
            <div>a. 人均纯收入</div>
            <el-divider></el-divider>
            <div>
                <!--------------------1. 2019年人均纯收入 元（拍本人家中2019年度收入明细表）-------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1" :span="23">1. 2019年人均纯收入  {{form.daa1 === null ? '--' : form.daa1}}  元</el-col>
                    <!--<el-col :offset="1" :span="9">
                        <el-input v-model="form.daa1" readonly type="number" label="" placeholder=""
                                   style="padding:0 !important;"/>
                    </el-col>
                    <el-col :span="3">元</el-col>-->
                </el-row>
                <el-row class="margin-t-10">
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（拍本人家中2019年度收入明细表）</el-row>
                        <el-row class="margin-t-15">
                            <!--<van-uploader v-model="filePath.filePath1" :after-read="afterRead" multiple/>-->
                            <el-col v-for="image in filePath.filePath1" class="margin-r-15 img-wrap" :span="4" :key="image">
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
                <!------------------------2. 2020年人均纯收入预计达到4500元以上----------------------->
                <el-row>
                    <el-col :offset="1" :span="23">2. 2020年人均纯收入预计达到4500元以上</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.daa2" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.daa2 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.daa2Text"
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
            <!-----------------------------b、教育扶贫政策落实情况------------------------------>
            <!--<div title="b. 教育扶贫政策落实情况"/>-->
            <el-divider></el-divider>
            <div>b. 教育扶贫政策落实情况</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1. 义务教育阶段学生------------------------------>
                <el-row>
                    <el-col :offset="1">1. 义务教育阶段学生接受义务教育</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dab11" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dab11 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dab11Text"
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

                <!-------------------------2. 学前到大学教育资助、减免政策落实到位------------------------------>
                <el-row class="margin-t-10">
                    <el-col :offset="1">2. 学前到大学教育资助、减免政策落实到位</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dab2" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dab2 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dab2Text"
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
            <!-----------------------------c、健康和医保扶贫政策落实情况------------------------->
            <!--<div title="c. 健康和医保扶贫政策落实情况"/>-->
            <el-divider></el-divider>
            <div>c. 健康和医保扶贫政策落实情况</div>
            <el-divider></el-divider>
            <div>
                <!---------------------------1.健康扶贫政策------------------------------------>
                <el-row>
                    <el-col :offset="1">1. 健康扶贫政策</el-col>
                </el-row>

                <el-row class="margin-t-10">
                    <el-col :offset="2" :span="22">①是否知道县域内定点医院</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dac16" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dac16 === '0'">
                    <el-col :offset="2" :span="22" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dac16Text"
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
                    <el-col :offset="2" :span="22">②享受“先诊疗、后付费”政策（县域内定点医院住院不交押金）</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dac11" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dac11 === '0'">
                    <el-col :offset="2" :span="22" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dac11Text"
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
                    <el-col :offset="2" :span="22">③家庭医生签约服务</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dac12" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dac12 === '0'">
                    <el-col :offset="2" :span="22" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dac12Text"
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
                    <el-col :offset="3" :span="21">其中：慢性病签约服务</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dac121" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dac121 === '0'">
                    <el-col :offset="3" :span="21" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dac121Text"
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
                    <el-col :offset="3" :span="21">
                        <el-row class="margin-t-10 color-red font-size-14">（拍《签约服务手册》中体现慢性病签约服务的内容）</el-row>
                        <el-row class="margin-t-15">
                            <!--<van-uploader v-model="filePath.filePath2" multiple/>-->
                            <el-col v-for="image in filePath.filePath2" class="margin-r-15 img-wrap" :span="4" :key="image">
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
                    <el-col :offset="2" :span="22">④享受医疗机构减免政策（县域内定点医院两免两减半）</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dac13" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dac13 === '0'">
                    <el-col :offset="2" :span="22" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dac13Text"
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
                    <el-col :offset="2" :span="22">⑤严重精神障碍患者免费救治政策落实到位</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dac14" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dac14 === '0'">
                    <el-col :offset="2" :span="22" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dac14Text"
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
                    <el-col :offset="2" :span="22">⑥严重精神障碍患者随访制度落实到位</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dac15" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dac15 === '0'">
                    <el-col :offset="2" :span="22" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dac15Text"
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

                <!----------------------------2.医保扶贫政策------------------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">2. 医保扶贫政策</el-col>
                </el-row>
                <el-row class="margin-t-10">
                    <el-col :offset="2" :span="22">①参加居民基本医疗保险（大病保险）或职工基本医疗保险</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dac21" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dac21 === '0'">
                    <el-col :offset="2" :span="22" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dac21Text"
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
                    <el-col :offset="2" :span="22">②享受医疗救助政策（定点医院住院、政策规定报销药品，查看住院结算单中“医疗救助”栏）</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dac22" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dac22 === '0'">
                    <el-col :offset="2" :span="22" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dac22Text"
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
                    <el-col :offset="2" :span="22">③享受“一站式”即时结算服务（定点医院住院）</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dac23" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dac23 === '0'">
                    <el-col :offset="2" :span="22" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dac23Text"
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

                <!----------------------------3.其他扶贫政策-------------------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1">3. 其他扶贫政策</el-col>
                </el-row>
                <el-row class="margin-t-10">
                    <el-col :offset="2" :span="22">享受医疗商业补充保险（扶贫特惠保险险种之一，由政府全额补贴购买）</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dac3" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dac3 === '0'">
                    <el-col :offset="2" :span="22" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dac3Text"
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
                    <el-col :offset="3" :span="21">
                        <el-row class="margin-t-10 color-red font-size-14">（拍《扶贫特惠保险卡》照片）</el-row>
                        <el-row class="margin-t-15">
                            <!--<van-uploader v-model="filePath.filePath3" multiple/>-->
                            <el-col v-for="image in filePath.filePath3" class="margin-r-15 img-wrap" :span="4" :key="image">
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

            <!----------------------------d、住房安全保障政策落实情况------------------------------->
            <!--<div title="d. 住房安全保障政策落实情况"/>-->
            <el-divider></el-divider>
            <div>d. 住房安全保障政策落实情况</div>
            <el-divider></el-divider>
            <div>
                <!--------------------0.房屋整体情况（设置4个项目，分别是户外房屋整体、内房顶、内墙、外墙）------->
                <el-row>
                    <el-col :offset="1">0.房屋整体情况（设置4个项目，分别是户外房屋整体、内房顶、内墙、外墙）</el-col>
                </el-row>

                <!--①户外房屋整体-->
                <el-row class="margin-t-10">
                    <el-col :offset="2" :span="22">①户外房屋整体</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="margin-t-10">
                        <!--<van-uploader v-model="filePath.filePath4" multiple/>-->
                        <el-col v-for="image in filePath.filePath4" class="margin-r-15 img-wrap" :span="4" :key="image">
                            <el-image
                                    width="80"
                                    height="80"
                                    :src="image"
                                    @click.native="lookImg([image])"
                            />
                        </el-col>
                    </el-col>
                </el-row>

                <!--②内房顶-->
                <el-row class="margin-t-10">
                    <el-col :offset="2" :span="22">②内房顶</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="margin-t-10">
                        <!--<van-uploader v-model="filePath.filePath5" multiple/>-->
                        <el-col v-for="image in filePath.filePath5" class="margin-r-15 img-wrap" :span="4" :key="image">
                            <el-image
                                    width="80"
                                    height="80"
                                    :src="image"
                                    @click.native="lookImg([image])"
                            />
                        </el-col>
                    </el-col>
                </el-row>

                <!--③内墙-->
                <el-row class="margin-t-10">
                    <el-col :offset="2" :span="22">③内墙</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="margin-t-10">
                        <!--<van-uploader v-model="filePath.filePath6" multiple/>-->
                        <el-col v-for="image in filePath.filePath6" class="margin-r-15 img-wrap" :span="4" :key="image">
                            <el-image
                                    width="80"
                                    height="80"
                                    :src="image"
                                    @click.native="lookImg([image])"
                            />
                        </el-col>
                    </el-col>
                </el-row>

                <!--④外墙-->
                <el-row class="margin-t-10">
                    <el-col :offset="2" :span="22">④外墙</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="margin-t-10">
                        <!--<van-uploader v-model="filePath.filePath7" multiple/>-->
                        <el-col v-for="image in filePath.filePath7" class="margin-r-15 img-wrap" :span="4" :key="image">
                            <el-image
                                    width="80"
                                    height="80"
                                    :src="image"
                                    @click.native="lookImg([image])"
                            />
                        </el-col>
                    </el-col>
                </el-row>

                <!----------------------------1. 现居住的房屋安全鉴定及改造情况（拍房屋安全鉴定报告）--------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1" :span="23">1. 现居住的房屋安全鉴定及改造情况</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="margin-t-10">
                        <el-row class="margin-t-10 color-red font-size-14">（拍房屋安全鉴定报告）</el-row>
                        <el-row class="margin-t-15">
                            <!--<van-uploader v-model="filePath.filePath8" multiple/>-->
                            <el-col v-for="image in filePath.filePath8" class="margin-r-15 img-wrap" :span="4" :key="image">
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

                <!--①2019年10月以来房屋安全鉴定报告-->
                <el-row class="margin-t-10">
                    <el-col :offset="2" :span="22">①2019年10月以来房屋安全鉴定报告</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dad11" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dad11 === '0'">
                    <el-col :offset="2" :span="22" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dad11Text"
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

                <!--②鉴定安全等级为C、D级房屋经过改造是否安全（2019年10月以来改造验收合格报告或2019年10月以来房屋安全鉴定报告）-->
                <el-row class="margin-t-10">
                    <el-col :offset="2" :span="22">②鉴定安全等级为C、D级房屋经过改造是否安全（2019年10月以来改造验收合格报告或2019年10月以来房屋安全鉴定报告）
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dad12" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dad12 === '0'">
                    <el-col :offset="2" :span="22" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dad12Text"
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

                <!--③鉴定安全等级为C、D级房屋的贫困户，安置后的房屋是否安全（2019年10月以来房屋安全鉴定报告）-->
                <el-row class="margin-t-10">
                    <el-col :offset="2" :span="22">③鉴定安全等级为C、D级房屋的贫困户，安置后的房屋是否安全（2019年10月以来房屋安全鉴定报告）</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dad14" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dad14 === '0'">
                    <el-col :offset="2" :span="22" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dad14Text"
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

                <!--③补助资金及时拨付到位-->
                <el-row class="margin-t-10">
                    <el-col :offset="2" :span="22">③补助资金及时拨付到位</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dad13" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dad13 === '0'">
                    <el-col :offset="2" :span="22" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dad13Text"
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

            <!-------------------------------------e、饮水安全政策落实情况----------------------------------------------->
            <!--<div title="e. 饮水安全政策落实情况"/>-->
            <el-divider></el-divider>
            <div>e. 饮水安全政策落实情况</div>
            <el-divider></el-divider>
            <div>
                <el-row>
                    <el-col :offset="1">1. 靠自来水保障饮水安全</el-col>
                </el-row>

                <!--①村通自来水，贫困户家中自来水正常供水（村级提供2019年10月以来水质检测合格报告）-->
                <el-row class="margin-t-10">
                    <el-col :offset="2" :span="22">①村通自来水，贫困户家中自来水正常供水（村级提供2019年10月以来水质检测合格报告）</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dae11" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dae11 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dae11Text"
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
                        <el-row class="margin-t-10 color-red font-size-14">（拍家用自来水照片）</el-row>
                        <el-row class="margin-t-15">
                            <!--<van-uploader v-model="filePath.filePath9" multiple/>-->
                            <el-col v-for="image in filePath.filePath9" class="margin-r-15 img-wrap" :span="4" :key="image">
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

                <!--②距离村庄较远不具备自来水入户条件，采取符合安全饮水标准的措施保障饮水安全（有2019年10月以来水质检测合格报告）-->
                <el-row class="margin-t-10">
                    <el-col :offset="2" :span="22">②距离村庄较远不具备自来水入户条件，采取符合安全饮水标准的措施保障饮水安全（有2019年10月以来水质检测合格报告）
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :offset="2" :span="22" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dae12" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dae12 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dae12Text"
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

                <!----------------------2. 靠村内集中供水点（净化水设施等）保障饮水安全，取水方便 （村级提供2019年10月以来水质检测合格报告）------------------>
                <el-row class="margin-t-10">
                    <el-col :offset="1" :span="23">2. 靠村内集中供水点（净化水设施等）保障饮水安全，取水方便 （村级提供2019年10月以来水质检测合格报告）</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dae2" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dae2 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dae2Text"
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

                <!----------------------3. 靠村内集中供水点（净化水设施等）保障饮水安全，对行动不便的贫困群众，安排专人帮扶送水保障饮水安全------------------>
                <el-row class="margin-t-10">
                    <el-col :offset="1" :span="23">3. 靠村内集中供水点（净化水设施等）保障饮水安全，对行动不便的贫困群众，安排专人帮扶送水保障饮水安全</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dae3" disabled direction="horizontal">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dae3 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dae3Text"
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

                <!----------------------4. 村内无任何集中供水设施，贫困户饮水安全无保障------------------>
                <el-row class="margin-t-10">
                    <el-col :offset="1" :span="23">4. 村内无任何集中供水设施，贫困户饮水安全无保障</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.dae4" disabled direction="horizontal">
                            <el-radio :label="0">是</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-show="form.dae4 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.dae4Text"
                                readonly
                                :rows="4"
                                type="textarea"
                                placeholder=""
                                autosize
                                label=""
                                class="text-area-border"
                        />
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
    import { fetchDPersonSafeguard } from '@/api/issueList'

    export default {
        components: {
        },
        data() {
            return {
                // 下拉刷新控制
                pullLoading: false,
                text: '',
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
                    baseImgList: [],
                    problemInfo: {},
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
                    daa2Text: '',
                    dab11Text: '',
                    dab2Text: '',
                    dac16Text: '',
                    dac11Text: '',
                    dac12Text: '',
                    dac121Text: '',
                    dac13Text: '',
                    dac14Text: '',
                    dac15Text: '',
                    dac21Text: '',
                    dac22Text: '',
                    dac23Text: '',
                    dac3Text: '',
                    dad11Text: '',
                    dad12Text: '',
                    dad14Text: '',
                    dad13Text: '',
                    dae11Text: '',
                    dae12Text: '',
                    dae2Text: '',
                    dae3Text: '',
                    dae4Text: '',
                    dae12: null,
                    dae2: null,
                    dae3: null,
                    dae4: null,
                    id: null,
                    personId: null
                },
                loading:true

            }
        },
        mounted() {
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
                fetchDPersonSafeguard(params).then(resp => {
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
                        resp.data.problemInfo.dPersonSafeguard.forEach(item=>{
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
<style >
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
    .filePath-image{
        width: 200px;
        height: 200px;
    }
</style>
