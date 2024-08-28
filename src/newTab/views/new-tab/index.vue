<template>
  <n-el class="flex flex-col w-full h-screen relative">
    <n-scrollbar>
      <n-el class="absolute z-[-1] top-0 left-0 w-full h-full" :style="bgStyle"></n-el>
      <n-el
        class="h-56 leading-[56px] flex justify-between items-center px-20 border-b-[1px] border-[var(--primary-color)]"
      >
        <n-el>
          <n-gradient-text :type="logoType"> {{ logo }} </n-gradient-text>
        </n-el>
        <n-el class="flex items-center">
          <n-button circle tertiary class="mr-10" @click="changeTab">
            <template #icon>
              <n-icon color="var(--primary-color)">
                <Apps />
              </n-icon>
            </template>
          </n-button>
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
      </n-el>
      <n-el class="h-[calc(100vh-56px)] flex-shrink-0">
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
                    autofocus
                    class="keyword-input"
                    v-model:value="keyword"
                    :style="{ width: '400px' }"
                    ref="inputRef"
                    @keydown.stop
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
              <n-el class="mt-40 max-w-[900px]">
                <n-space :size="30" ref="dragContainer">
                  <n-el
                    class="rounded-sm cursor-pointer draggable flex flex-col items-center"
                    :key="index"
                    v-for="(item, index) in AIOptions"
                    :title="item.label"
                    @click="handleAI(item)"
                    @contextmenu.prevent="rightClickShortCut(item)"
                  >
                    <n-avatar
                      class="cursor-pointer"
                      color="transparent"
                      object-fit="scale-down"
                      :size="40"
                      :src="item.logo"
                    ></n-avatar>
                    <n-el
                      class="w-80 mt-4 text-ellipsis whitespace-nowrap overflow-hidden text-center"
                      :style="{ color: 'var(--primary-color)' }"
                      >{{ item.label }}</n-el
                    >
                  </n-el>
                </n-space>
              </n-el>
            </n-el>
          </n-el>
        </n-el>
      </n-el>
      <n-card class="tabs bg-white absolute z-10 -left-full top-0" title="分类">
        <template #header-extra>
          <n-button circle tertiary @click="changeTab">
            <template #icon>
              <n-icon color="var(--primary-color)">
                <CloseCircleSharp />
              </n-icon>
            </template>
          </n-button>
        </template>
        <n-tabs type="card" animated placement="left" :style="{ height: 'calc(100vh - 68px)' }">
          <n-tab-pane
            v-for="(item, index) in urlList"
            :name="item.name"
            :tab="item.name"
            :key="index"
            :style="{ height: '100%' }"
          >
            <n-card title="快捷跳转">
              <template #header-extra>
                <n-el>鼠标左键跳转，右键添加快捷方式 </n-el>
              </template>
              <n-scrollbar trigger="none">
                <n-button
                  class="m-8"
                  ghost
                  :color="getRandomColor()"
                  round
                  v-for="link in item.links"
                  :key="link.id"
                  @click="handleAI(link)"
                  @contextmenu.prevent="rightClick(link)"
                >
                  {{ link.name }}
                </n-button>
              </n-scrollbar>
            </n-card>
          </n-tab-pane>
        </n-tabs>
      </n-card>

      <!-- <n-drawer v-model:show="showUrlFolder" :width="502" placement="right">
      <n-drawer-content bodyContentStyle="padding: 4px 0 4px 10px">
        <template #header>
          <n-el class="flex justify-between items-center">
            <n-el> Apps </n-el>
            <n-button circle tertiary class="mr-10">
              <template #icon>
                <n-icon color="var(--primary-color)">
                  <Search />
                </n-icon>
              </template>
            </n-button>
          </n-el>
        </template>
        <n-tabs type="line" animated placement="left" :style="{ height: '100%' }">
          <n-tab-pane
            v-for="(item, index) in urlList"
            :name="item.name"
            :tab="item.name"
            :key="index"
            :style="{ height: '100%' }"
          >
            <n-scrollbar trigger="none">
              <n-button
                class="m-4"
                ghost
                :color="getRandomColor()"
                round
                v-for="link in item.links"
                :key="link.id"
                @click="handleAI(link)"
                @contextmenu.prevent="rightClick(link)"
              >
                {{ link.name }}
              </n-button>
            </n-scrollbar>
          </n-tab-pane>
        </n-tabs>
      </n-drawer-content>
    </n-drawer> -->
    </n-scrollbar>
    <n-drawer v-model:show="editShortCutShow" :width="502" placement="right">
      <n-drawer-content title="编辑" bodyContentStyle="padding: 4px 0 4px 10px">
        <n-scrollbar>
          <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" size="medium">
            <n-form-item path="label" label="名称">
              <n-input v-model:value="formValue.label" />
            </n-form-item>
            <n-form-item path="value" label="厂家">
              <n-input v-model:value="formValue.value" />
            </n-form-item>
            <n-form-item path="url" label="链接">
              <n-input v-model:value="formValue.url" />
            </n-form-item>
            <n-form-item path="logo" label="LOGO">
              <n-input v-model:value="formValue.logo" />
            </n-form-item>
            <n-form-item>
              <n-space>
                <n-button ghost type="error" @click="handleDelShortCut">删除</n-button>
                <n-button ghost type="primary" @click="handleSetShortCut">确认</n-button>
              </n-space>
            </n-form-item>
          </n-form>
        </n-scrollbar>
      </n-drawer-content>
    </n-drawer>
  </n-el>
