export interface IModalContainerProps {
    open: boolean
  }

export interface IModalProps{
    children: JSX.Element
    open: boolean
    closeModal: Function
    title: string
}