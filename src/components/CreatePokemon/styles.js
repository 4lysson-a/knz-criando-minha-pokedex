import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  height: fit-content;
  padding: 30px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  h1 {
    font-size: 1.6rem;
    color: #413f3f;
    font-weight: bold;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 15px;
  border-radius: 5px;
  border: none;
  background-color: var(--grey);

  outline: none;

  font-weight: bolder;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
  color: rgba(0, 0, 0, 0.6);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  label {
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    color: rgba(0, 0, 0, 0.5);
    font-weight: bold;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: var(--red);
  color: var(--white);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  border: 2px solid var(--red);

  transition: 0.23s;

  &:hover {
    color: var(--red);
    font-weight: bold;
    background-color: transparent;
  }
`;
