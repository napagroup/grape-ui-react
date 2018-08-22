import React from 'react';
import PropTypes from 'prop-types';

export class GrapeThemeProvider extends React.Component {
  getChildContext() {
    return {
      theme: this.props.theme,
    };
  }

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

GrapeThemeProvider.childContextTypes = {
  theme: PropTypes.any.isRequired,
};

GrapeThemeProvider.propTypes = {
  children: PropTypes.any.isRequired,
  theme: PropTypes.any.isRequired,
};
