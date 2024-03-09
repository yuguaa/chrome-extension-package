<template>
  <n-el class="flex flex-col w-full h-screen relative">
    <n-el class="absolute z-[-1] top-0 left-0 w-full h-full" :style="bgStyle"></n-el>
    <n-el
      class="h-56 leading-[56px] flex justify-between items-center px-20 border-b-[1px] border-[var(--primary-color)]"
    >
      <n-el>
        <n-gradient-text :type="logoType"> {{ logo }} </n-gradient-text>
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
      <n-el class="h-full w-full">
        <n-el class="h-full flex justify-center">
          <n-el class="flex flex-col items-center mt-200">
            <n-el class="flex items-center">
              <n-select
                v-model:value="currentEngine"
                :options="btnOptions"
                @update:value="handleUpdateCurrentEngine"
                class="mr-4"
                :style="{ width: '90px' }"
              />
              <n-input-group>
                <n-input
                  class="keyword-input"
                  v-model:value="keyword"
                  :style="{ width: '400px' }"
                  @keyup.enter="handleSearch"
                />
                <n-button type="primary" ghost @click.enter="handleSearch"> 搜 索 </n-button>
              </n-input-group>
            </n-el>
            <n-el class="mt-40">
              <n-space>
                <n-button
                  v-for="(item, index) in btnOptions"
                  ghost
                  :type="getRandomType()"
                  :key="index"
                  @click="useSearch(item.engine)"
                >
                  {{ item.label }}
                </n-button>
              </n-space>
            </n-el>
            <n-el class="mt-40">
              <n-space :size="40">
                <n-el
                  class="border-[1px] border-[var(--primary-color)] p-4 rounded-sm cursor-pointer"
                  :key="index"
                  v-for="(item, index) in AIOptions"
                  @click="handleAI(item)"
                >
                  <n-badge :type="getRandomType()" :value="item.label">
                    <n-avatar
                      color="transparent"
                      object-fit="scale-down"
                      v-if="item.logo"
                      :size="80"
                      :src="item.logo"
                    ></n-avatar>
                    <n-avatar color="transparent" object-fit="scale-down" v-else :size="80" :src="item.logo">
                      <n-el class="text-[var(--primary-color)]">{{ item.label }}</n-el>
                    </n-avatar>
                  </n-badge>
                </n-el>
              </n-space>
            </n-el>
          </n-el>
        </n-el>
      </n-el>
    </n-el>
  </n-el>
</template>

<script>
import { computed, defineComponent, inject, reactive, ref } from 'vue'
import { MoonSharp, Sunny } from '@vicons/ionicons5'
import IconImage from '../../../icons/icon.png'
import {
  getEngine,
  getEngineOptions,
  setEngine,
  getTabLogo,
  getAIOptions,
  getLogoType,
  getBg,
  getBgFilter
} from '../../../utils/cookie'

export default defineComponent({
  name: 'NewTab',
  components: {
    MoonSharp,
    Sunny
  },
  setup() {
    const themeInject = inject('theme')
    const { changeTheme, getTheme } = themeInject
    const btnOptions = getEngineOptions()
    const active = ref(!!getTheme())
    const handleUpdateValue = value => {
      changeTheme()
      active.value = value
    }
    const logo = ref(getTabLogo() || 'PINE_STORM')
    const logoType = getLogoType()
    const keyword = ref('')
    const currentEngine = ref(getEngine().value)
    const handleUpdateCurrentEngine = value => {
      currentEngine.value = value
      const engine = btnOptions.find(item => item.value === value)
      setEngine(engine)
    }
    const handleSearch = () => {
      const engine = btnOptions.find(item => item.value === currentEngine.value)
      window.open(`${engine.engine}${keyword.value}`)
    }

    const useSearch = engine => {
      window.open(`${engine}${keyword.value}`)
    }
    const typeOptions = ['info', 'success', 'warning', 'error']
    const getRandomType = () => {
      return typeOptions[Math.floor(Math.random() * typeOptions.length)]
    }
    const AIOptions = reactive(getAIOptions())
    const handleAI = item => {
      if (item.url) {
        window.open(item.url)
      }
    }
    const bg = getBg()
    const bgFilter = getBgFilter()
    const bgStyle = computed(() => {
      return {
        background: `url(${bg}) no-repeat center center / cover`,
        filter: bgFilter
      }
    })

    return {
      active,
      getTheme,
      handleUpdateValue,
      changeTheme,
      IconImage,
      keyword,
      handleSearch,
      useSearch,
      currentEngine,
      btnOptions,
      typeOptions,
      getRandomType,
      handleUpdateCurrentEngine,
      logo,
      logoType,
      AIOptions,
      handleAI,
      bg,
      bgStyle,
      bgFilter
    }
  }
})
</script>

<style lang="less" scoped>
.keyword-input {
  :deep(.n-input__input-el) {
    letter-spacing: 1px;
  }
}
</style>
