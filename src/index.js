import { Button } from './elements/Button';
import { grapeHtmlStylesInjector } from './elements/GrapeHtmlStylesInjector';
import * as Typography from './elements/typography';
import { getGlobalStyles } from './global-styles';
import * as styledComponents from 'styled-components';

module.exports = {
  Button,
  getGlobalStyles,
  grapeHtmlStylesInjector,
  ...Typography,
  styledComponents,
};

