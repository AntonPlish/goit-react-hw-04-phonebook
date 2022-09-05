import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import styled from '@emotion/styled';
import * as yup from 'yup';
import 'yup-phone';

const FormStyled = styled.section`
  padding: 8px;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled(Field)`
  color: grey;
  font-size: 16px;
  margin-bottom: 8px;
`;

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().phone().required(),
  // number: yup.string().phone('UA').required(),
});

const ContactsForm = function ({ onSubmit }) {
  return (
    <FormStyled>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        <Form>
          <Label htmlFor='nameInputId'>
            Name
            <ErrorMessage name="name" render={msg => <div>{msg}</div>} />
          </Label>
          {/* генерація Id може здійснюватися за допомогою 'shortid', 'nanoid', або Input в Label*/}
          <Input id='nameInputId' type="text" name="name" />
          <Label htmlFor='numberInputId'>
            Number
            <ErrorMessage name="number" render={msg => <div>{msg}</div>} />
          </Label>
          {/* генерація Id може здійснюватися за допомогою 'shortid', 'nanoid', або Input в Label*/}
          <Input id='numberInputId' type="tel" name="number" />
          <div>
            <button style={{ backgroundColor: 'lightgreen', border: '0', borderRadius: '5px', width: '150px', height: '30px' }}
              type="submit" name="addContact">
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </FormStyled>
  );
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactsForm;