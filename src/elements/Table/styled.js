import styled from 'styled-components';
import { flexbox } from 'styled-system';
import { withHideable } from 'src/elements/utils/Hideable';
import { TableComponent } from './component';
import { defaultTableStylesBase } from './utils';

const Table = styled(withHideable(TableComponent))`
  ${defaultTableStylesBase}
  ${flexbox}
`;

/** @component */
export { Table };
