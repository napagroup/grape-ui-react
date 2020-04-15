Use a `<Header>` when defining sections. You can set the Header size by doing `<Header.h1>` through `<Header.h6>`.

```jsx in Markdown
<Header>Header/Header.h1</Header>
<Header.h2>Header.h2</Header.h2>
<Header.h3>Header.h3</Header.h3>
<Header.h4>Header.h4</Header.h4>
<Header.h5>Header.h5</Header.h5>
<Header.h6>Header.h6</Header.h6>
```

### Display Headers

Use a display header when you want to have more emphasis with a header. Just add `displayHeader` as a part of your `<Header>`.

**NOTE:** You may want to consider using `ellipsis` when using `displayHeader`.

```jsx in Markdown
<Header
  displayHeader
  ellipsis
>
  Header/Header.h1
</Header>
<Header.h2
  displayHeader
  ellipsis
>
  Header.h2
</Header.h2>
<Header.h3
  displayHeader
  ellipsis
>
  Header.h3
</Header.h3>
<Header.h4
  displayHeader
  ellipsis
>
  Header.h4
</Header.h4>
<Header.h5
  displayHeader
  ellipsis
>
  Header.h5
</Header.h5>
<Header.h6
  displayHeader
  ellipsis
>
  Header.h6
</Header.h6>
```

### Style Overrides

To overwrite the font family definitions, or introduce any new families, simply call fonts followed by the name of the font stack, and defining its font families.

```jsx in Markdown
import { ThemeProvider } from 'styled-components';

const customBaseFontFamilyTheme = {
  fonts: {
    base: 'Papyrus,fantasy',
  },
};

<div>
  <Header>
    This header is using the default base font family.
  </Header>
  <ThemeProvider
    theme={customBaseFontFamilyTheme}
  >
    <Header>
      This header is using a custom base font family.
    </Header>
    <Header.h3>
      This smaller header is also using a custom base font family.
    </Header.h3>
  </ThemeProvider>
</div>
```
