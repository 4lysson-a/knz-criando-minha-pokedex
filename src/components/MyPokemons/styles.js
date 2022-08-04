import styled from "styled-components";

export const Container = styled.div`
  background: var(--black);
  padding: 20px 30px;
  border-radius: 10px;
  height: fit-content;

  h1,
  p {
    color: var(--white);
  }

  p {
    opacity: 0.6;
  }

  @media screen and (max-width: 1200px) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  ul {
    color: var(--white);
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1rem;

  svg {
    width: 20px;
    height: 20px;

    path {
      transition: 0.2s;
    }
  }

  &:hover {
    cursor: pointer;
    svg {
      path {
        stroke: var(--red);
      }
    }
  }
`;
