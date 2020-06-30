Use `<List>` and `<List.ul>` for an unordered list.

```jsx in Markdown
import { ListItem } from '../';

<List>
  <ListItem>
    List Item 1
  </ListItem>
  <ListItem>
    List Item 2
    <List.ul>
      <ListItem>
        List Item 1
      </ListItem>
      <ListItem>
        List Item 2
      </ListItem>
      <ListItem>
        List Item 3
      </ListItem>
    </List.ul>
  </ListItem>
  <ListItem>
    List Item 3
  </ListItem>
</List>
```

Use `<List.ol>` instead of `<List>` for an ordered list.

```jsx in Markdown
import { ListItem } from '../';

<List.ol>
  <ListItem>
    List Item 1
  </ListItem>
  <ListItem>
    List Item 2
  </ListItem>
  <ListItem>
    List Item 3
  </ListItem>
</List.ol>
```

`<List.ol>` takes the standard `type` attribute to define if uppercase alpha, lowercase alpha, uppercase roman, lowercase roman.

```jsx in Markdown
import { Code, ListItem } from 'src/elements/typography';

<div>
  <List.ol type="A">
    <ListItem>
      {'Uppercase Alpha List Item 1 '}
      <Code codeString={'type="A"'} />
    </ListItem>
    <ListItem>
      {'Uppercase Alpha List Item 2 '}
      <Code codeString={'type="A"'} />
    </ListItem>
    <ListItem>
      {'Uppercase Alpha List Item 3 '}
      <Code codeString={'type="A"'} />
    </ListItem>
  </List.ol>
  <List.ol type="a">
    <ListItem>
      {'Lowercase Alpha List Item 1 '}
      <Code codeString={'type="a"'} />
    </ListItem>
    <ListItem>
      {'Lowercase Alpha List Item 2 '}
      <Code codeString={'type="a"'} />
    </ListItem>
    <ListItem>
      {'Lowercase Alpha List Item 3 '}
      <Code codeString={'type="a"'} />
    </ListItem>
  </List.ol>
  <List.ol type="I">
    <ListItem>
      {'Uppercase Roman List Item 1 '}
      <Code codeString={'type="I"'} />
    </ListItem>
    <ListItem>
      {'Uppercase Roman List Item 2 '}
      <Code codeString={'type="I"'} />
    </ListItem>
    <ListItem>
      {'Uppercase Roman List Item 3 '}
      <Code codeString={'type="I"'} />
    </ListItem>
  </List.ol>
  <List.ol type="i">
    <ListItem>
      {'Lowercase Roman List Item 1 '}
      <Code codeString={'type="i"'} />
    </ListItem>
    <ListItem>
      {'Lowercase Roman List Item 2 '}
      <Code codeString={'type="i"'} />
    </ListItem>
    <ListItem>
      {'Lowercase Roman List Item 3 '}
      <Code codeString={'type="i"'} />
    </ListItem>
  </List.ol>
</div>
```

### Style variations

Add the attribute `unstyled` to have an unstyled view. Add the attribute `inline` to have an inline view.

```jsx in Markdown
import { Code, ListItem } from 'src/elements/typography';

<div>
  <List unstyled>
    <ListItem>
      {'This List component was set to '}
      <Code codeString="unstyled" />
      .
    </ListItem>
    <ListItem>
      List Item 2
    </ListItem>
    <ListItem>
      List Item 3
    </ListItem>
  </List>
  <List inline>
    <ListItem>
      {'This List component was set to '}
      <Code codeString="inline" />
      .
    </ListItem>
    <ListItem>
      List Item 2
    </ListItem>
    <ListItem>
      List Item 3
    </ListItem>
  </List>
</div>
```

#### Hide List

```jsx inside Markdown
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from 'src/elements/Button';
import { ListItem } from 'src/elements/typography';

const [hide, setHidden] = useState(false);
<ThemeProvider theme={{}}>
  <Button
    onClick={() => setHidden(!hide)}
  >
    Toggle Visibility
  </Button>
<List isHidden={hide}>
  <ListItem>
    List Item 1
  </ListItem>
  <ListItem>
    List Item 2
  </ListItem>
</List>
</ThemeProvider>
```

#### Hide List Item

```jsx inside Markdown
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Box,
  Flex,
} from 'src/elements/grid';
import { Button } from 'src/elements/Button';
import { ListItem } from 'src/elements/typography';

const [hide, setHidden] = useState(false);
<ThemeProvider theme={{}}>
  <Button
    onClick={() => setHidden(!hide)}
  >
    Toggle Visibility
  </Button>
<List>
  <ListItem isHidden={hide}>
    List Item 1
  </ListItem>
  <ListItem>
    List Item 2
  </ListItem>
  <ListItem isHidden={hide}>
    List Item 3
  </ListItem>
  <ListItem>
    List Item 4
  </ListItem>
</List>
</ThemeProvider>
```
