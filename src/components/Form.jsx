import useInput from '../hooks/use-input';

function Form() {
  const {
    value: enterdName,
    isValid: enterdNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enterdLastName,
    isValid: enterdLastNameIsValid,
    hasError: LastnameInputHasError,
    valueChangeHandler: LastnameChangeHandler,
    inputBlurHandler: LastnameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enterdEmail,
    isValid: enterdEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (enterdNameIsValid && enterdEmailIsValid && enterdLastNameIsValid) {
    formIsValid = true;
  }

  function formSubmissionHandler(event) {
    event.preventDefault();
    if (!enterdNameIsValid) {
      return;
    }
    console.log(enterdName);
    console.log(enterdLastName);
    console.log(enterdEmail);
    resetNameInput();
    resetEmailInput();
    resetLastNameInput();
  }

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  const lastnameInputClasses = LastnameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enterdName}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={lastnameInputClasses}>
        <label htmlFor='name'>Last Name</label>
        <input
          type='text'
          id='name'
          onChange={LastnameChangeHandler}
          onBlur={LastnameBlurHandler}
          value={enterdLastName}
        />
        {LastnameInputHasError && (
          <p className='error-text'>LastName must not be empty.</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enterdEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}

export default Form;
