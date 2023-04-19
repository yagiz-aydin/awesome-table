import React from 'react';
import { ITableProps } from './types';
import {
  Table,
  TableHead,
  TableBody,
  HeadCell,
  BodyRow,
  BodyCell,
} from './styled';
import DeleteIcon from '../../assets/images/delete.png';
import EditIcon from '../../assets/images/edit.png'
import { Button } from '../../assets/common';

const DataTable = ({ tableDatas, columns, onEdit, onDelete }: ITableProps) => {
  const [editing, setEditing] = React.useState<boolean>();
  const [editingCell, setCellEditing] = React.useState<object>({});
  
  return (
    <Table>
      <TableHead>
        {columns.map((column, key) => (
          <HeadCell key={key}>{column.label}</HeadCell>
        ))}
      </TableHead>
      <TableBody>
        {tableDatas.map((data, key) => (
          <BodyRow key={key}>
            {Object.keys(data).map((_, key) => (
              <BodyCell key={key}>
                {data[columns[key].value as keyof typeof data]}
              </BodyCell>
            ))}
            {onEdit && (
              <BodyCell>
                <Button onClick={() => onEdit()} hoverColor={'#7b7bc736'}>
                  <img src={EditIcon} />
                </Button>
              </BodyCell>
            )}
            {onDelete && (
              <BodyCell>
                <Button onClick={() => onDelete()} hoverColor={'#cf95954a'}>
                  <img src={DeleteIcon} />
                </Button>
              </BodyCell>
            )}
          </BodyRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
