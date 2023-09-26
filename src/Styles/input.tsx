import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
`;
export const IconWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 10px;
`;

export const Input = styled.input`
  min-height: 60px;
  font-size: 12px;
  border-radius: 8px;
  border: 1px solid #b9b9b9;
  outline: none;
  padding: 0 30px 0 10px;
  width: -webkit-fill-available;
  :focus {
    background-color: #ffffff;
  }
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: none;
  }
  ::placeholder {
    font-size: 12px;
  }
`;
