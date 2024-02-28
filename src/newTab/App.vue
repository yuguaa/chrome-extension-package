<template>
  <div>
    <h1>Content Page</h1>
  </div>
</template>
<script setup>
// 获取用户设置的自定义链接
chrome.storage.sync.get('customUrl', function (data) {
  var customUrl = data.customUrl || 'https://www.doubao.com'
  console.log(`🚀 ~ customUrl:`, customUrl)
  // 更新新标签页的 URL
  chrome.tabs.update({ url: customUrl })
})
</script>
<style scoped lang="less"></style>
