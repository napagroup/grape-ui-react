"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Paginator = Paginator;

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

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

const getCaptionForItemsPerPage = pageSize => "Show ".concat(pageSize);

const getCaptionForPage = pageVm => {
  var _context;

  const pageCount = pageVm.pageCount,
        pageIndex = pageVm.pageIndex;
  return (0, _concat.default)(_context = "Page ".concat(pageIndex + 1, " of ")).call(_context, pageCount);
};

function Paginator(props) {
  const canPreviousPage = props.canPreviousPage,
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

  const _useState = (0, _react.useState)({
    pageCount,
    pageIndex,
    pageOptions,
    pageSize
  }),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        pageVm = _useState2[0],
        setPageVm = _useState2[1];

  const pageSelectOptions = _react.default.useMemo(() => (0, _map.default)(pageOptions).call(pageOptions, valuePageSize => ({
    label: getCaptionForItemsPerPage(valuePageSize),
    value: valuePageSize
  })), [pageOptions]);

  const _useForm = (0, _reactHookForm.useForm)({
    defaultValues: {
      jumpToPage: pageVm.pageIndex + 1,
      selectedPageOption: pageSelectOptions[(0, _indexOf.default)(pageOptions).call(pageOptions, pageSize)]
    }
  }),
        control = _useForm.control,
        setValue = _useForm.setValue;

  (0, _react.useEffect)(() => {
    setPageVm({
      pageCount,
      pageIndex,
      pageOptions,
      pageSize
    });
    setValue('jumpToPage', pageIndex + 1);
    setValue('selectedPageOption', pageSelectOptions[(0, _indexOf.default)(pageOptions).call(pageOptions, pageSize)]);
  }, [pageCount, pageIndex, pageOptions, pageSelectOptions, pageSize, setValue]);
  return /*#__PURE__*/_react.default.createElement(_forms.Form, {
    role: "form"
  }, /*#__PURE__*/_react.default.createElement(_grid.Flex, {
    alignItems: "center",
    "data-testid": "paginator",
    flexDirection: ['column-reverse', 'row'],
    flexWrap: "wrap-reverse",
    justifyContent: "flex-end",
    py: 1
  }, /*#__PURE__*/_react.default.createElement(_grid.Flex, null, /*#__PURE__*/_react.default.createElement(_grid.Box, {
    flex: 1,
    m: 1,
    maxWidth: 170
  }, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    as: /*#__PURE__*/_react.default.createElement(_forms.TextField, null),
    control: control,
    controlGroupProps: {
      pb: 0
    },
    labelText: "Jump to Page",
    name: "jumpToPage",
    onChange: ([e]) => {
      const nextGotoPage = e.target.value ? Number(e.target.value) - 1 : 0;
      gotoPage(nextGotoPage);
    },
    sm: true,
    type: "number"
  })), /*#__PURE__*/_react.default.createElement(_grid.Box, {
    flex: 1,
    maxWidth: 170,
    mx: [1, 2],
    my: 1
  }, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    as: /*#__PURE__*/_react.default.createElement(_forms.SelectField, null),
    control: control,
    controlGroupProps: {
      pb: 0
    },
    labelText: "Rows Per Page",
    menuPlacement: menuPlacement,
    name: "selectedPageOption",
    onChange: ([selected]) => {
      setPageSize(Number(selected.value));
      return selected;
    },
    options: pageSelectOptions,
    sm: true
  }))), /*#__PURE__*/_react.default.createElement(_grid.Flex, {
    alignItems: "center",
    flexDirection: ['column', 'row'],
    my: 1
  }, /*#__PURE__*/_react.default.createElement(_typography.Text, {
    mx: [1, 2],
    sm: true
  }, getCaptionForPage(pageVm)), /*#__PURE__*/_react.default.createElement(_grid.Box, {
    mx: 1
  }, /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
    isHidden: !showSkipButtons
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    "data-testid": "gotoFirstPage",
    disabled: !canPreviousPage,
    onClick: () => gotoPage(0),
    role: "button"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faAngleDoubleLeft
  }))), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    "data-testid": "gotoPreviousPage",
    disabled: !canPreviousPage,
    onClick: () => previousPage(),
    role: "button"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faAngleLeft
  })), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    "data-testid": "gotoNextPage",
    disabled: !canNextPage,
    onClick: () => nextPage(),
    role: "button"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faAngleRight
  })), /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
    isHidden: !showSkipButtons
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    "data-testid": "gotoLastPage",
    disabled: !canNextPage,
    onClick: () => gotoPage(pageCount - 1),
    role: "button"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faAngleDoubleRight
  })))))));
}

Paginator.propTypes = {
  canNextPage: _propTypes.default.bool,
  canPreviousPage: _propTypes.default.bool,
  gotoPage: _propTypes.default.func,
  menuPlacement: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string]),
  nextPage: _propTypes.default.func,
  pageCount: _propTypes.default.number,
  pageIndex: _propTypes.default.number,
  pageOptions: _propTypes.default.arrayOf(_propTypes.default.number),
  pageSize: _propTypes.default.number,
  previousPage: _propTypes.default.func,
  setPageSize: _propTypes.default.func,
  showSkipButtons: _propTypes.default.bool
};
Paginator.defaultProps = {
  canNextPage: false,
  canPreviousPage: false,
  gotoPage: () => {},
  menuPlacement: 'bottom',
  nextPage: () => {},
  pageCount: 0,
  pageIndex: 0,
  pageOptions: _utils2.defaultPageOptions,
  pageSize: _utils2.defaultPageOptions[0],
  previousPage: () => {},
  setPageSize: () => {},
  showSkipButtons: false
};