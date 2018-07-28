import styled from 'styled-components';

interface ColumnProps {
  width?: number;
  collapsed?: boolean;
}

const Column = styled.div<ColumnProps>`
  position: relative;
  padding: ${p => (p.collapsed ? 0 : '0 20px')};
  min-height: 1px;
  float: left;

  & + &:last-child {
    float: left;
  }
  /* & + &:last-child {
    float: right;
  } */

  /* Column widths */
  width: ${p => (p.width ? `${100 / (12 / p.width)}%` : undefined)};

  /* mobile wide/small tablets */
  @media only screen and (max-width: 767px) {
    width: auto;
    float: none;
    margin-left: 0;
    margin-right: 0;
    padding: 0 30px;

    & + &:last-child {
      float: none;
    }
  }
`;

export default Column;

// TODO: BLOCK GRIDS
