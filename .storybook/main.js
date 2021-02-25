const webPackConfig = require('./webpack.config');

module.exports = {
    stories: ['../src/stories/*Story.(jsx|mdx)'],
    addons: ['storybook-addon-jsx', '@storybook/addon-actions'],
    webpackFinal: (config) => {
        return { ...config, module: { ...config.module, rules: webPackConfig.module.rules } };
    }
}