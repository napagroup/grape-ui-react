import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { position } from 'styled-system';

const StyledOverlayComponent = styled('div')`
  ${position}
`;

export function OverlayComponent({ children, ...props }) {
  return (
    <StyledOverlayComponent className="DayPickerInput-OverlayWrapper">
      <div className="DayPickerInput-OverlayWrapper--Offset">
        {children}
      </div>
    </StyledOverlayComponent>
  );
}

OverlayComponent.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string,
};

OverlayComponent.defaultProps = {
  position: 'absolute',
};
