You can utilize the `<Progress>` component on the table.

#### Loading State

```jsx in Markdown
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Table } from 'src/elements/Table';
import { makeData } from 'src/elements/Table/examples/utils';

const columns = React.useMemo(
  () => [
    {
      columns: [
        {
          accessor: 'firstName',
          Header: 'First Name',
        },
        {
          accessor: 'lastName',
          Header: 'Last Name',
          styleProps: {
            borderRightWidth: 1,
          },
        },
      ],
      Header: 'Name',
      styleProps: {
        borderRightWidth: 1,
        textAlign: 'center',
      },
    },
    {
      columns: [
        {
          accessor: 'age',
          Header: 'Age',
          sortType: 'basic',
          styleProps: {
            textAlign: 'right',
          },
        },
        {
          accessor: 'visits',
          Header: 'Visits',
          sortType: 'basic',
          styleProps: {
            textAlign: 'right',
          },
        },
        {
          accessor: 'status',
          Header: 'Status',
        },
        {
          accessor: 'progress',
          Header: 'Profile Progress',
          sortType: 'basic',
          styleProps: {
            textAlign: 'right',
          },
        },
      ],
      Header: 'Info',
      styleProps: {
        textAlign: 'center',
      },
    },
  ],
  []
);

const theme = {};
const data = React.useMemo(() => makeData(200), []);

<ThemeProvider theme={theme}>
  <Table
    columns={columns}
    data={data}
    showPagination
    progressProps={{
      isDeterminate: true,
      loop: false,
    }}
    showProgress
  />
</ThemeProvider>
```

#### Hide Table

```jsx in Markdown
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from 'src/elements/Button';
import { Table } from 'src/elements/Table';
import { makeData } from 'src/elements/Table/examples/utils';

const columns = React.useMemo(
  () => [
    {
      columns: [
        {
          accessor: 'firstName',
          Header: 'First Name',
        },
        {
          accessor: 'lastName',
          Header: 'Last Name',
          styleProps: {
            borderRightWidth: 1,
          },
        },
      ],
      Header: 'Name',
      styleProps: {
        borderRightWidth: 1,
        textAlign: 'center',
      },
    },
    {
      columns: [
        {
          accessor: 'age',
          Header: 'Age',
          sortType: 'basic',
          styleProps: {
            textAlign: 'right',
          },
        },
        {
          accessor: 'visits',
          Header: 'Visits',
          sortType: 'basic',
          styleProps: {
            textAlign: 'right',
          },
        },
        {
          accessor: 'status',
          Header: 'Status',
        },
        {
          accessor: 'progress',
          Header: 'Profile Progress',
          sortType: 'basic',
          styleProps: {
            textAlign: 'right',
          },
        },
      ],
      Header: 'Info',
      styleProps: {
        textAlign: 'center',
      },
    },
  ],
  []
);

const theme = {};
const data = React.useMemo(() => makeData(200), []);
const [hide, setHidden] = useState(false);

<ThemeProvider theme={theme}>
  <Button
    onClick={() => setHidden(!hide)}
  >
    Toggle Visibility
  </Button>
  <Table
    columns={columns}
    data={data}
    isHidden={hide}
    showPagination
  />
</ThemeProvider>
```
