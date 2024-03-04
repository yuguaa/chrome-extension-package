import Cookies from 'js-cookie'
import { darkTheme } from 'naive-ui'

const THEME_TOKEN = 'PINE_STORM_THEME'
/**
 * Retrieves the local theme from the cookies.
 * @returns {string|null} The local theme if it is 'dark', otherwise null.
 */
const getLocalTheme = () => {
  const localTheme = Cookies.get(THEME_TOKEN)
  if (localTheme === 'dark') return darkTheme
  return null
}
const setLocalTheme = theme => {
  Cookies.set(THEME_TOKEN, theme)
}

const URL_TOKEN = 'PINE_STORM_TAB_URL'
const getTabUrl = () => {
  return Cookies.get(URL_TOKEN)
}
const setTabUrl = url => {
  Cookies.set(URL_TOKEN, url)
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
  Cookies.set(ENGINE_TOKEN, JSON.stringify(engine || {}))
}
const getEngine = () => {
  return JSON.parse(Cookies.get(ENGINE_TOKEN) || JSON.stringify(defaultOptions[0]))
}
const setEngineOptions = options => {
  Cookies.set(ENGINE_OPTIONS_TOKEN, JSON.stringify(options || []))
}
const getEngineOptions = () => {
  return JSON.parse(Cookies.get(ENGINE_OPTIONS_TOKEN) || JSON.stringify(defaultOptions))
}
export { getLocalTheme, setLocalTheme, getTabUrl, setTabUrl, getEngine, setEngine, getEngineOptions, setEngineOptions }
