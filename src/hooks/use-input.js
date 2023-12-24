import { useState } from 'react';

function useInput(validateValue) {
  const [enterdValue, setEnterdValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enterdValue);
  const hasError = !valueIsValid && isTouched;

  function valueChangeHandler(event) {
    setEnterdValue(event.target.value);
  }

  function inputBlurHandler() {
    setIsTouched(true);
  }

  function reset() {
    setEnterdValue('');
    setIsTouched(false);
  }

  return {
    value: enterdValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
}
export default useInput;
