import _slicedToArray from "@babel/runtime-corejs3/helpers/slicedToArray";
import _toConsumableArray from "@babel/runtime-corejs3/helpers/toConsumableArray";

/* eslint-disable react/prop-types */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Table } from '..';
import { columns, testData } from './utils';
describe('Table - initially defined hiddenColumns', function () {
  var renderUtils;
  var pageOptions = [5, 10, 15];

  var data = _toConsumableArray(testData);

  beforeEach(function () {
    renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Table, {
      columns: _toConsumableArray(columns),
      data: data,
      hiddenColumns: ['age'],
      pageOptions: pageOptions,
      pageSize: pageOptions[0]
    })));
  });
  it('should have the indicated columns not visible', function () {
    var _renderUtils = renderUtils,
        container = _renderUtils.container,
        queryByTitle = _renderUtils.queryByTitle;
    expect(container).toContainElement(queryByTitle('test-first-name-column'));
    expect(container).toContainElement(queryByTitle('test-last-name-column'));
    expect(container).not.toContainElement(queryByTitle('test-info-column'));
    expect(container).not.toContainElement(queryByTitle('test-age-column'));
  });
});
describe('Table - showToggleHideColumns set to false', function () {
  var renderUtils;
  var pageOptions = [5, 10, 15];

  var data = _toConsumableArray(testData);

  beforeEach(function () {
    renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Table, {
      columns: _toConsumableArray(columns),
      data: data,
      pageOptions: pageOptions,
      pageSize: pageOptions[0]
    })));
  });
  it('should have all hide toggle controls not present', function () {
    var _renderUtils2 = renderUtils,
        container = _renderUtils2.container,
        queryByLabelText = _renderUtils2.queryByLabelText;
    expect(container).not.toContainElement(queryByLabelText('All'));
    expect(container).not.toContainElement(queryByLabelText('First Name'));
    expect(container).not.toContainElement(queryByLabelText('Last Name'));
    expect(container).not.toContainElement(queryByLabelText('Age'));
  });
});
describe('Table - showToggleHideColumns set to true with no hiddenColumns defined', function () {
  var renderUtils;
  var pageOptions = [5, 10, 15];

  var data = _toConsumableArray(testData);

  beforeEach(function () {
    renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Table, {
      columns: _toConsumableArray(columns),
      data: data,
      pageOptions: pageOptions,
      pageSize: pageOptions[0],
      showToggleHideColumns: true
    })));
  });
  it('should have all hide toggle controls present', function () {
    var _renderUtils3 = renderUtils,
        container = _renderUtils3.container,
        queryByLabelText = _renderUtils3.queryByLabelText;
    var inputAll = queryByLabelText('All');
    var inputFirstName = queryByLabelText('First Name');
    var inputLastName = queryByLabelText('Last Name');
    var inputAge = queryByLabelText('Age');
    expect(container).toContainElement(inputAll);
    expect(container).toContainElement(inputFirstName);
    expect(container).toContainElement(inputLastName);
    expect(container).toContainElement(inputAge);
  });
  it('should have hide toggle controls in their appropriate checked state, initially defined by hiddenColumns', function () {
    var _renderUtils4 = renderUtils,
        queryByLabelText = _renderUtils4.queryByLabelText;
    var inputAll = queryByLabelText('All');
    var inputFirstName = queryByLabelText('First Name');
    var inputLastName = queryByLabelText('Last Name');
    var inputAge = queryByLabelText('Age');
    var expected = {
      age: true,
      all: true,
      firstName: true,
      lastName: true
    };
    expect({
      age: inputAge.checked,
      all: inputAll.checked,
      firstName: inputFirstName.checked,
      lastName: inputLastName.checked
    }).toEqual(expected);
  });
});
describe('Table - showToggleHideColumns is true with hiddenColumns', function () {
  var renderUtils;
  var pageOptions = [5, 10, 15];

  var data = _toConsumableArray(testData);

  beforeEach(function () {
    renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Table, {
      columns: _toConsumableArray(columns),
      data: data,
      hiddenColumns: ['age', 'lastName'],
      pageOptions: pageOptions,
      pageSize: pageOptions[0],
      showToggleHideColumns: true
    })));
  });
  it('should have all hide toggle controls', function () {
    var _renderUtils5 = renderUtils,
        container = _renderUtils5.container,
        queryByLabelText = _renderUtils5.queryByLabelText;
    var inputAll = queryByLabelText('All');
    var inputFirstName = queryByLabelText('First Name');
    var inputLastName = queryByLabelText('Last Name');
    var inputAge = queryByLabelText('Age');
    expect(container).toContainElement(inputAll);
    expect(container).toContainElement(inputFirstName);
    expect(container).toContainElement(inputLastName);
    expect(container).toContainElement(inputAge);
  });
  it('should have hide toggle controls in their appropriate checked state', function () {
    var _renderUtils6 = renderUtils,
        queryByLabelText = _renderUtils6.queryByLabelText;
    var inputAll = queryByLabelText('All');
    var inputFirstName = queryByLabelText('First Name');
    var inputLastName = queryByLabelText('Last Name');
    var inputAge = queryByLabelText('Age');
    var expected = {
      age: false,
      all: false,
      firstName: true,
      lastName: false
    };
    expect({
      age: inputAge.checked,
      all: inputAll.checked,
      firstName: inputFirstName.checked,
      lastName: inputLastName.checked
    }).toEqual(expected);
  });
  it('should hide the appropriate columns when a hide column toggle is unchecked', function () {
    var _renderUtils7 = renderUtils,
        container = _renderUtils7.container,
        queryByLabelText = _renderUtils7.queryByLabelText,
        queryAllByText = _renderUtils7.queryAllByText;
    var inputAll = queryByLabelText('All');
    var inputFirstName = queryByLabelText('First Name');
    var inputLastName = queryByLabelText('Last Name');
    var inputAge = queryByLabelText('Age');

    var _queryAllByText = queryAllByText('First Name'),
        _queryAllByText2 = _slicedToArray(_queryAllByText, 2),
        firstNameColumnHeader = _queryAllByText2[1];

    expect(container).toContainElement(firstNameColumnHeader); // Firing the click to toggle First Name column to hidden:

    fireEvent.click(queryByLabelText('First Name'));
    var expected = {
      age: false,
      all: false,
      firstName: false,
      lastName: false
    };
    expect({
      age: inputAge.checked,
      all: inputAll.checked,
      firstName: inputFirstName.checked,
      lastName: inputLastName.checked
    }).toEqual(expected);
    expect(container).not.toContainElement(firstNameColumnHeader);
  });
});
describe('Table - toggle for hide all columns', function () {
  var renderUtils;
  var pageOptions = [5, 10, 15];

  var data = _toConsumableArray(testData);

  beforeEach(function () {
    renderUtils = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Table, {
      columns: _toConsumableArray(columns),
      data: data,
      pageOptions: pageOptions,
      pageSize: pageOptions[0],
      showToggleHideColumns: true
    })));
  });
  it('should show all columns when toggle All is checked', function () {
    var _renderUtils8 = renderUtils,
        container = _renderUtils8.container,
        queryByLabelText = _renderUtils8.queryByLabelText,
        queryByTitle = _renderUtils8.queryByTitle;
    var inputAll = queryByLabelText('All');
    var inputFirstName = queryByLabelText('First Name');
    var inputLastName = queryByLabelText('Last Name');
    var inputAge = queryByLabelText('Age'); // clicking toggle All to unchecked

    fireEvent.click(queryByLabelText('All')); // clicking toggle All to checked

    fireEvent.click(queryByLabelText('All'));
    var expected = {
      age: true,
      all: true,
      firstName: true,
      lastName: true
    };
    expect({
      age: inputAge.checked,
      all: inputAll.checked,
      firstName: inputFirstName.checked,
      lastName: inputLastName.checked
    }).toEqual(expected);
    expect(container).toContainElement(queryByTitle('test-name-column'));
    expect(container).toContainElement(queryByTitle('test-info-column'));
    expect(container).toContainElement(queryByTitle('test-first-name-column'));
    expect(container).toContainElement(queryByTitle('test-last-name-column'));
    expect(container).toContainElement(queryByTitle('test-age-column'));
  });
  it('should show all columns when toggle All is unchecked', function () {
    var _renderUtils9 = renderUtils,
        container = _renderUtils9.container,
        queryByLabelText = _renderUtils9.queryByLabelText,
        queryByTitle = _renderUtils9.queryByTitle;
    var inputAll = queryByLabelText('All');
    var inputFirstName = queryByLabelText('First Name');
    var inputLastName = queryByLabelText('Last Name');
    var inputAge = queryByLabelText('Age'); // clicking toggle All to unchecked

    fireEvent.click(queryByLabelText('All'));
    var expected = {
      age: false,
      all: false,
      firstName: false,
      lastName: false
    };
    expect({
      age: inputAge.checked,
      all: inputAll.checked,
      firstName: inputFirstName.checked,
      lastName: inputLastName.checked
    }).toEqual(expected);
    expect(container).not.toContainElement(queryByTitle('test-name-column'));
    expect(container).not.toContainElement(queryByTitle('test-info-column'));
    expect(container).not.toContainElement(queryByTitle('test-first-name-column'));
    expect(container).not.toContainElement(queryByTitle('test-last-name-column'));
    expect(container).not.toContainElement(queryByTitle('test-age-column'));
  });
});