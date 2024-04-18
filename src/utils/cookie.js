import { darkTheme } from 'naive-ui'

const THEME_TOKEN = 'PINE_STORM_THEME'
/**
 * Retrieves the local theme from the cookies.
 * @returns {string|null} The local theme if it is 'dark', otherwise null.
 */
const getLocalTheme = () => {
  const localTheme = localStorage.getItem(THEME_TOKEN)
  if (localTheme === 'dark') return darkTheme
  return null
}
const setLocalTheme = theme => {
  localStorage.setItem(THEME_TOKEN, theme)
}

const URL_TOKEN = 'PINE_STORM_TAB_URL'
const getTabUrl = () => {
  return localStorage.getItem(URL_TOKEN)
}
const setTabUrl = url => {
  localStorage.setItem(URL_TOKEN, url)
}

const TAB_NAME_TOKEN = 'PINE_STORM_TAB_NAME'
const getTabName = () => {
  return localStorage.getItem(TAB_NAME_TOKEN)
}
const setTabName = name => {
  localStorage.setItem(TAB_NAME_TOKEN, name)
}

const TAB_LOGO_TOKEN = 'PINE_STORM_TAB_LOGO'
const getTabLogo = () => {
  return localStorage.getItem(TAB_LOGO_TOKEN) || 'PINE-STORM'
}
const setTabLogo = logo => {
  localStorage.setItem(TAB_LOGO_TOKEN, logo)
}

const LOGO_TYPE_TOKEN = 'PINE_STORM_LOGO_TYPE'
const getLogoType = () => {
  return localStorage.getItem(LOGO_TYPE_TOKEN) || 'primary'
}
const setLogoType = type => {
  localStorage.setItem(LOGO_TYPE_TOKEN, type)
}

const ENGINE_TOKEN = 'PINE_STORM_ENGINE'
const ENGINE_OPTIONS_TOKEN = 'PINE_STORM_ENGINE_OPTIONS'
const defaultOptions = [
  {
    label: '百度',
    value: 'baidu',
    engine: 'https://www.baidu.com/s?wd='
  },
  {
    label: '谷歌',
    value: 'google',
    engine: 'https://www.google.com/search?q='
  },
  {
    label: '必应',
    value: 'bing',
    engine: 'https://cn.bing.com/search?q='
  }
]
const setEngine = engine => {
  localStorage.setItem(ENGINE_TOKEN, JSON.stringify(engine || {}))
}
const getEngine = () => {
  return JSON.parse(localStorage.getItem(ENGINE_TOKEN) || JSON.stringify(defaultOptions[0]))
}
const setEngineOptions = options => {
  localStorage.setItem(ENGINE_OPTIONS_TOKEN, JSON.stringify(options || []))
}
const getEngineOptions = () => {
  return JSON.parse(localStorage.getItem(ENGINE_OPTIONS_TOKEN) || JSON.stringify(defaultOptions))
}

const AI_TOKEN = 'PINE_STORM_AI'
const defaultAIOptions = [
  {
    label: '豆包',
    value: 'Bytedance',
    url: 'https://www.doubao.com/chat/',
    logo: 'https://p9-flow-imagex-sign.byteimg.com/ocean-cloud-tos/FileBizType.BIZ_BOT_ICON/4180773176086868_1709203591079450233_5Y6fJgvsfc.jpeg~tplv-a9rns2rl98-icon-tiny.jpeg?rk3s=6823e3d0&x-expires=1715996512&x-signature=rTYYx188Ach761uomaRvzMIglJ0%3D'
  },
  {
    label: 'ChatGPT',
    value: 'OpenAI',
    url: 'https://chat.openai.com/',
    logo: 'https://t10.baidu.com/it/u=3001416051,198333688&fm=30&app=106&f=JPEG?w=640&h=640&s=A6938D6264C55AF6101FC252020010FD'
  },
  {
    label: 'Gemini',
    value: 'Google',
    url: 'https://gemini.google.com/app',
    logo: 'https://tm-image.tianyancha.com/tm/bd620bd9afb1c8056f49de82383587de.jpg'
  },
  {
    label: '通义千问',
    value: 'Alibaba',
    url: 'https://tongyi.aliyun.com/qianwen',
    logo: 'https://img.alicdn.com/imgextra/i3/O1CN01sffRIx1nb3dXCKdFC_!!6000000005107-2-tps-1024-1024.png'
  },
  {
    label: '火山翻译',
    value: 'Bytedance',
    url: 'https://translate.volcengine.com/',
    logo: 'https://img0.baidu.com/it/u=1564665153,4099875505&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
  },
  {
    label: '高德地图',
    value: 'amap',
    url: 'https://amap.com/',
    logo: 'https://img1.baidu.com/it/u=4113178521,2210761658&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500'
  },
  {
    label: 'tailwindcss',
    value: 'tailwindcss',
    url: 'https://www.tailwindcss.cn/docs/installation',
    logo: 'https://img1.baidu.com/it/u=2986153823,2646607320&fm=253&fmt=auto&app=138&f=PNG?w=280&h=280'
  },
  {
    label: 'AntdV',
    value: 'Ant Design Vue',
    url: 'https://1x.antdv.com/docs/vue/introduce-cn/',
    logo: 'https://img2.baidu.com/it/u=1082254775,796461838&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500'
  },
  {
    label: 'github',
    value: 'github',
    url: 'https://github.com/',
    logo: 'https://img2.baidu.com/it/u=1801988444,1636727480&fm=253&fmt=auto&app=138&f=JPEG?w=444&h=429'
  }
]
const setAIOptions = options => {
  localStorage.setItem(AI_TOKEN, JSON.stringify(options || []))
}
const getAIOptions = () => {
  return JSON.parse(localStorage.getItem(AI_TOKEN) || JSON.stringify(defaultAIOptions))
}

const BG_TOKEN = 'PINE_STORM_BG'
const getBg = () => {
  return localStorage.getItem(BG_TOKEN)
}
const setBg = bg => {
  localStorage.setItem(BG_TOKEN, bg)
}

const BG_FILTER_TOKEN = 'PINE_STORM_BG_FILTER'
const getBgFilter = () => {
  return localStorage.getItem(BG_FILTER_TOKEN)
}
const setBgFilter = filter => {
  localStorage.setItem(BG_FILTER_TOKEN, filter)
}

export {
  getTabName,
  setTabName,
  getLocalTheme,
  setLocalTheme,
  getTabUrl,
  setTabUrl,
  getEngine,
  setEngine,
  getEngineOptions,
  setEngineOptions,
  getTabLogo,
  getLogoType,
  setLogoType,
  setTabLogo,
  getAIOptions,
  setAIOptions,
  getBg,
  setBg,
  getBgFilter,
  setBgFilter
}
