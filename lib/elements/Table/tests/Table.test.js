import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _toConsumableArray from "@babel/runtime-corejs3/helpers/toConsumableArray";
import _valuesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/values";
import _JSON$stringify from "@babel/runtime-corejs3/core-js-stable/json/stringify";

/* eslint-disable react/prop-types */
import React from 'react';
import * as ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Table } from '..';
import { columns, testData } from './utils';
describe('Table - kitchen sink snapshot', function () {
  var _context;

  var pageOptions = [5, 10, 15];
  var pageSize = pageOptions[0];
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
    var row = _ref2.row;
    return /*#__PURE__*/React.createElement("pre", {
      style: {
        fontSize: '10px'
      }
    }, /*#__PURE__*/React.createElement("code", null, _JSON$stringify({
      values: _valuesInstanceProperty(row)
    }, null, 2)));
  };

  var expandableColumns = _concatInstanceProperty(_context = [expanderCell]).call(_context, _toConsumableArray(columns));

  var container;
  beforeEach(function () {
    container = document.createElement('div');
  });
  it('should return table with all components & styling', function () {
    var data = testData;
    var tableBodyProps = {
      tableStriped: {
        even: {
          bg: 'green'
        },
        odd: {
          bg: 'green.light'
        }
      }
    };
    act(function () {
      ReactDOM.render( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/React.createElement(Table, {
        columns: expandableColumns,
        data: data,
        enableRowExpansion: true,
        pageOptions: pageOptions,
        pageSize: pageSize,
        renderRowSubComponent: renderRowSubComponent,
        showPagination: true,
        tableBodyProps: tableBodyProps
      })), container);
    });
    expect(container).toMatchSnapshot();
  });
});
describe('Table - page captions', function () {
  var getCaptionForPage = function getCaptionForPage(pageVm) {
    var _context2;

    var pageCount = pageVm.pageCount,
        pageShowCount = pageVm.pageShowCount,
        pageSize = pageVm.pageSize;
    return _concatInstanceProperty(_context2 = "Showing ".concat(pageShowCount, " of about ")).call(_context2, pageCount * pageSize, " results");
  };

  var data = _toConsumableArray(testData);

  var pageOptions = [7, 10, 15];
  var pageSize = pageOptions[0];
  var pageCount = Math.ceil(data.length / pageSize, 10);
  it('should return correct page stats on first page', function () {
    var pageIndex = 0;
    var pageShowCount = pageSize;
    var renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Table, {
      columns: columns,
      data: data,
      pageCount: pageCount,
      pageIndex: pageIndex,
      pageOptions: pageOptions,
      pageSize: pageSize,
      showPagination: true
    })));
    var container = renderUtils.container,
        getByText = renderUtils.getByText;
    var caption = getCaptionForPage({
      pageCount: pageCount,
      pageShowCount: pageShowCount,
      pageSize: pageSize
    });
    expect(caption).toEqual('Showing 7 of about 203 results');
    expect(container).toContainElement(getByText(caption));
  });
  it('should return correct page stats on last page', function () {
    var pageIndex = Math.ceil(data.length / pageSize) - 1;
    var pageShowCount = data.length % pageSize;
    var renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Table, {
      columns: columns,
      data: data,
      fetchData: function fetchData() {},
      pageCount: pageCount,
      pageIndex: pageIndex,
      pageOptions: pageOptions,
      pageSize: pageSize,
      showPagination: true
    })));
    var container = renderUtils.container,
        getByText = renderUtils.getByText;
    var caption = getCaptionForPage({
      pageCount: pageCount,
      pageShowCount: pageShowCount,
      pageSize: pageSize
    });
    expect(pageShowCount).toEqual(4);
    expect(caption).toEqual('Showing 4 of about 203 results');
    expect(container).toContainElement(getByText(caption));
  });
  it('should return correct page stats when data is empty', function () {
    var emptyData = [];
    var emptyPageCount = 0;
    var pageShowCount = 0;
    var renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Table, {
      columns: columns,
      data: emptyData,
      fetchData: function fetchData() {}
    })));
    var container = renderUtils.container,
        getByText = renderUtils.getByText;
    var caption = getCaptionForPage({
      pageCount: emptyPageCount,
      pageShowCount: pageShowCount,
      pageSize: pageSize
    });
    expect(caption).toEqual('Showing 0 of about 0 results');
    expect(container).toContainElement(getByText(caption));
  });
});