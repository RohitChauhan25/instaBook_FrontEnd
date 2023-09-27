import { Container, Form, SubmitButton, Input } from "Styles/AddNewPost";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "react-hook-form";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { useState } from "react";

const AddNewPost = () => {
  const { setValue, handleSubmit } = useForm();
  const [file, setFile] = useState("");

  const uploadImage = async (info: any) => {
    const formData = new FormData();
    formData.append("file", info.file.originFileObj);
    formData.append("upload_preset", "insta-clone");
    formData.append("cloud_name", "diyaofpbn");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/diyaofpbn/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const { secure_url } = await res.json();
    if (secure_url) {
      setValue("image", secure_url);
      setFile(secure_url);
    }
  };

  const submitPost = (data: any) => {
    console.log(data);
  };

  //

  return (
    <Container>
      <Form onSubmit={handleSubmit(submitPost)}>
        <Input
          name="Title"
          type="text"
          placeholder={"Caption"}
          className="Title"
          onChange={(e: any) => setValue("caption", e.target.value)}
        />
        <TextArea
          rows={10}
          placeholder="description"
          maxLength={1000}
          className="description"
          onChange={(e: any) => setValue("desc", e.target.value)}
        />
        <Upload
          showUploadList={false}
          accept=".png,.jpeg,video/mp4,video/x-m4v,video"
          onChange={uploadImage}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>

        <SubmitButton
          disabled={file ? false : true}
          background={file ? true : false}
        >
          Create Post
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default AddNewPost;
