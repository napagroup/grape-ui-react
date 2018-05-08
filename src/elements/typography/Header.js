import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import * as fontSizeObject from '../../assets/json/fontSize.json';

export const Header = props => {
  const { h2, h3, h4, h5, h6, ...otherProps } = props;
  let headingElement = 'h1';
  let headingFontSize = fontSizeObject.h1;
  if (h2) {
    headingElement = 'h2';
    headingFontSize = fontSizeObject.h2;
  } else if (h3) {
    headingElement = 'h3';
    headingFontSize = fontSizeObject.h3;
  } else if (h4) {
    headingElement = 'h4';
    headingFontSize = fontSizeObject.h4;
  } else if (h5) {
    headingElement = 'h5';
    headingFontSize = fontSizeObject.h5;
  } else if (h6) {
    headingElement = 'h6';
    headingFontSize = fontSizeObject.h6;
  }
  const overrides = {
    ...props,
    fontSizeBase: headingFontSize,
  };
  const actualBase = textStylesBase(overrides);
  const ProtoHeader = styled[headingElement]`
    ${actualBase}
  `;
  return <ProtoHeader {...otherProps} />;
};

Header.propTypes = {
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
};

Header.defaultProps = {
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false,
};
