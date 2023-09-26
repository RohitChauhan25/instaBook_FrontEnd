import Inputs from "Components/input";
import { Container, Form } from "Styles/AddNewPost";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "react-hook-form";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { Button, Upload } from "antd";
import { useState } from "react";

const AddNewPost = () => {
  const { control } = useForm();
  const [fileName, setFileList] = useState();
  const handleChange = (info: any) => {
    console.log(info);
    setFileList(info?.file?.name);
    // setFileList(info);
  };
  return (
    <Container>
      <Form>
        <Inputs
          control={control}
          name="Title"
          type="text"
          placeholder={"Caption"}
          className="Title"
        />
        <TextArea
          rows={10}
          placeholder="description"
          maxLength={6}
          className="description"
        />
        <input type="file" className="file" />

        <button>Create Post</button>
      </Form>
    </Container>
  );
};

export default AddNewPost;
