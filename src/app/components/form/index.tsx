import { Formik } from 'formik';
import Button from '../button';
import {
  FormContainer,
  InputContainer,
  LabelText,
  Input,
} from './styled';
import { IFormData, IFormProps } from './types';

const Form = ({ form, setForm, fields, onSubmit, requiredFields, disabledFields, hiddenFields }: IFormProps) => {
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
        onSubmit(form);
      }}
    >
      {({ handleBlur, handleSubmit, isSubmitting }) => (
        <FormContainer onSubmit={handleSubmit}>
          {Object.keys(form).map((name, key) => (
            <InputContainer key={key} hidden={hiddenFields?.includes(name)}>
              <LabelText>{fields[key].value}</LabelText>
              <Input
                type="text"
                required={requiredFields?.includes(`${[fields[key].value]}`)}
                name={name}
                disabled={disabledFields?.includes(`${[fields[key].value]}`) || isSubmitting}
                onChange={(event) => handleChanges(event, `${[fields[key].value]}`)}
                onBlur={handleBlur}
                value={form[fields[key].value as keyof typeof form]}
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