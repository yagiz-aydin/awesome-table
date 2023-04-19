import { Formik } from 'formik';
import { FormContainer, SubmitButton, InputContainer, LabelText, Input } from './styled';
import { IFormProps } from './types';

const Form = ({ form, columns, onSubmit }: IFormProps) => (
    <Formik
      initialValues={{}}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        onSubmit();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <FormContainer onSubmit={handleSubmit}>
            {Object.keys(form).map((name, key) => (
              <InputContainer>
                <LabelText>{columns[key].value}</LabelText>
                <Input
                  type="text"
                  name={name}
                  onChange={handleChange}
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

  export default Form;