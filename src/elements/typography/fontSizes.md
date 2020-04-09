To update font sizes, you can try adding `lg` for large text and `sm` for small text.

```jsx in Markdown
import { Header, Paragraph } from './index';

<div>
  <Paragraph lg>This paragraph is large.</Paragraph>
  <Paragraph>This paragraph is normal.</Paragraph>
  <Paragraph sm>This paragraph is small.</Paragraph>
  <Header.h5 lg>This Header.h5 is large.</Header.h5>
  <Header.h5>This Header.h5 is normal.</Header.h5>
  <Header.h5 sm>This Header.h5 is small.</Header.h5>
  <Header.h5 displayHeader lg>This Display Header.h5 is large.</Header.h5>
  <Header.h5 displayHeader>This Display Header.h5 is normal.</Header.h5>
  <Header.h5 displayHeader sm>This Display Header.h5 is small.</Header.h5>
</div>
```
