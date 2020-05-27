import React from 'react';
import PropTypes from 'prop-types';
import { Code } from 'src';

const CodeRenderer = ({ children }) => (
	<Code codeString={children} PreTag="span" />
);

CodeRenderer.propTypes = {
	children: PropTypes.node.isRequired,
};

export default CodeRenderer;
