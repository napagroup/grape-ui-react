"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("..");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Table - manual pagination', function () {
  var renderUtils;
  var data = []; // assume roughly length = pageCount * pageSize

  var pageCount = 10;
  var pageIndex = 3;
  var pageOptions = [5, 10, 15];
  var pageSize = pageOptions[0];
  var fetchData;
  beforeEach(function () {
    jest.clearAllMocks();
    fetchData = jest.fn();
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Table, {
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
  it('should invoke fetchData with expected criteria when gotoFirstPage is clicked', function () {
    var _renderUtils = renderUtils,
        queryByTestId = _renderUtils.queryByTestId;

    _react2.fireEvent.click(queryByTestId('gotoFirstPage'));

    var actual = {
      pageCount: pageCount,
      pageIndex: 0,
      pageSize: 5,
      sortBy: []
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
  it('should invoke fetchData with expected criteria when gotoPreviousPage is clicked', function () {
    var _renderUtils2 = renderUtils,
        queryByTestId = _renderUtils2.queryByTestId;

    _react2.fireEvent.click(queryByTestId('gotoPreviousPage'));

    var actual = {
      pageCount: pageCount,
      pageIndex: pageIndex - 1,
      pageSize: 5,
      sortBy: []
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
  it('should invoke fetchData with expected criteria when gotoNextPage is clicked', function () {
    var _renderUtils3 = renderUtils,
        queryByTestId = _renderUtils3.queryByTestId;

    _react2.fireEvent.click(queryByTestId('gotoNextPage'));

    var actual = {
      pageCount: pageCount,
      pageIndex: pageIndex + 1,
      pageSize: 5,
      sortBy: []
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
  it('should invoke fetchData with expected criteria when gotoLastPage is clicked', function () {
    var _renderUtils4 = renderUtils,
        queryByTestId = _renderUtils4.queryByTestId;

    _react2.fireEvent.click(queryByTestId('gotoLastPage'));

    var actual = {
      pageCount: pageCount,
      pageIndex: pageCount - 1,
      pageSize: 5,
      sortBy: []
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
  it('should invoke fetchData with expected criteria when Jump to Page is changed', function () {
    var _renderUtils5 = renderUtils,
        getByLabelText = _renderUtils5.getByLabelText;
    var input = getByLabelText(/Jump to Page/);
    var jumpToPage = 4;
    input.value = jumpToPage;
    var actual = {
      pageCount: pageCount,
      pageIndex: jumpToPage - 1,
      pageSize: 5,
      sortBy: []
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
  it('should invoke fetchData with expected criteria when column header First Name is clicked', function () {
    var _renderUtils6 = renderUtils,
        getByText = _renderUtils6.getByText;

    _react2.fireEvent.click(getByText('First Name'));

    var actual = {
      pageCount: pageCount,
      pageIndex: pageIndex,
      pageSize: pageSize,
      sortBy: [{
        desc: false,
        id: 'firstName'
      }]
    };
    expect(fetchData).toHaveBeenCalledWith(actual);

    _react2.fireEvent.click(getByText('First Name'));

    actual = {
      pageCount: pageCount,
      pageIndex: pageIndex,
      pageSize: pageSize,
      sortBy: [{
        desc: true,
        id: 'firstName'
      }]
    };
    expect(fetchData).toHaveBeenCalledWith(actual);

    _react2.fireEvent.click(getByText('First Name'));

    actual = {
      pageCount: pageCount,
      pageIndex: pageIndex,
      pageSize: pageSize,
      sortBy: []
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
});