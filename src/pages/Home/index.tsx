import avtar from "Assets/images/profile.png";
import postPic from "Assets/images/banner.png";
import {
  Conatiner,
  LeftSideBard,
  RightSideBar,
  Main,
  SearchBar,
  Header,
  SearchInput,
  SearchButton,
  CreateNewBuuton,
  PostContainer,
  Post,
  Avtar,
  Image,
  Name,
  UserName,
  NameWrapper,
  PostImage,
  PostImageWrapper,
  ProfileDetail,
} from "Styles/Home";
import Modal from "Components/Modal";
import { useState } from "react";
import AddNewPost from "Components/AddNewPost";

const Home = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <Conatiner>
      <LeftSideBard>
        <ProfileDetail></ProfileDetail>
      </LeftSideBard>
      <Main>
        <Header>
          <SearchBar>
            <SearchInput placeholder="enter your search" />
            <SearchButton>Search</SearchButton>
          </SearchBar>
          <CreateNewBuuton onClick={() => setOpenModal(true)}>
            Create New Post
          </CreateNewBuuton>
        </Header>

        <PostContainer>
          <Post>
            <Avtar>
              <Image src={avtar} />
              <NameWrapper>
                <Name>Rohit</Name>
                <UserName>@rohit_chauhan</UserName>
              </NameWrapper>
            </Avtar>
            <PostImageWrapper>
              <PostImage src={postPic} />
            </PostImageWrapper>
          </Post>
          <Post>
            <Avtar>
              <Image src={avtar} />
              <NameWrapper>
                <Name>Rohit</Name>
                <UserName>@rohit_chauhan</UserName>
              </NameWrapper>
            </Avtar>
            <PostImageWrapper>
              <PostImage src={postPic} />
            </PostImageWrapper>
          </Post>
        </PostContainer>
        <Modal isOpen={openModal} className="modal">
          <AddNewPost />
        </Modal>
      </Main>

      <RightSideBar></RightSideBar>
    </Conatiner>
  );
};

export default Home;
