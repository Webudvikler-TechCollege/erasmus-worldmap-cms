import { styled } from "styled-components"

export const FormContainer = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;

  div {
    margin-bottom: 0.8rem;
  }

  label {
    display: inline-block;
    width: 8rem;
    vertical-align: top;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    padding: 0.3rem;
    width: 100%;
    max-width: 15rem;
  }

  button {
    padding: 0.3rem;
    margin-right: 0.5rem;
    width: 100%;
    max-width: 8rem;
  }
`
