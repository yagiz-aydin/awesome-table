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
  TableLink,
  HeadRow,
} from './styled';
import DeleteIcon from '../../assets/images/delete.png';
import EditIcon from '../../assets/images/edit.png';
import ContentLoader from 'react-content-loader';
import Button from '../button';

const DataTable = ({
  tableDatas,
  columns,
  onEdit,
  onDelete,
  redirectKey,
  redirectTo,
  loading,
}: ITableProps) => {
  const skeletonRowLength = 4
  const Row = ({ row }: { row: ITableRow }) => (
    <BodyRow>
      {Object.keys(row).map((parameter, key) => (
        !columns[key]?.hidden && <BodyCell key={key}>
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
          <Button.Table onClick={() => onEdit(row)} hoverColor='#7b7bc736' img={EditIcon}/>
        )}
        {onDelete && (
          <Button.Table onClick={() => onDelete(row)} hoverColor='#cf95954a' img={DeleteIcon}/>
        )}
      </BodyCell>
    </BodyRow>
  );

  const RowOnLoading = () =><BodyRow>
  {columns.map((column, key) => (
     !column?.hidden && <BodyCell>
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

  const NoDataView = () => <>0 User Data found</>

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <HeadRow>
            {columns.map((column, key) => (
              !column.hidden &&<HeadCell key={key}>{column.label}</HeadCell>
            ))}
          </HeadRow>
        </TableHead>
        <TableBody>
          {loading
            ? Array.from(Array(skeletonRowLength).keys()).map((i) => <RowOnLoading />)
            : tableDatas.length > 0 ? tableDatas.map((row, key) => <Row row={row} />) : <NoDataView/>}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
