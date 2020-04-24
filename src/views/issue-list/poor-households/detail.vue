<template>
  <div class="app-container">
    <el-container>
      <el-main>
        <el-card class="box-card">
          <div class="text item">
            <template>
              <!--<el-radio-group v-model="tabValue" style="margin-bottom: 30px;" @change="changeTab">-->
              <!--<el-radio-button label="1">判断题</el-radio-button>-->
              <!--<el-radio-button label="2">单选题</el-radio-button>-->
              <!--<el-radio-button label="3">多选题</el-radio-button>-->
              <!--</el-radio-group>-->
              <el-tabs v-model="tabValue" type="card" @tab-click="changeTab">
                <el-tab-pane label="两不愁三保障" name="first">
                  配置管理
                </el-tab-pane>
                <el-tab-pane label="行业扶贫政策" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="帮扶责任落实" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="贫困户满意度" name="fourth">定时任务补偿</el-tab-pane>
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

import { fetchList, saveQuestion, deleteQuestion } from '@/api/issueList'

const typeOptions = ['两不愁三保障', '行业扶贫政策', '帮扶责任落实', '贫困户满意度']

export default {
  name: 'IssueListPoorHouseholdsDetail',
  components: { Pagination },
  directives: { waves, elDragDialog },
  data() {
    return {
      typeOptions,
      // 表格
      tabValue: 'first',
      textMap: {
        typeName: '两不愁三保 障',
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
    console.log(this.$store.state.issueList, 'this.$route.params.data.')
  },
  methods: {
    // 获取数据
    getData() {

    },
    // tab键改变触发
    changeTab: function(tab, event) {
      this.tabValue = tab.name
      this.getData()
    }

  }
}
</script>

<style scoped>

</style>
