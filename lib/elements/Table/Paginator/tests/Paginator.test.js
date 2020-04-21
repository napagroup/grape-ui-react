"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

var _reactSelectEvent = _interopRequireDefault(require("react-select-event"));

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("..");

var _utils = require("../../utils");

describe('Paginator - form values', () => {
  let renderUtils;
  it('should be set with default form values', () => {
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paginator, null)));
    const _renderUtils = renderUtils,
          getByRole = _renderUtils.getByRole;
    expect(getByRole('form')).toHaveFormValues({
      jumpToPage: 1,
      selectedPageOption: _utils.defaultPageOptions[0].toString()
    });
  });
  it('should be set with form values defined from props', () => {
    const pageCount = 10;
    const pageIndex = 3;
    const pageOptions = [5, 10, 15];
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paginator, {
      pageCount: pageCount,
      pageIndex: pageIndex,
      pageOptions: pageOptions,
      pageSize: pageOptions[0]
    })));
    const _renderUtils2 = renderUtils,
          getByRole = _renderUtils2.getByRole;
    expect(getByRole('form')).toHaveFormValues({
      jumpToPage: pageIndex + 1,
      selectedPageOption: pageOptions[0].toString()
    });
  });
});
describe('Paginator - page navigation', () => {
  let renderUtils;
  let gotoPage;
  let gotoPreviousPage;
  let gotoNextPage;
  describe('when canPreviousPage is true', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      gotoPage = jest.fn();
      gotoPreviousPage = jest.fn();
      gotoNextPage = jest.fn();
      renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(_.Paginator, {
        canPreviousPage: true,
        gotoPage: gotoPage,
        nextPage: gotoNextPage,
        previousPage: gotoPreviousPage,
        showSkipButtons: true
      })));
    });
    it('should invoke gotoPage to first page when skip to first page button is clicked', () => {
      const _renderUtils3 = renderUtils,
            queryByTestId = _renderUtils3.queryByTestId;

      _react2.fireEvent.click(queryByTestId('gotoFirstPage'));

      expect(gotoPage).toHaveBeenCalledWith(0);
    });
    it('should invoke previousPage when previous page button is clicked', () => {
      const _renderUtils4 = renderUtils,
            queryByTestId = _renderUtils4.queryByTestId;

      _react2.fireEvent.click(queryByTestId('gotoPreviousPage'));

      expect(gotoPreviousPage).toHaveBeenCalled();
    });
    it('should not invoke nextPage when next page button is clicked', () => {
      const _renderUtils5 = renderUtils,
            queryByTestId = _renderUtils5.queryByTestId;
      expect(queryByTestId('gotoNextPage')).toBeDisabled();

      _react2.fireEvent.click(queryByTestId('gotoNextPage'));

      expect(gotoNextPage).toHaveBeenCalledTimes(0);
    });
    it('should not invoke gotoPage when skip to last page button is clicked', () => {
      const _renderUtils6 = renderUtils,
            queryByTestId = _renderUtils6.queryByTestId;
      expect(queryByTestId('gotoLastPage')).toBeDisabled();

      _react2.fireEvent.click(queryByTestId('gotoLastPage'));

      expect(gotoPage).toHaveBeenCalledTimes(0);
    });
  });
  describe('when canNextPage is true', () => {
    const pageCount = 14;
    beforeEach(() => {
      jest.clearAllMocks();
      gotoPage = jest.fn();
      gotoPreviousPage = jest.fn();
      gotoNextPage = jest.fn();
      renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(_.Paginator, {
        canNextPage: true,
        gotoPage: gotoPage,
        nextPage: gotoNextPage,
        pageCount: pageCount,
        previousPage: gotoPreviousPage,
        showSkipButtons: true
      })));
    });
    it('should not invoke gotoPage to first page when skip to first page button is clicked', () => {
      const _renderUtils7 = renderUtils,
            queryByTestId = _renderUtils7.queryByTestId;
      expect(queryByTestId('gotoFirstPage')).toBeDisabled();

      _react2.fireEvent.click(queryByTestId('gotoFirstPage'));

      expect(gotoPage).toHaveBeenCalledTimes(0);
    });
    it('should not invoke previousPage when previous page button is clicked', () => {
      const _renderUtils8 = renderUtils,
            queryByTestId = _renderUtils8.queryByTestId;
      expect(queryByTestId('gotoPreviousPage')).toBeDisabled();

      _react2.fireEvent.click(queryByTestId('gotoPreviousPage'));

      expect(gotoPreviousPage).toHaveBeenCalledTimes(0);
    });
    it('should invoke nextPage when next page button is clicked', () => {
      const _renderUtils9 = renderUtils,
            queryByTestId = _renderUtils9.queryByTestId;

      _react2.fireEvent.click(queryByTestId('gotoNextPage'));

      expect(gotoNextPage).toHaveBeenCalledTimes(1);
    });
    it('should invoke gotoPage to last page when skip to last page button is clicked', () => {
      const _renderUtils10 = renderUtils,
            queryByTestId = _renderUtils10.queryByTestId;

      _react2.fireEvent.click(queryByTestId('gotoLastPage'));

      expect(gotoPage).toHaveBeenCalledTimes(1);
      expect(gotoPage).toHaveBeenCalledWith(pageCount - 1);
    });
  });
  describe('when showSkipButtons are false', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      gotoPage = jest.fn();
      gotoPreviousPage = jest.fn();
      gotoNextPage = jest.fn();
      renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(_.Paginator, {
        gotoPage: gotoPage,
        nextPage: gotoNextPage,
        previousPage: gotoPreviousPage
      })));
    });
    it('should not have the skip to first or last buttons present', () => {
      const _renderUtils11 = renderUtils,
            container = _renderUtils11.container,
            queryByTestId = _renderUtils11.queryByTestId;
      expect(container).not.toContainElement(queryByTestId('gotoFirstPage'));
      expect(container).toContainElement(queryByTestId('gotoPreviousPage'));
      expect(container).toContainElement(queryByTestId('gotoNextPage'));
      expect(container).not.toContainElement(queryByTestId('gotoLastPage'));
    });
  });
  describe('when page jumping', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      gotoPage = jest.fn();
      gotoPreviousPage = jest.fn();
      gotoNextPage = jest.fn();
      renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(_.Paginator, {
        gotoPage: gotoPage,
        nextPage: gotoNextPage,
        previousPage: gotoPreviousPage
      })));
    });
    it('should invoke gotoPage when given an indicated page to jump to', () => {
      const _renderUtils12 = renderUtils,
            getByLabelText = _renderUtils12.getByLabelText,
            getByRole = _renderUtils12.getByRole;
      const input = getByLabelText(/Jump to Page/);
      const actual = 5;
      input.value = actual;
      expect(getByRole('form')).toHaveFormValues({
        jumpToPage: actual,
        selectedPageOption: _utils.defaultPageOptions[0].toString()
      });
    });
  });
});
describe('Paginator - page captions', () => {
  const getCaptionForPage = pageVm => {
    var _context;

    const pageCount = pageVm.pageCount,
          pageIndex = pageVm.pageIndex;
    return (0, _concat.default)(_context = "Page ".concat(pageIndex + 1, " of ")).call(_context, pageCount);
  };

  const pageCount = 10;
  const pageIndex = 0;
  const pageOptions = [5, 10, 15];
  it('should return correct page stats given pageCount and pageIndex', () => {
    const renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paginator, {
      pageCount: pageCount,
      pageIndex: pageIndex,
      pageOptions: pageOptions,
      pageSize: pageOptions[0]
    })));
    const container = renderUtils.container,
          getByText = renderUtils.getByText;
    const caption = getCaptionForPage({
      pageCount,
      pageIndex
    });
    expect(container).toContainElement(getByText(caption));
  });
});
describe('Paginator - page size', () => {
  let setPageSize;
  let renderUtils;
  const pageOptions = [7, 14, 28];
  const pageSize = pageOptions[0];
  beforeEach(() => {
    jest.clearAllMocks();
    setPageSize = jest.fn();
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paginator, {
      pageOptions: pageOptions,
      pageSize: pageSize,
      setPageSize: setPageSize
    })));
  });
  it('should set new page size on change', /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var _renderUtils13, getByLabelText, getByRole, nextPageSize;

    return _regenerator.default.wrap(function _callee$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _renderUtils13 = renderUtils, getByLabelText = _renderUtils13.getByLabelText, getByRole = _renderUtils13.getByRole;
          nextPageSize = pageOptions[2];
          _context2.next = 4;
          return _reactSelectEvent.default.select(getByLabelText('Rows Per Page'), ["Show ".concat(nextPageSize)]);

        case 4:
          expect(getByRole('form')).toHaveFormValues({
            jumpToPage: 1,
            selectedPageOption: pageOptions[2].toString()
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee);
  })));
  it('should invoke setPageSize when a pageOption is selected', /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var _renderUtils14, getByLabelText, nextPageSize;

    return _regenerator.default.wrap(function _callee2$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _renderUtils14 = renderUtils, getByLabelText = _renderUtils14.getByLabelText;
          nextPageSize = pageOptions[1];
          _context3.next = 4;
          return _reactSelectEvent.default.select(getByLabelText('Rows Per Page'), ["Show ".concat(nextPageSize)]);

        case 4:
          expect(setPageSize).toHaveBeenCalledWith(nextPageSize);

        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee2);
  })));
});