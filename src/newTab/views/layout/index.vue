<template>
  <div></div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    chrome.storage.sync.get('setUrl', function (data) {
      const setUrl = data.setUrl
      if (setUrl) {
        chrome.tabs.update({ url: setUrl })
      } else {
        router.push('/new-tab')
      }
    })
  }
})
</script>

<style lang="less" scoped></style>
