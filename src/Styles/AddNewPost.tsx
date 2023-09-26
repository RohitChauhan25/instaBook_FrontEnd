import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid red;
  color: black;
  height: 100%;
`;
export const Form = styled.form`
  width: 400px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 20px;
  gap: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;

  TextArea {
    font-size: 20px;
  }
`;
