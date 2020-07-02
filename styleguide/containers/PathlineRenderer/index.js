import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { Button, Code, Flex } from 'src';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PathlineRenderer = ({
  children,
}) => (
  <Flex alignItems="Center" mt={-3}>
    <Code code={children} />
    <Button
      color="gray"
      onClick={() => children && copy(children.toString())}
      sm
      title="Copy to clipboard"
    >
      <FontAwesomeIcon icon={faCopy} />
    </Button>
  </Flex>
);

PathlineRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PathlineRenderer;
