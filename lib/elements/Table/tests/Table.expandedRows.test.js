import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _toConsumableArray from "@babel/runtime-corejs3/helpers/toConsumableArray";

/* eslint-disable react/prop-types */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Table } from '..';
import { columns, testData } from './utils';
describe('Table - with row expansion enabled', function () {
  var _context2;

  var renderUtils;
  var pageOptions = [5, 10, 15];

  var data = _toConsumableArray(testData);

  var expandedRowInnerText = 'Description of Expanded Row';
  var expanderCell = {
    // Make an expander cell
    Cell: function Cell(_ref) {
      var row = _ref.row;
      return (
        /*#__PURE__*/
        // Use Cell to render an expander for each row.
        // We can use the getToggleRowExpandedProps prop-getter
        // to build the expander.
        React.createElement("span", row.getToggleRowExpandedProps(), row.isExpanded ? '👇' : '👉')
      );
    },
    Header: function Header() {
      return null;
    },
    // No header
    id: 'expander' // It needs an ID

  };

  var renderRowSubComponent = function renderRowSubComponent(_ref2) {
    var _context;

    var row = _ref2.row;
    return /*#__PURE__*/React.createElement("pre", {
      style: {
        fontSize: '10px'
      }
    }, /*#__PURE__*/React.createElement("code", null, _concatInstanceProperty(_context = "".concat(expandedRowInnerText, " ")).call(_context, row.id)));
  };

  var expandableColumns = _concatInstanceProperty(_context2 = [expanderCell]).call(_context2, _toConsumableArray(columns));

  var titleToQuery = 'Toggle Row Expanded';
  beforeEach(function () {
    jest.clearAllMocks();
    renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Table, {
      columns: expandableColumns,
      data: data,
      enableRowExpansion: true,
      pageOptions: pageOptions,
      pageSize: pageOptions[0],
      renderRowSubComponent: renderRowSubComponent,
      showPagination: true
    })));
  });
  it('should have all page rows present as toggle-able for expansion', function () {
    var _renderUtils = renderUtils,
        queryAllByTitle = _renderUtils.queryAllByTitle;
    expect(queryAllByTitle(titleToQuery).length).toEqual(pageOptions[0]);
  });
  it('should allow the row expansion to be toggle-able when clicked', function () {
    var _renderUtils2 = renderUtils,
        queryAllByTitle = _renderUtils2.queryAllByTitle,
        queryAllByText = _renderUtils2.queryAllByText; // We have all expandable rows present, no row currently expanded

    var rows = queryAllByTitle(titleToQuery);
    var expandedRows = queryAllByText(/Description of Expanded Row 0/);
    expect(expandedRows.length).toEqual(0); // The row is toggled to be expanded

    fireEvent.click(rows[0]);
    expandedRows = queryAllByText(/Description of Expanded Row 0/);
    expect(expandedRows.length).toEqual(1); // The row is toggled to no longer be expanded

    fireEvent.click(rows[0]);
    expandedRows = queryAllByText(/Description of Expanded Row 0/);
    expect(expandedRows.length).toEqual(0);
  });
  it('should allow row expansion state to be independent to each row', function () {
    var _renderUtils3 = renderUtils,
        queryAllByTitle = _renderUtils3.queryAllByTitle,
        queryAllByText = _renderUtils3.queryAllByText; // We have all expandable rows present, no row currently expanded

    var rows = queryAllByTitle(titleToQuery);
    var expandedRows = queryAllByText(/Description of Expanded Row/);
    expect(expandedRows.length).toEqual(0); // The row is toggled to be expanded

    fireEvent.click(rows[0]);
    fireEvent.click(rows[2]);
    fireEvent.click(rows[4]);
    expandedRows = queryAllByText(/Description of Expanded Row 0/);
    expect(expandedRows.length).toEqual(1);
    expandedRows = queryAllByText(/Description of Expanded Row 2/);
    expect(expandedRows.length).toEqual(1);
    expandedRows = queryAllByText(/Description of Expanded Row 4/);
    expect(expandedRows.length).toEqual(1); // The row is toggled to no longer be expanded

    fireEvent.click(rows[0]);
    expandedRows = queryAllByText(/Description of Expanded Row 0/);
    expect(expandedRows.length).toEqual(0);
    expandedRows = queryAllByText(/Description of Expanded Row 2/);
    expect(expandedRows.length).toEqual(1);
    expandedRows = queryAllByText(/Description of Expanded Row 4/);
    expect(expandedRows.length).toEqual(1);
  });
});