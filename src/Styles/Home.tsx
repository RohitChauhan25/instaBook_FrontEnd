import styled from "styled-components";

export const Conatiner = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  height: 100vh;
`;

export const LeftSideBard = styled.div`
  width: 20%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: white;
  border-right: 2px solid rgba(0, 0, 0, 0.1);
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1); */
`;
export const ProfileDetail = styled.div`
  width: 100%;
  height: 220px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const Main = styled.div`
  width: 80%;
  height: 100vh;
  overflow: scroll;
  gap: 200px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    color: palevioletred;
    background-color: #ebe7e7;
  }
`;
export const LogoutWrapper = styled.div`
  display: flex;
  padding-left: 15px;
  &:hover {
    cursor: pointer;
    color: palevioletred;
  }
`;

export const MainContainer = styled.div`
  /* overflow: scroll; */
  /* height: 100vh; */
`;

export const Header = styled.div`
  background-color: white;
  height: 60px;
  width: 60%;
  align-items: center;
  display: flex;
  padding-left: 110px;
  margin-bottom: 80px;
`;

export const PostContainer = styled.div`
  margin-top: 100px;
  width: 60%;
  /* margin: auto; */
  padding-left: 100px;
  height: 100%;
  display: flex;
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
    border: 1px solid palevioletred;
  }
`;

export const SearchButton = styled.button`
  border: none;
  padding: 10px;
  border-radius: 10px;
  background-color: palevioletred;
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
  background-color: palevioletred;
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

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const LikeCommWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const Like = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;
export const Posts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
`;
export const Following = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
`;

export const Follower = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
`;

export const DataWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;

export const Commnet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;
export const Share = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;
export const AvtarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  padding-bottom: 10px;
`;
