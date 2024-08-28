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
const defaultAIOptions = []
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
const getRandomColor = () => {
  const color = Math.floor(Math.random() * 0xffffff).toString(16)
  return `#${color.padStart(6, '0')}`
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
  setBgFilter,
  getRandomColor
}
