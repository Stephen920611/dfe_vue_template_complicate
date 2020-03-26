<template>
  <div class="app-container">
    <aside style="margin-top:15px;">{{ $t('pdf.tips') }}</aside>
    <router-link target="_blank" to="/pdf/download">
      <el-button type="primary">
        点击下载PDF
      </el-button>
    </router-link>
  </div>
</template>

