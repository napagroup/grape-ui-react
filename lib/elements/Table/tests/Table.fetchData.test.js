"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("..");

var _utils = require("./utils");

describe('Table - manual pagination', () => {
  let renderUtils;
  const data = []; // assume roughly length = pageCount * pageSize

  const pageCount = 10;
  const pageIndex = 3;
  const pageOptions = [5, 10, 15];
  const pageSize = pageOptions[0];
  let fetchData;
  beforeEach(() => {
    jest.clearAllMocks();
    fetchData = jest.fn();
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Table, {
      columns: _utils.columns,
      data: data,
      fetchData: fetchData,
      manual: true,
      pageCount: pageCount,
      pageIndex: pageIndex,
      pageOptions: pageOptions,
      pageSize: pageSize,
      showPagination: true,
      showSkipButtons: true
    })));
  });
  it('should invoke fetchData with expected criteria when gotoFirstPage is clicked', () => {
    const _renderUtils = renderUtils,
          queryByTestId = _renderUtils.queryByTestId;

    _react2.fireEvent.click(queryByTestId('gotoFirstPage'));

    const actual = {
      pageCount,
      pageIndex: 0,
      pageSize: 5,
      sortBy: []
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
  it('should invoke fetchData with expected criteria when gotoPreviousPage is clicked', () => {
    const _renderUtils2 = renderUtils,
          queryByTestId = _renderUtils2.queryByTestId;

    _react2.fireEvent.click(queryByTestId('gotoPreviousPage'));

    const actual = {
      pageCount,
      pageIndex: pageIndex - 1,
      pageSize: 5,
      sortBy: []
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
  it('should invoke fetchData with expected criteria when gotoNextPage is clicked', () => {
    const _renderUtils3 = renderUtils,
          queryByTestId = _renderUtils3.queryByTestId;

    _react2.fireEvent.click(queryByTestId('gotoNextPage'));

    const actual = {
      pageCount,
      pageIndex: pageIndex + 1,
      pageSize: 5,
      sortBy: []
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
  it('should invoke fetchData with expected criteria when gotoLastPage is clicked', () => {
    const _renderUtils4 = renderUtils,
          queryByTestId = _renderUtils4.queryByTestId;

    _react2.fireEvent.click(queryByTestId('gotoLastPage'));

    const actual = {
      pageCount,
      pageIndex: pageCount - 1,
      pageSize: 5,
      sortBy: []
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
  it('should invoke fetchData with expected criteria when Jump to Page is changed', () => {
    const _renderUtils5 = renderUtils,
          getByLabelText = _renderUtils5.getByLabelText;
    const input = getByLabelText(/Jump to Page/);
    const jumpToPage = 4;
    input.value = jumpToPage;
    const actual = {
      pageCount,
      pageIndex: jumpToPage - 1,
      pageSize: 5,
      sortBy: []
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
  it('should invoke fetchData with expected criteria when column header First Name is clicked', () => {
    const _renderUtils6 = renderUtils,
          getByText = _renderUtils6.getByText;

    _react2.fireEvent.click(getByText('First Name'));

    let actual = {
      pageCount,
      pageIndex,
      pageSize,
      sortBy: [{
        desc: false,
        id: 'firstName'
      }]
    };
    expect(fetchData).toHaveBeenCalledWith(actual);

    _react2.fireEvent.click(getByText('First Name'));

    actual = {
      pageCount,
      pageIndex,
      pageSize,
      sortBy: [{
        desc: true,
        id: 'firstName'
      }]
    };
    expect(fetchData).toHaveBeenCalledWith(actual);

    _react2.fireEvent.click(getByText('First Name'));

    actual = {
      pageCount,
      pageIndex,
      pageSize,
      sortBy: []
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
});