import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [value, setValue] = useState({
    projectName: '', website: '', count: '1', timer: '', template: '',
  });
  const [errors, setErrors] = useState({});
  const [sumbitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(() => validate(value));
    setSubmitting(true);
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };
  const setV = (object) => {
    setValue(object);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && sumbitting === true) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    setV,
    value,
    errors,
  };
};

export default useForm;
