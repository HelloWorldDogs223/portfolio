import SecondModal from "../components/SecondModal";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../redux";
import { useSelector } from "react-redux";
import {
  AskButton,
  ButtonDiv,
  StartButton,
  StartP,
} from "../styles/LandingPageStyle";
import {
  ContentP,
  ContentP2,
  Header,
  Img,
  InnerWrapper,
  Logo,
  OuterWrapper,
  UserDiv,
  UserImg,
  Wrapper,
} from "../styles/LoginLadingStyle";

export default function LoginLading() {
  const [isTeacher, setIsTeacher] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [localUserId, setLocalUserId] = useState(0);
  const [localToken, setLocalToken] = useState("");
  const [userId, setUserId] = useState(0);
  const [token, setToken] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const login = useSelector((state: RootState) => state.user.isLogin);
  const name = useSelector((state: RootState) => state.user.name);

  useEffect(() => {
    if (
      sessionStorage.getItem("token") === null &&
      localStorage.getItem("token") === null
    ) {
      navigate("/");
    }

    setUserId(JSON.parse(sessionStorage.getItem("id") || "{}"));
    setToken(JSON.parse(sessionStorage.getItem("token") || "{}"));

    setLocalToken(JSON.parse(localStorage.getItem("token") || "{}"));
    setLocalUserId(JSON.parse(localStorage.getItem("id") || "{}"));

    if (location.state && location.state.teacher) setIsTeacher(true);

    if (localStorage.getItem("token") === null) {
      setSecondModal(true);
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
              <UserDiv>
                <p>
                  반가워요, {login && name} {isTeacher ? "선생님" : "학생"}
                </p>
                {/* @TODO : 사진 변경 */}
                <UserImg src="/images/defaultProfile.svg" alt="profileImg" />
              </UserDiv>
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
                <StartButton>
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
      {secondModal && (
        <SecondModal
          userId={location.state && location.state.userId}
          token={location.state && location.state.token}
          setSecondModal={setSecondModal}
        />
      )}
    </>
  );
}
