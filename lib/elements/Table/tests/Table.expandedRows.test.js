"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("..");

var _utils = require("./utils");

/* eslint-disable react/prop-types */
describe('Table - with row expansion enabled', () => {
  let renderUtils;
  const pageOptions = [5, 10, 15];
  const data = [..._utils.testData];
  const expandedRowInnerText = 'Description of Expanded Row';
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
  }) => /*#__PURE__*/_react.default.createElement("pre", {
    style: {
      fontSize: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement("code", null, `${expandedRowInnerText} ${row.id}`));

  const expandableColumns = [expanderCell, ..._utils.columns];
  const titleToQuery = 'Toggle Row Expanded';
  beforeEach(() => {
    jest.clearAllMocks();
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Table, {
      columns: expandableColumns,
      data: data,
      enableRowExpansion: true,
      pageOptions: pageOptions,
      pageSize: pageOptions[0],
      renderRowSubComponent: renderRowSubComponent,
      showPagination: true
    })));
  });
  it('should have all page rows present as toggle-able for expansion', () => {
    const {
      queryAllByTitle
    } = renderUtils;
    expect(queryAllByTitle(titleToQuery).length).toEqual(pageOptions[0]);
  });
  it('should allow the row expansion to be toggle-able when clicked', () => {
    const {
      queryAllByTitle,
      queryAllByText
    } = renderUtils; // We have all expandable rows present, no row currently expanded

    const rows = queryAllByTitle(titleToQuery);
    let expandedRows = queryAllByText(/Description of Expanded Row 0/);
    expect(expandedRows.length).toEqual(0); // The row is toggled to be expanded

    _react2.fireEvent.click(rows[0]);

    expandedRows = queryAllByText(/Description of Expanded Row 0/);
    expect(expandedRows.length).toEqual(1); // The row is toggled to no longer be expanded

    _react2.fireEvent.click(rows[0]);

    expandedRows = queryAllByText(/Description of Expanded Row 0/);
    expect(expandedRows.length).toEqual(0);
  });
  it('should allow row expansion state to be independent to each row', () => {
    const {
      queryAllByTitle,
      queryAllByText
    } = renderUtils; // We have all expandable rows present, no row currently expanded

    const rows = queryAllByTitle(titleToQuery);
    let expandedRows = queryAllByText(/Description of Expanded Row/);
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