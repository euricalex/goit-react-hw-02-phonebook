import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { ContactItem } from './Formstyle/Formstyle';

import { FieldStyle, FormList, Button, StyledError } from './Formstyle/Formstyle';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('This is required!'),
  number: Yup.string()
    .matches(/^\+?[0-9]{1,3}-?[0-9]/, 'Invalid number')
    .required('This is required!')
    .min(6, 'Too Short!')
    .max(20, 'Too Long!'),
});

const ContactForm = ({ onContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        onContact({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <FormList onSubmit={handleSubmit}>
          <label>
            <FieldStyle name="name" placeholder="Enter name here" />
          </label>
          <StyledError name="name" component="div" />
          <label>
            <FieldStyle name="number" placeholder="Enter number here" />
          </label>
          <StyledError name="number" component="div" />

          <Button type="submit">Add contact</Button>
        </FormList>
      )}
    </Formik>
  );
};

export default ContactForm;
