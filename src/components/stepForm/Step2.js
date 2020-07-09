import React from "react";
import { useForm } from "react-hook-form";

import { ErrorMessage } from '@hookform/error-message';

import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step2 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, errors, register } = useForm({
    defaultValues: state.yourDetails
  });
  const { push } = useHistory();
  const onSubmit = data => {
    action(data);
    push("/result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>
      <label>
        Age:
        <input name="age" type="number" ref={register({
        required: "This is required",
        min: {
          value: 18,
          message: "Minimum age is 18"
        },
      })} />
        <ErrorMessage errors={errors} name="age" as="p" />

      </label>
      <label>
        Years of experience:
        <input name="yearsOfExp" type="number" ref={register({
        required: "This is required",
        min: {
          value: 1,
          message: "At least 1 year of experience is required"
        },
      })} />
        <ErrorMessage errors={errors} name="yearsOfExp" as="p" />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step2;
