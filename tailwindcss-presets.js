const plugin = require('tailwindcss/plugin')
const spacings = []
for (let i = 0; i <= 100; i++) {
  spacings.push(i * 2)
}
const spacingsSettings = spacings.reduce((pre, cur) => {
  pre[cur] = cur + 'px'
  return pre
}, {})
module.exports = {
  theme: {
    extend: {
      colors: {}
    },
    spacing: {
      1: '1px',
      ...spacingsSettings
    }
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase({
        'html,body,#app': {
          fontFamily: 'Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif',
          height: '100%'
        }
      })
      addUtilities({
        '.scrollbar-common': {
          '&::-webkit-scrollbar-track-piece': {
            background: '#d3dce6'
          },
          '&::-webkit-scrollbar': {
            width: '6px',
            height: '6px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#99a9bf',
            'border-radius': '20px'
          }
        }
      })
    })
  ]
}
