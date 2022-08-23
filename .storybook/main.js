const { loadConfigFromFile, mergeConfig } = require('vite')
const path = require('path')
const eslint = require('vite-plugin-eslint').default

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-dark-mode'
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  typescript: {
    check: false,
    checkOptions: {}
  },
  async viteFinal (previousConfig) {
    const { config } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.ts')
    )
    return mergeConfig(previousConfig, {
      ...config,
      plugins: [
        eslint()
      ]
    })
  }
}
