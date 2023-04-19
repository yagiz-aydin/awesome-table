import styled from 'styled-components';

export const Table = styled.table`
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: white;
  @media (max-width: 767px) {
      display: flex;
      border-collapse: none;
  }
`;

export const TableHead = styled.thead`
  color: #ffffff;
  background: #1bd3dadd;;
  th:nth-child(odd) {
    color: #ffffff;
  }
`;

export const HeadCell = styled.th`
  text-align: center;
  color: #ffffff;
  background: #cf95954a;
  padding: 8px;
  @media (max-width: 767px) {
      display: block;
  }
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background: #f8f8f8;
  }
`;

export const BodyRow = styled.tr`
  @media (max-width: 767px) {
      display: table-cell
  }
`;

export const BodyCell = styled.td`
  text-align: center;
  border-right: 1px solid #f8f8f8;
  padding: 8px;
  font-size: 12px;
  @media (max-width: 767px) {
      display: block
  }
`;
