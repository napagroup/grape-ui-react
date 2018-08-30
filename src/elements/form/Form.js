import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { passThrough } from 'src/utils/componentHelpers';
import { withStyledSystem } from 'src/decorators';
import { width, display } from 'styled-system';
import { getGlobalStyles } from 'src/global-styles';
import { getScaledSize } from 'src/elements/typography/utils';

const { grid: gridSchema } = getGlobalStyles();

const margin = getScaledSize(gridSchema.gutter, 0.5);

export const Form = props => {
  const { formInline } = props;
  const overrides = {
    ...props,
    width: !formInline ? '' : 'auto',
    display: !formInline ? '' : 'flex',

  };
  const ProtoForm = withStyledSystem(styled.form`
      ${!formInline ? '' : `
        > * {
          margin: 0 ${margin};
          &:first-child { margin-left: 0; }
          &:last-child { margin-right: 0; }
        }
      `}
    `, overrides);
  const propsToPassThru = {
    ...passThrough(Form, overrides),
  };
  return <ProtoForm {...propsToPassThru} />;
};

Form.propTypes = {
  formInline: PropTypes.bool,
  ...width.propTypes,
  ...display.propTypes,
};

Form.defaultProps = {
  formInline: false,
};
