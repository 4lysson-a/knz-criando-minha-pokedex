import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;


  h1{
    color: var(--red);
    font-weight: bold;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1``;
