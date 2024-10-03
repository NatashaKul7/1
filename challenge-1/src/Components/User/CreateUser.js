import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./CreateUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const createUserHandler = (e) => {
    e.preventDefault();

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Incorrect input",
        message: "These fields can not be empty",
      });
      return;
    }

    if (+inputAge < 1) {
      setError({
        title: "Incorrect age",
        message: "Age must be greater than 0",
      });
      return;
    }

    props.onCreateUser(inputName, inputAge);

    setInputName("");
    setInputAge("");
  };

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setInputAge(e.target.value);
  };

  const errorHandler = () => {
    setError(false)
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onCloseModal={errorHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={inputName}
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={inputAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default CreateUser;
