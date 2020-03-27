import * as colors from 'src/assets/json/colors.json';
import * as fontFamily from 'src/assets/json/fontFamily.json';

export default {
  color: {
    base: colors.black.base,
    baseBackground: colors.white.light,
    border: colors.white.dark,
    codeBackground: colors.white.base,
    codeBase: colors.black.base,
    codeComment: colors.gray.dark,
    codeDeleted: colors.grape.base,
    codeFunction: colors.pink.base,
    codeInserted: colors.teal.light,
    codeKeyword: colors.blue.base,
    codeOperator: colors.orange.dark,
    codeProperty: colors.grape.base,
    codePunctuation: colors.gray.base,
    codeString: colors.teal.base,
    codeVariable: colors.orange.base,
    error: colors.brandDanger.base,
    focus: colors.brandLinkHover.light,
    light: colors.gray.base,
    lightest: colors.gray.light,
    link: colors.brandLink.base,
    linkHover: colors.brandLinkHover.base,
    name: colors.green.base,
    ribbonBackground: colors.orange.base,
    ribbonText: colors.white.light,
    sidebarBackground: colors.white.base,
    type: colors.grape.base,
  },
  fontFamily: {
    base: fontFamily.base,
    monospace: fontFamily.monospace,
  },
};
