```jsx in Markdown
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Table } from 'src/elements/Table';
import { makeData, sortAsString } from 'src/elements/Table/examples/utils';

const defaultPageOptions = [10, 15, 25, 50];

const getPaginatedData = (pageVm, data) => {
  const {
    pageIndex: currentPage,
    pageSize: numberPerPage,
    sortBy,
  } = pageVm;
  const begin = ((currentPage) * numberPerPage);
  const end = begin + numberPerPage;
  let sortByData;
  if (sortBy && sortBy.length) {
    const { id: propName, desc } = sortBy[0];
    sortByData = data.sort(sortAsString(desc, propName));
  } else {
    sortByData = data;
  }
  const pagedData = sortByData.slice(begin, end);
  return pagedData;
};

const getInitialPageVm = data => ({
  pageCount: data.length / defaultPageOptions[0],
  pageIndex: 0,
  pageSize: defaultPageOptions[0],
  sortBy: [],
});
function TableView(props) {
  const originalData = React.useMemo(() => makeData(200), []);
  const columns = React.useMemo(() => [
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
[]);

  const [pageVm, setPageVm] = useState(getInitialPageVm(originalData));
  /**
   * Simulate fetch logic - This section represents fetched data typically from an api call
  **/
  const paginatedData = React.useMemo(() => getPaginatedData(pageVm, originalData), [pageVm]);

  const fetchData = ({
    pageCount,
    pageIndex,
    pageSize,
    sortBy,
  }) => {
    const nextPageVm = {
      pageCount: parseInt(originalData.length / pageSize),
      pageIndex,
      pageSize,
      sortBy,
    };
    setPageVm(nextPageVm);
  };
  /**
   * End of fetch data logic
  **/

  return (
    <Table
      columns={columns}
      data={paginatedData}
      fetchData={fetchData}
      manual
      pageCount={pageVm.pageCount}
      pageIndex={pageVm.pageIndex}
      pageOptions={defaultPageOptions}
      pageSize={pageVm.pageSize}
      showPagination
      showSkipButtons
    />
  );
}

const theme = {};
<ThemeProvider theme={theme}>
  <TableView />
</ThemeProvider>
```
