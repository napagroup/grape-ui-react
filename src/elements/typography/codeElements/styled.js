import styled from 'styled-components';
import {
  background,
  border,
  fontWeight,
  layout,
  space,
} from 'styled-system';
import { withHideable } from 'src/elements/utils/Hideable';
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
import { CodeComponent } from './component';
import { codeDefaultProps, codePropTypes } from './utils';

const Code = styled(withHideable(CodeComponent))`
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

Code.propTypes = {
  ...codePropTypes,
};

Code.defaultProps = {
  ...codeDefaultProps,
};

const CodeBlock = styled(withHideable(Code))``;

CodeBlock.propTypes = {
  ...codePropTypes,
};

CodeBlock.defaultProps = {
  ...codeDefaultProps,
  display: 'block',
  my: [1, null, 2],
  overflowX: 'auto',
  p: [1, 2, 3],
};

/** @component */
export { Code, CodeBlock };
