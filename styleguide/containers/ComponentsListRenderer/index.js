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

  const tocUseState = useState(!!initialOpen);
  const [open, setOpen] = tocMode !== 'collapse' ? [true, () => {}] : tocUseState;
  return (
    <Box
      key={href}
      ml={2}
    >
      <Link
        color={selected ? 'black' : 'brandLink'}
        fontWeight={selected ? 'bold' : 'inherit'}
        href={href}
        onClick={() => setOpen(!open)}
        target={shouldOpenInNewTab ? '_blank' : undefined}
      >
        {visibleName}
      </Link>
      {open || forcedOpen ? content : null}
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
