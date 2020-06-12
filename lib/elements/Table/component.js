"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.TableComponent = TableComponent;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

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

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context4; (0, _forEach.default)(_context4 = ownKeys(Object(source), true)).call(_context4, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context5; (0, _forEach.default)(_context5 = ownKeys(Object(source))).call(_context5, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  opacity: 0;\n  position: absolute;\n  transform: translate(-12px, 6px);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const SortIcon = (0, _styledComponents.default)(_reactFontawesome.FontAwesomeIcon)(_templateObject());
SortIcon.defaultProps = {
  className: 'sort-icon',
  icon: _freeSolidSvgIcons.faArrowUp,
  size: 'xs'
};

const getStyles = (props, styleProps) => [props, _objectSpread({}, styleProps)];

const headerProps = (props, {
  column
}) => {
  const nextProps = _objectSpread({}, props);

  const title = column.title;

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
  const columns = props.columns,
        data = props.data,
        hiddenColumns = props.hiddenColumns,
        manual = props.manual,
        manualPageCount = props.manualPageCount,
        pageIndex = props.pageIndex,
        pageSize = props.pageSize,
        showPagination = props.showPagination;
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
    useTableProps.initialState = _objectSpread({}, useTableProps.initialState);
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

const onChangeToggleHideColumn = (e, toggleHideColumn) => {
  if (e && e.target && e.target.value) {
    const value = e.target.value;
    toggleHideColumn(value);
  }
};

function TableComponent(props) {
  var _context;

  const columns = props.columns,
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

  const _useTable = (0, _reactTable.useTable)(tableOptions, _reactTable.useSortBy, _reactTable.useExpanded, _reactTable.usePagination),
        allColumns = _useTable.allColumns,
        canNextPage = _useTable.canNextPage,
        canPreviousPage = _useTable.canPreviousPage,
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
  const hiddenColumnsSelectOptions = [];
  const hiddenColumnsSelectValues = [];
  (0, _forEach.default)(allColumns).call(allColumns, column => {
    hiddenColumnsSelectOptions.push({
      label: column.Header,
      value: column.id
    });
    hiddenColumnsSelectValues.push(column.isVisible ? column.id : false);
  });
  return /*#__PURE__*/_react.default.createElement(_grid.Box, wrapperProps, /*#__PURE__*/_react.default.createElement(_grid.Flex, {
    alignItems: [null, 'flex-end'],
    flexDirection: ['column', 'row'],
    justifyContent: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
    hide: !showToggleHideColumns
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_forms.CheckboxField, {
    controlGroupProps: {
      pt: 0
    },
    enableAutoChecking: true,
    hasSelectAll: true,
    name: "CheckboxFieldToggleHideColumn",
    onChange: e => {
      onChangeToggleHideColumn(e, toggleHideColumn);
    },
    onChangeSelectAll: () => toggleHideAllColumns(),
    options: hiddenColumnsSelectOptions,
    optionSelectAll: {
      label: 'All',
      value: true
    },
    values: hiddenColumnsSelectValues
  }))), /*#__PURE__*/_react.default.createElement(_grid.Flex, {
    justifyContent: "flex-end",
    width: showToggleHideColumns ? 'auto' : 1
  }, /*#__PURE__*/_react.default.createElement(_typography.Paragraph, {
    mb: 0,
    sm: true,
    textAlign: "right"
  }, (0, _concat.default)(_context = "Showing ".concat(page.length, " of about ")).call(_context, pageCount * pageSize, " results")))), /*#__PURE__*/_react.default.createElement(_utils2.StyledTableWrapper, tableWrapperProps, /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
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
    var _context2;

    return /*#__PURE__*/_react.default.createElement(_utils2.StyledTableRow, headerGroup.getHeaderGroupProps(), (0, _map.default)(_context2 = headerGroup.headers).call(_context2, column => {
      const finalTableHeaderProps = _objectSpread({}, tableHeadProps, {}, column.getHeaderProps(column.getSortByToggleProps(headerProps)));

      return /*#__PURE__*/_react.default.createElement(_utils2.StyledTableHead, finalTableHeaderProps, /*#__PURE__*/_react.default.createElement(_typography.Text, {
        style: {
          position: 'relative'
        }
      }, getCaptionForSortBy(column), column.render('Header')));
    }));
  })), /*#__PURE__*/_react.default.createElement(_utils2.StyledTableBody, (0, _extends2.default)({}, tableBodyProps, getTableBodyProps()), (0, _map.default)(page).call(page, (row, i) => {
    var _context3;

    prepareRow(row);
    const rowSubComponent = getRowSubComponent(enableRowExpansion, renderRowSubComponent, row, visibleColumns);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: "wrapperRowComponent_".concat(row.id)
    }, /*#__PURE__*/_react.default.createElement(_utils2.StyledTableRow, (0, _extends2.default)({}, tableRowProps, row.getRowProps()), (0, _map.default)(_context3 = row.cells).call(_context3, cell => /*#__PURE__*/_react.default.createElement(_utils2.StyledTableCell, (0, _extends2.default)({}, tableCellProps, cell.getCellProps(cellProps)), cell.render('Cell')))), rowSubComponent);
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