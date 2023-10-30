import styled from "styled-components";
import Modal from "../components/Modal";
import { useState } from "react";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const InnerWrapper = styled.div`
  @media screen and (min-width: 1080px) {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 24px 24px 280px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 120px;
  }
  @media screen and (max-width: 1080px) {
    display: flex;
    width: 100%;
    padding: 24px 24px 280px 24px;
    flex-direction: column;
    align-items: flex-start;
    height: 768px;
    gap: 120px;
  }
`;

export const Header = styled.div`
  @media screen and (min-width: 1080px) {
    display: flex;
    width: 100%;
    padding: 0px 24px;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.8);
    z-index: 5;
  }
  @media screen and (max-width: 1080px) {
    display: flex;
    width: 100%;
    height: 80px;
    padding: 0px 24px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.8);
    z-index: 5;
  }
`;

export const Img = styled.img`
  @media screen and (min-width: 1080px) {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  @media screen and (max-width: 1080px) {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

export const LoginP = styled.p`
  cursor: pointer;
  color: var(--Gray950, #111);
  /* Base/Bold */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
`;
export const ContentP = styled.p`
  color: #182633;
  /* Header 1/Bold */
  font-family: "Pretendard";
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px; /* 138.889% */
  display: flex;
  flex-direction: column;
`;
export const ContentP2 = styled.p`
  color: var(--Gray700, #666);
  display: flex;
  flex-direction: column;
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
  margin-top: 16px;
  margin-bottom: 36px;
`;

export const StartButton = styled.div`
  display: flex;
  height: 56px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid var(--Primary, #00a896);
  color: var(--Primary, #00a896);
  text-align: center;
  font-family: "Pretendard";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 144.444% */
  width: auto;
  margin-right: 16px;
  &:hover {
    background: var(--Primary, #00a896);
    color: var(--W, #fff);
  }
  cursor: pointer;
`;

export const AskButton = styled.div`
  cursor: pointer;
  display: flex;
  height: 56px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid var(--Primary, #00a896);
  color: var(--Primary, #00a896);
  text-align: center;
  /* Xlarge/Bold */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 144.444% */
  width: 165.5px;
  &:hover {
    background: var(--Primary, #00a896);
    color: var(--W, #fff);
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
`;

export const StartP = styled.p`
  width: auto;
`;
export const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export default function LadingPage() {
  const [LoginClick, setLoginClick] = useState(false);

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
                <StartButton>
                  <StartP onClick={() => setLoginClick(true)}>
                    무료 체험하기
                  </StartP>
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
