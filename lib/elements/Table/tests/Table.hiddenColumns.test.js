"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("..");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

describe('Table - initially defined hiddenColumns', function () {
  var renderUtils;
  var pageOptions = [5, 10, 15];

  var data = _toConsumableArray(_utils.testData);

  beforeEach(function () {
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Table, {
      columns: _toConsumableArray(_utils.columns),
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

  var data = _toConsumableArray(_utils.testData);

  beforeEach(function () {
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Table, {
      columns: _toConsumableArray(_utils.columns),
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

  var data = _toConsumableArray(_utils.testData);

  beforeEach(function () {
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Table, {
      columns: _toConsumableArray(_utils.columns),
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

  var data = _toConsumableArray(_utils.testData);

  beforeEach(function () {
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Table, {
      columns: _toConsumableArray(_utils.columns),
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

    _react2.fireEvent.click(queryByLabelText('First Name'));

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

  var data = _toConsumableArray(_utils.testData);

  beforeEach(function () {
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Table, {
      columns: _toConsumableArray(_utils.columns),
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

    _react2.fireEvent.click(queryByLabelText('All')); // clicking toggle All to checked


    _react2.fireEvent.click(queryByLabelText('All'));

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

    _react2.fireEvent.click(queryByLabelText('All'));

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