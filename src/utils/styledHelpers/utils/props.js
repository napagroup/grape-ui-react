import PropTypes from 'prop-types';

export const typography = {
  propTypes: {
    bg: PropTypes.string,
    border: PropTypes.string,
    borderRadius: PropTypes.string,
    color: PropTypes.string,
    display: PropTypes.any,
    ellipsis: PropTypes.bool,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.any,
    fontWeight: PropTypes.any,
    hoverColor: PropTypes.string,
    hoverStyle: PropTypes.any,
    italic: PropTypes.bool,
    kerning: PropTypes.any,
    letterSpacing: PropTypes.any,
    lg: PropTypes.bool,
    lineHeight: PropTypes.any,
    sm: PropTypes.bool,
    textAlign: PropTypes.string,
    textDecoration: PropTypes.string,
  },
};

export const spaceProps = {
  propTypes: {
    m: PropTypes.any,
    mb: PropTypes.any,
    ml: PropTypes.any,
    mr: PropTypes.any,
    mt: PropTypes.any,
    mx: PropTypes.any,
    my: PropTypes.any,
    p: PropTypes.any,
    pb: PropTypes.any,
    pl: PropTypes.any,
    pr: PropTypes.any,
    pt: PropTypes.any,
    px: PropTypes.any,
    py: PropTypes.any,
    width: PropTypes.any,
  },
};

export const layoutProps = {
  propTypes: {
    display: PropTypes.any,
    height: PropTypes.any,
    maxHeight: PropTypes.any,
    maxWidth: PropTypes.any,
    minHeight: PropTypes.any,
    minWidth: PropTypes.any,
    size: PropTypes.any,
    verticalAlign: PropTypes.any,
  },
};

export const flexboxProps = {
  propTypes: {
    alignContent: PropTypes.any,
    alignItems: PropTypes.any,
    alignSelf: PropTypes.any,
    flex: PropTypes.any,
    flexBasis: PropTypes.any,
    flexDirection: PropTypes.any,
    flexWrap: PropTypes.any,
    justifyContent: PropTypes.any,
    justifyItems: PropTypes.any,
    justifySelf: PropTypes.any,
    order: PropTypes.any,
  },
};
export const miscProps = {
  propTypes: {
    border: PropTypes.any,
    borderBottom: PropTypes.any,
    borderColor: PropTypes.any,
    borderLeft: PropTypes.any,
    borderRadius: PropTypes.any,
    borderRight: PropTypes.any,
    borderStyle: PropTypes.any,
    borderTop: PropTypes.any,
    opacity: PropTypes.any,
    overflow: PropTypes.any,
  },
};
export const positionProps = {
  propTypes: {
    bottom: PropTypes.any,
    left: PropTypes.any,
    position: PropTypes.any,
    right: PropTypes.any,
    top: PropTypes.any,
    zIndex: PropTypes.any,
  },
};

export const control = {
  propTypes: {
    activeColor: PropTypes.string,
    bg: PropTypes.string,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.string,
    isFocused: PropTypes.bool,
    isRequired: PropTypes.bool,
    padding: PropTypes.string,
    placeholderColor: PropTypes.string,
    plainText: PropTypes.bool,
  },
};
