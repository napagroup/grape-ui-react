"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paginator = Paginator;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactHookForm = require("react-hook-form");

var _Button = require("../../../elements/Button");

var _forms = require("../../../elements/forms");

var _grid = require("../../../elements/grid");

var _utils = require("../../../elements/utils");

var _typography = require("../../../elements/typography");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _utils2 = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getCaptionForItemsPerPage = function getCaptionForItemsPerPage(pageSize) {
  return "Show ".concat(pageSize);
};

var getCaptionForPage = function getCaptionForPage(pageVm) {
  var pageCount = pageVm.pageCount,
      pageIndex = pageVm.pageIndex;
  return "Page ".concat(pageIndex + 1, " of ").concat(pageCount);
};

function Paginator(props) {
  var canPreviousPage = props.canPreviousPage,
      canNextPage = props.canNextPage,
      gotoPage = props.gotoPage,
      menuPlacement = props.menuPlacement,
      nextPage = props.nextPage,
      pageCount = props.pageCount,
      pageIndex = props.pageIndex,
      pageOptions = props.pageOptions,
      pageSize = props.pageSize,
      previousPage = props.previousPage,
      setPageSize = props.setPageSize,
      showSkipButtons = props.showSkipButtons;

  var _useState = (0, _react.useState)({
    pageCount: pageCount,
    pageIndex: pageIndex,
    pageOptions: pageOptions,
    pageSize: pageSize
  }),
      _useState2 = _slicedToArray(_useState, 2),
      pageVm = _useState2[0],
      setPageVm = _useState2[1];

  var pageSelectOptions = _react["default"].useMemo(function () {
    return pageOptions.map(function (valuePageSize) {
      return {
        label: getCaptionForItemsPerPage(valuePageSize),
        value: valuePageSize
      };
    });
  }, [pageOptions]);

  var _useForm = (0, _reactHookForm.useForm)({
    defaultValues: {
      jumpToPage: pageVm.pageIndex + 1,
      selectedPageOption: pageSelectOptions[pageOptions.indexOf(pageSize)]
    }
  }),
      control = _useForm.control,
      setValue = _useForm.setValue;

  (0, _react.useEffect)(function () {
    setPageVm({
      pageCount: pageCount,
      pageIndex: pageIndex,
      pageOptions: pageOptions,
      pageSize: pageSize
    });
    setValue('jumpToPage', pageIndex + 1);
    setValue('selectedPageOption', pageSelectOptions[pageOptions.indexOf(pageSize)]);
  }, [pageCount, pageIndex, pageOptions, pageSelectOptions, pageSize, setValue]);
  return /*#__PURE__*/_react["default"].createElement(_forms.Form, {
    role: "form"
  }, /*#__PURE__*/_react["default"].createElement(_grid.Flex, {
    alignItems: "center",
    "data-testid": "paginator",
    flexDirection: ['column-reverse', 'row'],
    flexWrap: "wrap-reverse",
    justifyContent: "flex-end",
    py: 1
  }, /*#__PURE__*/_react["default"].createElement(_grid.Flex, null, /*#__PURE__*/_react["default"].createElement(_grid.Box, {
    flex: 1,
    m: 1,
    maxWidth: 170
  }, /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
    as: /*#__PURE__*/_react["default"].createElement(_forms.TextField, null),
    control: control,
    controlGroupProps: {
      pb: 0
    },
    labelText: "Jump to Page",
    name: "jumpToPage",
    onChange: function onChange(_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          e = _ref2[0];

      var nextGotoPage = e.target.value ? Number(e.target.value) - 1 : 0;
      gotoPage(nextGotoPage);
    },
    sm: true,
    type: "number"
  })), /*#__PURE__*/_react["default"].createElement(_grid.Box, {
    flex: 1,
    maxWidth: 170,
    mx: [1, 2],
    my: 1
  }, /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
    as: /*#__PURE__*/_react["default"].createElement(_forms.SelectField, null),
    control: control,
    controlGroupProps: {
      pb: 0
    },
    labelText: "Rows Per Page",
    menuPlacement: menuPlacement,
    name: "selectedPageOption",
    onChange: function onChange(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 1),
          selected = _ref4[0];

      setPageSize(Number(selected.value));
      return selected;
    },
    options: pageSelectOptions,
    sm: true
  }))), /*#__PURE__*/_react["default"].createElement(_grid.Flex, {
    alignItems: "center",
    flexDirection: ['column', 'row'],
    my: 1
  }, /*#__PURE__*/_react["default"].createElement(_typography.Text, {
    mx: [1, 2],
    sm: true
  }, getCaptionForPage(pageVm)), /*#__PURE__*/_react["default"].createElement(_grid.Box, {
    mx: 1
  }, /*#__PURE__*/_react["default"].createElement(_utils.Hideable, {
    hide: !showSkipButtons
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    "data-testid": "gotoFirstPage",
    disabled: !canPreviousPage,
    onClick: function onClick() {
      return gotoPage(0);
    },
    role: "button"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faAngleDoubleLeft
  }))), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    "data-testid": "gotoPreviousPage",
    disabled: !canPreviousPage,
    onClick: function onClick() {
      return previousPage();
    },
    role: "button"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faAngleLeft
  })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    "data-testid": "gotoNextPage",
    disabled: !canNextPage,
    onClick: function onClick() {
      return nextPage();
    },
    role: "button"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faAngleRight
  })), /*#__PURE__*/_react["default"].createElement(_utils.Hideable, {
    hide: !showSkipButtons
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    "data-testid": "gotoLastPage",
    disabled: !canNextPage,
    onClick: function onClick() {
      return gotoPage(pageCount - 1);
    },
    role: "button"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faAngleDoubleRight
  })))))));
}

Paginator.propTypes = {
  canNextPage: _propTypes["default"].bool,
  canPreviousPage: _propTypes["default"].bool,
  gotoPage: _propTypes["default"].func,
  menuPlacement: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].string]),
  nextPage: _propTypes["default"].func,
  pageCount: _propTypes["default"].number,
  pageIndex: _propTypes["default"].number,
  pageOptions: _propTypes["default"].arrayOf(_propTypes["default"].number),
  pageSize: _propTypes["default"].number,
  previousPage: _propTypes["default"].func,
  setPageSize: _propTypes["default"].func,
  showSkipButtons: _propTypes["default"].bool
};
Paginator.defaultProps = {
  canNextPage: false,
  canPreviousPage: false,
  gotoPage: function gotoPage() {},
  menuPlacement: 'bottom',
  nextPage: function nextPage() {},
  pageCount: 0,
  pageIndex: 0,
  pageOptions: _utils2.defaultPageOptions,
  pageSize: _utils2.defaultPageOptions[0],
  previousPage: function previousPage() {},
  setPageSize: function setPageSize() {},
  showSkipButtons: false
};