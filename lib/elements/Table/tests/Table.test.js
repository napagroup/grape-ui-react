"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/values"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _react = _interopRequireDefault(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _testUtils = require("react-dom/test-utils");

require("@testing-library/jest-dom");

var _react2 = require("@testing-library/react");

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _typography = require("../../../elements/typography");

var _ = require("..");

var _utils = require("./utils");

/* eslint-disable react/prop-types */
// from 'grape-ui-react'
describe('Table - kitchen sink snapshot', () => {
  const pageOptions = [5, 10, 15];
  const pageSize = pageOptions[0];
  const expanderCell = {
    // Make an expander cell
    Cell: ({
      row
    }) =>
    /*#__PURE__*/
    // Use Cell to render an expander for each row.
    // We can use the getToggleRowExpandedProps prop-getter
    // to build the expander.
    _react.default.createElement("span", row.getToggleRowExpandedProps(), row.isExpanded ? '👇' : '👉'),
    Header: () => null,
    // No header
    id: 'expander' // It needs an ID

  };

  const renderRowSubComponent = ({
    row
  }) => /*#__PURE__*/_react.default.createElement(_typography.CodeBlock, {
    codeString: (0, _stringify.default)({
      values: (0, _values.default)(row)
    }, null, 2)
  });

  const expandableColumns = [expanderCell, ..._utils.columns];
  let container;
  beforeEach(() => {
    container = document.createElement('div');
  });
  it('should return table with all components & styling', () => {
    const data = _utils.testData;
    const tableBodyProps = {
      tableStriped: {
        even: {
          bg: 'green'
        },
        odd: {
          bg: 'green.light'
        }
      }
    };
    (0, _testUtils.act)(() => {
      ReactDOM.render( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(_.Table, {
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
describe('Table - page captions', () => {
  const getCaptionForPage = pageVm => {
    var _context;

    const pageCount = pageVm.pageCount,
          pageShowCount = pageVm.pageShowCount,
          pageSize = pageVm.pageSize;
    return (0, _concat.default)(_context = "Showing ".concat(pageShowCount, " of about ")).call(_context, pageCount * pageSize, " results");
  };

  const data = [..._utils.testData];
  const pageOptions = [7, 10, 15];
  const pageSize = pageOptions[0];
  const pageCount = Math.ceil(data.length / pageSize, 10);
  it('should return correct page stats on first page', () => {
    const pageIndex = 0;
    const pageShowCount = pageSize;
    const renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Table, {
      columns: _utils.columns,
      data: data,
      pageCount: pageCount,
      pageIndex: pageIndex,
      pageOptions: pageOptions,
      pageSize: pageSize,
      showPagination: true
    })));
    const container = renderUtils.container,
          getByText = renderUtils.getByText;
    const caption = getCaptionForPage({
      pageCount,
      pageShowCount,
      pageSize
    });
    expect(caption).toEqual('Showing 7 of about 203 results');
    expect(container).toContainElement(getByText(caption));
  });
  it('should return correct page stats on last page', () => {
    const pageIndex = Math.ceil(data.length / pageSize) - 1;
    const pageShowCount = data.length % pageSize;
    const renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Table, {
      columns: _utils.columns,
      data: data,
      fetchData: () => {},
      pageCount: pageCount,
      pageIndex: pageIndex,
      pageOptions: pageOptions,
      pageSize: pageSize,
      showPagination: true
    })));
    const container = renderUtils.container,
          getByText = renderUtils.getByText;
    const caption = getCaptionForPage({
      pageCount,
      pageShowCount,
      pageSize
    });
    expect(pageShowCount).toEqual(4);
    expect(caption).toEqual('Showing 4 of about 203 results');
    expect(container).toContainElement(getByText(caption));
  });
  it('should return correct page stats when data is empty', () => {
    const emptyData = [];
    const emptyPageCount = 0;
    const pageShowCount = 0;
    const renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Table, {
      columns: _utils.columns,
      data: emptyData,
      fetchData: () => {}
    })));
    const container = renderUtils.container,
          getByText = renderUtils.getByText;
    const caption = getCaptionForPage({
      pageCount: emptyPageCount,
      pageShowCount,
      pageSize
    });
    expect(caption).toEqual('Showing 0 of about 0 results');
    expect(container).toContainElement(getByText(caption));
  });
});