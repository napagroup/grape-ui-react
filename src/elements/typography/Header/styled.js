import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontWeight } from 'styled-system';
import {
  colorCore,
  defaultStylesBase,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import { getGlobalStyles } from 'src/global-styles';
import { removeSomeProps } from 'src/utils/componentHelpers';

const { fontSize: fontSizeSchema, grid: gridSchema } = getGlobalStyles();

const getHeaderFontSizeFromTag = factoryProps => {
  const { tag: factoryPropsTag } = factoryProps;
  const tag = factoryPropsTag || 'h1';
  const getHeaderFontSizeMemoized = props => {
    const { display } = props;
    const overrides = {
      ...props,
      fontSize: display ? fontSizeSchema.display[tag] : fontSizeSchema[tag],
    };
    return fontSizeCore(overrides);
  };
  return getHeaderFontSizeMemoized;
};

const getHeaderFontWeight = props => {
  const {
    display, fontWeight: fontWeightFromProps,
  } = props;
  const overrides = {
    ...props,
    fontWeight: display ? '300' : fontWeightFromProps || defaultStylesBase.fontWeight,
  };
  return fontWeight(overrides);
};
const propsToTrim = {
  children: PropTypes.any.isRequired,
  ...typography.propTypes,
  display: PropTypes.bool,
};

const headerFactory = factoryProps => {
  const { tag } = factoryProps;
  const HeaderComponent = ({
    children, ...props
  }) => React.createElement(tag, removeSomeProps(props, Object.keys(propsToTrim)), children);
  // This is stated here strictly as a interface reference. Unfortunately as this component is dynamically created there is no propType required or defaultProps enforced.
  HeaderComponent.propTypes = {
    children: PropTypes.any.isRequired,
  };
  const getHeaderFontSize = getHeaderFontSizeFromTag(factoryProps);
  return styled(HeaderComponent)`
    ${colorCore}
    ${fontFamilyCore}
    ${fontStyleCore}
    ${getHeaderFontSize}
    ${getHeaderFontWeight}
    ${letterSpacingCore}
    ${lineHeightCore}
    ${textAlignCore}
    ${textDecorationCore}
    margin: 0 0 ${gridSchema.gutter};
  `;
};

const Header = headerFactory({ tag: 'h1' });

Header.h1 = Header;
Header.h2 = headerFactory({ tag: 'h2' });
Header.h3 = headerFactory({ tag: 'h3' });
Header.h4 = headerFactory({ tag: 'h4' });
Header.h5 = headerFactory({ tag: 'h5' });
Header.h6 = headerFactory({ tag: 'h6' });

Header.propTypes = {
  display: PropTypes.bool,
  ...typography.propTypes,
};

Header.defaultProps = {
  ...defaultStylesBase,
  display: false,
  fontWeight: defaultStylesBase.fontWeight,
};
export { Header };
