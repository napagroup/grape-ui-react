"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

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
    const {
      getByRole
    } = renderUtils;
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
    const {
      getByRole
    } = renderUtils;
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
      const {
        queryByTestId
      } = renderUtils;

      _react2.fireEvent.click(queryByTestId('gotoFirstPage'));

      expect(gotoPage).toHaveBeenCalledWith(0);
    });
    it('should invoke previousPage when previous page button is clicked', () => {
      const {
        queryByTestId
      } = renderUtils;

      _react2.fireEvent.click(queryByTestId('gotoPreviousPage'));

      expect(gotoPreviousPage).toHaveBeenCalled();
    });
    it('should not invoke nextPage when next page button is clicked', () => {
      const {
        queryByTestId
      } = renderUtils;
      expect(queryByTestId('gotoNextPage')).toBeDisabled();

      _react2.fireEvent.click(queryByTestId('gotoNextPage'));

      expect(gotoNextPage).toHaveBeenCalledTimes(0);
    });
    it('should not invoke gotoPage when skip to last page button is clicked', () => {
      const {
        queryByTestId
      } = renderUtils;
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
      const {
        queryByTestId
      } = renderUtils;
      expect(queryByTestId('gotoFirstPage')).toBeDisabled();

      _react2.fireEvent.click(queryByTestId('gotoFirstPage'));

      expect(gotoPage).toHaveBeenCalledTimes(0);
    });
    it('should not invoke previousPage when previous page button is clicked', () => {
      const {
        queryByTestId
      } = renderUtils;
      expect(queryByTestId('gotoPreviousPage')).toBeDisabled();

      _react2.fireEvent.click(queryByTestId('gotoPreviousPage'));

      expect(gotoPreviousPage).toHaveBeenCalledTimes(0);
    });
    it('should invoke nextPage when next page button is clicked', () => {
      const {
        queryByTestId
      } = renderUtils;

      _react2.fireEvent.click(queryByTestId('gotoNextPage'));

      expect(gotoNextPage).toHaveBeenCalledTimes(1);
    });
    it('should invoke gotoPage to last page when skip to last page button is clicked', () => {
      const {
        queryByTestId
      } = renderUtils;

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
      const {
        container,
        queryByTestId
      } = renderUtils;
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
      const {
        getByLabelText,
        getByRole
      } = renderUtils;
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
    const {
      pageCount,
      pageIndex
    } = pageVm;
    return `Page ${pageIndex + 1} of ${pageCount}`;
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
    const {
      container,
      getByText
    } = renderUtils;
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
  it('should set new page size on change', async () => {
    const {
      getByLabelText,
      getByRole
    } = renderUtils;
    const nextPageSize = pageOptions[2];
    await _reactSelectEvent.default.select(getByLabelText('Rows Per Page'), [`Show ${nextPageSize}`]);
    expect(getByRole('form')).toHaveFormValues({
      jumpToPage: 1,
      selectedPageOption: pageOptions[2].toString()
    });
  });
  it('should invoke setPageSize when a pageOption is selected', async () => {
    const {
      getByLabelText
    } = renderUtils;
    const nextPageSize = pageOptions[1];
    await _reactSelectEvent.default.select(getByLabelText('Rows Per Page'), [`Show ${nextPageSize}`]);
    expect(setPageSize).toHaveBeenCalledWith(nextPageSize);
  });
});