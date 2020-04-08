import styled from 'styled-components';
import { flexbox } from 'styled-system';
import { TableComponent } from './component';
import { defaultTableStylesBase } from './utils';

const Table = styled(TableComponent)`
  ${defaultTableStylesBase}
  ${flexbox}
`;

/** @component */
export { Table };
