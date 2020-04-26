<template>
        <div>
            <!---------------------------------A.村庄集体经济收入-------------------------------------->
            <el-divider></el-divider>
            <div>A.村庄集体经济收入</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1. 2019年村集体经济收入------------------------------>
                <el-row class="margin-t-10">
                    <el-col :offset="1" :span="23">1. 2019年村集体经济收入  {{form.vb1 === null ? '--' : form.vb1}}  元</el-col>
                    <!--<el-col :offset="1" :span="13">1. 2019年村集体经济收入</el-col>
                    <el-col :offset="1" :span="6">
                        <el-input v-model="form.vb1" type="number" label="" placeholder="" readonly
                                   style="padding:0 !important;"/>
                    </el-col>
                    <el-col :span="3">万元</el-col>-->
                </el-row>

                <!-------------------------2. 预计2020年村集体经济收入    万元，是否超过3万元------------------------------>
                <el-row class="margin-t-10">
                    <el-col :offset="1" :span="23">2. 预计2020年村集体经济收入  {{form.vb21 === null ? '--' : form.vb21}}  万元</el-col>
                    <!--<el-col :offset="1" :span="14">2. 预计2020年村集体经济收入</el-col>
                    <el-col  :span="5">
                        <el-input v-model="form.vb21" type="number" label="" placeholder="" readonly
                                   style="padding:0 !important;"/>
                    </el-col>
                    <el-col :offset="1" :span="3">万元</el-col>-->
                </el-row>
                <el-row class="margin-t-10">
                    <el-col :offset="1" :span="10">是否超过3万元</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vb2" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vb2 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vb2Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
            </div>

            <!---------------------------------B.学前和义务教育-------------------------------------->
            <el-divider></el-divider>
            <div>B.学前和义务教育</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1. 适龄幼儿相对就近入园------------------------------>
                <el-row class="margin-t-10">
                    <el-col :offset="1" :span="23">1. 适龄幼儿相对就近入园</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vc1" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vc1 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vc1Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>

                <!-------------------------2. 法定义务教育阶段的教学服务全覆盖------------------------------>
                <el-row class="margin-t-10">
                    <el-col :offset="1">2. 法定义务教育阶段的教学服务全覆盖</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vc2" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vc2 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vc2Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
            </div>

            <!---------------------------------C.医疗保障服务-------------------------------------->
            <el-divider></el-divider>
            <div>C.医疗保障服务</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1. 常住人口800人以上的村按要求设立卫生室（镇驻地村有乡镇卫生院的可不设立）----------------------------->
                <el-row class="margin-t-10">
                    <el-col :offset="1" :span="23">1. 常住人口800人以上的村按要求设立卫生室（镇驻地村有乡镇卫生院的可不设立）</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vd1" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vd1 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vd1Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（照片，4张，分别是卫生室外景、内部照片、常备药品、医疗器械）</el-row>
                        <el-row class="margin-t-15">
                            <!--<el-uploader v-model="form.file_type1" multiple/>-->
                            <el-col v-for="(item,idx) in filePath.filePath1" class="margin-r-15 img-wrap" :key="idx">
                                <el-image width="80"  height="80"
                                           :src="item"
                                           @click.native="lookImg([item])"
                                />
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>

                <!------------------2. 对位置偏远、确实无法设置村卫生室的设立村卫生室服务点，确保贫困村居民村卫生室服务全覆盖------------------------------>
                <el-row class="margin-t-10">
                    <el-col :offset="1">2. 对位置偏远、确实无法设置村卫生室的设立村卫生室服务点，由所属乡镇卫生院或指定村卫生室定期提供巡诊服务，确保贫困村居民村卫生室服务全覆盖</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vd2" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vd2 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vd2Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（服务点拍照片，3张，分别是卫生室内部照片、常备药品、医疗器械）</el-row>
                        <el-row class="margin-t-15">
                            <!--<el-uploader v-model="form.file_type2" multiple/>-->
                            <el-col v-for="(item,idx) in filePath.filePath2" class="margin-r-15 img-wrap" :key="idx">
                                <el-image width="80"  height="80"
                                           :src="item"
                                           @click.native="lookImg([item])"
                                />
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>

            <!--------------------------------D.符合当地饮水安全标准的水源-------------------------------------->
            <el-divider></el-divider>
            <div>D.符合当地饮水安全标准的水源</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1. 城市管网延伸或联村集中供水，自来水通户，运行正常------------------------------>
                <el-row class="margin-t-10">
                    <el-col :offset="1" :span="23">1. 城市管网延伸或联村集中供水，自来水通户，运行正常</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.ve1" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.ve1 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.ve1Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>

                <!-------------------------2. 单村集中供水，自来水通户，运行正常 ------------------------------>
                <el-row class="margin-t-10">
                    <el-col :offset="1">2. 单村集中供水，自来水通户，运行正常</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.ve2" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.ve2 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.ve2Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>


                <!-------------------------3. 村庄按要求设置集中供水点，安装净化消毒设备，运行正常 ------------------------------>
                <el-row class="margin-t-10">
                    <el-col :offset="1">3. 村庄按要求设置集中供水点，安装净化消毒设备，运行正常</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.ve3" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.ve3 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.ve3Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（设施全景照片）</el-row>
                        <el-row class="margin-t-15">
                            <!--<el-uploader v-model="form.file_type3" multiple/>-->
                            <el-col v-for="(item,idx) in filePath.filePath3" class="margin-r-15 img-wrap" :key="idx">
                                <el-image width="80"  height="80"
                                           :src="item"
                                           @click.native="lookImg([item])"
                                />
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>

            <!---------------------------------E.穿村硬化路-------------------------------------->
            <el-divider></el-divider>
            <div>E.穿村硬化路</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1. 每个村至少有一条符合规定标准的硬化主街道且管护良好、通行方便------------------------------>
                <el-row>
                    <el-col :offset="1">每个村至少有一条符合规定标准的硬化主街道且管护良好、通行方便</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vf1" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vf1 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vf1Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（穿村路全景照片）</el-row>
                        <el-row class="margin-t-15">
                            <!--<el-uploader v-model="form.file_type4" multiple/>-->
                            <el-col v-for="(item,idx) in filePath.filePath4" class="margin-r-15 img-wrap" :key="idx">
                                <el-image width="80"  height="80"
                                           :src="item"
                                           @click.native="lookImg([item])"
                                />
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>

            <!---------------------------------F.通电-------------------------------------->
            <el-divider></el-divider>
            <div>F.通电</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1. 无变压器重过载、设备和线路老化现象，户户通生活用电，能够满足贫困村农业生产用电需求------------------------------>
                <el-row>
                    <el-col :offset="1">无变压器重过载、设备和线路老化现象，户户通生活用电，能够满足贫困村农业生产用电需求</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vg1" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vg1 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vg1Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（变压器照片）</el-row>
                        <el-row class="margin-t-15">
                            <!--<el-uploader v-model="form.file_type5" multiple/>-->
                            <el-col v-for="(item,idx) in filePath.filePath5" class="margin-r-15 img-wrap" :key="idx">
                                <el-image width="80"  height="80"
                                           :src="item"
                                           @click.native="lookImg([item])"
                                />
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>

            <!---------------------------------G.通客运班车-------------------------------------->
            <el-divider></el-divider>
            <div>G.通客运班车</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1. 村口步行2公里内有班车客运点------------------------------>
                <el-row>
                    <el-col :offset="1">村口步行2公里内有班车客运点</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vh1" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vh1 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vh1Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（班车客动站点照片）</el-row>
                        <el-row class="margin-t-15">
                            <!--<el-uploader v-model="form.file_type6" multiple/>-->
                            <el-col v-for="(item,idx) in filePath.filePath6" class="margin-r-15 img-wrap" :key="idx">
                                <el-image width="80"  height="80"
                                           :src="item"
                                           @click.native="lookImg([item])"
                                />
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>

            <!---------------------------------H.通广播电视-------------------------------------->
            <el-divider></el-divider>
            <div>H.通广播电视</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1. 实现广播、有线电视户户通------------------------------>
                <el-row>
                    <el-col :offset="1">实现广播、有线电视户户通</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vi1" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vi1 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vi1Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
            </div>

            <!---------------------------------I.通信息-------------------------------------->
            <el-divider></el-divider>
            <div>I.通信息</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1. 光纤到村头，传输速率100MB/s ------------------------------>
                <el-row>
                    <el-col :offset="1">光纤到村头，传输速率100MB/s</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vj1" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vj1 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vj1Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
            </div>

            <!---------------------------------J.有旱涝保收田-------------------------------------->
            <el-divider></el-divider>
            <div>J.有旱涝保收田</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1. 完善农田水利设施，保证人均拥有0.5亩以上旱涝保收农田（果茶园、菜园、养殖水面、经济林） ------------------------------>
                <el-row>
                    <el-col :offset="1">完善农田水利设施，保证人均拥有0.5亩以上旱涝保收农田（果茶园、菜园、养殖水面、经济林）</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vk1" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vk1 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vk1Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
            </div>

            <!---------------------------------K.有致富项目-------------------------------------->
            <el-divider></el-divider>
            <div>K.有致富项目</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1. 有1-2个主导产业，扶持贫困农户有1个增收项目------------------------------>
                <el-row>
                    <el-col :offset="1">有1-2个主导产业，扶持贫困农户有1个增收项目</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vl1" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vl1 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vl1Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（项目全景照片、有内部要拍内部照片）</el-row>
                        <el-row class="margin-t-15">
                            <!--<el-uploader v-model="form.file_type7" multiple/>-->
                            <el-col v-for="(item,idx) in filePath.filePath7" class="margin-r-15 img-wrap" :key="idx">
                                <el-image width="80"  height="80"
                                           :src="item"
                                           @click.native="lookImg([item])"
                                />
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>

            <!---------------------------------L.有办公用房-------------------------------------->
            <el-divider></el-divider>
            <div>L.有办公用房</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1. 有规范的“两委”办公用房和村民议事场所，面积不低于90㎡，基本办公设备配套齐全（符合党员数量的正常办公条件）------------------------------>
                <el-row>
                    <el-col :offset="1">有规范的“两委”办公用房和村民议事场所，面积不低于90㎡，基本办公设备配套齐全（符合党员数量的正常办公条件）</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vm1" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vm1 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vm1Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（3张照片，分别是办公用房外部全景照片、室内照片、基本设备照片）</el-row>
                        <el-row class="margin-t-15">
                            <!--<el-uploader v-model="form.file_type8" multiple/>-->
                            <el-col v-for="(item,idx) in filePath.filePath8" class="margin-r-15 img-wrap" :key="idx">
                                <el-image width="80"  height="80"
                                           :src="item"
                                           @click.native="lookImg([item])"
                                />
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>

            <!---------------------------------M.有卫生保洁制度-------------------------------------->
            <el-divider></el-divider>
            <div>M.有卫生保洁制度</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1. 建立完善的“户集、村收、镇运”的农村生活垃圾收运体系；村（居）按10-15户标准配备垃圾桶(箱)，且整洁完好；每村按服务人口2-3‰的标准配备保洁员，保洁员工资按时足额发放；建立保洁制度,垃圾清运及时，无露天垃圾堆，无陈年垃圾 ------------------------------>
                <el-row>
                    <el-col :offset="1">
                        建立完善的“户集、村收、镇运”的农村生活垃圾收运体系；村（居）按10-15户标准配备垃圾桶(箱)，且整洁完好；每村按服务人口2-3‰的标准配备保洁员，保洁员工资按时足额发放；建立保洁制度,垃圾清运及时，无露天垃圾堆，无陈年垃圾
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vn1" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vn1 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vn1Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（2张照片，分别是垃圾箱照片、保洁制度照片）</el-row>
                        <el-row class="margin-t-15">
                            <!--<el-uploader v-model="form.file_type9" multiple/>-->
                            <el-col v-for="(item,idx) in filePath.filePath9" class="margin-r-15 img-wrap" :key="idx">
                                <el-image width="80"  height="80"
                                           :src="item"
                                           @click.native="lookImg([item])"
                                />
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>

            <!---------------------------------N.有文化活动室-------------------------------------->
            <el-divider></el-divider>
            <div>N.有文化活动室</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1. 综合性文化活动室面积不低于80㎡，功能符合要求 ------------------------------>
                <el-row>
                    <el-col :offset="1">综合性文化活动室面积不低于80㎡，功能符合要求</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vo1" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vo1 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vo1Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（文化活动室照片2张，分别是室外全景照片、室内照片）</el-row>
                        <el-row class="margin-t-15">
                            <!--<el-uploader v-model="form.file_type10" multiple/>-->
                            <el-col v-for="(item,idx) in filePath.filePath10" class="margin-r-15 img-wrap" :key="idx">
                                <el-image width="80"  height="80"
                                           :src="item"
                                           @click.native="lookImg([item])"
                                />
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>

            <!---------------------------------O.有健身场所-------------------------------------->
            <el-divider></el-divider>
            <div>O.有健身场所</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1. 1个标准篮球场（包括一付篮球架，6件健身器材）或12件健身器材，能正常安全使用 ------------------------------>
                <el-row>
                    <el-col :offset="1">1个标准篮球场（包括一付篮球架，6件健身器材）或12件健身器材，能正常安全使用</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vp1" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>

                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vp1 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vp1Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（健身广场全景照片）</el-row>
                        <el-row class="margin-t-15">
                            <!--<el-uploader v-model="form.file_type11" multiple/>-->
                            <el-col v-for="(item,idx) in filePath.filePath11" class="margin-r-15 img-wrap" :key="idx">
                                <el-image width="80"  height="80"
                                           :src="item"
                                           @click.native="lookImg([item])"
                                />
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>

            <!---------------------------------P.人居环境整治-------------------------------------->
            <el-divider></el-divider>
            <div>P.人居环境整治</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1.村及周围宜林山滩全部得到绿化，没有自然景观破坏现象；进村主干道、村河两侧绿化整齐美观；村边村内空闲地绿化美化，乔灌花草结合，建成公共绿地或围村林；房前屋后见缝插绿进行绿化美化 ------------------------------>
                <el-row>
                    <el-col :offset="1">
                        村及周围宜林山滩全部得到绿化，没有自然景观破坏现象；进村主干道、村河两侧绿化整齐美观；村边村内空闲地绿化美化，乔灌花草结合，建成公共绿地或围村林；房前屋后见缝插绿进行绿化美化
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vq1" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vq1 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vq1Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23">
                        <el-row class="margin-t-10 color-red font-size-14">（村内主次干道、绿化、河道、路灯、巷内照片，不得低于5张）</el-row>
                        <el-row class="margin-t-15">
                            <!--<el-uploader v-model="form.file_type12" multiple/>-->
                            <el-col v-for="(item,idx) in filePath.filePath12" class="margin-r-15 img-wrap" :key="idx">
                                <el-image width="80"  height="80"
                                           :src="item"
                                           @click.native="lookImg([item])"
                                />
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>

            <!---------------------------------Q.有就业保障措施-------------------------------------->
            <el-divider></el-divider>
            <div>Q.有就业保障措施</div>
            <el-divider></el-divider>
            <div>
                <!-------------------------1.法定劳动年龄内、有劳动能力、有就业意愿的贫困农户每户转移就业1人  ------------------------------>
                <el-row>
                    <el-col :offset="1">法定劳动年龄内、有劳动能力、有就业意愿的贫困农户每户转移就业1人</el-col>
                </el-row>
                <el-row>
                    <el-col :offset="1" :span="23" class="float-right margin-t-10">
                        <el-radio-group v-model="form.vr1" direction="horizontal" disabled>
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                            <el-radio :label="2">不涉及</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row v-if="form.vr1 === '0'">
                    <el-col :offset="1" :span="23" class="float-left margin-t-10">
                        <el-input
                                v-model="form.vr1Text"
                                rows="4"
                                type="textarea"
                                label=""
                                placeholder="请填写原因"
                                class="text-area-border"
                                readonly
                        />
                    </el-col>
                </el-row>
            </div>
        </div>

