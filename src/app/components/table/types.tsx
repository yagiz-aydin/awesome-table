import { IUser } from "src/app/types/DTO"

export interface ITableProps {
    tableDatas: Array<ITableRow> 
    columns: Array<IColumnProps>
    onEdit?: Function
    onDelete?: Function
}

export interface IColumnProps{
    value?: string
    label: string
}

export type ITableRow = IUser | any // More additional types | Array<IProduct> ...

export interface ButtonProps {
  hoverColor?: string;
}