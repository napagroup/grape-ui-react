import * as globals from '../configs/global-styles.json';

export const generateGlobalStyles = overrides => {
    return {
        ...globals,
        ...overrides,
    };
};

export const getDefaultGlobalStyles = () => ({ ...globals });
