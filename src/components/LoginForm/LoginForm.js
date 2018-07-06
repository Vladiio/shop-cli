import { withFormik } from 'formik';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { login } from '../../services/authService';
import AuthFrom from '../AForm/AuthForm';

export default compose(
  withRouter,
  withFormik({
    mapPropsToValues: () => ({ username: '', password: '' }),
    handleSubmit: ({ username, password }, { props, setSubmitting, setErrors }) => {
      login({ username, password })
        .then(({ token }) => {
          setSubmitting(false);
          localStorage.setItem('user', token);
          props.history.push('/');
        })
        .catch(() => setErrors({ username: 'Invalid credentials' }));
    },
    validate: () => ({}),
  }),
)(AuthFrom);
