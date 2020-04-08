"use strict";

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

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("..");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

describe('Table - with row expansion enabled', function () {
  var renderUtils;
  var pageOptions = [5, 10, 15];

  var data = _toConsumableArray(_utils.testData);

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
    }, /*#__PURE__*/_react["default"].createElement("code", null, "".concat(expandedRowInnerText, " ").concat(row.id)));
  };

  var expandableColumns = [expanderCell].concat(_toConsumableArray(_utils.columns));
  var titleToQuery = 'Toggle Row Expanded';
  beforeEach(function () {
    jest.clearAllMocks();
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Table, {
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

    _react2.fireEvent.click(rows[0]);

    expandedRows = queryAllByText(/Description of Expanded Row 0/);
    expect(expandedRows.length).toEqual(1); // The row is toggled to no longer be expanded

    _react2.fireEvent.click(rows[0]);

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

    _react2.fireEvent.click(rows[0]);

    _react2.fireEvent.click(rows[2]);

    _react2.fireEvent.click(rows[4]);

    expandedRows = queryAllByText(/Description of Expanded Row 0/);
    expect(expandedRows.length).toEqual(1);
    expandedRows = queryAllByText(/Description of Expanded Row 2/);
    expect(expandedRows.length).toEqual(1);
    expandedRows = queryAllByText(/Description of Expanded Row 4/);
    expect(expandedRows.length).toEqual(1); // The row is toggled to no longer be expanded

    _react2.fireEvent.click(rows[0]);

    expandedRows = queryAllByText(/Description of Expanded Row 0/);
    expect(expandedRows.length).toEqual(0);
    expandedRows = queryAllByText(/Description of Expanded Row 2/);
    expect(expandedRows.length).toEqual(1);
    expandedRows = queryAllByText(/Description of Expanded Row 4/);
    expect(expandedRows.length).toEqual(1);
  });
});