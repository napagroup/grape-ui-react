/* eslint-disable react/prop-types */

import React from 'react';
import * as ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import {
  render,
} from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { CodeBlock } from 'src/elements/typography'; // from 'grape-ui-react'
import { Table } from '..';
import { columns, testData } from './utils';

describe('Table - kitchen sink snapshot', () => {
  const pageOptions = [5, 10, 15];
  const pageSize = pageOptions[0];
  const expanderCell = {
  // Make an expander cell
    Cell: ({ row }) => (
    // Use Cell to render an expander for each row.
    // We can use the getToggleRowExpandedProps prop-getter
    // to build the expander.
      <span {...row.getToggleRowExpandedProps()}>
        {row.isExpanded ? '👇' : '👉'}
      </span>
    ),
    Header: () => null, // No header
    id: 'expander', // It needs an ID
  };
  const renderRowSubComponent = ({ row }) => (
    <CodeBlock codeString={JSON.stringify({ values: row.values }, null, 2)} />
  );
  const expandableColumns = [expanderCell, ...columns];
  let container;
  beforeEach(() => {
    container = document.createElement('div');
  });
  it('should return table with all components & styling', () => {
    const data = testData;
    const tableBodyProps = {
      tableStriped: {
        even: { bg: 'green' },
        odd: { bg: 'green.light' },
      },
    };
    act(() => {
      ReactDOM.render(
        <ThemeProvider theme={{}}>
          <Table
            columns={expandableColumns}
            data={data}
            enableRowExpansion
            pageOptions={pageOptions}
            pageSize={pageSize}
            renderRowSubComponent={renderRowSubComponent}
            showPagination
            tableBodyProps={tableBodyProps}
          />
        </ThemeProvider>,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
});

describe('Table - page captions', () => {
  const getCaptionForPage = pageVm => {
    const { pageCount, pageShowCount, pageSize } = pageVm;
    return `Showing ${pageShowCount} of about ${pageCount * pageSize} results`;
  };
  const data = [...testData];
  const pageOptions = [7, 10, 15];
  const pageSize = pageOptions[0];
  const pageCount = Math.ceil(data.length / pageSize, 10);
  it('should return correct page stats on first page', () => {
    const pageIndex = 0;
    const pageShowCount = pageSize;
    const renderUtils = render(
      <ThemeProvider theme={{}}>
        <Table
          columns={columns}
          data={data}
          pageCount={pageCount}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
          pageSize={pageSize}
          showPagination
        />
      </ThemeProvider>
    );
    const { container, getByText } = renderUtils;
    const caption = getCaptionForPage({ pageCount, pageShowCount, pageSize });
    expect(caption).toEqual('Showing 7 of about 203 results');
    expect(container).toContainElement(getByText(caption));
  });
  it('should return correct page stats on last page', () => {
    const pageIndex = Math.ceil(data.length / pageSize) - 1;
    const pageShowCount = data.length % pageSize;
    const renderUtils = render(
      <ThemeProvider theme={{}}>
        <Table
          columns={columns}
          data={data}
          fetchData={() => {}}
          pageCount={pageCount}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
          pageSize={pageSize}
          showPagination
        />
      </ThemeProvider>
    );
    const { container, getByText } = renderUtils;
    const caption = getCaptionForPage({ pageCount, pageShowCount, pageSize });
    expect(pageShowCount).toEqual(4);
    expect(caption).toEqual('Showing 4 of about 203 results');
    expect(container).toContainElement(getByText(caption));
  });
  it('should return correct page stats when data is empty', () => {
    const emptyData = [];
    const emptyPageCount = 0;
    const pageShowCount = 0;
    const renderUtils = render(
      <ThemeProvider theme={{}}>
        <Table
          columns={columns}
          data={emptyData}
          fetchData={() => {}}
        />
      </ThemeProvider>
    );
    const { container, getByText } = renderUtils;
    const caption = getCaptionForPage({ pageCount: emptyPageCount, pageShowCount, pageSize });
    expect(caption).toEqual('Showing 0 of about 0 results');
    expect(container).toContainElement(getByText(caption));
  });
});
