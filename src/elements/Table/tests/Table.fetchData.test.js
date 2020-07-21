import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Table } from '..';
import { columns } from './utils';

describe('Table - manual pagination', () => {
  let renderUtils;
  const data = []; // assume roughly length = pageCount * pageSize
  const pageCount = 10;
  const pageIndex = 3;
  const pageOptions = [5, 10, 15];
  const pageSize = pageOptions[0];
  let fetchData;
  beforeEach(() => {
    jest.clearAllMocks();
    fetchData = jest.fn();
    renderUtils = render(
      <ThemeProvider theme={{}}>
        <Table
          columns={columns}
          data={data}
          fetchData={fetchData}
          manual
          pageCount={pageCount}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
          pageSize={pageSize}
          showPagination
          showSkipButtons
        />
      </ThemeProvider>
    );
  });
  it('should invoke fetchData with expected criteria when gotoFirstPage is clicked', () => {
    const { queryByTestId } = renderUtils;
    fireEvent.click(queryByTestId('gotoFirstPage'));
    const actual = {
      pageCount, pageIndex: 0, pageSize: 5, sortBy: [],
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
  it('should invoke fetchData with expected criteria when gotoPreviousPage is clicked', () => {
    const { queryByTestId } = renderUtils;
    fireEvent.click(queryByTestId('gotoPreviousPage'));
    const actual = {
      pageCount, pageIndex: pageIndex - 1, pageSize: 5, sortBy: [],
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
  it('should invoke fetchData with expected criteria when gotoNextPage is clicked', () => {
    const { queryByTestId } = renderUtils;
    fireEvent.click(queryByTestId('gotoNextPage'));
    const actual = {
      pageCount, pageIndex: pageIndex + 1, pageSize: 5, sortBy: [],
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
  it('should invoke fetchData with expected criteria when gotoLastPage is clicked', () => {
    const { queryByTestId } = renderUtils;
    fireEvent.click(queryByTestId('gotoLastPage'));
    const actual = {
      pageCount, pageIndex: pageCount - 1, pageSize: 5, sortBy: [],
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
  it('should invoke fetchData with expected criteria when Jump to Page is changed', () => {
    const { getByLabelText } = renderUtils;
    const input = getByLabelText(/Jump to Page/);
    const jumpToPage = 4;
    input.value = jumpToPage;
    const actual = {
      pageCount, pageIndex: jumpToPage - 1, pageSize: 5, sortBy: [],
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
  it('should invoke fetchData with expected criteria when column header First Name is clicked', () => {
    const { getByText } = renderUtils;
    fireEvent.click(getByText('First Name'));
    let actual = {
      pageCount, pageIndex, pageSize, sortBy: [{ desc: false, id: 'firstName' }],
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
    fireEvent.click(getByText('First Name'));
    actual = {
      pageCount, pageIndex, pageSize, sortBy: [{ desc: true, id: 'firstName' }],
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
    fireEvent.click(getByText('First Name'));
    actual = {
      pageCount, pageIndex, pageSize, sortBy: [],
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
});
