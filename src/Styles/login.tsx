import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10%;
  margin: auto;
  height: 100%;
  background-color: #fff;
`;

export const Title = styled.div`
  width: 100%;
  max-width: 800px;
`;

export const DummyProfile = styled.div`
  /* border: 1px solid red; */
  border-radius: 15px;
  width: 400px;
  height: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`;
export const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  padding-top: 10%;
  gap: 100px;
  /* height: 100%; */
  height: 100vh;
  padding: 0 50px;
  .button {
    height: 60px;
    font-size: 20px;
    font-weight: 600;
    width: -webkit-fill-available;
  }
`;
export const Form = styled.form`
  border: 1px solid #fff;
  padding: 0 20px;
  display: flex;
  width: 100%;
  max-width: 400px;
  height: 400px;
  border-radius: 15px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const ErrorMessage = styled.p`
  color: #f40012;
  min-height: 15px;
  font-size: 12px;
  margin-top: 5px;
`;

export const InputFields = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
export const FieldContainer = styled.div`
  min-height: 60px;
  position: relative;
  .input-field {
    width: -webkit-fill-available;
    min-height: 60px;
    font-size: 14px;
    border-radius: 8px;
    border: 1px solid #b9b9b9;
    outline: none;
    padding: 0 10px;

    :focus {
      background-color: #ffffff;
    }
    :active {
      background-color: none;
    }
  }
`;

export const Line = styled.div`
  padding: 20px 0;
  border-bottom: 3px solid black;
  margin-bottom: 10px;
`;
export const CreateNewAccount = styled.div`
  height: 60px;
  background-color: #3ee23e;
  color: white;
  font-size: 20px;
  font-weight: 600;
  max-width: 300px;
  width: 100%;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
`;
