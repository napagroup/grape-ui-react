/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useExpanded, useTable, usePagination, useSortBy,
} from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { CheckboxField } from 'src/elements/forms';
import { Box, Flex } from 'src/elements/grid';
import { Paragraph, Text } from 'src/elements/typography';
import { Hideable } from 'src/elements/utils';
import { Paginator } from './Paginator';
import {
  defaultPageOptions,
  getTableViewState,
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableHeader,
  StyledTableResponsiveWrapper,
  StyledTableRow,
  StyledTableWrapper,
  tableBodyPropTypes,
  tableCellPropTypes,
  tableHeadPropTypes,
  tableHeaderPropTypes,
  tablePropTypes,
  tableRowPropTypes,
  tableWrapperPropTypes,
} from './utils';

const SortIcon = styled(FontAwesomeIcon)`
  opacity: 0;
  position: absolute;
  transform: translate(-12px, 6px);
`;

SortIcon.defaultProps = {
  className: 'sort-icon',
  icon: faArrowUp,
  size: 'xs',
};

const getStyles = (props, styleProps) => [
  props, { ...styleProps },
];

const headerProps = (props, { column }) => {
  const nextProps = { ...props };
  const { title } = column;
  if (title) {
    nextProps.title = title;
  }
  return [...getStyles(nextProps, column.styleProps)];
};

const cellProps = (props, { cell }) => getStyles(props, cell.column.styleProps);

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
    showPagination,
  } = props;

  const useTableProps = {
    columns,
    data,
    initialState: {
      hiddenColumns,
      pageIndex,
      pageSize: sanitizePageSize(showPagination, pageSize, data),
    },
    manualPagination: manual,
    manualSortBy: manual,
  };
  if (manual) {
    useTableProps.pageCount = manualPageCount;
    useTableProps.initialState = {
      ...useTableProps.initialState,
    };
  }
  return useTableProps;
};
const getCaptionForSortBy = column => {
  if (!column.canSort) {
    return '';
  }
  if (!column.isSorted) {
    return <SortIcon />;
  }
  return (
    <SortIcon
      icon={column.isSortedDesc ? faArrowDown : faArrowUp}
      style={{ opacity: 1 }}
    />
  );
};

const getRowSubComponent = (
  enableRowExpansion,
  renderRowSubComponent,
  row,
  visibleColumns
) => {
  if (!enableRowExpansion) {
    return null;
  }
  return (row.isExpanded ? (
    <StyledTableRow>
      <StyledTableCell colSpan={visibleColumns.length}>
        {renderRowSubComponent({ row })}
      </StyledTableCell>
    </StyledTableRow>
  ) : null);
};
const onChangeToggleHideColumn = (checkboxFieldArgs, toggleHideColumn) => {
  if (checkboxFieldArgs.length >= 2) {
    const [, e] = checkboxFieldArgs;
    if (e && e.target && e.target.value) {
      const { target: { value } } = e;
      toggleHideColumn(value);
    }
  }
};

