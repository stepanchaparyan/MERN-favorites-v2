import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid Email format')
    .required('Required'),
  password: Yup.string().required('Required'),
});

const formikProps = () => ({
  initialValues,
  validateOnChange: true,
  validationSchema,
});

export default formikProps;
