import styled from 'styled-components';
import {
  background,
  border,
  fontWeight,
  layout,
  space,
} from 'styled-system';
import {
  colorCore,
  ellipsisCore,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  textAlignCore,
  textDecorationCore,
} from 'src/utils/styledHelpers';
import { CodeBlockComponent } from './component';
import { codeBlockDefaultProps, codeBlockPropTypes } from './utils';

const CodeBlock = styled(CodeBlockComponent)`
  ${background}
  ${border}
  ${colorCore}
  ${ellipsisCore}
  ${fontSizeCore}
  ${fontStyleCore}
  ${fontWeight}
  ${layout}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${space}
  ${textAlignCore}
  ${textDecorationCore}
  > code {
    ${fontFamilyCore}
  }
`;

CodeBlock.propTypes = {
  ...codeBlockPropTypes,
};

CodeBlock.defaultProps = {
  ...codeBlockDefaultProps,
};

/** @component */
export { CodeBlock };
