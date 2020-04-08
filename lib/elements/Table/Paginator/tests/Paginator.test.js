"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

require("regenerator-runtime/runtime");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

var _reactSelectEvent = _interopRequireDefault(require("react-select-event"));

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("..");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('Paginator - form values', function () {
  var renderUtils;
  it('should be set with default form values', function () {
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paginator, null)));
    var _renderUtils = renderUtils,
        getByRole = _renderUtils.getByRole;
    expect(getByRole('form')).toHaveFormValues({
      jumpToPage: 1,
      selectedPageOption: _utils.defaultPageOptions[0].toString()
    });
  });
  it('should be set with form values defined from props', function () {
    var pageCount = 10;
    var pageIndex = 3;
    var pageOptions = [5, 10, 15];
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paginator, {
      pageCount: pageCount,
      pageIndex: pageIndex,
      pageOptions: pageOptions,
      pageSize: pageOptions[0]
    })));
    var _renderUtils2 = renderUtils,
        getByRole = _renderUtils2.getByRole;
    expect(getByRole('form')).toHaveFormValues({
      jumpToPage: pageIndex + 1,
      selectedPageOption: pageOptions[0].toString()
    });
  });
});
describe('Paginator - page navigation', function () {
  var renderUtils;
  var gotoPage;
  var gotoPreviousPage;
  var gotoNextPage;
  describe('when canPreviousPage is true', function () {
    beforeEach(function () {
      jest.clearAllMocks();
      gotoPage = jest.fn();
      gotoPreviousPage = jest.fn();
      gotoNextPage = jest.fn();
      renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react["default"].createElement(_.Paginator, {
        canPreviousPage: true,
        gotoPage: gotoPage,
        nextPage: gotoNextPage,
        previousPage: gotoPreviousPage,
        showSkipButtons: true
      })));
    });
    it('should invoke gotoPage to first page when skip to first page button is clicked', function () {
      var _renderUtils3 = renderUtils,
          queryByTestId = _renderUtils3.queryByTestId;

      _react2.fireEvent.click(queryByTestId('gotoFirstPage'));

      expect(gotoPage).toHaveBeenCalledWith(0);
    });
    it('should invoke previousPage when previous page button is clicked', function () {
      var _renderUtils4 = renderUtils,
          queryByTestId = _renderUtils4.queryByTestId;

      _react2.fireEvent.click(queryByTestId('gotoPreviousPage'));

      expect(gotoPreviousPage).toHaveBeenCalled();
    });
    it('should not invoke nextPage when next page button is clicked', function () {
      var _renderUtils5 = renderUtils,
          queryByTestId = _renderUtils5.queryByTestId;
      expect(queryByTestId('gotoNextPage')).toBeDisabled();

      _react2.fireEvent.click(queryByTestId('gotoNextPage'));

      expect(gotoNextPage).toHaveBeenCalledTimes(0);
    });
    it('should not invoke gotoPage when skip to last page button is clicked', function () {
      var _renderUtils6 = renderUtils,
          queryByTestId = _renderUtils6.queryByTestId;
      expect(queryByTestId('gotoLastPage')).toBeDisabled();

      _react2.fireEvent.click(queryByTestId('gotoLastPage'));

      expect(gotoPage).toHaveBeenCalledTimes(0);
    });
  });
  describe('when canNextPage is true', function () {
    var pageCount = 14;
    beforeEach(function () {
      jest.clearAllMocks();
      gotoPage = jest.fn();
      gotoPreviousPage = jest.fn();
      gotoNextPage = jest.fn();
      renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react["default"].createElement(_.Paginator, {
        canNextPage: true,
        gotoPage: gotoPage,
        nextPage: gotoNextPage,
        pageCount: pageCount,
        previousPage: gotoPreviousPage,
        showSkipButtons: true
      })));
    });
    it('should not invoke gotoPage to first page when skip to first page button is clicked', function () {
      var _renderUtils7 = renderUtils,
          queryByTestId = _renderUtils7.queryByTestId;
      expect(queryByTestId('gotoFirstPage')).toBeDisabled();

      _react2.fireEvent.click(queryByTestId('gotoFirstPage'));

      expect(gotoPage).toHaveBeenCalledTimes(0);
    });
    it('should not invoke previousPage when previous page button is clicked', function () {
      var _renderUtils8 = renderUtils,
          queryByTestId = _renderUtils8.queryByTestId;
      expect(queryByTestId('gotoPreviousPage')).toBeDisabled();

      _react2.fireEvent.click(queryByTestId('gotoPreviousPage'));

      expect(gotoPreviousPage).toHaveBeenCalledTimes(0);
    });
    it('should invoke nextPage when next page button is clicked', function () {
      var _renderUtils9 = renderUtils,
          queryByTestId = _renderUtils9.queryByTestId;

      _react2.fireEvent.click(queryByTestId('gotoNextPage'));

      expect(gotoNextPage).toHaveBeenCalledTimes(1);
    });
    it('should invoke gotoPage to last page when skip to last page button is clicked', function () {
      var _renderUtils10 = renderUtils,
          queryByTestId = _renderUtils10.queryByTestId;

      _react2.fireEvent.click(queryByTestId('gotoLastPage'));

      expect(gotoPage).toHaveBeenCalledTimes(1);
      expect(gotoPage).toHaveBeenCalledWith(pageCount - 1);
    });
  });
  describe('when showSkipButtons are false', function () {
    beforeEach(function () {
      jest.clearAllMocks();
      gotoPage = jest.fn();
      gotoPreviousPage = jest.fn();
      gotoNextPage = jest.fn();
      renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react["default"].createElement(_.Paginator, {
        gotoPage: gotoPage,
        nextPage: gotoNextPage,
        previousPage: gotoPreviousPage
      })));
    });
    it('should not have the skip to first or last buttons present', function () {
      var _renderUtils11 = renderUtils,
          container = _renderUtils11.container,
          queryByTestId = _renderUtils11.queryByTestId;
      expect(container).not.toContainElement(queryByTestId('gotoFirstPage'));
      expect(container).toContainElement(queryByTestId('gotoPreviousPage'));
      expect(container).toContainElement(queryByTestId('gotoNextPage'));
      expect(container).not.toContainElement(queryByTestId('gotoLastPage'));
    });
  });
  describe('when page jumping', function () {
    beforeEach(function () {
      jest.clearAllMocks();
      gotoPage = jest.fn();
      gotoPreviousPage = jest.fn();
      gotoNextPage = jest.fn();
      renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react["default"].createElement(_.Paginator, {
        gotoPage: gotoPage,
        nextPage: gotoNextPage,
        previousPage: gotoPreviousPage
      })));
    });
    it('should invoke gotoPage when given an indicated page to jump to', function () {
      var _renderUtils12 = renderUtils,
          getByLabelText = _renderUtils12.getByLabelText,
          getByRole = _renderUtils12.getByRole;
      var input = getByLabelText(/Jump to Page/);
      var actual = 5;
      input.value = actual;
      expect(getByRole('form')).toHaveFormValues({
        jumpToPage: actual,
        selectedPageOption: _utils.defaultPageOptions[0].toString()
      });
    });
  });
});
describe('Paginator - page captions', function () {
  var getCaptionForPage = function getCaptionForPage(pageVm) {
    var pageCount = pageVm.pageCount,
        pageIndex = pageVm.pageIndex;
    return "Page ".concat(pageIndex + 1, " of ").concat(pageCount);
  };

  var pageCount = 10;
  var pageIndex = 0;
  var pageOptions = [5, 10, 15];
  it('should return correct page stats given pageCount and pageIndex', function () {
    var renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paginator, {
      pageCount: pageCount,
      pageIndex: pageIndex,
      pageOptions: pageOptions,
      pageSize: pageOptions[0]
    })));
    var container = renderUtils.container,
        getByText = renderUtils.getByText;
    var caption = getCaptionForPage({
      pageCount: pageCount,
      pageIndex: pageIndex
    });
    expect(container).toContainElement(getByText(caption));
  });
});
describe('Paginator - page size', function () {
  var renderUtils;
  beforeEach(function () {
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paginator, null)));
  }); // TODO: Attempt to restore test once react-select is upgraded. Possibly fails due to current version of react-select library.

  test.skip('should set new page size on change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _renderUtils13, getByLabelText, getByRole;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _renderUtils13 = renderUtils, getByLabelText = _renderUtils13.getByLabelText, getByRole = _renderUtils13.getByRole;
            _context.next = 3;
            return _reactSelectEvent["default"].select(getByLabelText('Rows Per Page'), [{
              value: _utils.defaultPageOptions[2]
            }]);

          case 3:
            expect(getByRole('form')).toHaveFormValues({
              jumpToPage: 1,
              selectedPageOption: _utils.defaultPageOptions[2].toString()
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test.skip('should invoke setPageSize when a pageOption is selected', function () {});
});