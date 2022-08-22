import { ChangeEvent, FormEvent, useState } from "react";
import { FormInput } from "../components/FormInput";
import styled from "styled-components";

const StyledForm = styled.form`
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  max-width: 30rem;
`

interface IValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IInput {
  id: number;
  name: keyof IValues;
  type: string;
  placeholder: string;
  errorMessage: string;
  requiredField: boolean;
  validationPattern?: string;
  isValid: boolean;
}

export const Register = () => {
  const [values, setValues] = useState<IValues>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs: IInput[] = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should have 3-16 characters and should not include special characters",
      validationPattern: "^[A-Za-z0-9]{3,16}$",
      requiredField: true,
      isValid: false,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "E-mail",
      errorMessage: "Should be a valid email address",
      requiredField: false,
      isValid: false,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      validationPattern: "^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{8,20}$",
      requiredField: true,
      isValid: false,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords do not match",
      validationPattern: values.password,
      requiredField: true,
      isValid: false,
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    
  }

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button onClick={validateForm}>Register</button>
      </StyledForm>
    </div>
  );
};
