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
      content: './src/elements/forms/Readme.md',
      description: 'All form elements',
      name: 'Form',
      sectionDepth: 2,
      sections: [
        {
          components: () => ['./src/elements/forms/utils/*/styled.js'],
          content: 'src/elements/forms/utils/Readme.md',
          description: 'Form utilities directory',
          name: 'Form Utilities',
          sectionDepth: 1,
          sections: [{
            content: './src/elements/forms/utils/validationError.md',
            name: 'Validation Error',
          }],
        },
        {
          components: ['./src/elements/forms/*/styled.js'],
          content: 'src/elements/forms/components.md',
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
    {
      content: './src/elements/Table/Readme.md',
      name: 'Table',
      sectionDepth: 2,
      sections: [
        {
          content: 'src/elements/Table/styles.md',
          description: 'Remember, styling is fun! 🖌',
          name: 'Styles',
        },
        {
          content: 'src/elements/Table/examples/examples.md',
          description: 'Live Demos on grape-ui `<Table>`',
          name: 'Examples',
          sectionDepth: 1,
          sections: [
            {
              content: 'src/elements/Table/examples/pagination.md',
              description: 'Demonstrating controlled pagination',
              name: 'Pagination',
            },
            {
              content: 'src/elements/Table/examples/manualPagination.md',
              description: 'Demonstrating manual pagination',
              name: 'Manual Pagination',
            },
            {
              content: 'src/elements/Table/examples/expandedRows.md',
              description: 'Demonstrating row expansion (toggable)',
              name: 'Expandable Rows',
            },
            {
              content: 'src/elements/Table/examples/tableStriped.md',
              description: 'Demonstrating striped table',
              name: 'Table Striped',
            },
            {
              content: 'src/elements/Table/examples/hideColumns.md',
              description: 'Demonstrating hideable columns',
              name: 'Hide Columns',
            },
          ],
        },
      ],
    },
  ],
  skipComponentsWithoutExample: true,
  styleguideComponents: require('./styleguide/containers/index.js'), // eslint-disable-line global-require
  styles: './styleguide/styles.js',
  theme: './styleguide/themes.js',
  title: 'Docs | grape-ui',
  tocMode: 'collapse',
  version,
  webpackConfig: require('./src/internals/webpack/webpack.config.js'), // eslint-disable-line global-require
};
