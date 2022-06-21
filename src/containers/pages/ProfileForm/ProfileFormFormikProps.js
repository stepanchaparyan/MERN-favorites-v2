import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  surname: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid Email format')
    .required('Required'),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, 'Digits only')
    .required('Required'),
  birthDay: Yup.date()
    .required('Required')
    .nullable(),
});

const formikProps = newProfile => ({
  initialValues: { ...newProfile },
  validateOnChange: true,
  validationSchema,
});

export default formikProps;
