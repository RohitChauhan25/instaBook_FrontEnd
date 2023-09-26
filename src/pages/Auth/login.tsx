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

const Login = () => {
  const {
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Container>
      <Title>InstaBook</Title>
      <FormWrapper>
        <DummyProfile>
          <img src={user} alt="" />
        </DummyProfile>
        <Form>
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
