import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { codePropTypes, grapeUICustomStyle } from './utils';

export const CodeComponent = ({
  codeString,
  language,
  style,
  ...props
}) => (
  <SyntaxHighlighter
    language={language}
    style={style}
    {...removeSomeProps(props, Object.keys(codePropTypes))}
  >
    {codeString}
  </SyntaxHighlighter>
);

CodeComponent.propTypes = {
  codeString: PropTypes.string,
  language: PropTypes.string,
  style: PropTypes.any,
};

CodeComponent.defaultProps = {
  codeString: '',
  language: 'javascript',
  style: grapeUICustomStyle,
};
