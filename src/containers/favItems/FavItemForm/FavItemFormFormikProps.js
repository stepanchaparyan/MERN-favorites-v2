import * as Yup from 'yup';
import { FAVITEM } from '../../../constants';

const { DEFAULT_VALUES } = FAVITEM;

const defaultValues = {
  author: DEFAULT_VALUES.AUTHOR,
  title: DEFAULT_VALUES.TITLE,
  category: DEFAULT_VALUES.CATEGORY,
  description: DEFAULT_VALUES.DESCRIPTION,
};

const validationSchema = Yup.object({
  author: Yup.string().required('Required'),
  title: Yup.string()
    .min(2, 'Title must have min 2 symbols')
    .required('Required'),
  category: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
});

const formikProps = editFavItem => ({
  initialValues: editFavItem ? editFavItem : defaultValues,
  validateOnChange: true,
  validationSchema,
});

export default formikProps;
