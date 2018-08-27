import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { passThrough } from 'src/utils/componentHelpers';
import { withStyledSystem } from 'src/decorators';
import { width, display } from 'styled-system';

export const Form = props => {
  const { formInline } = props;
  const overrides = {
    ...props,
    width: !formInline ? '' : 'auto',
    display: !formInline ? '' : 'flex',

  };
  const ProtoForm = withStyledSystem(styled.form``, overrides);
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
