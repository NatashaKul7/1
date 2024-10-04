import { useState, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./CreateUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = (props) => {
  // const [inputName, setInputName] = useState('');
  // const [inputAge, setInputAge] = useState('');
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const createUserHandler = (e) => {
    e.preventDefault();

    const inputUserName = nameInputRef.current.value
    const inputUserAge = ageInputRef.current.value

    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      setError({
        title: "Incorrect input",
        message: "These fields can not be empty",
      });
      return;
    }

    if (+inputUserAge < 1) {
      setError({
        title: "Incorrect age",
        message: "Age must be greater than 0",
      });
      return;
    }

    props.onCreateUser(inputUserName, inputUserAge);
        
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

  };

  // const nameChangeHandler = (e) => {
  //   setInputName(e.target.value);
  // };

  // const ageChangeHandler = (e) => {
  //   setInputAge(e.target.value);
  // };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            // value={inputName}
            ref={nameInputRef}
            // onChange={nameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            // value={inputAge}
            ref={ageInputRef}
            // onChange={ageChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default CreateUser;
