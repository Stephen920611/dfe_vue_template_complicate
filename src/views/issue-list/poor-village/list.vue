<template>
    <div class="app-container">
        <el-container>
            <el-main style="padding: 10px;">
                <div class="text item">
                    <!--<el-row>-->
                    <!--<el-col :span="4">-->
                    <!--<el-select class="filter-item" v-model="areaValue" placeholder="请选择县市区">-->
                    <!--<el-option-->
                    <!--v-for="item in areaOptions"-->
                    <!--:key="item.value"-->
                    <!--:label="item.label"-->
                    <!--:value="item.value">-->
                    <!--</el-option>-->
                    <!--</el-select>-->
                    <!--</el-col>-->
                    <!--</el-row>-->
                    <div class="filter-container">
                        <el-cascader
                                style="min-width: 250px;"
                                class="filter-item"
                                v-model="areaValue"
                                :options="allAreaTree"
                                :props="{ expandTrigger: 'hover' }"
                                @change="changeArea"
                                clearable
                                placeholder="请选择县市区"
                        >
                        </el-cascader>
                        <!--<el-select v-model="areaValue" class="filter-item" placeholder="请选择县市区">
                            <el-option
                                    v-for="item in areaOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                            />
                        </el-select>
                        <el-select v-model="townValue" class="filter-item" placeholder="请选择乡镇">
                            <el-option
                                    v-for="item in townOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                            />
                        </el-select>
                        <el-select v-model="villageValue" class="filter-item" placeholder="请选择村">
                            <el-option
                                    v-for="item in villageOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                            />
                        </el-select>-->
                        <el-input
                                v-model="listQuery.content"
                                placeholder="请输入贫困村名字"
                                style="width: 200px;"
                                class="filter-item"
                                @keyup.enter.native="handleFilter"
                        />
                        <el-button
                                v-waves
                                class="filter-item"
                                type="primary"
                                icon="el-icon-search"
                                style="margin-left: 10px;"
                                @click="handleFilter"
                        >
                            搜索
                        </el-button>
                        <el-button
                                class="filter-item"
                                style="margin-left: 10px;"
                                type="primary"
                                icon="el-icon-refresh"
                                @click="handleReset"
                        >重置
                        </el-button>
                        <div style="float:right">
                            <!-- 下载按钮 -->
                            <el-button
                                    class="filter-item"
                                    style="margin-left: 10px;"
                                    type="primary"
                                    icon="el-icon-download"
                                    @click="handleDownload"
                            >Excel模板
                            </el-button>
                            <a ref="downExcelDo" :href="downLoadUrl"/>
                        </div>
                    </div>
                    <!-- 表格开始 -->
                    <el-table
                            v-loading="listLoading"
                            :data="list"
                            border
                            fit
                            highlight-current-row
                            style="width: 100%;"
                            max-height="550px"
                    >
                        <el-table-column label="序号" type="index" align="center" width="50">
                            <template slot-scope="{row}">{{ row.idx }}</template>
                        </el-table-column>
                        <el-table-column label="县市区" header-align="center" align="center" min-width="80">
                            <template slot-scope="{row}">{{ row.areaName }}</template>
                        </el-table-column>
                        <el-table-column label="乡(镇)" header-align="center" align="center" min-width="120">
                            <template slot-scope="{row}">{{ row.townName }}</template>
                        </el-table-column>
                        <el-table-column label="行政村" header-align="center" align="center" min-width="150">
                            <template slot-scope="{row}">{{ row.villageName }}</template>
                        </el-table-column>
                        <el-table-column label="户主姓名" header-align="center" align="center" min-width="80">
                            <template slot-scope="{row}">{{ row.personName }}</template>
                        </el-table-column>
                        <el-table-column label="贫困户类型" class-name="status-col" align="center" width="120">
                            <template slot-scope="{row}">{{ row.familyType === 1 ? "即时帮扶" : "建档立卡" }}</template>
                        </el-table-column>
                        <el-table-column label="证件号码" header-align="center" align="center" min-width="150">
                            <template slot-scope="{row}">{{ row.personNum }}</template>
                        </el-table-column>
                        <el-table-column label="本户人数" header-align="center" align="center" min-width="50">
                            <template slot-scope="{row}">{{ row.familyCont }}</template>
                        </el-table-column>
                        <el-table-column label="是否有问题" class-name="status-col" align="center" width="120">
                            <template slot-scope="{row}">
                                {{ row.isProblem === 1 ? "有问题" : "无问题" }}
                            </template>
                        </el-table-column>
                        <!-- 操作 -->
                        <el-table-column
                                label="问题详情"
                                align="center"
                                width="200"
                                class-name="small-padding fixed-width"
                        >
                            <template slot-scope="{row}">
                                <el-button type="primary" size="mini" @click="showDetail(row)">查看</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <!-- 分页控件 -->
                    <pagination
                            v-show="total>0"
                            :total="total"
                            :page.sync="listQuery.page"
                            :limit.sync="listQuery.limit"
                            style="padding:0px !important"
                            @pagination="getList"
                    />
                </div>
            </el-main>
        </el-container>

    </div>
