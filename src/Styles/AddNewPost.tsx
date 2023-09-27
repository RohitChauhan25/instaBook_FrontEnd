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
    &:focus {
      border: 1px solid blue;
    }
  }
`;
export const SubmitButton = styled.button<{ background: any }>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
  font-weight: 600;
  padding: 10px;
  background-color: ${(props) => (props.background ? "#4949cb" : `#8f8fef`)};
`;

export const Input = styled.input`
  min-height: 60px;
  font-size: 12px;
  border-radius: 8px;
  border: 1px solid #b9b9b9;
  outline: none;
  padding: 0 30px 0 10px;
  width: -webkit-fill-available;
  &:focus {
    border: 1px solid blue;
  }
`;

export const FileUpload = styled.input`
  cursor: pointer;
  visibility: hidden;
`;
