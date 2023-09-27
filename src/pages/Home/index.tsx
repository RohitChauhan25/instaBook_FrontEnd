import avtar from "Assets/images/profile.png";
import postPic from "Assets/images/banner.png";
import { Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  LoginOutlined,
  HomeOutlined,
  MessageOutlined,
  SettingOutlined,
  BorderRightOutlined,
  ExportOutlined,
  HeartOutlined,
  CommentOutlined,
  ShareAltOutlined,
  SearchOutlined,
  PlusOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
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
  Wrapper,
  LogoutWrapper,
  LikeCommWrapper,
  Like,
  Commnet,
  Share,
  AvtarWrapper,
  Posts,
  Following,
  Follower,
  DataWrapper,
  MenuWrapper,
} from "Styles/Home";
import Modal from "Components/Modal";
import { useEffect, useState } from "react";
import AddNewPost from "Components/AddNewPost";
import useGet from "hooks/useGet";

const Home = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [AllPost, setAllPost] = useState([]);
  const { data, refetch } = useGet("All post", `/api/getAllPosts`, {
    token: true,
  });

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    setAllPost(data?.allPost);
  }, [data]);

  return (
    <Conatiner>
      <LeftSideBard>
        <ProfileDetail>
          <AvtarWrapper>
            <Avatar size={64} icon={<UserOutlined />} />
          </AvtarWrapper>
          <AvtarWrapper>Rohit</AvtarWrapper>
          <DataWrapper>
            <Posts>
              <div>10k</div>
              <div>Posts</div>
            </Posts>
            <Following>
              <div>10k</div>
              <div>Following</div>
            </Following>
            <Follower>
              <div>10k</div>
              <div>Followers</div>
            </Follower>
          </DataWrapper>
        </ProfileDetail>
        <MenuWrapper>
          <Wrapper>
            <HomeOutlined />
            <p>Home</p>
          </Wrapper>
          <Wrapper>
            <ExportOutlined />
            <p>Search</p>
          </Wrapper>
          <Wrapper>
            <MessageOutlined />
            <p>Messages</p>
          </Wrapper>
          <Wrapper>
            <NotificationOutlined />
            <p>Notfication</p>
          </Wrapper>
          <Wrapper>
            <UserOutlined />
            <p>Profile</p>
          </Wrapper>
        </MenuWrapper>

        <LogoutWrapper>
          <LogoutWrapper>
            <LoginOutlined />
            <p>Logout</p>
          </LogoutWrapper>
        </LogoutWrapper>
      </LeftSideBard>
      <Main>
        <Header>
          <SearchBar>
            <SearchInput placeholder="enter your search" />
            <SearchButton>
              <SearchOutlined />
            </SearchButton>
          </SearchBar>
          <CreateNewBuuton onClick={() => setOpenModal(true)}>
            <PlusOutlined /> Create New Post
          </CreateNewBuuton>
        </Header>

        <PostContainer>
          {AllPost?.map((post: any, index) => {
            return (
              <Post key={index}>
                <Avtar>
                  <Image src={avtar} />
                  <NameWrapper>
                    <Name>{post?.user?.username}</Name>
                    <UserName>@{post?.user?.username}</UserName>
                  </NameWrapper>
                </Avtar>
                <PostImageWrapper>
                  <PostImage src={post?.image} />
                </PostImageWrapper>
                <LikeCommWrapper>
                  <Like>
                    <HeartOutlined />
                    1.2k likes
                  </Like>
                  <Commnet>
                    <CommentOutlined />
                    1k comments
                  </Commnet>
                  <Share>
                    <ShareAltOutlined /> 1.6 shares
                  </Share>
                </LikeCommWrapper>
              </Post>
            );
          })}
        </PostContainer>
        <Modal isOpen={openModal} className="modal">
          <AddNewPost />
        </Modal>
        <RightSideBar></RightSideBar>
      </Main>
    </Conatiner>
  );
};

export default Home;
