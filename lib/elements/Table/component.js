"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.TableComponent = TableComponent;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTable = require("react-table");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _forms = require("../../elements/forms");

var _grid = require("../../elements/grid");

var _typography = require("../../elements/typography");

var _utils = require("../../elements/utils");

var _Paginator = require("./Paginator");

var _utils2 = require("./utils");

/* eslint-disable react/jsx-key */
const SortIcon = (0, _styledComponents.default)(_reactFontawesome.FontAwesomeIcon)`
  opacity: 0;
  position: absolute;
  transform: translate(-12px, 6px);
`;
SortIcon.defaultProps = {
  className: 'sort-icon',
  icon: _freeSolidSvgIcons.faArrowUp,
  size: 'xs'
};

const getStyles = (props, styleProps) => [props, { ...styleProps
}];

const headerProps = (props, {
  column
}) => {
  const nextProps = { ...props
  };
  const {
    title
  } = column;

  if (title) {
    nextProps.title = title;
  }

  return [...getStyles(nextProps, column.styleProps)];
};

const cellProps = (props, {
  cell
}) => getStyles(props, cell.column.styleProps);

const sanitizePageSize = (showPagination, pageSize, data) => {
  const result = showPagination ? pageSize : data.length;
  return result < 1 ? 1 : result;
};

const getOptionForUseTable = props => {
  const {
    columns,
    data,
    hiddenColumns,
    manual,
    manualPageCount,
    pageIndex,
    pageSize,
    showPagination
  } = props;
  const useTableProps = {
    columns,
    data,
    initialState: {
      hiddenColumns,
      pageIndex,
      pageSize: sanitizePageSize(showPagination, pageSize, data)
    },
    manualPagination: manual,
    manualSortBy: manual
  };

  if (manual) {
    useTableProps.pageCount = manualPageCount;
    useTableProps.initialState = { ...useTableProps.initialState
    };
  }

  return useTableProps;
};

const getCaptionForSortBy = column => {
  if (!column.canSort) {
    return '';
  }

  if (!column.isSorted) {
    return /*#__PURE__*/_react.default.createElement(SortIcon, null);
  }

  return /*#__PURE__*/_react.default.createElement(SortIcon, {
    icon: column.isSortedDesc ? _freeSolidSvgIcons.faArrowDown : _freeSolidSvgIcons.faArrowUp,
    style: {
      opacity: 1
    }
  });
};

const getRowSubComponent = (enableRowExpansion, renderRowSubComponent, row, visibleColumns) => {
  if (!enableRowExpansion) {
    return null;
  }

  return row.isExpanded ? /*#__PURE__*/_react.default.createElement(_utils2.StyledTableRow, null, /*#__PURE__*/_react.default.createElement(_utils2.StyledTableCell, {
    colSpan: visibleColumns.length
  }, renderRowSubComponent({
    row
  }))) : null;
};

const onChangeToggleHideColumn = (checkboxFieldArgs, toggleHideColumn) => {
  if (checkboxFieldArgs.length >= 2) {
    const [, e] = checkboxFieldArgs;

    if (e && e.target && e.target.value) {
      const {
        target: {
          value
        }
      } = e;
      toggleHideColumn(value);
    }
  }
};

