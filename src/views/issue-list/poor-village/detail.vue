<template>
    <div class="app-container">
        <el-container>
            <el-main>
                <el-card class="box-card">
                    <div class="text item">
                        <!--建档立卡-->
                        <template >
                            <el-tabs v-model="tabValue" type="card" @tab-click="changeTab">
                                <!--扶贫情况-->
                                <el-tab-pane label="扶贫情况" name="first">
                                    <step-a/>
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
    import stepA from './stepA.vue'

    import {fetchList, saveQuestion, deleteQuestion} from '@/api/issueList'

    const typeOptions = ['扶贫情况']

    export default {
        name: 'IssueListPoorHouseholdsDetail',
        components: {
            Pagination,
            stepA
        },
        directives: {waves, elDragDialog},
        data() {
            return {
                typeOptions,
                // 表格
                tabValue: 'first',
                textMap: {
                    typeName: '扶贫情况',
                    update: '行业扶贫政策',
                    create: '帮扶责任落实',
                    create1: '贫困户满意度'
                }
            }
        },
        created() {
            this.getData()
        },
        mounted() {
            console.log(this.$route.query,'ssssssssss');
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
