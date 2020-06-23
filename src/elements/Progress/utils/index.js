import { resolveColor } from 'src/utils/styledHelpers';
import { getGlobalOverrides } from 'src/global-styles';

export const makeColorResolver = (styleName, propName) => props => ({ [styleName]: resolveColor(props[propName], getGlobalOverrides(props)) });
