import { useState } from "react";

const SomeInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [wasInputNameTouched, setWasInputNameTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== "";
  const isNameInputInvalid = !isEnteredNameValid && wasInputNameTouched;

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputLostFocusHandler = (e) => {
    setWasInputNameTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setWasInputNameTouched(true);

    if (!isEnteredNameValid) {
      return;
    }

    setEnteredName("");
    setWasInputNameTouched(false);
  };

  const nameInputClasses = isNameInputInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputLostFocusHandler}
          value={enteredName}
        />
        {isNameInputInvalid && (
          <p className="error-text">Нужно обязательно ввести имя</p>
        )}
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
