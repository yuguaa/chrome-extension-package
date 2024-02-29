console.log('Service Worker Loaded........')
// 开发模式刷新插件
chrome.management.getSelf(self => {
  if (self.installType === 'development') {
  }
})
