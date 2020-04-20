import "core-js/modules/es.date.to-string";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime-corejs3/helpers/asyncToGenerator";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import selectEvent from 'react-select-event';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Paginator } from '..';
import { defaultPageOptions } from '../../utils';
describe('Paginator - form values', function () {
  var renderUtils;
  it('should be set with default form values', function () {
    renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paginator, null)));
    var _renderUtils = renderUtils,
        getByRole = _renderUtils.getByRole;
    expect(getByRole('form')).toHaveFormValues({
      jumpToPage: 1,
      selectedPageOption: defaultPageOptions[0].toString()
    });
  });
  it('should be set with form values defined from props', function () {
    var pageCount = 10;
    var pageIndex = 3;
    var pageOptions = [5, 10, 15];
    renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paginator, {
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
      renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/React.createElement(Paginator, {
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
      fireEvent.click(queryByTestId('gotoFirstPage'));
      expect(gotoPage).toHaveBeenCalledWith(0);
    });
    it('should invoke previousPage when previous page button is clicked', function () {
      var _renderUtils4 = renderUtils,
          queryByTestId = _renderUtils4.queryByTestId;
      fireEvent.click(queryByTestId('gotoPreviousPage'));
      expect(gotoPreviousPage).toHaveBeenCalled();
    });
    it('should not invoke nextPage when next page button is clicked', function () {
      var _renderUtils5 = renderUtils,
          queryByTestId = _renderUtils5.queryByTestId;
      expect(queryByTestId('gotoNextPage')).toBeDisabled();
      fireEvent.click(queryByTestId('gotoNextPage'));
      expect(gotoNextPage).toHaveBeenCalledTimes(0);
    });
    it('should not invoke gotoPage when skip to last page button is clicked', function () {
      var _renderUtils6 = renderUtils,
          queryByTestId = _renderUtils6.queryByTestId;
      expect(queryByTestId('gotoLastPage')).toBeDisabled();
      fireEvent.click(queryByTestId('gotoLastPage'));
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
      renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/React.createElement(Paginator, {
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
      fireEvent.click(queryByTestId('gotoFirstPage'));
      expect(gotoPage).toHaveBeenCalledTimes(0);
    });
    it('should not invoke previousPage when previous page button is clicked', function () {
      var _renderUtils8 = renderUtils,
          queryByTestId = _renderUtils8.queryByTestId;
      expect(queryByTestId('gotoPreviousPage')).toBeDisabled();
      fireEvent.click(queryByTestId('gotoPreviousPage'));
      expect(gotoPreviousPage).toHaveBeenCalledTimes(0);
    });
    it('should invoke nextPage when next page button is clicked', function () {
      var _renderUtils9 = renderUtils,
          queryByTestId = _renderUtils9.queryByTestId;
      fireEvent.click(queryByTestId('gotoNextPage'));
      expect(gotoNextPage).toHaveBeenCalledTimes(1);
    });
    it('should invoke gotoPage to last page when skip to last page button is clicked', function () {
      var _renderUtils10 = renderUtils,
          queryByTestId = _renderUtils10.queryByTestId;
      fireEvent.click(queryByTestId('gotoLastPage'));
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
      renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/React.createElement(Paginator, {
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
      renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/React.createElement(Paginator, {
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
        selectedPageOption: defaultPageOptions[0].toString()
      });
    });
  });
});
describe('Paginator - page captions', function () {
  var getCaptionForPage = function getCaptionForPage(pageVm) {
    var _context;

    var pageCount = pageVm.pageCount,
        pageIndex = pageVm.pageIndex;
    return _concatInstanceProperty(_context = "Page ".concat(pageIndex + 1, " of ")).call(_context, pageCount);
  };

  var pageCount = 10;
  var pageIndex = 0;
  var pageOptions = [5, 10, 15];
  it('should return correct page stats given pageCount and pageIndex', function () {
    var renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paginator, {
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
  var setPageSize;
  var renderUtils;
  var pageOptions = [7, 14, 28];
  var pageSize = pageOptions[0];
  beforeEach(function () {
    jest.clearAllMocks();
    setPageSize = jest.fn();
    renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paginator, {
      pageOptions: pageOptions,
      pageSize: pageSize,
      setPageSize: setPageSize
    })));
  });
  it('should set new page size on change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var _renderUtils13, getByLabelText, getByRole, nextPageSize;

    return _regeneratorRuntime.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _renderUtils13 = renderUtils, getByLabelText = _renderUtils13.getByLabelText, getByRole = _renderUtils13.getByRole;
            nextPageSize = pageOptions[2];
            _context2.next = 4;
            return selectEvent.select(getByLabelText('Rows Per Page'), ["Show ".concat(nextPageSize)]);

          case 4:
            expect(getByRole('form')).toHaveFormValues({
              jumpToPage: 1,
              selectedPageOption: pageOptions[2].toString()
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  })));
  it('should invoke setPageSize when a pageOption is selected', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var _renderUtils14, getByLabelText, nextPageSize;

    return _regeneratorRuntime.wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _renderUtils14 = renderUtils, getByLabelText = _renderUtils14.getByLabelText;
            nextPageSize = pageOptions[1];
            _context3.next = 4;
            return selectEvent.select(getByLabelText('Rows Per Page'), ["Show ".concat(nextPageSize)]);

          case 4:
            expect(setPageSize).toHaveBeenCalledWith(nextPageSize);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2);
  })));
});