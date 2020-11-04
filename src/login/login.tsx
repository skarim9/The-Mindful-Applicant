import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

export default function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        type="email"
        name="email"
        defaultValue=""
        ref={register({ required: true })}
      />
      {errors.email && <p>This field is required</p>}
      <label>Password</label>
      <input
        type="password"
        name="password"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.password && <p>This field is required</p>}
      <input type="submit" />
    </form>
  );
}