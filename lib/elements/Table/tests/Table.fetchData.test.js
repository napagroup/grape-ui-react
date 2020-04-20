import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Table } from '..';
import { columns } from './utils';
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
    renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Table, {
      columns: columns,
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
    fireEvent.click(queryByTestId('gotoFirstPage'));
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
    fireEvent.click(queryByTestId('gotoPreviousPage'));
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
    fireEvent.click(queryByTestId('gotoNextPage'));
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
    fireEvent.click(queryByTestId('gotoLastPage'));
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
    fireEvent.click(getByText('First Name'));
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
    fireEvent.click(getByText('First Name'));
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
    fireEvent.click(getByText('First Name'));
    actual = {
      pageCount: pageCount,
      pageIndex: pageIndex,
      pageSize: pageSize,
      sortBy: []
    };
    expect(fetchData).toHaveBeenCalledWith(actual);
  });
});