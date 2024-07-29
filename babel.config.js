module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  overrides: [
    {
      plugins: [
        [
          '@babel/plugin-transform-private-methods',
          {
            loose: true,
          },
        ],
      ],
    },
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@configs': './src/configs',
          '@contexts': './src/contexts',
          '@hooks': './src/hooks',
          '@sanitizers': './src/sanitizers',
          '@screens': './src/screens',
          '@services': './src/services',
          '@data': './src/data',
          '@stores': './src/stores',
          '@utils': './src/utils',
        },
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        root: ['.'],
      },
    ],

    'nativewind/babel',
    'react-native-reanimated/plugin',
  ],
};
