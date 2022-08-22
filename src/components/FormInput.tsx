import { ChangeEvent } from "react";
import styled from "styled-components";

const StyledFormInput = styled.div`
  display: flex;
  flex-direction: column;
  & span {
    color: red;
  }
`

interface FormInputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  requiredField: boolean;
  validationPattern?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
}

export const FormInput = (props: FormInputProps) => {
  const {errorMessage, requiredField, validationPattern, ...inputProps} = props;
  return (
    <StyledFormInput>
      <input {...inputProps} />
      {validationPattern && !inputProps.value.match(validationPattern) && 
        <span>{errorMessage}</span>
      }
    </StyledFormInput>
  );
};
