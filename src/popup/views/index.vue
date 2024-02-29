<template>
  <div class="w-[400px]">
    <n-card title="设置">
      <n-tabs type="line" animated>
        <n-tab-pane name="tab" tab="新标签页">
          <SetUrl />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>
<script setup>
import SetUrl from './components/SetUrl/index.vue'
</script>
<style scoped lang="less"></style>
