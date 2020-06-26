import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontWeight, space } from 'styled-system';
import {
  colorCore,
  defaultStylesBase,
  ellipsisCore,
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
import { withHideable } from 'src/elements/utils/Hideable';

const { fontSize: fontSizeSchema, grid: gridSchema } = getGlobalStyles();

const getHeaderFontSizeFromTag = factoryProps => {
  const { tag: factoryPropsTag } = factoryProps;
  const tag = factoryPropsTag || 'h1';
  const getHeaderFontSizeMemoized = props => {
    const { displayHeader } = props;
    const overrides = {
      ...props,
      fontSize: displayHeader ? fontSizeSchema.displayHeader[tag] : fontSizeSchema[tag],
    };
    return fontSizeCore(overrides);
  };
  return getHeaderFontSizeMemoized;
};

const getHeaderFontWeight = props => {
  const {
    displayHeader, fontWeight: fontWeightFromProps,
  } = props;
  const overrides = {
    ...props,
    fontWeight: displayHeader ? '300' : fontWeightFromProps || defaultStylesBase.fontWeight,
  };
  return fontWeight(overrides);
};
const propsToTrim = {
  ...spaceProps.propTypes,
  ...typography.propTypes,
  children: PropTypes.any.isRequired,
  displayHeader: PropTypes.bool,
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
  return styled(withHideable(HeaderComponent))`
    ${colorCore}
    ${ellipsisCore}
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

for (let i = 2; i <= 6; i++) {
  const subHeaderTag = `h${i}`;
  Header[subHeaderTag] = headerFactory({ tag: subHeaderTag });

  Header[subHeaderTag].propTypes = {
    displayHeader: PropTypes.bool,
    isHidden: PropTypes.bool,
    ...typography.propTypes,
  };
  Header[subHeaderTag].defaultProps = {
    ...defaultStylesBase,
    displayHeader: false,
    fontWeight: defaultStylesBase.fontWeight,
    isHidden: false,
    mb: gridSchema.gutter,
    mt: 0,
  };
}

Header.propTypes = {
  ...typography.propTypes,
  displayHeader: PropTypes.bool,
  isHidden: PropTypes.bool,
};

Header.defaultProps = {
  ...defaultStylesBase,
  displayHeader: false,
  fontWeight: defaultStylesBase.fontWeight,
  isHidden: false,
  mb: gridSchema.gutter,
  mt: 0,
};

/** @component */
export { Header };
