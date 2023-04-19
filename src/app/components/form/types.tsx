import { IUser } from "src/app/types/DTO"

export interface IFormProps{
  form: IFormData
  onSubmit: Function
  columns: Array<IColumnProps>
}

export interface IColumnProps{
  value?: string
  label: string
}

export type IFormData = IUser | any // More additional types | Array<IProduct> ...
