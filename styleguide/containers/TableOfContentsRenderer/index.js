import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField } from 'src';

const tocMaxWidth = [null, 176.05];
const tocWidth = [1, null, tocMaxWidth];

function TocToggle({ children }) {
  const [showToc, setShowToc] = useState(false);
  return (
    <Box
      maxWidth={tocMaxWidth}
      width={tocWidth}
    >
      <Button
        display={['block', 'none']}
        m="auto"
        onClick={() => setShowToc(!showToc)}
        width={1}
      >
        {showToc ? 'Hide ' : 'Show '}
        Table of Contents
      </Button>
      <Box display={[showToc ? 'block' : 'none', 'block']} onClick={() => setShowToc(!showToc)}>
        {children}
        <Box display={['block', 'none']} my={4}>
          <hr />
        </Box>
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
    <Box ml={-2}>
      {children}
    </Box>
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
