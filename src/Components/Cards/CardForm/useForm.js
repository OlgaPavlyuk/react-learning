import { useState, useEffect, useCallback } from 'react';
import useFormInput from './useFormInput';

const useFrom = (
  defaultValues,
  invalidAttr,
  submitCallback,
) => {
  const [values, setValues] = useState(defaultValues);
  const [mounted, setMounted] = useState(false);
  const [formErrors, setFormErrors] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    submitCallback(values);
    setValues(defaultValues);
    setFormErrors([]);
    showSuccessMessage();
  };

  const handleError = useCallback((name, isValid) => {
    const errors = formErrors;
    const index = errors.findIndex((error) => error === name);
    if (!isValid) {
      if (index < 0) errors.push(name);
    } else if (index > -1) errors.splice(index, 1);
    setFormErrors(errors);
  }, [formErrors]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const showSuccessMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2500);
  };

  const useInput = (name, validation) => useFormInput({
    name,
    validation,
    values,
    setValues,
    defaultInvalidAttr: invalidAttr,
    handleError,
  });

  return {
    values,
    setValues,
    useInput,
    errors: formErrors,
    isValid: mounted && !formErrors.length,
    handleSubmit,
    showMessage,
  };
};

export default useFrom;
