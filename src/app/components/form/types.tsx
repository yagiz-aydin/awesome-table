import { IColumnProps } from "../../types/"
import { IUser } from "../../types/dto"

export interface IFormProps{
  form: IFormData
  setForm: Function
  onSubmit: Function
  fields: Array<IColumnProps>
  requiredFields?: Array<string>
  disabledFields?: Array<string>
  hiddenFields?: Array<string>
}

export type IFormData = IUser | any // More additional types | Array<IProduct> ...

// Styled
export interface StyledInputProps {
  hidden?: boolean;
}