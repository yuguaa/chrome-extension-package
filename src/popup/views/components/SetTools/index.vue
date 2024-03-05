<template>
  <n-space vertical>
    <n-space vertical>
      <n-button @click="handleAdd">添加</n-button>
      <n-data-table :columns="columns" :data="data" :max-height="250" :scroll-x="600" :pagination="false" />
    </n-space>
  </n-space>
</template>

<script>
import { useMessage, NInput, NButton, NEl } from 'naive-ui'
import { h, defineComponent, ref, nextTick, reactive } from 'vue'
import { AddCircleOutline } from '@vicons/ionicons5'
import { getAIOptions, setAIOptions } from '../../../../utils/cookie'

const ShowOrEdit = defineComponent({
  props: {
    value: [String, Number],
    onUpdateValue: [Function, Array]
  },
  setup(props) {
    const isEdit = ref(false)
    const inputRef = ref(null)
    const inputValue = ref(props.value)
    function handleOnClick() {
      isEdit.value = true
      nextTick(() => {
        inputRef.value.focus()
      })
    }
    function handleChange() {
      props.onUpdateValue(inputValue.value)
      isEdit.value = false
    }
    return () =>
      h(
        NEl,
        {
          style: 'min-height: 22px;min-width:100px;cursor:pointer;',
          onClick: handleOnClick
        },
        isEdit.value
          ? h(NInput, {
              ref: inputRef,
              value: inputValue.value,
              onUpdateValue: v => {
                inputValue.value = v
              },
              onChange: handleChange,
              onBlur: handleChange
            })
          : props.value
      )
  }
})

export default defineComponent({
  components: {
    AddCircleOutline
  },
  setup() {
    const message = useMessage()
    const data = reactive(getAIOptions())
    const handleAdd = () => {
      data.push({
        label: '',
        value: '',
        url: '',
        logo: ''
      })
    }
    const handleDelete = value => {
      const index = data.findIndex(item => item.value === value)
      data.splice(index, 1)
      setAIOptions(data)
      message.success('删除成功')
    }
    const getDataIndex = value => {
      return data.findIndex(item => item.value === value)
    }
    const columns = [
      {
        ellipsis: {
          tooltip: true
        },
        title: '名称',
        key: 'label',
        width: 150,
        render(row) {
          const index = getDataIndex(row.value)
          return h(ShowOrEdit, {
            value: row.label,
            onUpdateValue(v) {
              data[index].label = v
              setAIOptions(data)
              message.success('修改成功')
            }
          })
        }
      },
      {
        ellipsis: {
          tooltip: true
        },
        title: '厂家',
        key: 'value',
        width: 100,
        render(row) {
          const index = getDataIndex(row.value)
          return h(ShowOrEdit, {
            value: row.value,
            onUpdateValue(v) {
              data[index].value = v
              setAIOptions(data)
              message.success('修改成功')
            }
          })
        }
      },
      {
        ellipsis: {
          tooltip: true
        },
        title: '链接',
        key: 'url',
        width: 100,
        render(row) {
          const index = getDataIndex(row.value)
          return h(ShowOrEdit, {
            value: row.url,
            onUpdateValue(v) {
              data[index].url = v
              setAIOptions(data)
              message.success('修改成功')
            }
          })
        }
      },
      {
        ellipsis: {
          tooltip: true
        },
        title: 'LOGO',
        key: 'logo',
        width: 100,
        render(row) {
          const index = getDataIndex(row.value)
          return h(ShowOrEdit, {
            value: row.logo,
            onUpdateValue(v) {
              data[index].logo = v
              setAIOptions(data)
              message.success('修改成功')
            }
          })
        }
      },
      {
        title: '操作',
        key: 'action',
        width: 100,
        fixed: 'right',
        render(row) {
          return h(NButton, { onClick: () => handleDelete(row.value) }, { default: () => '删除' })
        }
      }
    ]

    return {
      columns,
      data,
      handleAdd
    }
  }
})
</script>

<style></style>
