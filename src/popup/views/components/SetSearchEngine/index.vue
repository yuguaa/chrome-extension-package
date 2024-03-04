<template>
  <n-card>
    <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" size="medium">
      <n-form-item label="ENGINE:" path="engine">
        <n-select v-model:value="formValue.engine" :options="options" class="w-full" :style="{ width: '100%' }" />
      </n-form-item>
      <n-form-item>
        <n-button @click="handleSetEngine">设置</n-button>
      </n-form-item>
    </n-form>
  </n-card>
</template>
<script>
import { useMessage } from 'naive-ui'
import { ref, defineComponent, reactive } from 'vue'
import { getEngine, setEngine, setEngineOptions, getEngineOptions } from '../../../../utils/cookie'
export default defineComponent({
  setup() {
    const message = useMessage()
    const formRef = ref(null)
    const formValue = ref({
      engine: getEngine().value
    })

    const options = reactive(getEngineOptions())
    const rules = {
      engine: { required: true, message: '选择ENGINE', trigger: 'blur' }
    }
    const handleSetEngine = () => {
      formRef.value?.validate(errors => {
        if (!errors) {
          const engine = options.find(item => item.value === formValue.value.engine)
          setEngine(engine)
          message.success('设置成功')
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
      handleSetEngine,
      options
    }
  }
})
</script>
<style></style>