</template>

<script>
    import waves from '@/directive/waves'
    import elDragDialog from '@/directive/el-drag-dialog'
    import Pagination from '@/components/Pagination'

    import {fetchList, saveQuestion, deleteQuestion} from '@/api/issueList'

    export default {
        name: 'IssueListPoorVillage',
        components: {Pagination},
        directives: {waves, elDragDialog},
        data() {
            return {
                downLoadUrl: process.env.VUE_APP_BASE_API + '/excel/question/download',
                upLoadUrl: process.env.VUE_APP_BASE_API + '/excel/question/upload',
//                // 县市区
//                areaOptions: [],
//                areaValue: '',
//                // 乡镇
//                townOptions: [],
//                townValue: '',
//                // 村
//                villageOptions: [],
//                villageValue: '',
                //模拟假数据
                allArea: [
                    {
                        'code': 'area',
                        'children': [
                            {
                                'code': 'town',
                                'children': [
                                    {
                                        'code': 'village',
                                        'text': 'A俺村'
                                    }
                                ],
                                'text': 'AA镇'
                            },
                            {
                                'code': 'town',
                                'children': [
                                    {
                                        'code': 'village',
                                        'text': '某某村'
                                    }
                                ],
                                'text': '某某镇'
                            }
                        ],
                        'text': '海阳市'
                    },
                    {
                        'code': 'area',
                        'children': [
                            {
                                'code': 'town',
                                'children': [
                                    {
                                        'code': 'village',
                                        'text': '里三地村'
                                    },
                                    {
                                        'code': 'village',
                                        'text': '里四地村'
                                    }
                                ],
                                'text': '高陵2镇'
                            },
                            {
                                'code': 'town',
                                'children': [
                                    {
                                        'code': 'village',
                                        'text': '里二地村'
                                    }
                                ],
                                'text': '高陵镇'
                            }
                        ],
                        'text': '牟平区'
                    }
                ],
                //县乡村的树
                allAreaTree: [],
                //县乡村的树的值
                areaValue: [],

                // 表格
                tabPosition: 1,
                //                list: null,
                list: [
                    {
                        'townName': '苏家店镇',
                        'familyType': 2, // 【1即时帮扶 2将档立卡】
                        'familyCont': 1, // 【户人数】
                        'helperName': '栖霞督查56', // 【帮扶人】
                        'personNum': '37062819590530741744',
                        'isProblem': 1, // 【1、有问题 0、无问题】
                        'villageName': '西山院村',
                        'personImage': 'http://61.156.14.37:8061/images/person/20200422/158753710162724127.jpg?1587709728565',
                        'confirmName': null, // 【采集人】
                        'personName': '刘希秋',
                        'isConfirm': 2, // 【0未采集 1、采集中 2、采集完成】
                        'areaName': '栖霞市',
                        'createTime': '2020-04-23 17:02:08',
                        'id': 45013
                    },
                    {
                        'townName': '苏家店镇',
                        'familyType': 1, // 【1即时帮扶 2将档立卡】
                        'familyCont': 1, // 【户人数】
                        'helperName': '栖霞督查56', // 【帮扶人】
                        'personNum': '37062819590530741744',
                        'isProblem': 1, // 【1、有问题 0、无问题】
                        'villageName': '西山院村',
                        'personImage': 'http://61.156.14.37:8061/images/person/20200422/158753710162724127.jpg?1587709728565',
                        'confirmName': null, // 【采集人】
                        'personName': '刘希秋',
                        'isConfirm': 2, // 【0未采集 1、采集中 2、采集完成】
                        'areaName': '栖霞市',
                        'createTime': '2020-04-23 17:02:08',
                        'id': 45013
                    },
                    {
                        'townName': '苏家店镇',
                        'familyType': 2, // 【1即时帮扶 2将档立卡】
                        'familyCont': 1, // 【户人数】
                        'helperName': '栖霞督查56', // 【帮扶人】
                        'personNum': '37062819590530741744',
                        'isProblem': 1, // 【1、有问题 0、无问题】
                        'villageName': '西山院村',
                        'personImage': 'http://61.156.14.37:8061/images/person/20200422/158753710162724127.jpg?1587709728565',
                        'confirmName': null, // 【采集人】
                        'personName': '刘希秋',
                        'isConfirm': 2, // 【0未采集 1、采集中 2、采集完成】
                        'areaName': '栖霞市',
                        'createTime': '2020-04-23 17:02:08',
                        'id': 45013
                    },
                    {
                        'townName': '苏家店镇',
                        'familyType': 2, // 【1即时帮扶 2将档立卡】
                        'familyCont': 1, // 【户人数】
                        'helperName': '栖霞督查56', // 【帮扶人】
                        'personNum': '37062819590530741744',
                        'isProblem': 1, // 【1、有问题 0、无问题】
                        'villageName': '西山院村',
                        'personImage': 'http://61.156.14.37:8061/images/person/20200422/158753710162724127.jpg?1587709728565',
                        'confirmName': null, // 【采集人】
                        'personName': '刘希秋',
                        'isConfirm': 2, // 【0未采集 1、采集中 2、采集完成】
                        'areaName': '栖霞市',
                        'createTime': '2020-04-23 17:02:08',
                        'id': 45013
                    },
                    {
                        'townName': '苏家店镇',
                        'familyType': 2, // 【1即时帮扶 2将档立卡】
                        'familyCont': 1, // 【户人数】
                        'helperName': '栖霞督查56', // 【帮扶人】
                        'personNum': '37062819590530741744',
                        'isProblem': 1, // 【1、有问题 0、无问题】
                        'villageName': '西山院村',
                        'personImage': 'http://61.156.14.37:8061/images/person/20200422/158753710162724127.jpg?1587709728565',
                        'confirmName': null, // 【采集人】
                        'personName': '刘希秋',
                        'isConfirm': 2, // 【0未采集 1、采集中 2、采集完成】
                        'areaName': '栖霞市',
                        'createTime': '2020-04-23 17:02:08',
                        'id': 45013
                    },
                    {
                        'townName': '苏家店镇',
                        'familyType': 2, // 【1即时帮扶 2将档立卡】
                        'familyCont': 1, // 【户人数】
                        'helperName': '栖霞督查56', // 【帮扶人】
                        'personNum': '37062819590530741744',
                        'isProblem': 1, // 【1、有问题 0、无问题】
                        'villageName': '西山院村',
                        'personImage': 'http://61.156.14.37:8061/images/person/20200422/158753710162724127.jpg?1587709728565',
                        'confirmName': null, // 【采集人】
                        'personName': '刘希秋',
                        'isConfirm': 2, // 【0未采集 1、采集中 2、采集完成】
                        'areaName': '栖霞市',
                        'createTime': '2020-04-23 17:02:08',
                        'id': 45013
                    },
                    {
                        'townName': '苏家店镇',
                        'familyType': 2, // 【1即时帮扶 2将档立卡】
                        'familyCont': 1, // 【户人数】
                        'helperName': '栖霞督查56', // 【帮扶人】
                        'personNum': '37062819590530741744',
                        'isProblem': 1, // 【1、有问题 0、无问题】
                        'villageName': '西山院村',
                        'personImage': 'http://61.156.14.37:8061/images/person/20200422/158753710162724127.jpg?1587709728565',
                        'confirmName': null, // 【采集人】
                        'personName': '刘希秋',
                        'isConfirm': 2, // 【0未采集 1、采集中 2、采集完成】
                        'areaName': '栖霞市',
                        'createTime': '2020-04-23 17:02:08',
                        'id': 45013
                    },
                    {
                        'townName': '苏家店镇',
                        'familyType': 2, // 【1即时帮扶 2将档立卡】
                        'familyCont': 1, // 【户人数】
                        'helperName': '栖霞督查56', // 【帮扶人】
                        'personNum': '37062819590530741744',
                        'isProblem': 1, // 【1、有问题 0、无问题】
                        'villageName': '西山院村',
                        'personImage': 'http://61.156.14.37:8061/images/person/20200422/158753710162724127.jpg?1587709728565',
                        'confirmName': null, // 【采集人】
                        'personName': '刘希秋',
                        'isConfirm': 2, // 【0未采集 1、采集中 2、采集完成】
                        'areaName': '栖霞市',
                        'createTime': '2020-04-23 17:02:08',
                        'id': 45013
                    },
                    {
                        'townName': '苏家店镇',
                        'familyType': 2, // 【1即时帮扶 2将档立卡】
                        'familyCont': 1, // 【户人数】
                        'helperName': '栖霞督查56', // 【帮扶人】
                        'personNum': '37062819590530741744',
                        'isProblem': 1, // 【1、有问题 0、无问题】
                        'villageName': '西山院村',
                        'personImage': 'http://61.156.14.37:8061/images/person/20200422/158753710162724127.jpg?1587709728565',
                        'confirmName': null, // 【采集人】
                        'personName': '刘希秋',
                        'isConfirm': 2, // 【0未采集 1、采集中 2、采集完成】
                        'areaName': '栖霞市',
                        'createTime': '2020-04-23 17:02:08',
                        'id': 45013
                    },
                    {
                        'townName': '苏家店镇',
                        'familyType': 2, // 【1即时帮扶 2将档立卡】
                        'familyCont': 1, // 【户人数】
                        'helperName': '栖霞督查56', // 【帮扶人】
                        'personNum': '37062819590530741744',
                        'isProblem': 1, // 【1、有问题 0、无问题】
                        'villageName': '西山院村',
                        'personImage': 'http://61.156.14.37:8061/images/person/20200422/158753710162724127.jpg?1587709728565',
                        'confirmName': null, // 【采集人】
                        'personName': '刘希秋',
                        'isConfirm': 2, // 【0未采集 1、采集中 2、采集完成】
                        'areaName': '栖霞市',
                        'createTime': '2020-04-23 17:02:08',
                        'id': 45013
                    },
                    {
                        'townName': '苏家店镇',
                        'familyType': 2, // 【1即时帮扶 2将档立卡】
                        'familyCont': 1, // 【户人数】
                        'helperName': '栖霞督查56', // 【帮扶人】
                        'personNum': '37062819590530741744',
                        'isProblem': 1, // 【1、有问题 0、无问题】
                        'villageName': '西山院村',
                        'personImage': 'http://61.156.14.37:8061/images/person/20200422/158753710162724127.jpg?1587709728565',
                        'confirmName': null, // 【采集人】
                        'personName': '刘希秋',
                        'isConfirm': 2, // 【0未采集 1、采集中 2、采集完成】
                        'areaName': '栖霞市',
                        'createTime': '2020-04-23 17:02:08',
                        'id': 45013
                    }
                ],
                total: 1,
                listLoading: false,
                listQuery: {
                    page: 1,
                    limit: 20,
                    content: '',
                    code: '',
                    type: 1
                },
                // 编辑
                temp: {
                    content: '',
                    answer: '',
                    options: [{value: 'A', text: ''}, {value: 'B', text: ''}],
                    difficulty: 0
                },
                dialogFormVisible: false,
                dialogStatus: '',
                textMap: {
                    typeName: '判断题',
                    update: '编辑',
                    create: '添加'
                },
                rules: {
                    content: [{required: true, message: '必填', trigger: 'blur'}],
                    answer: [{required: true, message: '必填', trigger: 'blur'}]
                },
                uploadLoading: false
            }
        },
        created() {
            //            this.getList()
            this.userInfo = getStorage('userInfo');

            this.downLoadUrl = `${process.env.VUE_APP_BASE_API}/excel/reform?${userInfo.areaName === '烟台市' ? '' : ('areaName=' + userInfo.areaName + '&')}userId=${userInfo.id}&excelType=${this.downloadHouseholdsTypeValue}`;
            this.fetchArea()
        },
        methods: {
            // 获取地区数据
            fetchArea() {
                this.allAreaTree = this.dealAreaData(this.allArea);
            },

            //将后台返回的树处理成前端组件需要的树
            dealAreaData (data) {
                return data.map( val => {
                    let children = null;
                    if(val.hasOwnProperty("children")){
                        children = this.dealAreaData(val.children)
                    }
                    return {
                        ...val,
                        label: val.text,
                        value: val.text,
                        children
                    }
                })
            },

            // 获取数据
            getList() {
                this.listLoading = true
                this.listQuery.type = this.tabPosition
                this.listQuery.fieldCode = this.clickNode.code
                fetchList(this.listQuery).then(res => {
                    this.list = res.data.list
                    this.total = res.data.total
                    setTimeout(() => {
                        this.listLoading = false
                    }, 1.5 * 1000)
                })
                this.listLoading = false
            },

            // tab键改变触发
            changeTab: function (val) {
                this.tabPosition = val
                this.textMap.typeName = this.typeOptions[val - 1]
                this.getList()
            },

            //改变县市区
            changeArea(value) {
                this.areaValue = value;
            },

            // 导出触发
            handleDownload() {
                this.$refs['downExcelDo'].click()
            },

            // 条件查询
            handleFilter() {
                this.listQuery.page = 1
                this.getList()
            },

            // 重置查询
            handleReset() {
                this.listQuery.content = ''
                this.listQuery.code = ''
                this.getList()
            },

            // 查看详情
            showDetail(data) {
                this.$store.dispatch('issueList/setHouseholdsData', data)
                this.$router.push(
                    {
                        name: 'IssueListPoorVillageDetail',
                        query: {
                            id: data.id,
                            familyType: data.familyType,
                        }
                    }
                )
            }

        }
    }
</script>

<style scoped>

</style>
