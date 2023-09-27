import Inputs from "Components/input";
import {
  Container,
  FormWrapper,
  Form,
  ErrorMessage,
  InputFields,
  FieldContainer,
  DummyProfile,
  Line,
  CreateNewAccount,
  Title,
} from "Styles/login";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import user from "Assets/images/user.png";
import usePost from "hooks/usePost";
import { HomeRoute } from "Constant/routes";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { mutateAsync } = usePost();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitForm = async (data: any) => {
    try {
      const res = await mutateAsync({
        url: "/api/login",
        payload: data,
      });
      if (res) {
        localStorage.setItem("token", res?.token);
        navigate(HomeRoute?.path);
      }
    } catch (error: any) {
      return { error: error };
    }
  };

  return (
    <Container>
      <Title>InstaBook</Title>
      <FormWrapper>
        <DummyProfile>
          <img src={user} alt="" />
        </DummyProfile>
        <Form onSubmit={handleSubmit(submitForm)}>
          <InputFields>
            <FieldContainer>
              <Inputs
                autoComplete="off"
                className="input-field"
                type="text"
                placeholder="Enter Email Address"
                name="email"
                control={control}
              />
              <ErrorMessage>
                {/* {errors?.email && errors?.email?.message} */}
              </ErrorMessage>
            </FieldContainer>
            <FieldContainer>
              <Inputs
                type="password"
                className="input-field"
                autoComplete="off"
                name="password"
                placeholder="Enter Password"
                control={control}
              />
              <ErrorMessage>
                {errors?.password && errors?.password?.message}
              </ErrorMessage>
            </FieldContainer>
            <Button className="button" htmlType="submit" type="primary">
              Sign In
            </Button>
            <Line />
            <CreateNewAccount>Create New Account</CreateNewAccount>
          </InputFields>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
