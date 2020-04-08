"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _testUtils = require("react-dom/test-utils");

require("@testing-library/jest-dom");

var _react2 = require("@testing-library/react");

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("..");

var _utils = require("./utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

describe('Table - kitchen sink snapshot', function () {
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
    }, /*#__PURE__*/_react["default"].createElement("code", null, JSON.stringify({
      values: row.values
    }, null, 2)));
  };

  var expandableColumns = [expanderCell].concat(_toConsumableArray(_utils.columns));
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
    var pageCount = pageVm.pageCount,
        pageShowCount = pageVm.pageShowCount,
        pageSize = pageVm.pageSize;
    return "Showing ".concat(pageShowCount, " of about ").concat(pageCount * pageSize, " results");
  };

  var data = _toConsumableArray(_utils.testData);

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