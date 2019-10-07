import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontWeight, space } from 'styled-system';
import {
  colorCore,
  defaultStylesBase,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  spaceProps,
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
  ...spaceProps.propTypes,
  ...typography.propTypes,
  children: PropTypes.any.isRequired,
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
    margin: 0 0 ${gridSchema.gutter};
    ${colorCore}
    ${fontFamilyCore}
    ${fontStyleCore}
    ${getHeaderFontSize}
    ${getHeaderFontWeight}
    ${letterSpacingCore}
    ${lineHeightCore}
    ${textAlignCore}
    ${textDecorationCore}
    ${space}
  `;
};

const Header = headerFactory({ tag: 'h1' });

Header.h1 = Header;

Header.propTypes = {
  display: PropTypes.bool,
  ...typography.propTypes,
};

Header.defaultProps = {
  ...defaultStylesBase,
  display: false,
  fontWeight: defaultStylesBase.fontWeight,
};
for (let i = 2; i <= 6; i++) {
  const subHeaderTag = `h${i}`;
  Header[subHeaderTag] = headerFactory({ tag: subHeaderTag });

  Header[subHeaderTag].propTypes = {
    display: PropTypes.bool,
    ...typography.propTypes,
  };
  Header[subHeaderTag].defaultProps = {
    ...defaultStylesBase,
    display: false,
    fontWeight: defaultStylesBase.fontWeight,
  };
}

export { Header };
