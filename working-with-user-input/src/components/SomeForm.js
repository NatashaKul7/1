import useInput from "../hooks/useInput";

const SomeForm = (props) => {
  const isInputEmpty = (val) => val.trim() !== "";

  const {
    value: enteredName,
    hasError: hasNameInputError,
    isValid: isEnteredNameValid,
    inputChangeHandler: nameInputChangeHandler,
    inputLostFocusHandler: nameInputLostFocusHandler,
    resetValues: resetNameInputValues,
  } = useInput(isInputEmpty);

  const {
    value: enteredSurname,
    hasError: hasSurnameInputError,
    isValid: isEnteredSurnameValid,
    inputChangeHandler: surnameInputChangeHandler,
    inputLostFocusHandler: surnameInputLostFocusHandler,
    resetValues: resetSurnameInputValues,
  } = useInput(isInputEmpty);

  const {
    value: enteredEmail,
    hasError: hasEmailInputError,
    isValid: isEnteredEmailValid,
    inputChangeHandler: emailInputChangeHandler,
    inputLostFocusHandler: emailInputLostFocusHandler,
    resetValues: resetEmailInputValues,
  } = useInput((val) => val.includes("@"));

  let isFormValid = false;

  if (isEnteredNameValid && isEnteredEmailValid && isEnteredSurnameValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!isEnteredNameValid && !isEnteredEmailValid && !isEnteredSurnameValid) {
      return;
    }

    resetNameInputValues();
    resetEmailInputValues();
    resetSurnameInputValues();
  };

 
  const nameInputClasses = hasNameInputError
    ? "form-control invalid"
    : "form-control";

  const surnameInputClasses = hasSurnameInputError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = hasEmailInputError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">Введите Имя</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameInputChangeHandler}
            onBlur={nameInputLostFocusHandler}
          />
          {hasNameInputError && (
            <p className="error-text">Нужно обязательно ввести имя</p>
          )}
        </div>
        <div className={surnameInputClasses}>
          <label htmlFor="surname">Введите Фамилию</label>
          <input
            type="text"
            id="surname"
            value={enteredSurname}
            onChange={surnameInputChangeHandler}
            onBlur={surnameInputLostFocusHandler}
          />
          {hasSurnameInputError && (
            <p className="error-text">Нужно обязательно ввести Фамилию</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">Введите E-Mail</label>
          <input
            type="text"
            id="email"
            value={enteredEmail}
            onChange={emailInputChangeHandler}
            onBlur={emailInputLostFocusHandler}
          />
          {hasEmailInputError && (
            <p className="error-text">
              Нужно обязательно ввести корректный E-Mail
            </p>
          )}
        </div>
      </div>

      <div className="form-actions">
        <button disabled={!isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeForm;
