import React from 'react';
import { ITableProps, ITableRow } from './types';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  HeadCell,
  BodyRow,
  BodyCell,
  TableButton,
} from './styled';
import DeleteIcon from '../../assets/images/delete.png';
import EditIcon from '../../assets/images/edit.png';

const DataTable = ({ tableDatas, columns, onEdit, onDelete }: ITableProps) => {
  const Row = ({ row }: { row: ITableRow }) => (
    <BodyRow>
      {Object.keys(row).map((_, key) => (
        <BodyCell key={key}>
          {row[columns[key].value as keyof typeof row]}
        </BodyCell>
      ))}
      <BodyCell>
        {onEdit && (
          <TableButton
            onClick={() => onEdit(row)}
            hoverColor={'#7b7bc736'}
          >
            <img src={EditIcon} />
          </TableButton>
        )}
        {onDelete && (
          <TableButton onClick={() => onDelete()} hoverColor={'#cf95954a'}>
            <img src={DeleteIcon} />
          </TableButton>
        )}
      </BodyCell>
    </BodyRow>
  );

  return (
    <TableContainer>
      <Table>
        <TableHead>
          {columns.map((column, key) => (
            <HeadCell key={key}>{column.label}</HeadCell>
          ))}
        </TableHead>
        <TableBody>
          {tableDatas.map((row, key) => (
            <Row row={row} key={key} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
