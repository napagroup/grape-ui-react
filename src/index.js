import { Button } from './elements/Button';
import { grapeHtmlStylesInjector } from './elements/GrapeHtmlStylesInjector';
import * as Typography from './elements/typography';
import { getGlobalStyles } from './global-styles';

module.exports = {
  Button,
  getGlobalStyles,
  grapeHtmlStylesInjector,
  ...Typography,
};

