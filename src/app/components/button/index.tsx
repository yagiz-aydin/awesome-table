import { AddButtonStyled, SubmitButtonStyled, TableButtonStyled } from './styled';
import { IAddButton, ISubmitButton, ITableButton } from './types';

export const Add = ({ disabled, onClick, text }: IAddButton) => (
  <AddButtonStyled onClick={() => onClick()} disabled={disabled}>
    {text}
  </AddButtonStyled>
);

export const Submit = ({ disabled, type, text }: ISubmitButton) => (
  <SubmitButtonStyled type={type} disabled={disabled}>
    {disabled ? 'Submitting' : text }
  </SubmitButtonStyled>
);

export const Table = ({img, onClick, hoverColor} : ITableButton) => (
  <TableButtonStyled onClick={onClick} hoverColor={hoverColor}>
    <img src={img} alt={img} />
  </TableButtonStyled>
)
const Button = { Add, Submit, Table };

export default Button;