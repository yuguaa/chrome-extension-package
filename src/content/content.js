console.log('Content Script Loaded...')
// const init = () => {
//   const addIframe = (id, pagePath) => {
//     const contentIframe = document.createElement('iframe')
//     contentIframe.id = id
//     contentIframe.style.cssText =
//       'width:100%;height:100%;position:fixed;inset:0px;margin:0 auto;z-index:10000002;border:none;'
//     const getContentPage = chrome.runtime.getURL(pagePath)
//     contentIframe.src = getContentPage
//     document.body.appendChild(contentIframe)
//   }
//   addIframe('content-start-iframe', 'contentPage/index.html')
// }
// if (window.top === window.self) {
//   init()
// }
const changePage = () => {}
changePage()
