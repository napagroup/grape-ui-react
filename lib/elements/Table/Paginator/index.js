import "core-js/modules/es.number.constructor";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/index-of";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _slicedToArray from "@babel/runtime-corejs3/helpers/slicedToArray";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'src/elements/Button';
import { Form, SelectField, TextField } from 'src/elements/forms';
import { Box, Flex } from 'src/elements/grid';
import { Hideable } from 'src/elements/utils';
import { Text } from 'src/elements/typography';
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { defaultPageOptions } from '../utils';

var getCaptionForItemsPerPage = function getCaptionForItemsPerPage(pageSize) {
  return "Show ".concat(pageSize);
};

var getCaptionForPage = function getCaptionForPage(pageVm) {
  var _context;

  var pageCount = pageVm.pageCount,
      pageIndex = pageVm.pageIndex;
  return _concatInstanceProperty(_context = "Page ".concat(pageIndex + 1, " of ")).call(_context, pageCount);
};

export function Paginator(props) {
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

  var _useState = useState({
    pageCount: pageCount,
    pageIndex: pageIndex,
    pageOptions: pageOptions,
    pageSize: pageSize
  }),
      _useState2 = _slicedToArray(_useState, 2),
      pageVm = _useState2[0],
      setPageVm = _useState2[1];

  var pageSelectOptions = React.useMemo(function () {
    return _mapInstanceProperty(pageOptions).call(pageOptions, function (valuePageSize) {
      return {
        label: getCaptionForItemsPerPage(valuePageSize),
        value: valuePageSize
      };
    });
  }, [pageOptions]);

  var _useForm = useForm({
    defaultValues: {
      jumpToPage: pageVm.pageIndex + 1,
      selectedPageOption: pageSelectOptions[_indexOfInstanceProperty(pageOptions).call(pageOptions, pageSize)]
    }
  }),
      control = _useForm.control,
      setValue = _useForm.setValue;

  useEffect(function () {
    setPageVm({
      pageCount: pageCount,
      pageIndex: pageIndex,
      pageOptions: pageOptions,
      pageSize: pageSize
    });
    setValue('jumpToPage', pageIndex + 1);
    setValue('selectedPageOption', pageSelectOptions[_indexOfInstanceProperty(pageOptions).call(pageOptions, pageSize)]);
  }, [pageCount, pageIndex, pageOptions, pageSelectOptions, pageSize, setValue]);
  return /*#__PURE__*/React.createElement(Form, {
    role: "form"
  }, /*#__PURE__*/React.createElement(Flex, {
    alignItems: "center",
    "data-testid": "paginator",
    flexDirection: ['column-reverse', 'row'],
    flexWrap: "wrap-reverse",
    justifyContent: "flex-end",
    py: 1
  }, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Box, {
    flex: 1,
    m: 1,
    maxWidth: 170
  }, /*#__PURE__*/React.createElement(Controller, {
    as: /*#__PURE__*/React.createElement(TextField, null),
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
  })), /*#__PURE__*/React.createElement(Box, {
    flex: 1,
    maxWidth: 170,
    mx: [1, 2],
    my: 1
  }, /*#__PURE__*/React.createElement(Controller, {
    as: /*#__PURE__*/React.createElement(SelectField, null),
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
  }))), /*#__PURE__*/React.createElement(Flex, {
    alignItems: "center",
    flexDirection: ['column', 'row'],
    my: 1
  }, /*#__PURE__*/React.createElement(Text, {
    mx: [1, 2],
    sm: true
  }, getCaptionForPage(pageVm)), /*#__PURE__*/React.createElement(Box, {
    mx: 1
  }, /*#__PURE__*/React.createElement(Hideable, {
    hide: !showSkipButtons
  }, /*#__PURE__*/React.createElement(Button, {
    "data-testid": "gotoFirstPage",
    disabled: !canPreviousPage,
    onClick: function onClick() {
      return gotoPage(0);
    },
    role: "button"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faAngleDoubleLeft
  }))), /*#__PURE__*/React.createElement(Button, {
    "data-testid": "gotoPreviousPage",
    disabled: !canPreviousPage,
    onClick: function onClick() {
      return previousPage();
    },
    role: "button"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faAngleLeft
  })), /*#__PURE__*/React.createElement(Button, {
    "data-testid": "gotoNextPage",
    disabled: !canNextPage,
    onClick: function onClick() {
      return nextPage();
    },
    role: "button"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faAngleRight
  })), /*#__PURE__*/React.createElement(Hideable, {
    hide: !showSkipButtons
  }, /*#__PURE__*/React.createElement(Button, {
    "data-testid": "gotoLastPage",
    disabled: !canNextPage,
    onClick: function onClick() {
      return gotoPage(pageCount - 1);
    },
    role: "button"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faAngleDoubleRight
  })))))));
}
Paginator.propTypes = {
  canNextPage: PropTypes.bool,
  canPreviousPage: PropTypes.bool,
  gotoPage: PropTypes.func,
  menuPlacement: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  nextPage: PropTypes.func,
  pageCount: PropTypes.number,
  pageIndex: PropTypes.number,
  pageOptions: PropTypes.arrayOf(PropTypes.number),
  pageSize: PropTypes.number,
  previousPage: PropTypes.func,
  setPageSize: PropTypes.func,
  showSkipButtons: PropTypes.bool
};
Paginator.defaultProps = {
  canNextPage: false,
  canPreviousPage: false,
  gotoPage: function gotoPage() {},
  menuPlacement: 'bottom',
  nextPage: function nextPage() {},
  pageCount: 0,
  pageIndex: 0,
  pageOptions: defaultPageOptions,
  pageSize: defaultPageOptions[0],
  previousPage: function previousPage() {},
  setPageSize: function setPageSize() {},
  showSkipButtons: false
};