import { Formik } from 'formik';
import {
  FormContainer,
  SubmitButton,
  InputContainer,
  LabelText,
  Input,
} from './styled';
import { IFormData, IFormProps } from './types';

const Form = ({ form, setForm, columns, onSubmit }: IFormProps) => {
  console.log('form', form);

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
      {({ values, handleBlur, handleSubmit, isSubmitting }) => (
        <FormContainer onSubmit={handleSubmit}>
          {Object.keys(form).map((name, key) => (
            <InputContainer key={key}>
              <LabelText>{columns[key].value}</LabelText>
              <Input
                type="text"
                name={name}
                onChange={(event) => handleChanges(event, `${[columns[key].value]}`)}
                onBlur={handleBlur}
                value={form[columns[key].value as keyof typeof form]}
              />
            </InputContainer>
          ))}
          <SubmitButton type="submit" disabled={isSubmitting}>
            Submit
          </SubmitButton>
        </FormContainer>
      )}
    </Formik>
  );
};

export default Form;