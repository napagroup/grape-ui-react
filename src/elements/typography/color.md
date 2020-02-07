There are many colors available to be used in 🍇UI. Just add the `color="colorName"` attribute to any text element. To use the lightened version of a color, use `color="colorName.light"` or `color="colorName.dark"` for the darkened version.

### List of Colors Available
```jsx in Markdown
import { getGlobalStyles } from 'src/global-styles'; // ... from 'grape-ui-react'
import { List, ListItem, Text } from './index';

renderColorListItems = () => {
  const { colors } = getGlobalStyles();
  const colorKeys = Object.keys(colors).filter(prop => prop !== 'default'); // [ prop names of colors... ]
  return colorKeys.map(cKey =>
    <ListItem color={cKey} key={cKey} style={{ textTransform: 'capitalize' }}>{cKey} (<Text color={`${cKey}.light`}>Light</Text>/<Text color={`${cKey}.dark`}>Dark</Text>)</ListItem>);
}

<List>{this.renderColorListItems()}</List>
```

### Style Overrides
To overwrite the colors, or introduce any new colors, simply call `colors` followed by the name of the color, and defining its `base`, `dark`, and `light` variants.

```jsx in Markdown
import { ThemeProvider } from 'styled-components';
import { Paragraph, Text } from './index';

const customBrandPrimaryTheme = {
  colors: {
    brandPrimary: {
      base: 'hsl(143.3, 84.6%, 28%)',
      dark: 'hsl(143.3, 84.6%, 8%)',
      light: 'hsl(143.3, 84.6%, 48%)',
    },
  },
};

<div>
  <Paragraph color="brandPrimary">
    This paragraph is set to the default brand primary color,
    <Text color="brandPrimary.dark"> dark variant</Text>
    <Text color="brandPrimary.light">, and the light variant</Text>.
  </Paragraph>
  <ThemeProvider theme={customBrandPrimaryTheme}>
    <Paragraph color="brandPrimary">
      This paragraph is set to a custom brand primary color,
      <Text color="brandPrimary.dark"> dark variant</Text>
      <Text color="brandPrimary.light">, and the light variant</Text>.
    </Paragraph>
  </ThemeProvider>
</div>
```
