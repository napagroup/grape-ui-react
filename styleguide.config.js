const { version } = require('./package');

module.exports = {
  // components: 'src/elements/**/styled.js',
  pagePerSection: true,
  sections: [
    {
      content: 'README.md',
      description: 'A React component library built with styled-components',
      name: `🍇UI ${version}`,
    },
    {
      content: 'src/elements/typography/Readme.md',
      description: 'All typography components',
      name: 'Typography',
      sectionDepth: 2,
      sections: [
        {
          content: 'src/elements/typography/color.md',
          name: 'Color',
        },
        {
          content: 'src/elements/typography/fontFamily.md',
          name: 'Font Family',
        },
        {
          content: 'src/elements/typography/fontSizes.md',
          name: 'Font Sizes',
        },
        {
          content: 'src/elements/typography/fontUtilities.md',
          name: 'Font Utilities',
        },
        {
          components: () => ['./src/elements/typography/**/styled.js'],
          content: 'src/elements/typography/components.md',
          description: 'Component directory',
          name: 'Components',
          sectionDepth: 1,
        },
      ],
    },
    {
      content: './src/elements/grid/Readme.md',
      description: 'All flexbox elements',
      name: 'Flexbox',
      sectionDepth: 2,
      sections: [
        {
          content: 'src/elements/grid/breakpointsAndSpace.md',
          name: 'Breakpoints & Space',
        },
        {
          components: () => ['./src/elements/grid/**/styled.js'],
          content: 'src/elements/grid/components.md',
          description: 'Component directory',
          name: 'Components',
          sectionDepth: 1,
        },
      ],
    },
    {
      content: './src/elements/Image/Readme.md',
      name: 'Image',
    },
    {
      content: './src/elements/form/Readme.md',
      description: 'All form elements',
      name: 'Form',
      sectionDepth: 2,
      sections: [
        {
          components: () => ['./src/elements/form/utils/*/styled.js'],
          content: 'src/elements/form/utils/Readme.md',
          description: 'Form utilities directory',
          name: 'Form Utilities',
          sectionDepth: 1,
          sections: [{
            content: './src/elements/form/utils/validationError.md',
            name: 'Validation Error',
          }],
        },
        {
          components: () => ['./src/elements/form/*/styled.js'],
          content: 'src/elements/form/components.md',
          description: 'Component directory',
          name: 'Components',
          sectionDepth: 1,
        },
      ],
    },
    {
      content: './src/elements/Button/Readme.md',
      name: 'Button',
    },
  ],
  skipComponentsWithoutExample: true,
  title: '🍇UI Style Guide',
  version,
  webpackConfig: require('./src/internals/webpack/webpack.config.js'), // eslint-disable-line global-require
};