</template>

<script>
import gsap from 'gsap'
import { cloneDeep } from 'lodash'
import { computed, defineComponent, inject, onMounted, reactive, ref } from 'vue'
import { useMessage } from 'naive-ui'
import { useDraggable } from 'vue-draggable-plus'
import { MoonSharp, Sunny, Apps, Search, CloseCircleSharp } from '@vicons/ionicons5'
import IconImage from '../../../icons/icon.png'
import {
  getEngine,
  getEngineOptions,
  setEngine,
  getTabLogo,
  setAIOptions,
  getAIOptions,
  getLogoType,
  getBg,
  getBgFilter,
  getRandomColor
} from '../../../utils/cookie'
import urlList from './data.js'

export default defineComponent({
  name: 'NewTab',
  components: {
    MoonSharp,
    Sunny,
    Apps,
    Search,
    CloseCircleSharp
  },
  setup() {
    const message = useMessage()
    const dragContainer = ref(null)
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

    const showUrlFolder = ref(false)
    const tabIsShow = ref(false)
    const changeTab = () => {
      const dom = document.querySelector('.tabs')
      if (tabIsShow.value) {
        gsap.to(dom, { left: '-100%' })
        tabIsShow.value = false
      } else {
        gsap.to(dom, { left: 0 })
        tabIsShow.value = true
      }
    }
    const clickApps = () => {
      const dom = document.querySelector('.tabs')
      gsap.to(dom, { left: 0 })
    }
    const handleClose = () => {
      const dom = document.querySelector('.tabs')
      gsap.to(dom, { left: '-100%' })
    }
    const rightClick = item => {
      console.log(item)
      const shortCut = {
        label: item.name,
        value: item.name,
        url: item.url,
        logo: item.logo || `https://picsum.photos/200/200?random=${Math.random()}`
      }
      AIOptions.push(shortCut)
      setAIOptions(AIOptions)
    }

    const formRef = ref(null)

    const formValue = reactive({
      label: '',
      value: '',
      url: '',
      logo: ''
    })
    const rules = {
      label: { required: true, message: '填写label', trigger: 'blur' },
      value: { required: true, message: '填写value', trigger: 'blur' },
      url: { required: true, message: '填写url', trigger: 'blur' },
      logo: { required: true, message: '填写logo', trigger: 'blur' }
    }
    const handleSetShortCut = () => {
      formRef.value?.validate(errors => {
        if (!errors) {
          const index = AIOptions.findIndex(item => item.value === formValue.value)
          AIOptions[index] = formValue
          setAIOptions(AIOptions)
          message.success('设置成功')
          formValue.label = ''
          formValue.value = ''
          formValue.url = ''
          formValue.logo = ''
          editShortCutShow.value = false
        } else {
          console.log(errors)
          message.error('请正确填写')
        }
      })
    }
    const handleDelShortCut = () => {
      const index = AIOptions.findIndex(item => item.value === formValue.value)
      AIOptions.splice(index, 1)
      setAIOptions(AIOptions)
      editShortCutShow.value = false
    }
    const editShortCutShow = ref(false)
    const rightClickShortCut = item => {
      console.log(`🚀 ~ item:`, item)

      const obj = cloneDeep(item)
      formValue.label = obj.label
      formValue.value = obj.value
      formValue.url = obj.url
      formValue.logo = obj.logo
      editShortCutShow.value = true
    }
    // 返回值是一个对象，包含了一些方法，比如 start、destroy、pause 等
    const draggable = useDraggable(dragContainer, AIOptions, {
      animation: 150,
      ghostClass: 'ghost',
      onStart: () => {
        console.log('start')
      },
      onUpdate: () => {
        console.log('update')
      },
      onEnd: () => {
        setAIOptions(AIOptions)
      }
    })

    const inputRef = ref(null)

    const keydownFoo = e => {
      // 如果是Tab键
      if (e.keyCode === 9) {
        changeTab()
      } else {
        // inputRef.value.focus()
        console.log(`🚀 ~ inputRef.value:`, inputRef.value)
      }
    }
    document.addEventListener('keydown', keydownFoo)
    onMounted(() => {
      draggable.start()
    })
    return {
      dragContainer,
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
      rightClickShortCut,
      bg,
      bgStyle,
      bgFilter,
      inputRef,
      keydownFoo,
      clickApps,
      showUrlFolder,
      urlList,
      getRandomColor,
      rightClick,
      handleClose,
      changeTab,
      formRef,
      formValue,
      rules,
      handleSetShortCut,
      handleDelShortCut,
      editShortCutShow
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
