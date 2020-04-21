grape-ui has five different font families that it uses. Simply call to them by entering `fontFamily="fontFamilyName"` as an attribute to any text component. By default, we use `base` as the system-wide font family.

### List of font families available

```jsx in Markdown
import { getGlobalStyles } from 'src/global-styles'; // ... from 'grape-ui-react'
import {
  List,
  ListItem,
  Text,
} from './';

renderFontFamilyListItems = () => {
  const { fontFamily } = getGlobalStyles();
  const fontFamilyKeys = Object.keys(fontFamily).filter(
    prop => prop !== 'default'
  ); // [ prop names of font families... ]
  return fontFamilyKeys.map(cKey =>
    <ListItem
      fontFamily={cKey}
      key={cKey}
      style={{
        textTransform: 'capitalize'
      }
    }>
      {cKey}
    </ListItem>
  );
}

<List>
  {this.renderFontFamilyListItems()}
</List>
```

### Style Overrides

To overwrite the font family definitions, or introduce any new families, simply call `fonts` followed by the name of the font stack, and defining its font families.

```jsx in Markdown
import { ThemeProvider } from 'styled-components';
import { Paragraph, Text } from './';

const customBaseFontFamilyTheme = {
  fonts: {
    base: 'Papyrus,fantasy',
  },
};

<div>
  <Paragraph>
    This paragraph is using the default base font family.
  </Paragraph>
  <ThemeProvider
    theme={customBaseFontFamilyTheme}
  >
    <Paragraph>
      This paragraph is using a custom base font family.
    </Paragraph>
  </ThemeProvider>
</div>
```
