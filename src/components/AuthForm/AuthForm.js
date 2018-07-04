import React from 'react';
import { withFormik } from 'formik';
import { signUp } from '../../services/authService';

const AuthForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit}>
    <input
      type="email"
      value={values.email}
      name="email"
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {touched.email && errors.email && <div>{errors.email}</div>}
    <input
      type="password"
      value={values.password}
      name="password"
      onChange={handleChange}
      onBlur={handleChange}
    />
    {touched.password && errors.password && <div>{errors.password}</div>}
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </form>
);

export default withFormik({
  mapPropsToValues: props => ({ email: '', password: '' }),
  handleSubmit: ({ email, password }, { props, setSubmitting, setErrors }) => {
    console.log('submitted');
    setSubmitting(false);
    signUp({ email, password })
      .then(response => localStorage.setItem('user', response))
      .catch(error => setErrors({ ...error }));
  },
  validate: () => ({}),
})(AuthForm);
