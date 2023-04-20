import { Formik } from 'formik';
import Button from '../button';
import {
  FormContainer,
  InputContainer,
  LabelText,
  Input,
} from './styled';
import { IFormData, IFormProps } from './types';

const Form = ({ form, setForm, columns, onSubmit, requiredFields, disabledFields, hiddenFields }: IFormProps) => {
  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>, key: string) =>
    setForm((prevState: IFormData) => ({
      ...prevState,
      [key]: event.target.value,
    }));

  return (
    <Formik
      initialValues={{}}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        onSubmit();
      }}
    >
      {({ values, handleBlur, handleSubmit, isSubmitting, dirty, isValid }) => (
        <FormContainer onSubmit={handleSubmit}>
          {Object.keys(form).map((name, key) => (
            <InputContainer key={key} hidden={hiddenFields?.includes(name)}>
              <LabelText>{columns[key].value}</LabelText>
              <Input
                type="text"
                required={requiredFields?.includes(`${[columns[key].value]}`)}
                name={name}
                disabled={disabledFields?.includes(`${[columns[key].value]}`) || isSubmitting}
                onChange={(event) => handleChanges(event, `${[columns[key].value]}`)}
                onBlur={handleBlur}
                value={form[columns[key].value as keyof typeof form]}
              />
            </InputContainer>
          ))}
          <Button.Submit type="submit" disabled={isSubmitting} text="Submit"/>
        </FormContainer>
      )}
    </Formik>
  );
};

export default Form;