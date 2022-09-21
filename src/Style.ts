import styled from "styled-components";

export const Container = styled.div`
  font-family: sans-serif;

  background: #ffffff;
  padding: 10px;
  height: 250px;
  width: 250px;
  margin: 10px;

  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    text-align: center;
    text-transform: uppercase;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;
