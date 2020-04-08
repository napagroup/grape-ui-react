<!-- markdownlint-disable MD033 MD041 -->
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
const tableBodyProps = {
  tableStriped: {
    even: { bg: 'white.dark' },
    odd: { bg: 'orange.light' },
  },
};

<ThemeProvider theme={theme}>
  <Table
    columns={columns}
    data={data}
    showPagination
    tableBodyProps={tableBodyProps}
  />
</ThemeProvider>
```
