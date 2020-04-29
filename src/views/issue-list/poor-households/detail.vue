<template>
    <div class="app-container">
        <el-container>
            <el-main>
                <el-card class="box-card">
                    <div class="text item">
                        <!--建档立卡-->
                        <template v-if="Number($route.query.familyType) === 2">
                            <el-tabs v-model="tabValue" type="card" @tab-click="changeTab">
                                <!--两不愁三保障-->
                                <el-tab-pane label="两不愁三保障" name="first">
                                    <build-step-a/>
                                </el-tab-pane>
                                <!--行业扶贫政策落实-->
                                <el-tab-pane label="行业扶贫政策" name="second">
                                    <build-step-b/>
                                </el-tab-pane>
                                <!--帮扶责任落实-->
                                <el-tab-pane label="帮扶责任落实" name="third">
                                    <build-step-c/>
                                </el-tab-pane>
                                <!--贫困户满意度-->
                                <el-tab-pane label="贫困户满意度" name="fourth">
                                    <build-step-d/>
                                </el-tab-pane>
                            </el-tabs>
                        </template>
                        <!--即时帮扶-->
                        <template v-else-if="Number($route.query.familyType) === 1">
                            <el-tabs v-model="tabValue" type="card" @tab-click="changeTab">
                                <!--两不愁三保障-->
                                <el-tab-pane label="两不愁三保障" name="first">
                                    <immediate-step-a/>
                                </el-tab-pane>
                                <!--行业扶贫政策落实-->
                                <el-tab-pane label="行业扶贫政策" name="second">
                                    <immediate-step-b/>
                                </el-tab-pane>
                                <!--帮扶责任落实-->
                                <el-tab-pane label="帮扶责任落实" name="third">
                                    <immediate-step-c/>
                                </el-tab-pane>
                            </el-tabs>
                        </template>

                    </div>
                </el-card>

            </el-main>
        </el-container>

    </div>
</template>

<script>
    import waves from '@/directive/waves'
    import elDragDialog from '@/directive/el-drag-dialog'
    import Pagination from '@/components/Pagination'

    import buildStepA from './bookBuilding/stepA.vue'
    import buildStepB from './bookBuilding/stepB.vue'
    import buildStepC from './bookBuilding/stepC.vue'
    import buildStepD from './bookBuilding/stepD.vue'
    import immediateStepA from './immediate/stepA.vue'
    import immediateStepB from './immediate/stepB.vue'
    import immediateStepC from './immediate/stepC.vue'

    import {fetchList, saveQuestion, deleteQuestion} from '@/api/issueList'

    const typeOptions = ['两不愁三保障', '行业扶贫政策', '帮扶责任落实', '贫困户满意度']

    export default {
        name: 'IssueListPoorHouseholdsDetail',
        components: {
            Pagination,
            buildStepA,
            buildStepB,
            buildStepC,
            buildStepD,
            immediateStepA,
            immediateStepB,
            immediateStepC,
        },
        directives: {waves, elDragDialog},
        data() {
            return {
                typeOptions,
                // 表格
                tabValue: 'first',
                textMap: {
                    typeName: '两不愁三保障',
                    update: '行业扶贫政策',
                    create: '帮扶责任落实',
                    create1: '贫困户满意度'
                },
                personId:''
            }
        },
        created() {
            this.getData()
        },
        mounted() {
            this.personId = this.$route.query
//            console.log(this.$route.query,'ssssssssss');
        },
        methods: {
            // 获取数据
            getData() {

            },
            // tab键改变触发
            changeTab: function (tab, event) {
                this.tabValue = tab.name
                this.getData()
            }

        }
    }
</script>

<style scoped>

</style>
