<template>
    <van-pull-refresh v-model="pullLoading" @refresh="onPullRefresh">
        <div>
            <!--<common-subtitle title="行业扶贫政策落实"></common-subtitle>-->
            <van-form validate-first :scroll-to-error="true" :show-error="false">
                <!---------------------------a.兜底保障政策落实情况----------------------------->
                <van-cell title="a.兜底保障政策落实情况"></van-cell>
                <van-cell>
                    <!---------------------------1.低保----------------------------->
                    <van-row>
                        <van-col offset="1">1.低保</van-col>
                    </van-row>
                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">①符合条件的贫困人口纳入低保</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dba11" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dba11 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dba11Text"
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
                        <van-col offset="2" span="22">②成年重度残疾人，残疾等级为三级的精神、智力残疾人单人纳入低保</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dba12" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dba12 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dba12Text"
                                    type="textarea"
                                    placeholder=""
                                    autosize
                                    label=""
                                    class="text-area-border"
                                    :required="true"
                                    :rules="[{ required: true, message: '请填写原因' }]"
                            />
                        </van-col>
                    </van-row>

                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">③2019年4月份以来未被取消低保</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dba13" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dba13 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dba13Text"
                                    type="textarea"
                                    placeholder=""
                                    autosize
                                    label=""
                                    class="text-area-border"
                                    :required="true"
                                    :rules="[{ required: true, message: '请填写原因' }]"
                            />
                        </van-col>
                    </van-row>

                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">④低保金按月足额发放</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dba14" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dba14 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dba14Text"
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
                    <!---------------------------2.特困供养----------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1">2.特困供养</van-col>
                    </van-row>

                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">①分散供养特困补助按月足额发放</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dba21" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dba21 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dba21Text"
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
                        <van-col offset="2" span="22">②符合条件的贫困人口纳入特困供养</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dba22" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dba22 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dba22Text"
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

                    <!---------------------------3.对符合代缴条件的贫困人口由政府全额代缴不低于100元的居民基本养老保险费----------------------------->
                    <!--<van-row class="margin-t-10">
                        <van-col offset="1">3.对符合代缴条件的贫困人口由政府全额代缴不低于100元的居民基本养老保险费</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dba3" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dba3 === '0'">
                            <van-field
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
                        </van-col>
                    </van-row>-->

                    <!---------------------------4.年满60周岁未领取国家规定的基本养老保险待遇的贫困人口，纳入城乡居民基本养老保险制度，按月发放城乡居民养老保险待遇----------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1">3.年满60周岁未领取国家规定的基本养老保险待遇的贫困人口，纳入城乡居民基本养老保险制度，按月发放城乡居民养老保险待遇</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dba4" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dba4 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dba4Text"
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

                    <!---------------------------5.是否享受“参加居民基本养老保险的重度残疾人提出申请，经审核后可以提前5年发放养老金”政策。----------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1">4.是否享受“参加居民基本养老保险的重度残疾人提出申请，经审核后可以提前5年发放养老金”政策。</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dba5" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dba5 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dba5Text"
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

                <!---------------------------b.残疾人政策落实情况----------------------------->
                <van-cell title="b.残疾人政策落实情况"></van-cell>
                <van-cell>
                    <!---------------------------1.享受低保待遇的持证贫困残疾人生活补贴按月足额发放----------------------------->
                    <van-row>
                        <van-col offset="1">1.享受低保待遇的持证贫困残疾人生活补贴按月足额发放</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbb1" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbb1 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbb1Text"
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
                            <van-row class="margin-t-10 color-red font-size-14">（拍残疾人证照片）</van-row>
                            <van-row class="margin-t-15">
                                <!--<van-uploader v-model="filePath.filePath1" multiple/>-->
                                <van-col v-for="image in filePath.filePath1" class="margin-r-15 img-wrap">
                                    <van-image width="80"  height="80"
                                               :src="image"
                                               @click.native="lookImg([image])"
                                    />
                                </van-col>
                            </van-row>
                        </van-col>
                    </van-row>

                    <!---------------------------2.一、二级重度残疾人护理补贴按月足额发放----------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1">2.一、二级重度残疾人护理补贴按月足额发放</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbb2" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbb2 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbb2Text"
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

                    <!---------------------------3.一、二级重度残疾人是否进行家庭无障碍改造----------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1">3.一、二级重度残疾人是否进行家庭无障碍改造</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbb3" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbb3 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbb3Text"
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
                            <van-row class="margin-t-10 color-red font-size-14">（拍实施无障碍改造照片）</van-row>
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

                    <!---------------------------4.一、二级重度残疾人没有家庭无障碍改造需求----------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1">4.一、二级重度残疾人没有家庭无障碍改造需求</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbb4" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbb4 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbb4Text"
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

                    <!---------------------------5.残疾人是否享受康复服务----------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1">5.残疾人是否享受康复服务</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbb5" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbb5 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbb5Text"
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

                    <!---------------------------6.残疾人无康复服务需求----------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1">6.残疾人无康复服务需求</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbb6" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbb6 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbb6Text"
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

                    <!---------------------------7.有办证意愿且符合办证条件的残疾人已办理残疾人证----------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1">7.有办证意愿且符合办证条件的残疾人已办理残疾人证</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbb7" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbb7 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbb7Text"
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

                <!---------------------------c.就业扶贫政策落实情况----------------------------->
                <van-cell title="c.就业扶贫政策落实情况"></van-cell>
                <van-cell>
                    <!---------------------------有意愿、有条件的贫困人口职业技能培训是否落实----------------------------->
                    <van-row>
                        <van-col offset="1">有意愿、有条件的贫困人口职业技能培训是否落实</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbc1" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbc1 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbc1Text"
                                    type="textarea"
                                    placeholder="请填写原因"
                                    autosize
                                    label=""
                                    class="text-area-border"
                                    :required="true"
                                    :rules="[{ required: true, message: '请填写原因'}]"
                            />
                        </van-col>
                    </van-row>

                </van-cell>

                <!---------------------------d.金融扶贫政策落实情况----------------------------->
                <van-cell title="d.金融扶贫政策落实情况"></van-cell>
                <van-cell>

                    <!---------------------------富民生产贷----------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1">富民生产贷</van-col>
                    </van-row>

                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">①已发放富民生产贷的企业与贫困户按规定签订《帮扶协议书》</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbd21" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbd21 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbd21Text"
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
                            <van-row class="margin-t-10 color-red font-size-14">（拍《帮扶协议书》照片）</van-row>
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

                    <van-row class="margin-t-10">
                        <van-col offset="2" span="22">②贫困户了解帮扶协议书内容，帮扶企业按时间节点兑现帮扶协议</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbd22" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbd22 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbd22Text"
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

                <!---------------------------e.孝善养老扶贫政策落实情况----------------------------->
                <van-cell title="e.孝善养老扶贫政策落实情况"></van-cell>
                <van-cell>
                    <!---------------------------1.符合条件的贫困老年人，参加孝善养老----------------------------->
                    <van-row>
                        <van-col offset="1">1.符合条件的贫困老年人（含无子女或子女无赡养能力的），参加孝善养老</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbe1" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbe1 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbe1Text"
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

                    <!---------------------------2.有赡养协议，赡养费足额实际给付----------------------------->
                    <van-row>
                        <van-col offset="1">2.有赡养协议，赡养费足额实际给付</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbe2" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbe2 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbe2Text"
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
                            <van-row class="margin-t-10 color-red font-size-14">（拍孝善养老协议书）</van-row>
                            <van-row class="margin-t-15">
                                <!--<van-uploader v-model="filePath.filePath4" multiple/>-->
                                <van-col v-for="image in filePath.filePath4" class="margin-r-15 img-wrap">
                                    <van-image width="80"  height="80"
                                               :src="image"
                                               @click.native="lookImg([image])"
                                    />
                                </van-col>
                            </van-row>
                        </van-col>
                    </van-row>


                    <!---------------------------3.孝善奖补资金及时到位----------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1">3.孝善奖补资金及时到位</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbe3" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbe3 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbe3Text"
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

                <!---------------------------f.公益扶贫专岗政策落实情况----------------------------->
                <van-cell title="f.公益扶贫专岗政策落实情况"></van-cell>
                <van-cell>
                    <!---------------------------1.符合条件有意愿的贫困人口参加公益专岗----------------------------->
                    <van-row>
                        <van-col offset="1">1.符合条件有意愿的贫困人口参加公益专岗</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbf1" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbf1 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbf1Text"
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

                    <!---------------------------2.签订上岗协议、误工补贴足额给付----------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1">2.签订上岗协议、误工补贴足额给付</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbf2" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbf2 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbf2Text"
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
                            <van-row class="margin-t-10 color-red font-size-14">（拍公益专岗协议书）</van-row>
                            <van-row class="margin-t-15">
                                <!--<van-uploader v-model="filePath.filePath5" multiple/>-->
                                <van-col v-for="image in filePath.filePath5" class="margin-r-15 img-wrap">
                                    <van-image width="80"  height="80"
                                               :src="image"
                                               @click.native="lookImg([image])"
                                    />
                                </van-col>
                            </van-row>
                        </van-col>
                    </van-row>

                    <!---------------------------3.上岗人员符合岗位要求，实际付出劳动----------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1">3.上岗人员符合岗位要求，实际付出劳动</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbf3" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                                <van-radio name="2">不涉及</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbf3 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbf3Text"
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

                <!---------------------------g.其他政策落实情况----------------------------->
                <van-cell title="g.其他政策落实情况"></van-cell>
                <van-cell>
                    <!---------------------------1.改厕----------------------------->
                    <van-row>
                        <van-col offset="1">1.改厕</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbg1" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbg1 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbg1Text"
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
                            <van-row class="margin-t-10 color-red font-size-14">（拍厕所照片）</van-row>
                            <van-row class="margin-t-15">
                                <!--<van-uploader v-model="filePath.filePath6" multiple/>-->
                                <van-col v-for="image in filePath.filePath6" class="margin-r-15 img-wrap">
                                    <van-image width="80"  height="80"
                                               :src="image"
                                               @click.native="lookImg([image])"
                                    />
                                </van-col>
                            </van-row>
                        </van-col>
                    </van-row>

                    <!---------------------------2.户内通生活用电----------------------------->
                    <van-row class="margin-t-10">
                        <van-col offset="1">2.户内通生活用电</van-col>
                    </van-row>
                    <van-row>
                        <van-col class="float-right margin-t-10">
                            <van-radio-group v-model="form.dbg2" disabled direction="horizontal">
                                <van-radio name="1">是</van-radio>
                                <van-radio name="0">否</van-radio>
                            </van-radio-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" span="22" class="margin-t-10" v-show="form.dbg2 === '0'">
                            <van-field
                                    readonly
                                    rows="4"
                                    v-model="form.dbg2Text"
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
                            <van-row class="margin-t-10 color-red font-size-14">（拍通电照片）</van-row>
                            <van-row class="margin-t-15">
                                <!--<van-uploader v-model="filePath.filePath7" multiple/>-->
                                <van-col v-for="image in filePath.filePath7" class="margin-r-15 img-wrap">
                                    <van-image width="80"  height="80"
                                               :src="image"
                                               @click.native="lookImg([image])"
                                    />
                                </van-col>
                            </van-row>
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
                //form表单的值
                filePath:{
                    filePath1: [],
                    filePath2: [],
                    filePath3: [],
                    filePath4: [],
                    filePath5: [],
                    filePath6: [],
                    filePath7: [],
                },
                form: {
                    dba11Text: "",
                    dba12Text: "",
                    dba13Text: "",
                    dba14Text: "",
                    dba21Text: "",
                    dba22Text: "",
//                    dba3Text: "",
                    dba4Text: "",
                    dba5Text: "",
                    dbb1Text: "",
                    dbb2Text: "",
                    dbb3Text: "",
                    dbb4Text: "",
                    dbb5Text: "",
                    dbb6Text: "",
                    dbb7Text: "",
                    dbc1Text: "",
                    dbd21Text: "",
                    dbd22Text: "",
                    dbe1Text: "",
                    dbe2Text: "",
                    dbe3Text: "",
                    dbf1Text: "",
                    dbf2Text: "",
                    dbf3Text: "",
                    dbg1Text: "",
                    dbg2Text: "",


                    dba11: "",
                    dba12: "",
                    dba13: "",
                    dba14: "",
                    dba21: "",
                    dba22: "",
//                    dba3: "",
                    dba4: "",
                    dba5: "",
                    dbb1: "",
                    dbb2: "",
                    dbb3: "",
                    dbb4: "",
                    dbb5: "",
                    dbb6: "",
                    dbb7: "",
                    dbc1: "",
                    dbd21: "",
                    dbd22: "",
                    dbe1: "",
                    dbe2: "",
                    dbe3: "",
                    dbf1: "",
                    dbf2: "",
                    dbf3: "",
                    dbg1: "",
                    dbg2: "",
                    id:null,
                    personId:null,
                    baseImgList:[],
                    problemInfo:{},
                },
            };
        },
        components: {
            commonSubtitle,
            overlayImage,
        },
        mounted(){
            this.form.personId = this.poorId
            this.getInfo({personId:this.poorId})
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
                this.$axios.post('/work/dPersonIndustury/get',param).then(res => {
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
                            if(key.indexOf('db')>-1){
                                res.data[key] = res.data[key]+"";
                            }
                        }
                        //填写原因的项--数据查询todo
                        res.data.problemInfo.dPersonIndustury.forEach(item=>{
                            this.editShowInfoFunc(this.form,item);
                        })
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
    .text-area-border {
        /deep/ .van-field__value {
            .van-field__control {
                border: 2px solid #999 !important;
                border-radius: 8px;
            }
        }
    }
</style>
