import styled from 'styled-components';
import { ButtonProps } from './types';

export const TableContainer = styled.div`
  border-radius: 12px;
  background: white;
`

export const Table = styled.table`
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
  background: #474747;
  th:nth-child(odd) {
    color: #ffffff;
  }
`;

export const HeadCell = styled.th`
  text-align: center;
  color: #ffffff;
  padding: 8px;
  @media (max-width: 767px) {
      display: block;
  }
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background: #f8f8f8;
  }
  overflow-y: auto;
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
  @media (max-width: 767px) {
      display: block
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  & > * {
    margin: 18px;
  }
`

export const TableButton = styled.button`
  border: none;
  background: transparent;
  border-radius: 24px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: ${({ hoverColor }: ButtonProps) => hoverColor};
  }
  img {
    height: 18px;
    width: 18px;
  }
`;
