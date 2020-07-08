The `<Hideable>` component is a utility component to allow developers to not return DOM elements based on a bool.

```jsx in Markdown
<div>View the code to see the hidden component.</div>
<br />
<Hideable isHidden={true}>I am hidden!</Hideable>
<Hideable isHidden={false}>I am not hidden!</Hideable>
```

The `withHideable` function allows developers to wrap a `<Hideable>` around a custom component. This will allow the `isHidden` prop to be active for that component.

```jsx in Markdown
import styled from 'styled-components';
import { withHideable } from './';

const CustomDiv = styled(withHideable('div'))``;

<div>
  <CustomDiv isHidden={true}>I am hidden!</CustomDiv>
  <CustomDiv isHidden={false}>I am not hidden!</CustomDiv>
</div>
```
