import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField } from 'src';

function TocToggle({ children }) {
  const [showToc, setShowToc] = useState(false);
  return (
    <Box p={1} width={1}>
      <Button
        display={['block', 'none']}
        m="auto"
        onClick={() => setShowToc(!showToc)}
        width={1}
      >
        {showToc ? 'Hide ' : 'Show '}
        Table of Contents
      </Button>
      <Box display={[showToc ? 'block' : 'none', 'block']}>
        {children}
      </Box>
    </Box>
  );
}

TocToggle.propTypes = {
  children: PropTypes.node.isRequired,
};


const TableOfContentsRenderer = ({
  children,
  searchTerm,
  onSearchTermChange,
}) => (
  <TocToggle>
    <TextField
      aria-label="Filter by name"
      onChange={event => onSearchTermChange(event.target.value)}
      placeholder="Filter by name"
      value={searchTerm}
    />
    {children}
  </TocToggle>
);

TableOfContentsRenderer.propTypes = {
  children: PropTypes.node,
  onSearchTermChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

TableOfContentsRenderer.defaultProps = {
  children: '',
};

export default TableOfContentsRenderer;
