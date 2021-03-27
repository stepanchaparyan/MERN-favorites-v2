import * as Yup from 'yup';

const initialValues = {
  name: '',
  description: '',
  price: '',
  countInStock: '',
  imageUrl: ''
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must have min 2 symbols')
    .required('Required'),
  description: Yup.string(),
  price: Yup.string()
    .matches(/^\d+$/, 'Only numerical values only')
    .required('Required'),
  countInStock: Yup.string()
    .matches(/^\d+$/, 'Only numerical values only')
    .required('Required'),
  imageUrl: Yup.string()
});

const formikProps = () => ({
  initialValues,
  validateOnChange: true,
  validationSchema
});

export default formikProps;