function TableComponent(props) {
  const {
    columns,
    data,
    hiddenColumns,
    enableRowExpansion,
    fetchData,
    loading,
    manual,
    pageCount: manualPageCount,
    pageIndex: userPageIndex,
    pageOptions,
    pageSize: userPageSize,
    renderRowSubComponent,
    showPagination,
    showSkipButtons,
    showToggleHideColumns,
    tableBodyProps,
    tableCellProps,
    tableHeadProps,
    tableHeaderProps,
    tableProps,
    tableRowProps,
    tableWrapperProps,
    wrapperProps
  } = props;
  const tableOptions = getOptionForUseTable({
    columns,
    data,
    hiddenColumns,
    manual,
    manualPageCount,
    pageIndex: userPageIndex,
    pageSize: userPageSize,
    showPagination
  }); // Use the state and functions returned from useTable to build your UI

  const {
    allColumns,
    canNextPage,
    canPreviousPage,
    getToggleHideAllColumnsProps,
    getTableBodyProps,
    getTableProps,
    gotoPage,
    headerGroups,
    page,
    pageCount,
    prepareRow,
    previousPage,
    nextPage,
    setPageSize,
    state: {
      pageIndex,
      pageSize,
      sortBy
    },
    toggleHideAllColumns,
    toggleHideColumn,
    visibleColumns
  } = (0, _reactTable.useTable)(tableOptions, _reactTable.useSortBy, _reactTable.useExpanded, _reactTable.usePagination); // Listen for changes in pagination and use the state to fetch our new data

  (0, _react.useEffect)(() => {
    if (!manual) {
      return;
    }

    fetchData({
      pageCount,
      pageIndex,
      pageSize,
      sortBy
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manual, pageCount, pageIndex, pageSize, sortBy]);
  const tableViewState = (0, _utils2.getTableViewState)(props);
  const {
    indeterminate,
    title
  } = getToggleHideAllColumnsProps();
  const indetVal = indeterminate === 0 ? ['indeterminate'] : [];
  const indeterminateOptions = [{
    label: 'All',
    value: 'indeterminate'
  }];
  const hiddenColumnsSelectOptions = [];
  const hiddenColumnsSelectValues = [];
  (0, _forEach.default)(allColumns).call(allColumns, column => {
    hiddenColumnsSelectOptions.push({
      label: column.Header,
      value: column.id
    });

    if (column.isVisible) {
      hiddenColumnsSelectValues.push(column.id);
    }
  });
  return /*#__PURE__*/_react.default.createElement(_grid.Box, wrapperProps, /*#__PURE__*/_react.default.createElement(_grid.Flex, {
    alignItems: [null, 'flex-end'],
    flexDirection: ['column', 'row'],
    justifyContent: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
    hide: !showToggleHideColumns
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_forms.CheckboxField, {
    controlGroupProps: {
      pb: 0
    },
    labelText: "Display Columns",
    name: "toggleHideAll",
    onChange: () => toggleHideAllColumns(),
    options: indeterminateOptions,
    title: title,
    value: indetVal,
    wrapperProps: {
      pb: 0
    }
  }), /*#__PURE__*/_react.default.createElement(_forms.CheckboxField, {
    controlGroupProps: {
      pb: 0,
      pt: 0
    },
    name: "CheckboxFieldToggleHideColumn",
    onChange: (...checkboxFieldArgs) => {
      onChangeToggleHideColumn(checkboxFieldArgs, toggleHideColumn);
    },
    options: hiddenColumnsSelectOptions,
    value: hiddenColumnsSelectValues
  }))), /*#__PURE__*/_react.default.createElement(_grid.Flex, {
    justifyContent: "flex-end",
    width: showToggleHideColumns ? 'auto' : 1
  }, /*#__PURE__*/_react.default.createElement(_typography.Paragraph, {
    mb: 0,
    sm: true,
    textAlign: "right"
  }, `Showing ${page.length} of about ${pageCount * pageSize} results`))), /*#__PURE__*/_react.default.createElement(_utils2.StyledTableWrapper, tableWrapperProps, /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
    hide: !tableViewState.paginationTop.visible
  }, /*#__PURE__*/_react.default.createElement(_Paginator.Paginator, {
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
  })), /*#__PURE__*/_react.default.createElement(_utils2.StyledTableResponsiveWrapper, null, /*#__PURE__*/_react.default.createElement(_utils2.StyledTable, (0, _extends2.default)({}, tableProps, getTableProps()), /*#__PURE__*/_react.default.createElement(_utils2.StyledTableHeader, tableHeaderProps, (0, _map.default)(headerGroups).call(headerGroups, (headerGroup, headerGroupIndex) => {
    var _context;

    return /*#__PURE__*/_react.default.createElement(_utils2.StyledTableRow, headerGroup.getHeaderGroupProps(), (0, _map.default)(_context = headerGroup.headers).call(_context, column => {
      const finalTableHeaderProps = { ...tableHeadProps,
        ...column.getHeaderProps(column.getSortByToggleProps(headerProps))
      };
      return /*#__PURE__*/_react.default.createElement(_utils2.StyledTableHead, finalTableHeaderProps, /*#__PURE__*/_react.default.createElement(_typography.Text, {
        style: {
          position: 'relative'
        }
      }, getCaptionForSortBy(column), column.render('Header')));
    }));
  })), /*#__PURE__*/_react.default.createElement(_utils2.StyledTableBody, (0, _extends2.default)({}, tableBodyProps, getTableBodyProps()), (0, _map.default)(page).call(page, (row, i) => {
    var _context2;

    prepareRow(row);
    const rowSubComponent = getRowSubComponent(enableRowExpansion, renderRowSubComponent, row, visibleColumns);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: `wrapperRowComponent_${row.id}`
    }, /*#__PURE__*/_react.default.createElement(_utils2.StyledTableRow, (0, _extends2.default)({}, tableRowProps, row.getRowProps()), (0, _map.default)(_context2 = row.cells).call(_context2, cell => /*#__PURE__*/_react.default.createElement(_utils2.StyledTableCell, (0, _extends2.default)({}, tableCellProps, cell.getCellProps(cellProps)), cell.render('Cell')))), rowSubComponent);
  }), loading ?
  /*#__PURE__*/
  // Use our custom loading state to show a loading indicator
  _react.default.createElement(_utils2.StyledTableRow, null, /*#__PURE__*/_react.default.createElement(_utils2.StyledTableCell, {
    colSpan: "10000"
  }, "Loading...")) : []))), /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
    hide: !tableViewState.paginationBottom.visible
  }, /*#__PURE__*/_react.default.createElement(_Paginator.Paginator, {
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
  columns: _propTypes.default.array.isRequired,
  data: _propTypes.default.array.isRequired,
  enableRowExpansion: _propTypes.default.bool,
  fetchData: _propTypes.default.func,
  hiddenColumns: _propTypes.default.array,
  loading: _propTypes.default.bool,
  manual: _propTypes.default.bool,
  pageCount: _propTypes.default.number,
  pageIndex: _propTypes.default.number,
  pageOptions: _propTypes.default.arrayOf(_propTypes.default.number),
  pageSize: _propTypes.default.number,
  renderRowSubComponent: _propTypes.default.func,
  showPagination: _propTypes.default.bool,
  showPaginationBottom: _propTypes.default.bool,
  showPaginationTop: _propTypes.default.bool,
  showSkipButtons: _propTypes.default.bool,
  showToggleHideColumns: _propTypes.default.bool,
  tableBodyProps: _propTypes.default.shape(_utils2.tableBodyPropTypes),
  tableCellProps: _propTypes.default.shape(_utils2.tableCellPropTypes),
  tableHeaderProps: _propTypes.default.shape(_utils2.tableHeaderPropTypes),
  tableHeadProps: _propTypes.default.shape(_utils2.tableHeadPropTypes),
  tableProps: _propTypes.default.shape(_utils2.tablePropTypes),
  tableRowProps: _propTypes.default.shape(_utils2.tableRowPropTypes),
  tableWrapperProps: _propTypes.default.shape(_utils2.tableWrapperPropTypes),
  wrapperProps: _propTypes.default.object
};
TableComponent.defaultProps = {
  enableRowExpansion: false,
  fetchData: () => {},
  hiddenColumns: [],
  loading: false,
  manual: false,
  pageCount: 0,
  pageIndex: 0,
  pageOptions: _utils2.defaultPageOptions,
  pageSize: _utils2.defaultPageOptions[0],
  renderRowSubComponent: () => {},
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