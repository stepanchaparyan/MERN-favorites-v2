import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
  password2: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid Email format')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password must have min 6 symbols')
    .required('Required'),
  password2: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const formikProps = () => ({
  initialValues,
  validateOnChange: true,
  validationSchema,
});

export default formikProps;
