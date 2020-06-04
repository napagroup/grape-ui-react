import React from 'react';
import { Box } from 'src/elements/grid';
import { Card } from 'src/elements/Card';

export const CardActions = ({
  cardActions,
  cardActionsProps,
  cardActionsLeft,
  cardActionsLeftProps,
  cardActionsRight,
  cardActionsRightProps,
  cardPadding,
}) => {
  if (cardActions || cardActionsLeft) {
    return (
      <Card.Actions
        justifyContent="space-between"
        pb={cardPadding}
        {...cardActionsProps}
      >
        {cardActions}
        <Box {...cardActionsLeftProps}>
          {cardActionsLeft}
        </Box>
        <Box {...cardActionsRightProps}>
          {cardActionsRight}
        </Box>
      </Card.Actions>
    );
  }
  if (cardActionsRight) {
    return (
      <Card.Actions
        justifyContent="flex-end"
        pb={cardPadding}
        {...cardActionsProps}
      >
        <Box {...cardActionsRightProps}>
          {cardActionsRight}
        </Box>
      </Card.Actions>
    );
  }
  return '';
};
