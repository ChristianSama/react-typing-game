import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

const StyledForm = styled.form`
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  max-width: 30rem;
`;

type UserSubmitForm = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<UserSubmitForm>();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit: SubmitHandler<UserSubmitForm> = (values) =>
    console.log(values);

  return (
    <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address",
          },
        })}
      />
      {errors.email && errors.email.message}

      <input
        type="text"
        placeholder="Username"
        {...register("username", {
          required: "Required",
          minLength: {
            value: 5,
            message: "Username must have at least 5 characters",
          },
          maxLength: {
            value: 20,
            message: "Username must have 20 characters max",
          },
          pattern: {
            value: /^[A-Za-z0-9]+$/i,
            message: "Invalid Username",
          },
        })}
      />
      {errors.username && errors.username.message}

      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Required",
          minLength: {
            value: 8,
            message: "Password is too short",
          },
          pattern: {
            value:
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#.?!@$%^&*-]).{8,}$/,
            message:
              "Password should have at least 1 Uppercase letter, 1 lowercase letter, 1 number and 1 special character",
          },
        })}
      />
      {errors.password && errors.password.message}

      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword", {
          required: "Required",
          validate: (v) =>
            v === password.current || "The passwords don't match",
        })}
      />
      {errors.confirmPassword && errors.confirmPassword.message}

      <button type="submit">Submit</button>
    </StyledForm>
  );
};
