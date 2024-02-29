<template>
  <n-config-provider abstract :theme="theme" :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN">
    <n-theme-editor>
      <n-global-style />
      <n-message-provider>
        <router-view></router-view>
      </n-message-provider>
    </n-theme-editor>
  </n-config-provider>
</template>
<script>
import { defineComponent, provide, ref } from 'vue'
import { zhCN, dateZhCN, darkTheme, NThemeEditor } from 'naive-ui'
export default defineComponent({
  components: {
    NThemeEditor
  },
  setup() {
    const themeOverrides = {
      common: {
        fontWeightStrong: '600'
      }
    }
    let theme = ref(null)
    const changeTheme = () => {
      theme.value = theme.value === null ? darkTheme : null
    }
    provide('theme', changeTheme)
    return {
      theme,
      darkTheme,
      zhCN,
      dateZhCN,
      themeOverrides
    }
  }
})
</script>
<style scoped lang="less"></style>
