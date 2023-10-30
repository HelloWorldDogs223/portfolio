import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import {
  AskButton,
  ButtonDiv,
  ContentP,
  ContentP2,
  Header,
  Img,
  InnerWrapper,
  LoginP,
  Logo,
  OuterWrapper,
  StartButton,
  StartP,
  Wrapper,
} from "../styles/LandingPageStyle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux";

export default function LadingPage() {
  const navigate = useNavigate();
  const [LoginClick, setLoginClick] = useState(false);
  const login = useSelector((state: RootState) => state.user.isLogin);

  useEffect(() => {
    if (
      login === true ||
      sessionStorage.getItem("token") !== null ||
      localStorage.getItem("token") !== null
    ) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <OuterWrapper>
        <Wrapper>
          <Img src="/images/landing.svg" alt="landing-img" />
          <InnerWrapper>
            <Header>
              <Logo src="/images/logo.svg" alt="logo" />
              <LoginP onClick={() => setLoginClick(true)}>로그인하기</LoginP>
            </Header>
            <div>
              <ContentP>
                <span>학습 과정은 간편하게 정리하고</span>
                <span>과제 제출은 빠르게 관리해요</span>
              </ContentP>
              <ContentP2>
                <span>교사를 위한 학생 과제 포트폴리오 서비스</span>
                <span>교직 생활에 스마트함을 더하세요</span>
              </ContentP2>
              <ButtonDiv>
                <StartButton onClick={() => setLoginClick(true)}>
                  <StartP>무료 체험하기</StartP>
                </StartButton>
                <AskButton>
                  <p>문의하기</p>
                </AskButton>
              </ButtonDiv>
            </div>
          </InnerWrapper>
        </Wrapper>
      </OuterWrapper>
      {LoginClick && <Modal setClick={setLoginClick} />}
    </>
  );
}
