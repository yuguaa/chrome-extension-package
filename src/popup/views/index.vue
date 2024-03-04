<template>
  <n-el class="w-[400px] h-[368px] overflow-hidden relative">
    <n-card title="设置" class="h-[368px] w-full absolute top-0 left-0 right-0 bottom-0" content-style="padding: 0;">
      <n-tabs type="line" animated placement="left">
        <n-tab-pane name="tab" tab="新标签页">
          <SetUrl />
        </n-tab-pane>
        <n-tab-pane class="max-h-[300px] overflow-auto scrollbar-common" name="engine" tab="搜索引擎">
          <SetSearchEngine />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </n-el>
</template>
<script setup>
import SetUrl from './components/SetUrl/index.vue'
import SetSearchEngine from './components/SetSearchEngine/index.vue'
</script>
<style scoped lang="less"></style>