export function TableComponent(props) {
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
    wrapperProps,
  } = props;
  const tableOptions = getOptionForUseTable({
    columns,
    data,
    hiddenColumns,
    manual,
    manualPageCount,
    pageIndex: userPageIndex,
    pageSize: userPageSize,
    showPagination,
  });
  // Use the state and functions returned from useTable to build your UI
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
    state: { pageIndex, pageSize, sortBy },
    toggleHideAllColumns,
    toggleHideColumn,
    visibleColumns,
  } = useTable(
    tableOptions,
    useSortBy,
    useExpanded,
    usePagination,
  );
  // Listen for changes in pagination and use the state to fetch our new data
  useEffect(() => {
    if (!manual) {
      return;
    }
    fetchData({
      pageCount,
      pageIndex,
      pageSize,
      sortBy,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manual, pageCount, pageIndex, pageSize, sortBy]);

  const tableViewState = getTableViewState(props);
  const { indeterminate, title } = getToggleHideAllColumnsProps();
  const indetVal = indeterminate === 0 ? ['indeterminate'] : [];
  const indeterminateOptions = [
    { label: 'All', value: 'indeterminate' },
  ];
  const hiddenColumnsSelectOptions = [];
  const hiddenColumnsSelectValues = [];
  allColumns.forEach(column => {
    hiddenColumnsSelectOptions.push({ label: column.Header, value: column.id });
    if (column.isVisible) {
      hiddenColumnsSelectValues.push(column.id);
    }
  });
  return (
    <Box {...wrapperProps}>
      <Flex
        alignItems={[null, 'flex-end']}
        flexDirection={['column', 'row']}
        justifyContent="space-between"
      >
        <Hideable hide={!showToggleHideColumns}>
          <div>
            <CheckboxField
              controlGroupProps={{ pb: 0 }}
              labelText="Display Columns"
              name="toggleHideAll"
              onChange={() => toggleHideAllColumns()}
              options={indeterminateOptions}
              title={title}
              value={indetVal}
              wrapperProps={{ pb: 0 }}
            />
            <CheckboxField
              controlGroupProps={{ pb: 0, pt: 0 }}
              name="CheckboxFieldToggleHideColumn"
              onChange={(...checkboxFieldArgs) => {
                onChangeToggleHideColumn(checkboxFieldArgs, toggleHideColumn);
              }}
              options={hiddenColumnsSelectOptions}
              value={hiddenColumnsSelectValues}
            />
          </div>
        </Hideable>
        <Flex justifyContent="flex-end" width={showToggleHideColumns ? 'auto' : 1}>
          <Paragraph mb={0} sm textAlign="right">
            {`Showing ${page.length} of about ${pageCount * pageSize} results`}
          </Paragraph>
        </Flex>
      </Flex>
      <StyledTableWrapper {...tableWrapperProps}>
        <Hideable hide={!tableViewState.paginationTop.visible}>
          <Paginator
            canNextPage={canNextPage}
            canPreviousPage={canPreviousPage}
            gotoPage={gotoPage}
            menuPlacement="bottom"
            nextPage={nextPage}
            pageCount={pageCount}
            pageIndex={pageIndex}
            pageOptions={pageOptions}
            pageSize={pageSize}
            previousPage={previousPage}
            setPageSize={setPageSize}
            showSkipButtons={showSkipButtons}
          />
        </Hideable>
        <StyledTableResponsiveWrapper>
          <StyledTable {...tableProps} {...getTableProps()}>
            <StyledTableHeader {...tableHeaderProps}>
              {headerGroups.map((headerGroup, headerGroupIndex) => (
                <StyledTableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => {
                    const finalTableHeaderProps = {
                      ...tableHeadProps,
                      ...column.getHeaderProps(column.getSortByToggleProps(headerProps)),
                    };
                    return (
                      <StyledTableHead {...finalTableHeaderProps}>
                        <Text style={{ position: 'relative' }}>
                          {getCaptionForSortBy(column)}
                          {column.render('Header')}
                        </Text>
                      </StyledTableHead>
                    );
                  })}
                </StyledTableRow>
              ))}
            </StyledTableHeader>
            <StyledTableBody {...tableBodyProps} {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                const rowSubComponent = getRowSubComponent(enableRowExpansion, renderRowSubComponent, row, visibleColumns);
                return (
                  <React.Fragment key={`wrapperRowComponent_${row.id}`}>
                    <StyledTableRow {...tableRowProps} {...row.getRowProps()}>
                      {row.cells.map(cell => <StyledTableCell {...tableCellProps} {...cell.getCellProps(cellProps)}>{cell.render('Cell')}</StyledTableCell>)}
                    </StyledTableRow>
                    {rowSubComponent}
                  </React.Fragment>
                );
              })}
              {loading ? (
                // Use our custom loading state to show a loading indicator
                <StyledTableRow>
                  <StyledTableCell colSpan="10000">Loading...</StyledTableCell>
                </StyledTableRow>
              ) : []}
            </StyledTableBody>
          </StyledTable>
        </StyledTableResponsiveWrapper>
        <Hideable hide={!tableViewState.paginationBottom.visible}>
          <Paginator
            canNextPage={canNextPage}
            canPreviousPage={canPreviousPage}
            gotoPage={gotoPage}
            menuPlacement="top"
            nextPage={nextPage}
            pageCount={pageCount}
            pageIndex={pageIndex}
            pageOptions={pageOptions}
            pageSize={pageSize}
            previousPage={previousPage}
            setPageSize={setPageSize}
            showSkipButtons={showSkipButtons}
          />
        </Hideable>
      </StyledTableWrapper>
    </Box>
  );
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
  wrapperProps: PropTypes.object,
};

TableComponent.defaultProps = {
  enableRowExpansion: false,
  fetchData: () => {},
  hiddenColumns: [],
  loading: false,
  manual: false,
  pageCount: 0,
  pageIndex: 0,
  pageOptions: defaultPageOptions,
  pageSize: defaultPageOptions[0],
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
  wrapperProps: {},
};
