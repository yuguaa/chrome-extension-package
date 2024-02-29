<template>
  <n-card>
    <n-form ref="formRef" inline :label-width="80" :model="formValue" :rules="rules" size="medium">
      <n-form-item label="URL:" path="url">
        <n-input v-model:value="formValue.url" type="text" placeholder="请输入" />
      </n-form-item>
      <n-form-item>
        <n-button @click="handleSetUrl">设置</n-button>
      </n-form-item>
    </n-form>
  </n-card>
</template>
<script>
import { useMessage } from 'naive-ui'
import { ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const message = useMessage()
    const formRef = ref(null)
    const formValue = ref({
      url: 'https://chat.openai.com'
    })
    const rules = {
      url: { required: true, message: '请输入URL', trigger: 'blur' }
    }
    const handleSetUrl = () => {
      formRef.value?.validate(errors => {
        if (!errors) {
          chrome.storage.sync.set({ setUrl: formValue.url }, function () {
            message.success('设置成功')
          })
        } else {
          console.log(errors)
          message.error('请正确填写')
        }
      })
    }
    return {
      formRef,
      formValue,
      rules,
      handleSetUrl
    }
  }
})
</script>
<style></style>
