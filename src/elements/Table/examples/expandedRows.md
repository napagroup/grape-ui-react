```jsx in Markdown
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Table } from 'src/elements/Table';
import { makeData } from 'src/elements/Table/examples/utils';
import { CodeBlock } from 'src/elements/typography'; // from 'grape-ui-react'

const expanderCell = {
  // Make an expander cell
  Cell: ({ row }) => {
    return (
    // Use Cell to render an expander for each row.
    // We can use the getToggleRowExpandedProps prop-getter
    // to build the expander.
    <span
      {...row.getToggleRowExpandedProps()}
    >
      {row.isExpanded ? '👇' : '👉'}
    </span>);
  },
  Header: () => null, // No header
  id: 'expander', // It needs an ID
};
const columns = React.useMemo(() => [
  expanderCell,
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
[]);
const theme = {};
const data = React.useMemo(() => makeData(200), []);

const renderRowSubComponent = React.useCallback(
  ({ row }) => (
    <CodeBlock
      code={JSON.stringify({ values: row.values }, null, 2)}
    />
  ),
  []
);

<ThemeProvider theme={theme}>
  <Table
    columns={columns}
    data={data}
    enableRowExpansion
    renderRowSubComponent={renderRowSubComponent}
    showPagination
  />
</ThemeProvider>
```
