import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'src/elements/Button';
import { Form, SelectField, TextField } from 'src/elements/forms';
import { Box, Flex } from 'src/elements/grid';
import { Hideable } from 'src/elements/utils';
import { Text } from 'src/elements/typography';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { defaultPageOptions } from '../utils';

const getCaptionForItemsPerPage = pageSize => `Show ${pageSize}`;

const getCaptionForPage = pageVm => {
  const { pageCount, pageIndex } = pageVm;
  return `Page ${pageIndex + 1} of ${pageCount}`;
};

export function Paginator(props) {
  const {
    canPreviousPage,
    canNextPage,
    gotoPage,
    menuPlacement,
    nextPage,
    pageCount,
    pageIndex,
    pageOptions,
    pageSize,
    previousPage,
    setPageSize,
    showSkipButtons,
  } = props;

  const [pageVm, setPageVm] = useState({
    pageCount, pageIndex, pageOptions, pageSize,
  });

  const pageSelectOptions = React.useMemo(() => pageOptions.map(valuePageSize => ({ label: getCaptionForItemsPerPage(valuePageSize), value: valuePageSize })), [pageOptions]);
  const {
    control,
    setValue,
  } = useForm({
    defaultValues: {
      jumpToPage: pageVm.pageIndex + 1,
      selectedPageOption: pageSelectOptions[pageOptions.indexOf(pageSize)],
    },
  });
  useEffect(() => {
    setPageVm({
      pageCount,
      pageIndex,
      pageOptions,
      pageSize,
    });
    setValue('jumpToPage', pageIndex + 1);
    setValue('selectedPageOption', pageSelectOptions[pageOptions.indexOf(pageSize)]);
  }, [pageCount, pageIndex, pageOptions, pageSelectOptions, pageSize, setValue]);

  return (
    <Form role="form">
      <Flex
        alignItems="center"
        data-testid="paginator"
        flexDirection={['column-reverse', 'row']}
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        py={1}
      >
        <Flex>
          <Box flex={1} m={1} maxWidth={120}>
            <Controller
              as={<TextField />}
              control={control}
              controlGroupProps={{ pb: 0 }}
              labelText="Jump to Page"
              name="jumpToPage"
              onChange={([e]) => {
                const nextGotoPage = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(nextGotoPage);
              }}
              sm
              type="number"
            />
          </Box>
          <Box flex={1} maxWidth={120} mx={[1, 2]} my={1}>
            <Controller
              as={<SelectField />}
              control={control}
              controlGroupProps={{ pb: 0 }}
              labelText="Rows Per Page"
              menuPlacement={menuPlacement}
              name="selectedPageOption"
              onChange={([selected]) => {
                setPageSize(Number(selected.value));
                return selected;
              }}
              options={pageSelectOptions}
              sm
            />
          </Box>
        </Flex>
        <Flex alignItems="center" flexDirection={['column', 'row']} my={1}>
          <Text mx={[1, 2]} sm>
            {getCaptionForPage(pageVm)}
          </Text>
          <Box mx={1}>
            <Hideable hide={!showSkipButtons}>
              <Button data-testid="gotoFirstPage" disabled={!canPreviousPage} onClick={() => gotoPage(0)} role="button">
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
              </Button>
            </Hideable>
            <Button data-testid="gotoPreviousPage" disabled={!canPreviousPage} onClick={() => previousPage()} role="button">
              <FontAwesomeIcon icon={faAngleLeft} />
            </Button>
            <Button data-testid="gotoNextPage" disabled={!canNextPage} onClick={() => nextPage()} role="button">
              <FontAwesomeIcon icon={faAngleRight} />
            </Button>
            <Hideable hide={!showSkipButtons}>
              <Button data-testid="gotoLastPage" disabled={!canNextPage} onClick={() => gotoPage(pageCount - 1)} role="button">
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </Button>
            </Hideable>
          </Box>
        </Flex>
      </Flex>
    </Form>
  );
}

Paginator.propTypes = {
  canNextPage: PropTypes.bool,
  canPreviousPage: PropTypes.bool,
  gotoPage: PropTypes.func,
  menuPlacement: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  nextPage: PropTypes.func,
  pageCount: PropTypes.number,
  pageIndex: PropTypes.number,
  pageOptions: PropTypes.arrayOf(PropTypes.number),
  pageSize: PropTypes.number,
  previousPage: PropTypes.func,
  setPageSize: PropTypes.func,
  showSkipButtons: PropTypes.bool,
};
Paginator.defaultProps = {
  canNextPage: false,
  canPreviousPage: false,
  gotoPage: () => {},
  menuPlacement: 'bottom',
  nextPage: () => {},
  pageCount: 0,
  pageIndex: 0,
  pageOptions: defaultPageOptions,
  pageSize: defaultPageOptions[0],
  previousPage: () => {},
  setPageSize: () => {},
  showSkipButtons: false,
};
