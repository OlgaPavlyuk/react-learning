import { useState, useCallback, useEffect } from 'react';
import validate from './formValidation';

const useFormInput = ({
  name,
  validation = '',
  values: formData,
  setValues: setFormData,
  defaultInvalidAttr,
  handleError,
}) => {
  const formValue = formData[name];
  const [value, setValue] = useState(formValue);
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const [validationRules] = useState(validation);

  const handleValidation = useCallback(() => {
    const isInputValid = validate(value, validationRules);
    setIsValid(isInputValid);
    handleError(name, isInputValid);
  }, [setIsValid, validationRules, name, value, handleError]);

  useEffect(() => {
    if (value !== formValue) {
      setValue(formValue);
      setIsTouched(false);
      setIsFocused(false);
    }
  }, [formValue, value, setValue, setIsFocused, setIsTouched]);

  useEffect(() => {
    handleValidation();
  }, [handleValidation, name]);

  const handleChange = useCallback(({ target }) => {
    setValue(target.value);
    setFormData({ ...formData, [name]: target.value });
  }, [setValue, formData, setFormData, name]);

  const handleFocus = useCallback(() => {
    setIsTouched(true);
    setIsFocused(true);
    handleValidation();
  }, [setIsTouched, setIsFocused, handleValidation]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);

  const showError = !isValid && isTouched && !isFocused;
  const invalidAttr = showError ? defaultInvalidAttr : null;

  return {
    value,
    name,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ...invalidAttr,
  };
};

export default useFormInput;
