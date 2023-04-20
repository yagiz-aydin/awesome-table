import { IUser } from "../../types/DTO"
import { IColumnProps } from "../../types/"

export interface ITableProps {
    tableDatas: Array<ITableRow> 
    columns: Array<IColumnProps>
    onEdit?: Function
    onDelete?: Function
    redirectKey?: string
    redirectTo?: string
    loading?: boolean
}

export type ITableRow = IUser | any // More additional types | Array<IProduct> ...

