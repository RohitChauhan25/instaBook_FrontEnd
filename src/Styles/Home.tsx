import styled from "styled-components";

export const Conatiner = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
`;

export const LeftSideBard = styled.div`
  width: 20%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: white;
`;
export const ProfileDetail = styled.div`
  width: 100%;
  height: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const Main = styled.div`
  width: 60%;
  height: 100vh;
  overflow: scroll;
  gap: 200px;
`;

export const MainContainer = styled.div`
  /* overflow: scroll; */
  /* height: 100vh; */
`;

export const Header = styled.div`
  background-color: white;
  height: 60px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

export const PostContainer = styled.div`
  margin-top: 100px;
  width: 80%;
  margin: auto;
  justify-self: center;
  height: 100%;
  display: flex;
  justify-items: center;
  flex-direction: column;
  gap: 50px;
`;

export const Post = styled.div`
  background-color: white;
  width: 100%;
  height: auto;
`;

export const Avtar = styled.div`
  padding-left: 10px;
  padding-top: 10px;
  display: flex;
  align-items: center;
`;
export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const NameWrapper = styled.div`
  width: auto;
  height: auto;
  margin: 0;
  padding-left: 10px;
  font-weight: 500;
  font-size: small;
`;
export const Name = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
`;

export const PostImageWrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const SearchInput = styled.input`
  width: 200px;
  border-radius: 10px;
  padding: 10px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px rgb(2, 63, 121);
  }
`;

export const SearchButton = styled.button`
  border: none;
  padding: 10px;
  border-radius: 10px;
  background-color: #d13b00;
  color: white;
  cursor: pointer;
`;

export const SearchBar = styled.div`
  display: flex;
  gap: 10px;
`;

export const CreateNewBuuton = styled.button`
  border: none;
  padding: 10px;
  border-radius: 10px;
  background-color: #d13b00;
  cursor: pointer;
  color: white;
  margin-left: 100px;
`;

export const RightSideBar = styled.div`
  width: 20%;
  height: 100%;
  min-height: 100vh;
  background-color: white;
`;

export const Facility = styled.div`
  margin: 0 1%;
  margin-top: 3.472vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  text-align: center;
  div {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20vh;
    border: 1px solid #a5e7e0;
    box-shadow: 10px 10px;
  }
  span {
    font-weight: bold;
    font-size: larger;
    text-align: center;
    padding: 10%;
    padding-top: 15%;
  }
`;
