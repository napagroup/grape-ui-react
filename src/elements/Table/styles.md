To customize `<Table>`, you can pass in styled props directly to the component, directly to columns, or directly to individual cells.

## Component props

The `<Table>` component can be styled directly via props. Its intended to be done like this for incorporating the `<Table>` control to conform to your branding styles. The props can be applied with styled-system functions.

**Styled-System functions that are built in each components:**

* `border` [(API)](https://styled-system.com/api#border)
* `layout` [(API)](https://styled-system.com/api#layout)
* `position` [(API)](https://styled-system.com/api#position)
* `space` [(API)](https://styled-system.com/api#space)

### List of configurable component props

| Prop Name | HTML tag | Default Props |
| - | - | - |
| `tableBodyProps` | `<tbody>` | None |
| `tableCellProps` | `<td>` | `...defaultStylesBase` `borderBottomColor:` resolveColor('white.dark', globalOverrides), `borderBottomStyle:` 'solid', `borderBottomWidth:` 1, `px:` [2, 3], `py:` 2, `verticalAlign:` 'top' |
| `tableHeaderProps` | `<thead>` | None |
| `tableHeadProps` | `<th>` | Same as `tableCellProps` except `verticalAlign:` 'bottom' |
| `tableProps` | `<table>` | `width:` 1 |
| `tableRowProps` | `<tr>` | None |
| `tableWrapperProps`* | `<Box>` | `borderColor:` resolveColor('white.dark', globalOverrides), `borderRadius:` 2, `borderStyle:` 'solid', `borderWidth:` 1, `mb:` 1, `width:` 1 |
| `wrapperProps`* | `<Box>` | None |

**Note:* `tableWrapperProps` is intended for the `<Box>` element that surrounds the `<Table>` and its pagination control. `wrapperProps` is intended for the `<Box>` element that surrounds the entire control including column toggle, row count, `<Table>` and its pagination.

#### Component Styling Example

```jsx in Markdown
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Table } from 'src/elements/Table';
import { makeData } from 'src/elements/Table/examples/utils';

const columns = React.useMemo(
  () => [
    {
      accessor: 'firstName',
      Header: 'First Name',
    },
    {
      accessor: 'lastName',
      Header: 'Last Name',
    },
    {
      accessor: 'age',
      Header: 'Age',
      sortType: 'basic',
    },
    {
      accessor: 'visits',
      Header: 'Visits',
      sortType: 'basic',
    },
    {
      accessor: 'status',
      Header: 'Status',
    },
    {
      accessor: 'progress',
      Header: 'Profile Progress',
      sortType: 'basic',
    },
  ],
);

const theme = {};
const data = React.useMemo(() => makeData(200), []);

<ThemeProvider theme={theme}>
  <Table
    columns={columns}
    data={data}
    tableBodyProps={{
      borderWidth: 0,
      p: 1,
      tableStriped: {
        even: {
          bg: 'rgba(170, 85, 85, 0.1)',
        },
        odd: {
          bg: 'rgba(170, 85, 85, 0.2)',
        }
      },
    }}
    tableCellProps={{
      borderBottomWidth: 0,
      fontFamily: 'sans-serif',
      fontWeight: '200',
      px: 1,
      py: 1,
      sm: true,
    }}
    tableHeaderProps={{ p: 1 }}
    tableHeadProps={{
      borderBottomColor: 'rgba(170, 85, 85, 0.3)',
      borderWidth: 0,
      fontFamily: 'sans-serif',
      fontWeight: '300',
      px: 1,
      py: 1,
      sm: true,
    }}
    tableProps={{
      borderBottom: '1px solid rgba(170, 85, 85, 0.1)',
      borderLeft: '1px solid rgba(170, 85, 85, 0.05)',
      borderRadius: 12,
      borderRight: '1px solid rgba(170, 85, 85, 0.05)',
      borderTop: '1px solid rgba(170, 85, 85, 0.2)',
      overflow: 'hidden',
      px: 1,
    }}
    tableRowProps={{
      borderWidth: 0,
      px: [3, 4, 5, 6],
    }}
    tableWrapperProps={{
      borderWidth: 0,
      p: 1
    }}
    wrapperProps={{
      borderWidth: 0,
      p: 1,
      maxWidth: 600,
    }}
  />
</ThemeProvider>
```

## Style individual parts

Individual areas of the `<Table>` component can be styled directly via `styledProps`. As part of the `column`, include `styledProps` and pass in any sort of props as an object.

### Individual Styling Example

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
          styleProps: {
            sm: true,
          }
        },
        {
          accessor: 'lastName',
          Header: 'Last Name',
          styleProps: {
            border: '1px solid #c0ff33',
            italic: true,
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
  />
</ThemeProvider>
```
