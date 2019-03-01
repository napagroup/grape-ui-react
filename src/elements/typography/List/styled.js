import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';
import { fontWeight } from 'styled-system';
import {
  colorCore,
  defaultStylesBase,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  scaleFont,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';

const { grid: gridSchema } = getGlobalStyles();

const inlineStyle = props => {
  const style = `
    > li {
      display: inline-block;
      &:not(:last-child) {
        margin-right: ${scaleFont(gridSchema.gutter, 0.5)};
      }
    }
  `;
  return `${props.inline ? style : ''}`;
};

const paddingLeft = props => `padding-left:  ${(props.unstyled || props.inline) ? '0' : '2.5rem'};`;
const listStyle = props => `${props.unstyled ? '> li { list-style: none; }' : ''}`;
const margin = props => `margin: 0 0 ${gridSchema.gutter};`;
const listComponentPropsToTrim = {
  inline: PropTypes.bool,
  ...typography.propTypes,
  unstyled: PropTypes.bool,
};
const listFactory = factoryProps => {
  const { tag } = factoryProps;
  const ListComponent = ({
    children, ...props
  }) => React.createElement(tag, removeSomeProps(props, Object.keys(listComponentPropsToTrim)), children);
  ListComponent.propTypes = {
    children: PropTypes.any.isRequired,
  };

  return styled(ListComponent)`
    ${colorCore}
    ${fontFamilyCore}
    ${fontSizeCore}
    ${fontWeight}
    ${letterSpacingCore}
    ${lineHeightCore}
    ${fontStyleCore}
    ${textAlignCore}
    ${textDecorationCore}
    ${margin}
    ${paddingLeft}
    ${listStyle}
    ${inlineStyle}
    `;
};

const List = listFactory({ tag: 'ul' });
List.ul = List;
List.ol = listFactory({ tag: 'ol' });
List.propTypes = {
  inline: PropTypes.bool,
  ...typography.propTypes,
  unstyled: PropTypes.bool,
};
List.defaultProps = {
  ...defaultStylesBase,
};
export { List };
