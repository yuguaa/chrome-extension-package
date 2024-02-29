<template>
  <n-el class="flex flex-col w-full h-full">
    <n-el class="h-56 leading-[56px] flex justify-between items-center px-20 border-b-2 border-[var(--primary-color)]">
      <n-el>
        <n-gradient-text type="danger"> PINE-STORM </n-gradient-text>
      </n-el>
      <n-switch :value="active" @update:value="handleUpdateValue">
        <template #checked>深色</template>
        <template #unchecked>浅色</template>
        <template #icon>
          <n-icon color="var(--primary-color)">
            <MoonSharp v-if="active" />
            <Sunny v-else />
          </n-icon>
        </template>
      </n-switch>
    </n-el>
    <n-el class="flex-1 flex items-center justify-center p-20">
      <n-card class="h-full w-full">
        <n-el>这是新的标签页</n-el>
      </n-card>
    </n-el>
  </n-el>
</template>

<script>
import { defineComponent, inject, ref } from 'vue'
import { MoonSharp, Sunny } from '@vicons/ionicons5'
import IconImage from '../../../icons/icon.png'
export default defineComponent({
  name: 'NewTab',
  components: {
    MoonSharp,
    Sunny
  },
  setup() {
    const changeTheme = inject('theme')
    const active = ref(false)
    const handleUpdateValue = value => {
      changeTheme()
      active.value = value
    }
    return {
      active,
      handleUpdateValue,
      changeTheme,
      IconImage
    }
  }
})
</script>

<style lang="less" scoped></style>
