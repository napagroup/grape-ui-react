"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/values"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _react = _interopRequireDefault(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _testUtils = require("react-dom/test-utils");

require("@testing-library/jest-dom");

var _react2 = require("@testing-library/react");

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("..");

var _utils = require("./utils");

/* eslint-disable react/prop-types */
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
        _react["default"].createElement("span", row.getToggleRowExpandedProps(), row.isExpanded ? '👇' : '👉')
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
    return /*#__PURE__*/_react["default"].createElement("pre", {
      style: {
        fontSize: '10px'
      }
    }, /*#__PURE__*/_react["default"].createElement("code", null, (0, _stringify["default"])({
      values: (0, _values["default"])(row)
    }, null, 2)));
  };

  var expandableColumns = (0, _concat["default"])(_context = [expanderCell]).call(_context, (0, _toConsumableArray2["default"])(_utils.columns));
  var container;
  beforeEach(function () {
    container = document.createElement('div');
  });
  it('should return table with all components & styling', function () {
    var data = _utils.testData;
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
    (0, _testUtils.act)(function () {
      ReactDOM.render( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react["default"].createElement(_.Table, {
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
    return (0, _concat["default"])(_context2 = "Showing ".concat(pageShowCount, " of about ")).call(_context2, pageCount * pageSize, " results");
  };

  var data = (0, _toConsumableArray2["default"])(_utils.testData);
  var pageOptions = [7, 10, 15];
  var pageSize = pageOptions[0];
  var pageCount = Math.ceil(data.length / pageSize, 10);
  it('should return correct page stats on first page', function () {
    var pageIndex = 0;
    var pageShowCount = pageSize;
    var renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Table, {
      columns: _utils.columns,
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
    var renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Table, {
      columns: _utils.columns,
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
    var renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Table, {
      columns: _utils.columns,
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