import { useState, useEffect } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import { INPUT } from "../../constants/input";
import {
  Background,
  BackgroundForm,
  ContainedForm,
  ErrorMessage,
  InputArea,
  Overlay,
  ShowPasswordArea,
  SuccessMessage,
} from "./login-styles";
import CustomButton from "../../components/CustomButton/CustomButton";
import { BUTTON_TEXT, STATUS } from "../../constants/strings";
import { FAKE } from "../../constants/fake-user";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { ICONS } from "../../constants/icons";

import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { Icon, Image } from "../../components/Default/Defaults";
import Row from "../../components/Row/Row";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [icon, setIcon] = useState(ICONS.SHOW);
  const [errorMessage, setErrorMessage] = useState("");
  const [failed, setFailed] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isFormOk, setIsFormOk] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (email !== FAKE.EMAIL) {
        setFailed(true);
        setIsLoading(false);
        return setErrorMessage(STATUS.FAILED.EMAIL);
      }
      if (password !== FAKE.PASSWORD) {
        setFailed(true);
        setIsLoading(false);
        return setErrorMessage(STATUS.FAILED.PASSWORD);
      }
      setFailed(false);
      setIsLoading(false);
      return setSuccess(true);
    }, 3000);
  };

  const handleShowPassword = () => {
    setIcon(ICONS.HIDE);
    setShowPassword(true);

    if (icon === ICONS.HIDE) {
      setShowPassword(false);
      setIcon(ICONS.SHOW);
    }
  };

  useEffect(() => {
    const formOk = email && password;
    setIsFormOk(formOk);
  }, [email, password, isFormOk, failed, errorMessage, success, showPassword]);

  return (
    <Background>
      <Overlay />
      <BackgroundForm>
        <ContainedForm>
          <InputArea>
            <CustomInput
              type={INPUT.TYPE.EMAIL}
              label={INPUT.LABEL.EMAIL}
              name="email"
              placeholder={INPUT.PLACEHOLDER.EMAIL}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              labelColor="inherit"
            />
          </InputArea>
          <InputArea>
            <Row position="relative">
              <CustomInput
                type={showPassword ? INPUT.TYPE.TEXT : INPUT.TYPE.PASSWORD}
                label={INPUT.LABEL.PASSWORD}
                name="password"
                placeholder={INPUT.PLACEHOLDER.PASSWORD}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                labelColor="inherit"
                showPasswordIcon={icon}
                rowWidth={320}
              />
              <ShowPasswordArea onClick={handleShowPassword}>
                <Icon
                  className={showPassword ? ICONS.HIDE : ICONS.SHOW}
                  style={{ color: COLORS.DEFAULT_DARK }}
                />
              </ShowPasswordArea>
            </Row>
          </InputArea>
          {failed ? (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          ) : success ? (
            <SuccessMessage>{STATUS.SUCCESS}</SuccessMessage>
          ) : null}
          <CustomButton
            defaultLight
            borderRadius={6}
            text={BUTTON_TEXT.LOGIN}
            disabled={!isFormOk}
            isLoading={isLoading}
            onClick={signIn}
          />
        </ContainedForm>
      </BackgroundForm>
    </Background>
  );
};

export default LoginPage;
