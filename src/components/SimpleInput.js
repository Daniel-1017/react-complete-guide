import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const eneredEmailIsValid = enteredEmail.includes("@");
  const eneredEmailIsInvalid = !eneredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && eneredEmailIsValid) {
    formIsValid = true;
  }

  function nameInputChangeHandler(e) {
    setEnteredName(e.target.value);
  }

  function emailInputChangeHandler(e) {
    setEnteredEmail(e.target.value);
  }

  function nameInputBlurHandler(e) {
    setEnteredNameTouched(true);
  }

  function emailInputBlurHandler(e) {
    setEnteredEmailTouched(true);
  }

  function formSubmissionHandler(e) {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredEmail("");
    setEnteredEmailTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = eneredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
