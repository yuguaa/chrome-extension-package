<template>
  <n-config-provider
    abstract
    :theme="lightTheme"
    :theme-overrides="themeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <n-message-provider>
      <router-view></router-view>
    </n-message-provider>
  </n-config-provider>
</template>
<script>
import { defineComponent } from 'vue'
import { zhCN, dateZhCN, darkTheme, lightTheme } from 'naive-ui'
export default defineComponent({
  setup() {
    const themeOverrides = {
      common: {
        fontWeightStrong: '600'
      }
    }
    return {
      zhCN,
      dateZhCN,
      darkTheme,
      lightTheme,
      themeOverrides
    }
  }
})
</script>
<style scoped lang="less"></style>
