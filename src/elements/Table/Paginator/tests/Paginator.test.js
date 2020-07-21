import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import selectEvent from 'react-select-event';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Paginator } from '..';
import { defaultPageOptions } from '../../utils';

describe('Paginator - form values', () => {
  let renderUtils;
  it('should be set with default form values', () => {
    renderUtils = render(
      <ThemeProvider theme={{}}>
        <Paginator />
      </ThemeProvider>
    );
    const { getByRole } = renderUtils;
    expect(getByRole('form')).toHaveFormValues({
      jumpToPage: 1,
      selectedPageOption: defaultPageOptions[0].toString(),
    });
  });
  it('should be set with form values defined from props', () => {
    const pageCount = 10;
    const pageIndex = 3;
    const pageOptions = [5, 10, 15];
    renderUtils = render(
      <ThemeProvider theme={{}}>
        <Paginator
          pageCount={pageCount}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
          pageSize={pageOptions[0]}
        />
      </ThemeProvider>
    );
    const { getByRole } = renderUtils;
    expect(getByRole('form')).toHaveFormValues({
      jumpToPage: pageIndex + 1,
      selectedPageOption: pageOptions[0].toString(),
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
      renderUtils = render(
        <ThemeProvider theme={{}}>
          <Paginator
            canPreviousPage
            gotoPage={gotoPage}
            nextPage={gotoNextPage}
            previousPage={gotoPreviousPage}
            showSkipButtons
          />
        </ThemeProvider>
      );
    });
    it('should invoke gotoPage to first page when skip to first page button is clicked', () => {
      const { queryByTestId } = renderUtils;
      fireEvent.click(queryByTestId('gotoFirstPage'));
      expect(gotoPage).toHaveBeenCalledWith(0);
    });
    it('should invoke previousPage when previous page button is clicked', () => {
      const { queryByTestId } = renderUtils;
      fireEvent.click(queryByTestId('gotoPreviousPage'));
      expect(gotoPreviousPage).toHaveBeenCalled();
    });
    it('should not invoke nextPage when next page button is clicked', () => {
      const { queryByTestId } = renderUtils;
      expect(queryByTestId('gotoNextPage')).toBeDisabled();
      fireEvent.click(queryByTestId('gotoNextPage'));
      expect(gotoNextPage).toHaveBeenCalledTimes(0);
    });
    it('should not invoke gotoPage when skip to last page button is clicked', () => {
      const { queryByTestId } = renderUtils;
      expect(queryByTestId('gotoLastPage')).toBeDisabled();
      fireEvent.click(queryByTestId('gotoLastPage'));
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
      renderUtils = render(
        <ThemeProvider theme={{}}>
          <Paginator
            canNextPage
            gotoPage={gotoPage}
            nextPage={gotoNextPage}
            pageCount={pageCount}
            previousPage={gotoPreviousPage}
            showSkipButtons
          />
        </ThemeProvider>
      );
    });
    it('should not invoke gotoPage to first page when skip to first page button is clicked', () => {
      const { queryByTestId } = renderUtils;
      expect(queryByTestId('gotoFirstPage')).toBeDisabled();
      fireEvent.click(queryByTestId('gotoFirstPage'));
      expect(gotoPage).toHaveBeenCalledTimes(0);
    });
    it('should not invoke previousPage when previous page button is clicked', () => {
      const { queryByTestId } = renderUtils;
      expect(queryByTestId('gotoPreviousPage')).toBeDisabled();
      fireEvent.click(queryByTestId('gotoPreviousPage'));
      expect(gotoPreviousPage).toHaveBeenCalledTimes(0);
    });
    it('should invoke nextPage when next page button is clicked', () => {
      const { queryByTestId } = renderUtils;
      fireEvent.click(queryByTestId('gotoNextPage'));
      expect(gotoNextPage).toHaveBeenCalledTimes(1);
    });
    it('should invoke gotoPage to last page when skip to last page button is clicked', () => {
      const { queryByTestId } = renderUtils;
      fireEvent.click(queryByTestId('gotoLastPage'));
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
      renderUtils = render(
        <ThemeProvider theme={{}}>
          <Paginator
            gotoPage={gotoPage}
            nextPage={gotoNextPage}
            previousPage={gotoPreviousPage}
          />
        </ThemeProvider>
      );
    });
    it('should not have the skip to first or last buttons present', () => {
      const { container, queryByTestId } = renderUtils;
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
      renderUtils = render(
        <ThemeProvider theme={{}}>
          <Paginator
            gotoPage={gotoPage}
            nextPage={gotoNextPage}
            previousPage={gotoPreviousPage}
          />
        </ThemeProvider>
      );
    });
    it('should invoke gotoPage when given an indicated page to jump to', () => {
      const { getByLabelText, getByRole } = renderUtils;
      const input = getByLabelText(/Jump to Page/);
      const actual = 5;
      input.value = actual;
      expect(getByRole('form')).toHaveFormValues({
        jumpToPage: actual,
        selectedPageOption: defaultPageOptions[0].toString(),
      });
    });
  });
});

describe('Paginator - page captions', () => {
  const getCaptionForPage = pageVm => {
    const { pageCount, pageIndex } = pageVm;
    return `Page ${pageIndex + 1} of ${pageCount}`;
  };
  const pageCount = 10;
  const pageIndex = 0;
  const pageOptions = [5, 10, 15];
  it('should return correct page stats given pageCount and pageIndex', () => {
    const renderUtils = render(
      <ThemeProvider theme={{}}>
        <Paginator
          pageCount={pageCount}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
          pageSize={pageOptions[0]}
        />
      </ThemeProvider>
    );

    const { container, getByText } = renderUtils;
    const caption = getCaptionForPage({ pageCount, pageIndex });
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
    renderUtils = render(
      <ThemeProvider theme={{}}>
        <Paginator
          pageOptions={pageOptions}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </ThemeProvider>
    );
  });
  it('should set new page size on change', async () => {
    const { getByLabelText, getByRole } = renderUtils;
    const nextPageSize = pageOptions[2];
    await selectEvent.select(getByLabelText('Rows Per Page'), [`Show ${nextPageSize}`]);
    expect(getByRole('form')).toHaveFormValues({
      jumpToPage: 1,
      selectedPageOption: pageOptions[2].toString(),
    });
  });
  it('should invoke setPageSize when a pageOption is selected', async () => {
    const { getByLabelText } = renderUtils;
    const nextPageSize = pageOptions[1];
    await selectEvent.select(getByLabelText('Rows Per Page'), [`Show ${nextPageSize}`]);
    expect(setPageSize).toHaveBeenCalledWith(nextPageSize);
  });
});
