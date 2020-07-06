import PropTypes from 'prop-types';

export const cardActionsBasePropTypes = {
  cardActions: PropTypes.node,
  cardActionsLeft: PropTypes.node,
  cardActionsLeftProps: PropTypes.object,
  cardActionsProps: PropTypes.object,
  cardActionsRight: PropTypes.node,
  cardActionsRightProps: PropTypes.object,
};

export const cardActionsBaseDefaultProps = {
  cardActions: '',
  cardActionsLeft: '',
  cardActionsLeftProps: {},
  cardActionsProps: {},
  cardActionsRight: '',
  cardActionsRightProps: {},
};

export const cardBasePropTypes = {
  cardPadding: PropTypes.any,
};

export const cardBaseDefaultProps = {
  cardPadding: 3,
};

export const cardBodyBasePropTypes = {
  cardBody: PropTypes.node,
  cardBodyProps: PropTypes.object,
};

export const cardBodyBaseDefaultProps = {
  cardBody: '',
  cardBodyProps: {},
};

export const cardHeaderBasePropTypes = {
  cardHeaderProps: PropTypes.object,
  cardSubtitle: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  cardSubtitleProps: PropTypes.object,
  cardThumbnail: PropTypes.node,
  cardThumbnailProps: PropTypes.object,
  cardTitle: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  cardTitleContainerProps: PropTypes.object,
  cardTitleProps: PropTypes.object,
};

export const cardHeaderBaseDefaultProps = {
  cardHeaderProps: {},
  cardSubtitle: '',
  cardSubtitleProps: {},
  cardThumbnail: '',
  cardThumbnailProps: {},
  cardTitle: '',
  cardTitleContainerProps: {},
  cardTitleProps: {},
};

export const cardInnerBasePropTypes = {
  cardInnerProps: PropTypes.object,
};

export const cardInnerBaseDefaultProps = {
  cardInnerProps: {},
};

export const cardRichMediaBasePropTypes = {
  cardRichMedia: PropTypes.node,
  cardRichMediaProps: PropTypes.object,
};

export const cardRichMediaBaseDefaultProps = {
  cardRichMedia: '',
  cardRichMediaProps: {},
};

export const cardSecondaryMediaBasePropTypes = {
  cardSecondaryMedia: PropTypes.node,
  cardSecondaryMediaProps: PropTypes.object,
};

export const cardSecondaryMediaBaseDefaultProps = {
  cardSecondaryMedia: '',
  cardSecondaryMediaProps: {},
};

export const cardPropTypes = {
  ...cardActionsBasePropTypes,
  ...cardBasePropTypes,
  ...cardBodyBasePropTypes,
  ...cardHeaderBasePropTypes,
  ...cardInnerBasePropTypes,
  ...cardRichMediaBasePropTypes,
  ...cardSecondaryMediaBasePropTypes,
  children: PropTypes.node,
  isHidden: PropTypes.bool,
  showProgress: PropTypes.bool,
};

export const cardDefaultProps = {
  ...cardActionsBaseDefaultProps,
  ...cardBaseDefaultProps,
  ...cardBodyBaseDefaultProps,
  ...cardHeaderBaseDefaultProps,
  ...cardInnerBaseDefaultProps,
  ...cardRichMediaBaseDefaultProps,
  ...cardSecondaryMediaBaseDefaultProps,
  background: 'white',
  border: '1px solid #ddd',
  borderRadius: 4,
  children: '',
  isHidden: false,
  mb: [1, null, 2],
  showProgress: false,
};
