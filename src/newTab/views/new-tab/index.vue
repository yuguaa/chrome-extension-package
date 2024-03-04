<template>
  <n-el class="flex flex-col w-full h-screen">
    <n-el
      class="h-56 leading-[56px] flex justify-between items-center px-20 border-b-[1px] border-[var(--primary-color)]"
    >
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
    <n-el class="flex-1 flex items-center justify-center">
      <n-card class="h-full w-full">
        <n-el class="h-full flex justify-center">
          <n-el class="flex flex-col items-center mt-200">
            <n-el>
              <n-input-group>
                <n-input v-model:value="keyword" :style="{ width: '400px' }" @keyup.enter="handleSearch" />
                <n-button type="primary" ghost @click.enter="handleSearch"> 搜 索 </n-button>
              </n-input-group>
            </n-el>
            <n-el class="mt-40">
              <n-space>
                <n-button
                  v-for="(item, index) in btnOptions"
                  ghost
                  :type="typeOptions[index]"
                  :key="index"
                  @click="useSearch"
                >
                  {{ item.label }}
                </n-button>
              </n-space>
            </n-el>
          </n-el>
        </n-el>
      </n-card>
    </n-el>
  </n-el>
</template>

<script>
import { defineComponent, inject, ref } from 'vue'
import { MoonSharp, Sunny } from '@vicons/ionicons5'
import IconImage from '../../../icons/icon.png'
import { getEngine, getEngineOptions } from '../../../utils/cookie'

export default defineComponent({
  name: 'NewTab',
  components: {
    MoonSharp,
    Sunny
  },
  setup() {
    const themeInject = inject('theme')
    const { changeTheme, getTheme } = themeInject
    const active = ref(!!getTheme())
    const handleUpdateValue = value => {
      changeTheme()
      active.value = value
    }

    const keyword = ref('')

    const handleSearch = () => {
      const engine = getEngine().engine
      window.open(`${engine}${keyword.value}`)
    }
    const btnOptions = getEngineOptions()
    const useSearch = engine => {}
    const typeOptions = ['info', 'success', 'warning', 'error', 'default', 'primary', 'secondary']
    return {
      active,
      getTheme,
      handleUpdateValue,
      changeTheme,
      IconImage,
      keyword,
      handleSearch,
      useSearch,
      btnOptions,
      typeOptions
    }
  }
})
</script>

<style lang="less" scoped></style>
