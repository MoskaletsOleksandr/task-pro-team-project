import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikController from './FormikController';
import { Button } from '../common/Button/Button';

export function FormikContainer() {
  const checkboxOptions = [
    { key: '1', value: '1' },
    { key: '2', value: '2' },
    { key: '3', value: '3' },
  ];

  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: '1', value: 'd1' },
    { key: '2', value: 'd2' },
    { key: '3', value: 'd3' },
  ];
  const radioOptions = [
    { key: '1', value: 'r1' },
    { key: '2', value: 'r2' },
    { key: '3', value: 'r3' },
  ];

  const initialValues = {
    email: '',
    description: '',
    checkboxOptions: [],
    radioOptions: '',
    dropdownOptions: '',
  };
  const onSubmit = values => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required('email is required')
      .email('Invalid email address'),
    description: Yup.string().required('fill in description'),
    checkboxOptions: Yup.array(),
    radioOptions: Yup.string().required('make your choice'),
    dropdownOptions: Yup.string(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {formik => (
        <Form>
          <FormikController
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikController
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikController
            control="checkbox"
            label="checkbox topic"
            name="checkboxOptions"
            options={checkboxOptions}
          />
          <FormikController
            control="radio"
            label="radiotopic"
            name="radioOptions"
            options={radioOptions}
          />
          <FormikController
            control="select"
            label="Select a topic"
            name="dropdownOptions"
            options={dropdownOptions}
          />
          <Button>Submit </Button>
        </Form>
      )}
    </Formik>
  );
}
