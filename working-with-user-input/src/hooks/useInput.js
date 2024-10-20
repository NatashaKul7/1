import {
  useReducer,
  //  useState
} from "react";

const initialInputState = {
  inputValue: "",
  wasTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT_CHANGE") {
    return {
      inputValue: action.value,
      wasTouched: state.wasTouched,
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      inputValue: state.inputValue,
      wasTouched: true,
    };
  }

  if (action.type === "RESET_INPUT") {
    return {
      inputValue: "",
      wasTouched: false,
    };
  }

  return initialInputState;
};

const useInput = (validateValueFunc) => {
  const [inputState, dispatchAction] = useReducer(
    inputStateReducer,
    initialInputState
  );

  //   const [enteredValue, setEnteredValue] = useState("");
  //   const [wasInputTouched, setWasInputTouched] = useState(false);

  const isValueValid = validateValueFunc(inputState.inputValue);
  const isInputInvalid = !isValueValid && inputState.wasTouched;

  const inputChangeHandler = (e) => {
    dispatchAction({ type: "INPUT_CHANGE", value: e.target.value });

    // setEnteredValue(e.target.value);
  };

  const inputLostFocusHandler = (e) => {
    dispatchAction({ type: "INPUT_BLUR", value: e.target.value });

    // setWasInputTouched(true);
  };

  const resetValues = () => {
    dispatchAction({ type: "RESET_INPUT" });

    // setEnteredValue("");
    // setWasInputTouched(false);
  };

  return {
    // value: enteredValue,

    value: inputState.inputValue,
    hasError: isInputInvalid,
    isValid: isValueValid,
    inputChangeHandler,
    inputLostFocusHandler,
    resetValues,
  };
};

export default useInput;
