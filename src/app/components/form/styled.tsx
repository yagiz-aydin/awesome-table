import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 18px;
  padding-top: 0px;
`

export const InputContainer = styled.div`
  display: ${({hidden}) => hidden ? 'none':'flex'};
  flex-direction: column;
  margin: 8px 0px;
  
`

export const LabelText = styled.span`
  margin-bottom: 8px;
  text-transform: capitalize;
`

export const Input = styled.input`
  padding: 6px 12px;
`