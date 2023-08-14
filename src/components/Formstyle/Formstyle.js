import { Field, ErrorMessage, Form } from "formik";
import styled from "styled-components";


export const PhoneBooks = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;`;
  export const FormList = styled(Form)`
  display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`;

export const ContactList = styled.ul `
list-style: none;
display: flex;
gap: 10px;
flex-wrap: wrap;
`;
export const FieldStyle = styled(Field)`
padding: 15px;
border: none;
border-radius: 4px;
margin-bottom: 10px;
width: 100%;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

&:focus {
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}`
export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;
export const StyledError = styled(ErrorMessage)`
color: red;`;

export const ContactItem = styled.li`

background-color: #f0f8ff;
border: 2px solid #3498db;
border-radius: 6px;
padding: 10px;
margin-bottom: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.3s, border 0.3s;

}`;

