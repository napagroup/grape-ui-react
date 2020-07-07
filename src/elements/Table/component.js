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
import {
  getProgressDefaultProps,
  getProgressPropTypes,
} from 'src/elements/Progress';
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

const createTableOptions = props => {
  const {
    columns,
    data,
    hiddenColumns,
    manual,
    manualPageCount,
    pageIndex,
    pageSize,
  } = props;

  const tableOptions = {
    columns,
    data,
    initialState: {
      hiddenColumns,
      pageIndex,
      pageSize,
    },
    manualPagination: manual,
    manualSortBy: manual,
  };
  if (manual) {
    tableOptions.pageCount = manualPageCount;
    tableOptions.initialState = {
      ...tableOptions.initialState,
    };
  }
  return tableOptions;
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
const onChangeToggleHideColumn = (e, toggleHideColumn) => {
  if (e && e.target && e.target.value) {
    const { target: { value } } = e;
    toggleHideColumn(value);
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
    progress,
    progressPlacement,
    progressProps,
    renderRowSubComponent,
    showProgress,
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
  const tableOptions = createTableOptions({
    columns,
    data,
    hiddenColumns,
    manual,
    manualPageCount,
    pageIndex: userPageIndex,
    pageSize: userPageSize,
  });
  // Use the state and functions returned from useTable to build your UI
  const {
    allColumns,
    canNextPage,
    canPreviousPage,
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
  const hiddenColumnsSelectOptions = [];
  const hiddenColumnsSelectValues = [];
  allColumns.forEach(column => {
    hiddenColumnsSelectOptions.push({ label: column.Header, value: column.id });
    hiddenColumnsSelectValues.push(column.isVisible ? column.id : false);
  });
  return (
    <Box {...wrapperProps}>
      <Flex
        alignItems={[null, 'flex-end']}
        flexDirection={['column', 'row']}
        justifyContent="space-between"
      >
        <Hideable isHidden={!showToggleHideColumns}>
          <div>
            <CheckboxField
              controlGroupProps={{ pt: 0 }}
              enableAutoChecking
              hasSelectAll
              name="CheckboxFieldToggleHideColumn"
              onChange={e => {
                onChangeToggleHideColumn(e, toggleHideColumn);
              }}
              onChangeSelectAll={() => toggleHideAllColumns()}
              options={hiddenColumnsSelectOptions}
              optionSelectAll={{ label: 'All', value: true }}
              values={hiddenColumnsSelectValues}
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
        <Hideable isHidden={!tableViewState.paginationTop.visible}>
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
        <StyledTableResponsiveWrapper
          progress={progress}
          progressPlacement={progressPlacement}
          progressProps={progressProps}
          showProgress={showProgress || loading}
        >
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
            </StyledTableBody>
          </StyledTable>
        </StyledTableResponsiveWrapper>
        <Hideable isHidden={!tableViewState.paginationBottom.visible}>
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
  ...getProgressPropTypes,
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
  ...getProgressDefaultProps,
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
