<template>
  <n-space vertical>
    <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" size="medium">
      <n-form-item label="ENGINE:" path="engine">
        <n-select v-model:value="formValue.engine" :options="options" class="w-full" :style="{ width: '100%' }" />
      </n-form-item>
      <n-form-item>
        <n-button @click="handleSetEngine">设置</n-button>
      </n-form-item>
    </n-form>
    <n-el>
      <n-el v-if="!showAdd" class="flex items-center" @click="handleAddOptionItem">
        <n-el>添加</n-el>
        <n-icon> <AddCircleOutline /> </n-icon>
      </n-el>
      <n-form v-else ref="formRef2" :label-width="80" :model="formValue2" :rules="rules2" size="medium">
        <n-form-item label="名称" path="label">
          <n-input v-model:value="formValue2.label" class="w-full" />
        </n-form-item>
        <n-form-item label="ENGINE值" path="value">
          <n-input v-model:value="formValue2.value" class="w-full" />
        </n-form-item>
        <n-form-item label="ENGINE" path="engine">
          <n-input v-model:value="formValue2.engine" class="w-full" />
        </n-form-item>
        <n-form-item>
          <n-space>
            <n-button @click="handleCancelEngine">取消</n-button>
            <n-button @click="handleAddEngine">添加</n-button>
          </n-space>
        </n-form-item>
      </n-form>
    </n-el>
  </n-space>
</template>
<script>
import { useMessage } from 'naive-ui'
import { ref, defineComponent, reactive } from 'vue'
import { AddCircleOutline } from '@vicons/ionicons5'
import { getEngine, setEngine, setEngineOptions, getEngineOptions } from '../../../../utils/cookie'

export default defineComponent({
  components: {
    AddCircleOutline
  },
  setup() {
    const message = useMessage()
    const formRef = ref(null)
    const formValue = reactive({
      engine: getEngine().value
    })
    const rules = {
      engine: { required: true, message: '选择ENGINE', trigger: 'blur' }
    }
    const showAdd = ref(false)
    const formRef2 = ref(null)
    const formValue2 = reactive({
      label: '',
      value: '',
      engine: ''
    })
    const rules2 = {
      label: { required: true, message: '填写label', trigger: 'blur' },
      value: { required: true, message: '填写value', trigger: 'blur' },
      engine: { required: true, message: '填写', trigger: 'blur' }
    }
    const options = reactive(getEngineOptions())

    const handleSetEngine = () => {
      formRef.value?.validate(errors => {
        if (!errors) {
          const engine = options.find(item => item.value === formValue.engine)
          setEngine(engine)
          message.success('设置成功')
        } else {
          console.log(errors)
          message.error('请正确填写')
        }
      })
    }

    const handleAddOptionItem = () => {
      showAdd.value = true
    }
    const handleCancelEngine = () => {
      showAdd.value = false
    }
    const handleAddEngine = () => {
      formRef2.value?.validate(errors => {
        if (!errors) {
          options.push(formValue2)
          setEngineOptions(options)
          message.success('添加成功')
          showAdd.value = false
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
      showAdd,
      formRef2,
      formValue2,
      rules2,
      handleSetEngine,
      options,
      handleAddOptionItem,
      handleCancelEngine,
      handleAddEngine
    }
  }
})
</script>
<style></style>
