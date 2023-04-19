import { IUser } from "src/app/types/DTO"

export interface ITableProps {
    tableDatas: Array<IUser> // More additional types | Array<IProduct> ...
    columns: Array<IColumnProps>
    onEdit?: Function
    onDelete?: Function
}

export interface IColumnProps{
    value?: string
    label: string
}
