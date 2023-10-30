import { useState } from "react";
import styled from "styled-components";
import "../assets/fonts/fonts.css";

export const Wrapper = styled.div`
  z-index: 5;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0%;
  left: 0%;
`;

export const ModalContent = styled.div`
  z-index: 6;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 384px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
  background-color: white;
`;

export const HeaderP = styled.p`
  color: var(--color-gray-gray-950, #111);
  /* Header 4/Bold */
  font-family: "Pretendard";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px; /* 141.667% */
`;
export const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ExplainDiv = styled.div`
  margin-top: 12px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ExplainP = styled.p`
  color: var(--Gray700, #666);
  text-align: center;
  /* Large/Rg */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const NextButtonDiv = styled.div`
  display: flex;
  width: 164px;
  height: 56px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 2px solid var(--Primary, #00a896);
  text-align: center;
  cursor: pointer;
  color: var(--Primary, #00a896);
  text-align: center;
  /* Xlarge/Bold */
  font-family: "Pretendard";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 144.444% */
  &:hover {
    border-radius: 8px;
    background: var(--Primary, #00a896);
    color: white;
  }
  margin-right: 8px;
`;

export const ButtonDiv = styled.div`
  display: flex;
`;

export const YesButtonDiv = styled(NextButtonDiv)`
  margin-right: 0px;
`;

export const Img = styled.img`
  margin-bottom: 24px;
`;

export const Span = styled.span`
  width: auto;
`;

export const ButtonP = styled.p`
  white-space: nowrap;
`;

export default function ThirdModal() {
  return (
    <Wrapper>
      <ModalContent>
        <HeaderDiv>
          <Img src="images/logo.svg" alt="logo" />
          <HeaderP>아직 학생이 없어요!</HeaderP>
          <ExplainDiv>
            <ExplainP>
              <Span>혹시 학생 초대를 잊으셨나요?</Span>
            </ExplainP>
            <ExplainP>
              <Span>초대한 학생과 함께 스케치북을 이용하세요!</Span>
            </ExplainP>
          </ExplainDiv>
        </HeaderDiv>
        <ButtonDiv>
          <NextButtonDiv>
            <ButtonP>다음에 하기</ButtonP>
          </NextButtonDiv>
          <YesButtonDiv>
            <ButtonP>학생 초대하기</ButtonP>
          </YesButtonDiv>
        </ButtonDiv>
      </ModalContent>
    </Wrapper>
  );
}
