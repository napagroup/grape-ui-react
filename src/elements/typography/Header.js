import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import { resolveColor } from '../../utils/componentHelpers';
import * as fontSizeSchema from '../../assets/json/fontSize.json';

const headerFactory = ({ props, tag = 'h1' }) => {
  const { color, display, ...otherProps } = props;
  let fontSizeSchemaVariable = fontSizeSchema;
  if (display) { fontSizeSchemaVariable = fontSizeSchema.display }
  const overrides = {
    ...props,
    colorBase: resolveColor(color),
    fontSizeBase: fontSizeSchemaVariable[tag],
    fontWeight: display ? '300' : 'inherit',
  };
  const baseStyles = textStylesBase(overrides);
  const Primitive = styled[tag]`
    ${baseStyles}
  `;
  return <Primitive {...otherProps} />;
};

headerFactory.propTypes = {
  color: PropTypes.string,
  display: PropTypes.bool,
  props: PropTypes.any.isRequired,
  tag: PropTypes.string,
};

headerFactory.defaultProps = {
  color: 'inherit',
  display: false,
  tag: 'h1',
};

const Header = props => headerFactory({ props });

Header.h1 = Header;
Header.h2 = props => headerFactory({ props, tag: 'h2' });
Header.h3 = props => headerFactory({ props, tag: 'h3' });
Header.h4 = props => headerFactory({ props, tag: 'h4' });
Header.h5 = props => headerFactory({ props, tag: 'h5' });
Header.h6 = props => headerFactory({ props, tag: 'h6' });
export { Header };
