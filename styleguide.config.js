const { version } = require('./package');

module.exports = {
  pagePerSection: true,
  sections: [
    {
      content: 'README.md',
      name: `v${version}`,
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
          ignore: ['**/ListItem'],
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
      components: './src/elements/Image/styled.js',
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
          components: ['./src/elements/form/*/styled.js'],
          content: 'src/elements/form/components.md',
          description: 'Component directory',
          name: 'Components',
          sectionDepth: 1,
        },
      ],
    },
    {
      components: './src/elements/Button/styled.js',
      name: 'Button',
    },
  ],
  skipComponentsWithoutExample: true,
  styleguideComponents: require('./styleguide/containers/index.js'), // eslint-disable-line global-require
  styles: './styleguide/styles.js',
  theme: './styleguide/themes.js',
  title: '🍇UI Style Guide',
  tocMode: 'collapse',
  version,
  webpackConfig: require('./src/internals/webpack/webpack.config.js'), // eslint-disable-line global-require
};
