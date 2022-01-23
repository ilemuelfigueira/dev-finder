import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  gap: 1rem;

  margin: 0;
  padding: 0;
  box-sizing: border-box;

  background: #0d1a2d;

  main {
    display: flex;

    width: 600px;
    height: auto;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;
