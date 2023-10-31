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
import ThirdModal from "../components/ThirdModal";

export default function LoginLading() {
  const [isTeacher, setIsTeacher] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [thirdModal, setThirdModal] = useState(false);
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

    if (location.state && location.state.teacher) setIsTeacher(true);

    if (
      localStorage.getItem("token") === null &&
      sessionStorage.getItem("modal") === null
    ) {
      setSecondModal(true);
    }
  }, []);

  useEffect(() => {
    // @TODO : API로부터 유저 정보와 학급 정보를 받아와서, 만약에 학생이 한 명도 없다면 ThridModal을 불러온다.
    if (!secondModal) {
      setThirdModal(true);
    }
  }, []);

  const startClickHandler = () => {
    navigate("/init");
  };

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
                <StartButton onClick={startClickHandler}>
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
      {thirdModal && <ThirdModal setThirdModal={setThirdModal} />}
    </>
  );
}
