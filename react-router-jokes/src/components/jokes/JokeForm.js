import { useRef, useState } from "react";

import Card from "../UI/Card";
import Loader from "../UI/Loader";
import styles from "./JokeForm.module.css";
import { Prompt } from "react-router-dom/cjs/react-router-dom.min";

const JokeForm = (props) => {
  const topicInputRef = useRef();
  const textInputRef = useRef();

  const [isFormFocus, setIsFormFocus] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredTopic = topicInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddJoke({ topic: enteredTopic, text: enteredText });
  }

  const formFocusHandler = () => {
    setIsFormFocus(true);
  };

  const sendDataHandler = () => {
    setIsFormFocus(false);
  };

  return (
    <>
      <Prompt
        when={isFormFocus}
        message={(location) => "Do you really want to leave this page?"}
      />
      <Card>
        <form
          onFocus={formFocusHandler}
          className={styles.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={styles.loading}>
              <Loader />
            </div>
          )}

          <div className={styles.control}>
            <label htmlFor="topic">Topic</label>
            <input type="text" id="topic" ref={topicInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={styles.actions}>
            <button onClick={sendDataHandler} className="btn">
              Add Joke
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default JokeForm;
