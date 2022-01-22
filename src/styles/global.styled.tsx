import styled from "styled-components";

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 9999;

  width: calc(100% - 2em);
  min-height: 100vh;

  overflow-x: scroll;

  padding: 2em;
  margin-bottom: 2em;
  gap: 1em;

  @media (max-width: 960px) {
    margin-left: -2em;
  }

  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

  font-family: Nunito, sans-serif;
`;
