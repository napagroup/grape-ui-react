import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _slicedToArray from "@babel/runtime-corejs3/helpers/slicedToArray";
import _toConsumableArray from "@babel/runtime-corejs3/helpers/toConsumableArray";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _taggedTemplateLiteral from "@babel/runtime-corejs3/helpers/taggedTemplateLiteral";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context4; _forEachInstanceProperty(_context4 = ownKeys(Object(source), true)).call(_context4, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context5; _forEachInstanceProperty(_context5 = ownKeys(Object(source))).call(_context5, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0;\n  position: absolute;\n  transform: translate(-12px, 6px);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useExpanded, useTable, usePagination, useSortBy } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { CheckboxField } from 'src/elements/forms';
import { Box, Flex } from 'src/elements/grid';
import { Paragraph, Text } from 'src/elements/typography';
import { Hideable } from 'src/elements/utils';
import { Paginator } from './Paginator';
import { defaultPageOptions, getTableViewState, StyledTable, StyledTableBody, StyledTableCell, StyledTableHead, StyledTableHeader, StyledTableResponsiveWrapper, StyledTableRow, StyledTableWrapper, tableBodyPropTypes, tableCellPropTypes, tableHeadPropTypes, tableHeaderPropTypes, tablePropTypes, tableRowPropTypes, tableWrapperPropTypes } from './utils';
var SortIcon = styled(FontAwesomeIcon)(_templateObject());
SortIcon.defaultProps = {
  className: 'sort-icon',
  icon: faArrowUp,
  size: 'xs'
};

var getStyles = function getStyles(props, styleProps) {
  return [props, _objectSpread({}, styleProps)];
};

var headerProps = function headerProps(props, _ref) {
  var column = _ref.column;

  var nextProps = _objectSpread({}, props);

  var title = column.title;

  if (title) {
    nextProps.title = title;
  }

  return _toConsumableArray(getStyles(nextProps, column.styleProps));
};

var cellProps = function cellProps(props, _ref2) {
  var cell = _ref2.cell;
  return getStyles(props, cell.column.styleProps);
};

var sanitizePageSize = function sanitizePageSize(showPagination, pageSize, data) {
  var result = showPagination ? pageSize : data.length;
  return result < 1 ? 1 : result;
};

var getOptionForUseTable = function getOptionForUseTable(props) {
  var columns = props.columns,
      data = props.data,
      hiddenColumns = props.hiddenColumns,
      manual = props.manual,
      manualPageCount = props.manualPageCount,
      pageIndex = props.pageIndex,
      pageSize = props.pageSize,
      showPagination = props.showPagination;
  var useTableProps = {
    columns: columns,
    data: data,
    initialState: {
      hiddenColumns: hiddenColumns,
      pageIndex: pageIndex,
      pageSize: sanitizePageSize(showPagination, pageSize, data)
    },
    manualPagination: manual,
    manualSortBy: manual
  };

  if (manual) {
    useTableProps.pageCount = manualPageCount;
    useTableProps.initialState = _objectSpread({}, useTableProps.initialState);
  }

  return useTableProps;
};

var getCaptionForSortBy = function getCaptionForSortBy(column) {
  if (!column.canSort) {
    return '';
  }

  if (!column.isSorted) {
    return /*#__PURE__*/React.createElement(SortIcon, null);
  }

  return /*#__PURE__*/React.createElement(SortIcon, {
    icon: column.isSortedDesc ? faArrowDown : faArrowUp,
    style: {
      opacity: 1
    }
  });
};

var getRowSubComponent = function getRowSubComponent(enableRowExpansion, renderRowSubComponent, row, visibleColumns) {
  if (!enableRowExpansion) {
    return null;
  }

  return row.isExpanded ? /*#__PURE__*/React.createElement(StyledTableRow, null, /*#__PURE__*/React.createElement(StyledTableCell, {
    colSpan: visibleColumns.length
  }, renderRowSubComponent({
    row: row
  }))) : null;
};

var onChangeToggleHideColumn = function onChangeToggleHideColumn(checkboxFieldArgs, toggleHideColumn) {
  if (checkboxFieldArgs.length >= 2) {
    var _checkboxFieldArgs = _slicedToArray(checkboxFieldArgs, 2),
        e = _checkboxFieldArgs[1];

    if (e && e.target && e.target.value) {
      var value = e.target.value;
      toggleHideColumn(value);
    }
  }
};

export function TableComponent(props) {
  var _context;

  var columns = props.columns,
      data = props.data,
      hiddenColumns = props.hiddenColumns,
      enableRowExpansion = props.enableRowExpansion,
      fetchData = props.fetchData,
      loading = props.loading,
      manual = props.manual,
      manualPageCount = props.pageCount,
      userPageIndex = props.pageIndex,
      pageOptions = props.pageOptions,
      userPageSize = props.pageSize,
      renderRowSubComponent = props.renderRowSubComponent,
      showPagination = props.showPagination,
      showSkipButtons = props.showSkipButtons,
      showToggleHideColumns = props.showToggleHideColumns,
      tableBodyProps = props.tableBodyProps,
      tableCellProps = props.tableCellProps,
      tableHeadProps = props.tableHeadProps,
      tableHeaderProps = props.tableHeaderProps,
      tableProps = props.tableProps,
      tableRowProps = props.tableRowProps,
      tableWrapperProps = props.tableWrapperProps,
      wrapperProps = props.wrapperProps;
  var tableOptions = getOptionForUseTable({
    columns: columns,
    data: data,
    hiddenColumns: hiddenColumns,
    manual: manual,
    manualPageCount: manualPageCount,
    pageIndex: userPageIndex,
    pageSize: userPageSize,
    showPagination: showPagination
  }); // Use the state and functions returned from useTable to build your UI

  var _useTable = useTable(tableOptions, useSortBy, useExpanded, usePagination),
      allColumns = _useTable.allColumns,
      canNextPage = _useTable.canNextPage,
      canPreviousPage = _useTable.canPreviousPage,
      getToggleHideAllColumnsProps = _useTable.getToggleHideAllColumnsProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      getTableProps = _useTable.getTableProps,
      gotoPage = _useTable.gotoPage,
      headerGroups = _useTable.headerGroups,
      page = _useTable.page,
      pageCount = _useTable.pageCount,
      prepareRow = _useTable.prepareRow,
      previousPage = _useTable.previousPage,
      nextPage = _useTable.nextPage,
      setPageSize = _useTable.setPageSize,
      _useTable$state = _useTable.state,
      pageIndex = _useTable$state.pageIndex,
      pageSize = _useTable$state.pageSize,
      sortBy = _useTable$state.sortBy,
      toggleHideAllColumns = _useTable.toggleHideAllColumns,
      toggleHideColumn = _useTable.toggleHideColumn,
      visibleColumns = _useTable.visibleColumns; // Listen for changes in pagination and use the state to fetch our new data


  useEffect(function () {
    if (!manual) {
      return;
    }

    fetchData({
      pageCount: pageCount,
      pageIndex: pageIndex,
      pageSize: pageSize,
      sortBy: sortBy
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manual, pageCount, pageIndex, pageSize, sortBy]);
  var tableViewState = getTableViewState(props);

  var _getToggleHideAllColu = getToggleHideAllColumnsProps(),
      indeterminate = _getToggleHideAllColu.indeterminate,
      title = _getToggleHideAllColu.title;

  var indetVal = indeterminate === 0 ? ['indeterminate'] : [];
  var indeterminateOptions = [{
    label: 'All',
    value: 'indeterminate'
  }];
  var hiddenColumnsSelectOptions = [];
  var hiddenColumnsSelectValues = [];

  _forEachInstanceProperty(allColumns).call(allColumns, function (column) {
    hiddenColumnsSelectOptions.push({
      label: column.Header,
      value: column.id
    });

    if (column.isVisible) {
      hiddenColumnsSelectValues.push(column.id);
    }
  });

  return /*#__PURE__*/React.createElement(Box, wrapperProps, /*#__PURE__*/React.createElement(Flex, {
    alignItems: [null, 'flex-end'],
    flexDirection: ['column', 'row'],
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(Hideable, {
    hide: !showToggleHideColumns
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CheckboxField, {
    controlGroupProps: {
      pb: 0
    },
    labelText: "Display Columns",
    name: "toggleHideAll",
    onChange: function onChange() {
      return toggleHideAllColumns();
    },
    options: indeterminateOptions,
    title: title,
    value: indetVal,
    wrapperProps: {
      pb: 0
    }
  }), /*#__PURE__*/React.createElement(CheckboxField, {
    controlGroupProps: {
      pb: 0,
      pt: 0
    },
    name: "CheckboxFieldToggleHideColumn",
    onChange: function onChange() {
      for (var _len = arguments.length, checkboxFieldArgs = new Array(_len), _key = 0; _key < _len; _key++) {
        checkboxFieldArgs[_key] = arguments[_key];
      }

      onChangeToggleHideColumn(checkboxFieldArgs, toggleHideColumn);
    },
    options: hiddenColumnsSelectOptions,
    value: hiddenColumnsSelectValues
  }))), /*#__PURE__*/React.createElement(Flex, {
    justifyContent: "flex-end",
    width: showToggleHideColumns ? 'auto' : 1
  }, /*#__PURE__*/React.createElement(Paragraph, {
    mb: 0,
    sm: true,
    textAlign: "right"
  }, _concatInstanceProperty(_context = "Showing ".concat(page.length, " of about ")).call(_context, pageCount * pageSize, " results")))), /*#__PURE__*/React.createElement(StyledTableWrapper, tableWrapperProps, /*#__PURE__*/React.createElement(Hideable, {
    hide: !tableViewState.paginationTop.visible
  }, /*#__PURE__*/React.createElement(Paginator, {
    canNextPage: canNextPage,
    canPreviousPage: canPreviousPage,
    gotoPage: gotoPage,
    menuPlacement: "bottom",
    nextPage: nextPage,
    pageCount: pageCount,
    pageIndex: pageIndex,
    pageOptions: pageOptions,
    pageSize: pageSize,
    previousPage: previousPage,
    setPageSize: setPageSize,
    showSkipButtons: showSkipButtons
  })), /*#__PURE__*/React.createElement(StyledTableResponsiveWrapper, null, /*#__PURE__*/React.createElement(StyledTable, _extends({}, tableProps, getTableProps()), /*#__PURE__*/React.createElement(StyledTableHeader, tableHeaderProps, _mapInstanceProperty(headerGroups).call(headerGroups, function (headerGroup, headerGroupIndex) {
    var _context2;

    return /*#__PURE__*/React.createElement(StyledTableRow, headerGroup.getHeaderGroupProps(), _mapInstanceProperty(_context2 = headerGroup.headers).call(_context2, function (column) {
      var finalTableHeaderProps = _objectSpread({}, tableHeadProps, {}, column.getHeaderProps(column.getSortByToggleProps(headerProps)));

      return /*#__PURE__*/React.createElement(StyledTableHead, finalTableHeaderProps, /*#__PURE__*/React.createElement(Text, {
        style: {
          position: 'relative'
        }
      }, getCaptionForSortBy(column), column.render('Header')));
    }));
  })), /*#__PURE__*/React.createElement(StyledTableBody, _extends({}, tableBodyProps, getTableBodyProps()), _mapInstanceProperty(page).call(page, function (row, i) {
    var _context3;

    prepareRow(row);
    var rowSubComponent = getRowSubComponent(enableRowExpansion, renderRowSubComponent, row, visibleColumns);
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: "wrapperRowComponent_".concat(row.id)
    }, /*#__PURE__*/React.createElement(StyledTableRow, _extends({}, tableRowProps, row.getRowProps()), _mapInstanceProperty(_context3 = row.cells).call(_context3, function (cell) {
      return /*#__PURE__*/React.createElement(StyledTableCell, _extends({}, tableCellProps, cell.getCellProps(cellProps)), cell.render('Cell'));
    })), rowSubComponent);
  }), loading ?
  /*#__PURE__*/
  // Use our custom loading state to show a loading indicator
  React.createElement(StyledTableRow, null, /*#__PURE__*/React.createElement(StyledTableCell, {
    colSpan: "10000"
  }, "Loading...")) : []))), /*#__PURE__*/React.createElement(Hideable, {
    hide: !tableViewState.paginationBottom.visible
  }, /*#__PURE__*/React.createElement(Paginator, {
    canNextPage: canNextPage,
    canPreviousPage: canPreviousPage,
    gotoPage: gotoPage,
    menuPlacement: "top",
    nextPage: nextPage,
    pageCount: pageCount,
    pageIndex: pageIndex,
    pageOptions: pageOptions,
    pageSize: pageSize,
    previousPage: previousPage,
    setPageSize: setPageSize,
    showSkipButtons: showSkipButtons
  }))));
}
TableComponent.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  enableRowExpansion: PropTypes.bool,
  fetchData: PropTypes.func,
  hiddenColumns: PropTypes.array,
  loading: PropTypes.bool,
  manual: PropTypes.bool,
  pageCount: PropTypes.number,
  pageIndex: PropTypes.number,
  pageOptions: PropTypes.arrayOf(PropTypes.number),
  pageSize: PropTypes.number,
  renderRowSubComponent: PropTypes.func,
  showPagination: PropTypes.bool,
  showPaginationBottom: PropTypes.bool,
  showPaginationTop: PropTypes.bool,
  showSkipButtons: PropTypes.bool,
  showToggleHideColumns: PropTypes.bool,
  tableBodyProps: PropTypes.shape(tableBodyPropTypes),
  tableCellProps: PropTypes.shape(tableCellPropTypes),
  tableHeaderProps: PropTypes.shape(tableHeaderPropTypes),
  tableHeadProps: PropTypes.shape(tableHeadPropTypes),
  tableProps: PropTypes.shape(tablePropTypes),
  tableRowProps: PropTypes.shape(tableRowPropTypes),
  tableWrapperProps: PropTypes.shape(tableWrapperPropTypes),
  wrapperProps: PropTypes.object
};
TableComponent.defaultProps = {
  enableRowExpansion: false,
  fetchData: function fetchData() {},
  hiddenColumns: [],
  loading: false,
  manual: false,
  pageCount: 0,
  pageIndex: 0,
  pageOptions: defaultPageOptions,
  pageSize: defaultPageOptions[0],
  renderRowSubComponent: function renderRowSubComponent() {},
  showPagination: false,
  showPaginationBottom: false,
  showPaginationTop: false,
  showSkipButtons: false,
  showToggleHideColumns: false,
  tableBodyProps: {},
  tableCellProps: {},
  tableHeaderProps: {},
  tableHeadProps: {},
  tableProps: {},
  tableRowProps: {},
  tableWrapperProps: {},
  wrapperProps: {}
};