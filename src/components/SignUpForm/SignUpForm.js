import React from 'react';
import { withFormik } from 'formik';
import { signUp } from '../../services/authService';
import AuthForm from '../AForm/AuthForm';

export default withFormik({
  mapPropsToValues: props => ({ username: '', password: '' }),
  handleSubmit: ({ username, password }, { props, setSubmitting, setErrors }) => {
    console.log('submitted');
    setSubmitting(false);
    signUp({ username, password })
      .then(({ token }) => localStorage.setItem('user', token))
      .catch(() => setErrors({ username: 'Wrong credentials' }));
  },
  validate: () => ({}),
})(AuthForm);
