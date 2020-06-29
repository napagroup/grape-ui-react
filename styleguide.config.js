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
        {
          content: 'src/elements/grid/advancedExamples.md',
          name: 'Advanced Examples',
        },
      ],
    },
    {
      content: 'src/elements/Card/Readme.md',
      description: 'The card element',
      name: 'Card',
      sectionDepth: 2,
      sections: [
        {
          content: 'src/elements/Card/cardPadding.md',
          description: 'How padding works in the card',
          name: 'cardPadding',
        },
        {
          components: () => ['./src/elements/Card/subComponents/*/index.js'],
          content: 'src/elements/Card/subComponents/Readme.md',
          description: 'Subcomponent directory',
          name: 'Subcomponents',
          sectionDepth: 1,
          sections: [
            {
              content: 'src/elements/Card/subComponents/CardMedia.md',
              name: 'Card Media',
            },
            {
              content: 'src/elements/Card/subComponents/CardHeader.md',
              name: 'Card Header',
            },
            {
              content: 'src/elements/Card/subComponents/CardBody.md',
              name: 'Card Body',
            },
            {
              content: 'src/elements/Card/subComponents/CardActions.md',
              name: 'Card Actions',
            },
            {
              content: 'src/elements/Card/subComponents/AdditionalCardProps.md',
              name: 'Additional Card Props',
            },
          ],
        },
      ],
    },
    {
      components: './src/elements/Image/styled.js',
      name: 'Image',
    },
    {
      components: './src/elements/Progress/styled.js',
      name: 'Progress',
    },
    {
      content: './src/elements/forms/Readme.md',
      description: 'All form elements',
      name: 'Forms',
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
              content: 'src/elements/Table/examples/hideComponents.md',
              description: 'Demonstrating hideable components',
              name: 'Hide Components',
            },
          ],
        },
      ],
    },
    {
      components: './src/elements/Toolbar/styled.js',
      name: 'Toolbar',
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
