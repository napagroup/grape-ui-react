Yo.

#### Basic String Example

```jsx in Markdown
// Alert children as string.
<div>
  <Alert>Basic alert.</Alert>
  <Alert variant="success">Success!</Alert>
</div>
```

#### Basic Node Example

```jsx in Markdown
// Alert children as node.
import { Box, Flex } from 'src/elements/grid';

<Alert>
  <Flex>
    <Box>Uh oh</Box>
    <Box>Spaghettios</Box>
  </Flex>
</Alert>
```

```jsx in Markdown
// Alert with action
import { Button } from 'src/elements/Button';

const UndoButton = () => <Button color="white">Undo</Button>;

<Alert
  alertAction={<UndoButton />}
>
  Changes saved.
</Alert>
```

```jsx in Markdown
// Alert as toast
import React from 'react';
import { Button } from 'src/elements/Button';
import { Box } from 'src/elements/grid';
import { ToastContainer, toast } from 'react-toastify';

const getToast = () => toast(<Alert isToast>This chick is toast.</Alert>);

<div>
  <Button
    onClick={getToast}
  >
    Notify
  </Button>
  <ToastContainer
    position="bottom-center"
  />
</div>
```
