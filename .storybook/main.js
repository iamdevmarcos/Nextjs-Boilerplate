module.exports = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
  typescript: { reactDocgen: false }
}
