<template>
  <div>
    <h1>设置自定义跳转链接</h1>
    <label for="customUrl">Custom URL:</label>
    <input type="text" id="customUrl" />
    <button id="save">Save</button>
  </div>
</template>
<script setup>
document.addEventListener('DOMContentLoaded', function () {
  var saveButton = document.getElementById('save')
  saveButton.addEventListener('click', function () {
    var customUrl = document.getElementById('customUrl').value
    chrome.storage.sync.set({ customUrl: customUrl }, function () {
      console.log('Custom URL set to: ' + customUrl)
    })
  })
})
</script>
<style></style>
