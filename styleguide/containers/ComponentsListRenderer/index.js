import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Link } from 'src';
import { useStyleGuideContext } from 'rsg-components/Context';

const ComponentsListRenderer = ({
  items,
}) => (
  <Flex flexDirection="column">
    {items.map(item => (
      <ComponentsListSectionRenderer key={item.slug} {...item} />
    ))}
  </Flex>
);

ComponentsListRenderer.propTypes = {
  items: PropTypes.array.isRequired,
  visibleName: PropTypes.string,
};

ComponentsListRenderer.defaultProps = {
  visibleName: '',
};

const getContent = (open, tocMode, forcedOpen, content) => {
  const isOpen = (tocMode !== 'collapse' ? true : open) || forcedOpen;
  if (isOpen) {
    return content;
  }
  return null;
};

const getLinkProps = (href, open, setOpen, selected, shouldOpenInNewTab) => ({
  color: selected ? 'black' : 'brandLink',
  fontWeight: selected ? 'bold' : 'inherit',
  href,
  onClick: () => setOpen(!open),
  target: shouldOpenInNewTab ? '_blank' : undefined,
});

const ComponentsListSectionRenderer = ({
  content,
  forcedOpen,
  href,
  initialOpen,
  selected,
  shouldOpenInNewTab,
  visibleName,

}) => {
  const {
    config: { tocMode },
  } = useStyleGuideContext();

  const [open, setOpen] = useState(!!initialOpen);

  return (
    <Box
      key={href}
      ml={2}
    >
      <Link
        {...getLinkProps(href, open, setOpen, selected, shouldOpenInNewTab)}
      >
        {visibleName}
      </Link>
      {getContent(open, tocMode, forcedOpen, content)}
    </Box>
  );
};

ComponentsListSectionRenderer.propTypes = {
  content: PropTypes.any,
  forcedOpen: PropTypes.bool,
  href: PropTypes.string,
  initialOpen: PropTypes.bool,
  selected: PropTypes.bool,
  shouldOpenInNewTab: PropTypes.bool,
  visibleName: PropTypes.string,
};

ComponentsListSectionRenderer.defaultProps = {
  content: '',
  forcedOpen: false,
  href: '',
  initialOpen: true,
  selected: false,
  shouldOpenInNewTab: false,
  visibleName: '',
};

export default ComponentsListRenderer;
