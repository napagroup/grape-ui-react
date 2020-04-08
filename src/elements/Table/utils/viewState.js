export const getPaginationViewState = props => {
  const {
    showPagination,
    showPaginationBottom,
    showPaginationTop,
  } = props;
  return {
    paginationBottom: {
      visible: (showPagination && showPaginationBottom) || (showPagination && !showPaginationTop),
    },
    paginationTop: {
      visible: showPagination && showPaginationTop,
    },
  };
};
export const getTableViewState = props => ({
  ...getPaginationViewState(props),
});
