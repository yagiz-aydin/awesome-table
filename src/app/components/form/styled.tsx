import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 18px;
  padding-top: 0px;
`

export const InputContainer = styled.div`
  display: flex;
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
export const SubmitButton = styled.button`
  padding: 6px 12px;
  margin-top: 8px;
  background: #474747;
  color: white;
  cursor: pointer;
`