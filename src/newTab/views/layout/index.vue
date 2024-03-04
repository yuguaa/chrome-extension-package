<template>
  <div></div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { getTabUrl } from '../../../utils/cookie'
export default defineComponent({
  setup() {
    const router = useRouter()
    const url = getTabUrl()
    console.log(`🚀 ~ url:`, url)
    if (url) {
      chrome.tabs.update({ url })
    } else {
      router.push('/new-tab')
    }
  }
})
</script>

<style lang="less" scoped></style>
