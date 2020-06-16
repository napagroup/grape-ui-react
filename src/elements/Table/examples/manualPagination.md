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
let initialLoad = true;
const sourceData = makeData(200);

function TableView(props) {

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

  const [ pageVm, setPageVm ] = useState(getInitialPageVm([]));
  const [ paginatedData, setPaginatedData ] = useState([]);
  const [ loading, setLoading] = useState(false);
  /**
   * Simulate fetch logic - This section represents fetched data typically from an api call
   * Fn requestData will update the pageVm via setter which is being watched by useEffect below it
   * simulating an async fetch call via setTimeout.
  **/

  const requestData = ({
    pageCount,
    pageIndex,
    pageSize,
    sortBy,
  }) => {
    if (loading) {
      return;
    }
    const nextPageVm = {
      pageCount: parseInt(sourceData.length / pageSize),
      pageIndex,
      pageSize,
      sortBy,
    };
    setPageVm(nextPageVm);
  };
  useEffect(() => {
    setLoading(true);
    const paginatedData = getPaginatedData(pageVm, sourceData);
    setTimeout(() => {
      setLoading(false);
      setPaginatedData(paginatedData)
    }, 1000);
  }, [pageVm]);

  if (initialLoad) {
    initialLoad = false;
    requestData(pageVm);
  }
  /**
   * End of fetch data logic
  **/

 const data = React.useMemo(() => paginatedData, [paginatedData]);
  return (
    <Table
      columns={columns}
      data={data}
      fetchData={requestData}
      loading={loading}
      manual
      pageCount={pageVm.pageCount}
      pageIndex={pageVm.pageIndex}
      pageOptions={defaultPageOptions}
      pageSize={pageVm.pageSize}
      showPagination
    />
  );
}

const theme = {};
<ThemeProvider theme={theme}>
  <TableView />
</ThemeProvider>
```
