"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableComponent = TableComponent;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0;\n  position: absolute;\n  transform: translate(-12px, 6px);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SortIcon = (0, _styledComponents["default"])(_reactFontawesome.FontAwesomeIcon)(_templateObject());
SortIcon.defaultProps = {
  className: 'sort-icon',
  icon: _freeSolidSvgIcons.faArrowUp,
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
    return /*#__PURE__*/_react["default"].createElement(SortIcon, null);
  }

  return /*#__PURE__*/_react["default"].createElement(SortIcon, {
    icon: column.isSortedDesc ? _freeSolidSvgIcons.faArrowDown : _freeSolidSvgIcons.faArrowUp,
    style: {
      opacity: 1
    }
  });
};

var getRowSubComponent = function getRowSubComponent(enableRowExpansion, renderRowSubComponent, row, visibleColumns) {
  if (!enableRowExpansion) {
    return null;
  }

  return row.isExpanded ? /*#__PURE__*/_react["default"].createElement(_utils2.StyledTableRow, null, /*#__PURE__*/_react["default"].createElement(_utils2.StyledTableCell, {
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

function TableComponent(props) {
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

  var _useTable = (0, _reactTable.useTable)(tableOptions, _reactTable.useSortBy, _reactTable.useExpanded, _reactTable.usePagination),
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


  (0, _react.useEffect)(function () {
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
  var tableViewState = (0, _utils2.getTableViewState)(props);

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
  allColumns.forEach(function (column) {
    hiddenColumnsSelectOptions.push({
      label: column.Header,
      value: column.id
    });

    if (column.isVisible) {
      hiddenColumnsSelectValues.push(column.id);
    }
  });
  return /*#__PURE__*/_react["default"].createElement(_grid.Box, wrapperProps, /*#__PURE__*/_react["default"].createElement(_grid.Flex, {
    alignItems: [null, 'flex-end'],
    flexDirection: ['column', 'row'],
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_utils.Hideable, {
    hide: !showToggleHideColumns
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_forms.CheckboxField, {
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
  }), /*#__PURE__*/_react["default"].createElement(_forms.CheckboxField, {
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
  }))), /*#__PURE__*/_react["default"].createElement(_grid.Flex, {
    justifyContent: "flex-end",
    width: showToggleHideColumns ? 'auto' : 1
  }, /*#__PURE__*/_react["default"].createElement(_typography.Paragraph, {
    mb: 0,
    sm: true,
    textAlign: "right"
  }, "Showing ".concat(page.length, " of about ").concat(pageCount * pageSize, " results")))), /*#__PURE__*/_react["default"].createElement(_utils2.StyledTableWrapper, tableWrapperProps, /*#__PURE__*/_react["default"].createElement(_utils.Hideable, {
    hide: !tableViewState.paginationTop.visible
  }, /*#__PURE__*/_react["default"].createElement(_Paginator.Paginator, {
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
  })), /*#__PURE__*/_react["default"].createElement(_utils2.StyledTableResponsiveWrapper, null, /*#__PURE__*/_react["default"].createElement(_utils2.StyledTable, _extends({}, tableProps, getTableProps()), /*#__PURE__*/_react["default"].createElement(_utils2.StyledTableHeader, tableHeaderProps, headerGroups.map(function (headerGroup, headerGroupIndex) {
    return /*#__PURE__*/_react["default"].createElement(_utils2.StyledTableRow, headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      var finalTableHeaderProps = _objectSpread({}, tableHeadProps, {}, column.getHeaderProps(column.getSortByToggleProps(headerProps)));

      return /*#__PURE__*/_react["default"].createElement(_utils2.StyledTableHead, finalTableHeaderProps, /*#__PURE__*/_react["default"].createElement(_typography.Text, {
        style: {
          position: 'relative'
        }
      }, getCaptionForSortBy(column), column.render('Header')));
    }));
  })), /*#__PURE__*/_react["default"].createElement(_utils2.StyledTableBody, _extends({}, tableBodyProps, getTableBodyProps()), page.map(function (row, i) {
    prepareRow(row);
    var rowSubComponent = getRowSubComponent(enableRowExpansion, renderRowSubComponent, row, visibleColumns);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: "wrapperRowComponent_".concat(row.id)
    }, /*#__PURE__*/_react["default"].createElement(_utils2.StyledTableRow, _extends({}, tableRowProps, row.getRowProps()), row.cells.map(function (cell) {
      return /*#__PURE__*/_react["default"].createElement(_utils2.StyledTableCell, _extends({}, tableCellProps, cell.getCellProps(cellProps)), cell.render('Cell'));
    })), rowSubComponent);
  }), loading ?
  /*#__PURE__*/
  // Use our custom loading state to show a loading indicator
  _react["default"].createElement(_utils2.StyledTableRow, null, /*#__PURE__*/_react["default"].createElement(_utils2.StyledTableCell, {
    colSpan: "10000"
  }, "Loading...")) : []))), /*#__PURE__*/_react["default"].createElement(_utils.Hideable, {
    hide: !tableViewState.paginationBottom.visible
  }, /*#__PURE__*/_react["default"].createElement(_Paginator.Paginator, {
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
  columns: _propTypes["default"].array.isRequired,
  data: _propTypes["default"].array.isRequired,
  enableRowExpansion: _propTypes["default"].bool,
  fetchData: _propTypes["default"].func,
  hiddenColumns: _propTypes["default"].array,
  loading: _propTypes["default"].bool,
  manual: _propTypes["default"].bool,
  pageCount: _propTypes["default"].number,
  pageIndex: _propTypes["default"].number,
  pageOptions: _propTypes["default"].arrayOf(_propTypes["default"].number),
  pageSize: _propTypes["default"].number,
  renderRowSubComponent: _propTypes["default"].func,
  showPagination: _propTypes["default"].bool,
  showPaginationBottom: _propTypes["default"].bool,
  showPaginationTop: _propTypes["default"].bool,
  showSkipButtons: _propTypes["default"].bool,
  showToggleHideColumns: _propTypes["default"].bool,
  tableBodyProps: _propTypes["default"].shape(_utils2.tableBodyPropTypes),
  tableCellProps: _propTypes["default"].shape(_utils2.tableCellPropTypes),
  tableHeaderProps: _propTypes["default"].shape(_utils2.tableHeaderPropTypes),
  tableHeadProps: _propTypes["default"].shape(_utils2.tableHeadPropTypes),
  tableProps: _propTypes["default"].shape(_utils2.tablePropTypes),
  tableRowProps: _propTypes["default"].shape(_utils2.tableRowPropTypes),
  tableWrapperProps: _propTypes["default"].shape(_utils2.tableWrapperPropTypes),
  wrapperProps: _propTypes["default"].object
};
TableComponent.defaultProps = {
  enableRowExpansion: false,
  fetchData: function fetchData() {},
  hiddenColumns: [],
  loading: false,
  manual: false,
  pageCount: 0,
  pageIndex: 0,
  pageOptions: _utils2.defaultPageOptions,
  pageSize: _utils2.defaultPageOptions[0],
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