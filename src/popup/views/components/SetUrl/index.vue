<template>
  <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" size="medium">
    <n-form-item label="URL:" path="url">
      <n-input v-model:value="formValue.url" type="text" placeholder="请输入" />
    </n-form-item>
    <n-form-item label="LOGO:" path="logo">
      <n-input v-model:value="formValue.logo" type="text" placeholder="请输入" />
    </n-form-item>
    <n-form-item label="LOGO_TYPE:" path="logoType">
      <n-select v-model:value="formValue.logoType" :options="logoTypeOptions" />
    </n-form-item>
    <n-form-item label="NAME:" path="name">
      <n-input v-model:value="formValue.name" type="text" placeholder="请输入" />
    </n-form-item>
    <n-form-item label="背景:" path="bg">
      <n-input v-model:value="formValue.bg" type="text" placeholder="请输入" />
    </n-form-item>
    <n-form-item label="背景模糊:" path="bgFilter">
      <n-input v-model:value="formValue.bgFilter" type="text" placeholder="请输入" />
    </n-form-item>
    <n-form-item>
      <n-button @click="handleSetUrl">设置</n-button>
    </n-form-item>
  </n-form>
</template>
<script>
import { useMessage } from 'naive-ui'
import { ref, defineComponent, reactive } from 'vue'
import {
  getTabUrl,
  setTabUrl,
  getTabLogo,
  setTabLogo,
  getTabName,
  setTabName,
  getLogoType,
  setLogoType,
  getBg,
  setBg,
  getBgFilter,
  setBgFilter
} from '../../../../utils/cookie'
export default defineComponent({
  setup() {
    const message = useMessage()
    const formRef = ref(null)
    const formValue = reactive({
      url: getTabUrl() || '',
      logo: getTabLogo() || 'PINE_STORM',
      logoType: getLogoType(),
      name: getTabName() || 'PINE_STORM',
      bg: getBg() || '',
      bgFilter: getBgFilter() || ''
    })
    const rules = {
      // url: { required: true, message: '请输入URL', trigger: 'blur' }
    }
    const handleSetUrl = () => {
      formRef.value?.validate(errors => {
        if (!errors) {
          setTabUrl(formValue.url)
          setTabLogo(formValue.logo)
          setLogoType(formValue.logoType)
          setTabName(formValue.name)
          setBg(formValue.bg)
          setBgFilter(formValue.bgFilter)
          message.success('设置成功')
        } else {
          console.log(errors)
          message.error('请正确填写')
        }
      })
    }
    const logoTypeOptions = [
      { value: 'primary', label: 'primary' },
      { value: 'success', label: 'success' },
      { value: 'warning', label: 'warning' },
      { value: 'error', label: 'error' },
      { value: 'info', label: 'info' }
    ]
    return {
      logoTypeOptions,
      formRef,
      formValue,
      rules,
      handleSetUrl
    }
  }
})
</script>
<style></style>
