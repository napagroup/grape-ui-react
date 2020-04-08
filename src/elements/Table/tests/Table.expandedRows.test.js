/* eslint-disable react/prop-types */

import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Table } from '..';
import { columns, testData } from './utils';

describe('Table - with row expansion enabled', () => {
  let renderUtils;
  const pageOptions = [5, 10, 15];
  const data = [...testData];
  const expandedRowInnerText = 'Description of Expanded Row';
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
    <pre
      style={{
        fontSize: '10px',
      }}
    >
      <code>{`${expandedRowInnerText} ${row.id}`}</code>
    </pre>
  );
  const expandableColumns = [expanderCell, ...columns];
  const titleToQuery = 'Toggle Row Expanded';
  beforeEach(() => {
    jest.clearAllMocks();
    renderUtils = render(
      <ThemeProvider theme={{}}>
        <Table
          columns={expandableColumns}
          data={data}
          enableRowExpansion
          pageOptions={pageOptions}
          pageSize={pageOptions[0]}
          renderRowSubComponent={renderRowSubComponent}
          showPagination
        />
      </ThemeProvider>
    );
  });
  it('should have all page rows present as toggle-able for expansion', () => {
    const { queryAllByTitle } = renderUtils;
    expect(queryAllByTitle(titleToQuery).length).toEqual(pageOptions[0]);
  });
  it('should allow the row expansion to be toggle-able when clicked', () => {
    const { queryAllByTitle, queryAllByText } = renderUtils;
    // We have all expandable rows present, no row currently expanded
    const rows = queryAllByTitle(titleToQuery);
    let expandedRows = queryAllByText(/Description of Expanded Row 0/);
    expect(expandedRows.length).toEqual(0);

    // The row is toggled to be expanded
    fireEvent.click(rows[0]);
    expandedRows = queryAllByText(/Description of Expanded Row 0/);
    expect(expandedRows.length).toEqual(1);

    // The row is toggled to no longer be expanded
    fireEvent.click(rows[0]);
    expandedRows = queryAllByText(/Description of Expanded Row 0/);
    expect(expandedRows.length).toEqual(0);
  });
  it('should allow row expansion state to be independent to each row', () => {
    const { queryAllByTitle, queryAllByText } = renderUtils;
    // We have all expandable rows present, no row currently expanded
    const rows = queryAllByTitle(titleToQuery);
    let expandedRows = queryAllByText(/Description of Expanded Row/);
    expect(expandedRows.length).toEqual(0);

    // The row is toggled to be expanded
    fireEvent.click(rows[0]);
    fireEvent.click(rows[2]);
    fireEvent.click(rows[4]);
    expandedRows = queryAllByText(/Description of Expanded Row 0/);
    expect(expandedRows.length).toEqual(1);
    expandedRows = queryAllByText(/Description of Expanded Row 2/);
    expect(expandedRows.length).toEqual(1);
    expandedRows = queryAllByText(/Description of Expanded Row 4/);
    expect(expandedRows.length).toEqual(1);

    // The row is toggled to no longer be expanded
    fireEvent.click(rows[0]);
    expandedRows = queryAllByText(/Description of Expanded Row 0/);
    expect(expandedRows.length).toEqual(0);
    expandedRows = queryAllByText(/Description of Expanded Row 2/);
    expect(expandedRows.length).toEqual(1);
    expandedRows = queryAllByText(/Description of Expanded Row 4/);
    expect(expandedRows.length).toEqual(1);
  });
});
