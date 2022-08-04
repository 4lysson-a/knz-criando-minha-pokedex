import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 15px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  background: var(--red);

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1,
  h2 {
    color: var(--white);
  }

  h2 {
    opacity: 0.7;
  }

  @media screen and (max-width: 1200px) {
    margin-top: -20px;
  }
`;

export const Content = styled.div`
  height: 100%;
  max-height: 500px;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 0 20px 0 0;

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-track {
    border-radius: 2px;
    background: rgba(226, 222, 222, 0.49);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1px;
    min-height: 60px;
    background-color: rgba(226, 222, 222, 0.7);

    &:hover {
      background-color: var(--white);
    }
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ul {
    color: var(--white);
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
  }
`;

export const AddButton = styled.button`
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
        fill: var(--black);
        stroke: var(--black);
      }
    }
  }
`;
