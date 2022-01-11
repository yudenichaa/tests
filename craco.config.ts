const config = {
  babel: {
    presets: [
      [
        '@babel/preset-react',
        {
          importSource: 'theme-ui',
          runtime: 'automatic',
          throwIfNamespace: false,
        },
      ],
    ],
  },
};

export default config;
