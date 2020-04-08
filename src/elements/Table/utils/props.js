import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { typography } from 'src/utils/styledHelpers';

export const defaultTableStylesPropsToTrim = [
  ...Object.keys(propTypes.border),
  ...Object.keys(propTypes.layout),
  ...Object.keys(propTypes.space),
];

const defaultTableStylesBasePropTypes = {
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.space,
};

export const defaultTableStripedPropTypes = {
  even: PropTypes.shape({
    bg: PropTypes.string,
  }),
  odd: PropTypes.shape({
    bg: PropTypes.string,
  }),
};

export const tablePropTypes = {
  ...typography.propTypes,
  ...defaultTableStylesBasePropTypes,
};

export const tableBodyPropTypes = {};

export const tableCellPropTypes = {
  ...defaultTableStylesBasePropTypes,
  ...propTypes.fontWeight,
};

export const tableHeadPropTypes = {
  ...defaultTableStylesBasePropTypes,
  ...propTypes.fontWeight,
};

export const tableHeaderPropTypes = {
  ...defaultTableStylesBasePropTypes,
};

export const tableResponsiveWrapperPropTypes = {};

export const tableRowPropTypes = {
  ...defaultTableStylesBasePropTypes,
};

export const tableWrapperPropTypes = {
  ...typography.propTypes,
  ...propTypes.border,
};
