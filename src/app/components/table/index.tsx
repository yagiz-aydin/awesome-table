import React from 'react';
import { ITableProps } from './types';
import {
  Table,
  TableHead,
  TableBody,
  HeadCell,
  BodyRow,
  BodyCell
} from './styled';

const DataTable = ({ tableDatas, columns }: ITableProps) => {
  return (
    <Table>
      <TableHead>
        {columns.map((column, key) => (
          <HeadCell key={key}>
            {column.label}
          </HeadCell>
        ))}
      </TableHead>
      <TableBody>
        {tableDatas.map((data, key) => (
          <BodyRow key={key}>
            {Object.keys(data).map((_, key) => (
              <BodyCell key={key}>{data[columns[key].value as keyof typeof data]}</BodyCell>
            ))}
          </BodyRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
