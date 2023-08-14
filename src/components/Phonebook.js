import { Button, ContactItem, ContactList, FieldStyle, FormList, PhoneBooks, StyledError } from "./Formstyle/Formstyle";
import { Formik} from 'formik';
import { nanoid } from 'nanoid';


import * as Yup from 'yup';
// import { nanoid } from 'nanoid'
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


export const PhoneBook = ({onContact, contacts, filterValue, onFilterChange}) => {
  const filteredContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filterValue.toLowerCase())
);
  return (
    <PhoneBooks>
    <h1>Phonebook</h1>
    <Formik
      initialValues={{
        contacts: [],
        name: '',
        number: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        onContact({ ...values, id: nanoid()});
        actions.resetForm();
     }}
    >
      <FormList>
        <label> 
          <FieldStyle  name="name" placeholder="Enter name here" /></label>
          <StyledError name="name" component="div"/>
          <label> 
          <FieldStyle  name="number"  placeholder="Enter number here" /></label>
          <StyledError name="number" component="div"/>

        <Button type="submit">Add contact</Button>
      </FormList>
    </Formik>

<h2>Contacts</h2>
<input
        type="text"
        placeholder="Search by name"
        value={filterValue}
        onChange={onFilterChange}
      />
<ContactList>
  {filteredContacts.map(contact => (
    <ContactItem key={contact.id}>
      Name: {contact.name}
      <p>Number: {contact.number}</p>
    </ContactItem>
  ))}
</ContactList>

    </PhoneBooks>
  )

}