import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { grapeUICustomStyle, codeBlockPropTypes } from './utils';

export const CodeBlockComponent = ({
  codeString,
  language,
  style,
  ...props
}) => (
  <SyntaxHighlighter
    language={language}
    style={style}
    {...removeSomeProps(props, Object.keys(codeBlockPropTypes))}
  >
    {codeString}
  </SyntaxHighlighter>
);

CodeBlockComponent.propTypes = {
  codeString: PropTypes.string,
  language: PropTypes.string,
  style: PropTypes.any,
};

CodeBlockComponent.defaultProps = {
  codeString: '',
  language: 'javascript',
  style: grapeUICustomStyle,
};
