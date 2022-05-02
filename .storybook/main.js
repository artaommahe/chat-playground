module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  reactOptions: {
    // disabled due to issue with second render pass does not cleanup useEffects
    /* strictMode: true, */
  },
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};