</template>
<script>
    import Vue from 'vue';

    export default {
        props: ['poorId'],
        components: {
        },
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
                    filePath9: [],
                    filePath10: [],
                    filePath11: [],
                    filePath12: [],
                },
                imgFilePath: {
                    filePath1: [],
                    filePath2: [],
                    filePath3: [],
                    filePath4: [],
                    filePath5: [],
                    filePath6: [],
                    filePath7: [],
                    filePath8: [],
                    filePath9: [],
                    filePath10: [],
                    filePath11: [],
                    filePath12: [],
                },
                form: {
                    va1: null,
                    va1Text: '',
                    vb1: null,
                    vb21: null,
                    vb2: null,
                    vb2Text: '',
                    vc1: null,
                    vc1Text: '',
                    vc2: null,
                    vc2Text: '',
                    vd1: null,
                    vd1Text: '',
                    vd2: null,
                    vd2Text: '',
                    ve1: null,
                    ve1Text: '',
                    ve2: null,
                    ve2Text: '',
                    ve3: null,
                    ve3Text: '',
                    vf1: null,
                    vf1Text: '',
                    vg1: null,
                    vg1Text: '',
                    vh1: null,
                    vh1Text: '',
                    vi1: null,
                    vi1Text: '',
                    vj1: null,
                    vj1Text: '',
                    vk1: null,
                    vk1Text: '',
                    vl1: null,
                    vl1Text: '',
                    vm1: null,
                    vm1Text: '',
                    vn1: null,
                    vn1Text: '',
                    vo1: null,
                    vo1Text: '',
                    vp1: null,
                    vp1Text: '',
                    vq1: null,
                    vq1Text: '',
                    vr1: null,
                    vr1Text: '',
                }

            };
        },
        mounted() {
            //获取数据
//            this.fetchInfo();
        },
        methods: {

        },
    }
</script>
<style lang="scss" scoped type="text/less">
    .text-area-border {

    }
</style>
