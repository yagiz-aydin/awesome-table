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
  TableLink,
  HeadRow,
} from './styled';
import DeleteIcon from '../../assets/images/delete.png';
import EditIcon from '../../assets/images/edit.png';
import ContentLoader from 'react-content-loader';

const DataTable = ({
  tableDatas,
  columns,
  onEdit,
  onDelete,
  redirectKey,
  redirectTo,
  loading,
}: ITableProps) => {
  const Row = ({ row }: { row: ITableRow }) => (
    <BodyRow>
      {Object.keys(row).map((_, key) => (
        <BodyCell key={key}>
          {columns[key].value === redirectKey ? (
            <TableLink
              to={`${redirectTo}${row[columns[key].value as keyof typeof row]}`}
            >
              {row[columns[key].value as keyof typeof row]}
            </TableLink>
          ) : (
            row[columns[key].value as keyof typeof row]
          )}
        </BodyCell>
      ))}
      <BodyCell>
        {onEdit && (
          <TableButton onClick={() => onEdit(row)} hoverColor={'#7b7bc736'}>
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

  const RowOnLoading = () =><BodyRow>
  {columns.map((column, key) => (
    <BodyCell>
      <ContentLoader
        speed={2}
        width="100%"
        viewBox="0 0 800 42"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect
          x="0"
          y="18"
          rx="4"
          ry="4"
          width="100%"
          height="42"
        />
      </ContentLoader>
    </BodyCell>
  ))}
</BodyRow>

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <HeadRow>
            {columns.map((column, key) => (
              <HeadCell key={key}>{column.label}</HeadCell>
            ))}
          </HeadRow>
        </TableHead>
        <TableBody>
          {loading
            ? [1, 2].map((i) => <RowOnLoading />)
            : tableDatas.map((row, key) => <Row row={row} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
