Use `<List>` and `<List.ul>` for an unordered list.

```jsx in Markdown
import { ListItem } from '../index';

<List>
  <ListItem>List Item 1</ListItem>
  <ListItem>
    List Item 2
    <List.ul>
      <ListItem>List Item 1</ListItem>
      <ListItem>List Item 2</ListItem>
      <ListItem>List Item 3</ListItem>
    </List.ul>
  </ListItem>
  <ListItem>List Item 3</ListItem>
</List>
```

Use `<List.ol>` instead of `<List>` for an ordered list.

```jsx in Markdown
import { ListItem } from '../index';

<List.ol>
  <ListItem>List Item 1</ListItem>
  <ListItem>List Item 2</ListItem>
  <ListItem>List Item 3</ListItem>
</List.ol>
```

`<List.ol>` takes the standard `type` attribute to define if uppercase alpha, lowercase alpha, uppercase roman, lowercase roman.

```jsx in Markdown
import { ListItem } from '../index';

<div>
  <List.ol type="A">
    <ListItem>Uppercase Alpha List Item 1 <code>type=&quot;A&quot;</code></ListItem>
    <ListItem>Uppercase Alpha List Item 2 <code>type=&quot;A&quot;</code></ListItem>
    <ListItem>Uppercase Alpha List Item 3 <code>type=&quot;A&quot;</code></ListItem>
  </List.ol>
  <List.ol type="a">
    <ListItem>Lowercase Alpha List Item 1 <code>type=&quot;a&quot;</code></ListItem>
    <ListItem>Lowercase Alpha List Item 2 <code>type=&quot;a&quot;</code></ListItem>
    <ListItem>Lowercase Alpha List Item 3 <code>type=&quot;a&quot;</code></ListItem>
  </List.ol>
  <List.ol type="I">
    <ListItem>Uppercase Roman List Item 1 <code>type=&quot;I&quot;</code></ListItem>
    <ListItem>Uppercase Roman List Item 2 <code>type=&quot;I&quot;</code></ListItem>
    <ListItem>Uppercase Roman List Item 3 <code>type=&quot;I&quot;</code></ListItem>
  </List.ol>
  <List.ol type="i">
    <ListItem>Lowercase Roman List Item 1 <code>type=&quot;i&quot;</code></ListItem>
    <ListItem>Lowercase Roman List Item 2 <code>type=&quot;i&quot;</code></ListItem>
    <ListItem>Lowercase Roman List Item 3 <code>type=&quot;i&quot;</code></ListItem>
  </List.ol>
</div>
```

### Style variations
Add the attribute `unstyled` to have an unstyled view. Add the attribute `inline` to have an inline view.

```jsx in Markdown
import { ListItem } from '../index';

<div>
  <List unstyled>
    <ListItem>This List component was set to <code>unstyled</code>.</ListItem>
    <ListItem>List Item 2</ListItem>
    <ListItem>List Item 3</ListItem>
  </List>
  <List inline>
    <ListItem>This List component was set to <code>inline</code>.</ListItem>
    <ListItem>List Item 2</ListItem>
    <ListItem>List Item 3</ListItem>
  </List>
</div>
```
