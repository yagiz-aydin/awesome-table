import { IUser } from "src/app/types/dto"

interface ICard{}

export interface IPersonalCard extends ICard{
    img?: string
    userInformations: IUser
    loading?: boolean
}
