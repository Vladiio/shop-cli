import React from 'react';

const Form = ({
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
      type="text"
      value={values.username}
      name="username"
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {touched.username && errors.username && <div>{errors.username}</div>}
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

export default Form;
