import {
  border,
  compose,
  layout,
  position,
  space,
} from 'styled-system';
import { defaultStylesBase, resolveColor } from 'src/utils/styledHelpers';
import { getGlobalOverrides } from 'src/global-styles';

const globalOverrides = getGlobalOverrides();

export const defaultTableStylesBase = compose(
  border,
  layout,
  position,
  space,
);

export const defaultTableProps = {
  width: 1,
};

export const defaultTableBodyProps = {};

export const defaultTableCellProps = {
  ...defaultStylesBase,
  borderBottomColor: resolveColor('white.dark', globalOverrides),
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  px: [2, 3],
  py: 2,
  verticalAlign: 'top',
};

export const defaultTableHeadProps = {
  ...defaultStylesBase,
  borderBottomColor: resolveColor('white.dark', globalOverrides),
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  fontWeight: 'bold',
  px: [2, 3],
  py: 2,
  verticalAlign: 'bottom',
};

export const defaultTableHeaderProps = {};

export const defaultTableResponsiveWrapperProps = {
  overflowX: 'auto',
};

export const defaultTableRowProps = {
};

export const defaultTableStripedProps = {
  even: {
    bg: 'white',
  },
  odd: {
    bg: 'white.dark',
  },
};

export const defaultTableWrapperProps = {
  borderColor: resolveColor('white.dark', globalOverrides),
  borderRadius: 2,
  borderStyle: 'solid',
  borderWidth: 1,
  mb: 1,
  width: 1,
};
