"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("..");

var _utils = require("./utils");

/* eslint-disable react/prop-types */
describe('Table - with row expansion enabled', function () {
  var _context2;

  var renderUtils;
  var pageOptions = [5, 10, 15];
  var data = (0, _toConsumableArray2["default"])(_utils.testData);
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
    var _context;

    var row = _ref2.row;
    return /*#__PURE__*/_react["default"].createElement("pre", {
      style: {
        fontSize: '10px'
      }
    }, /*#__PURE__*/_react["default"].createElement("code", null, (0, _concat["default"])(_context = "".concat(expandedRowInnerText, " ")).call(_context, row.id)));
  };

  var expandableColumns = (0, _concat["default"])(_context2 = [expanderCell]).call(_context2, (0, _toConsumableArray2["default"])(_utils.columns));
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