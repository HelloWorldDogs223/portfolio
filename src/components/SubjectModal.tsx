import { useState } from "react";
import { Img, ImgDiv } from "../styles/FifthModalStyle";
import { ExplainP, HeaderDiv, HeaderP } from "./ThirdModal";
import {
  BeforeButton,
  ButtonsDiv,
  CountSpan,
  ExplainDiv2,
  InputWrapper,
  InputsDiv,
  NameAndCountDiv,
  NameSchoolInput,
  NextButton,
  NextButton2,
  Wrapper,
} from "../styles/SixthModalStyle";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const ModalContent = styled.div`
  display: flex;
  width: 384px;
  padding-left: 24px;
  padding-top: 24px;
  /* padding-bottom: 24px; */
  padding-right: 12px;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  gap: 24px;
  background: var(--color-gray-w, #fff);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  z-index: 6;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ButtonWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Span = styled.span`
  color: var(--Gray950, #111);
  /* Base/Bold */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
`;

interface PropsType {
  setModal3: (bool: boolean) => void;
  setSubjectModal: (bool: boolean) => void;
}

export default function SubjectModal({
  setModal3,
  setSubjectModal,
}: PropsType) {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const onInputChangeHandler = (e: any) => {
    e.target.value = e.target.value.replace(/[^ㄱ-힣a-zA-Z0-9]/gi, "");
    setSubject(e.target.value);
  };

  const onClickHandler = () => {
    setModal3(true);
    setSubjectModal(false);
  };

  const onClickHandler2 = () => {
    setModal3(false);
    setSubjectModal(false);
    navigate("/main");
  };

  return (
    <Wrapper>
      <ModalContent>
        <HeaderDiv>
          <ImgDiv>
            <Img src="/images/blackCircle.svg" alt="greenCircle" />
            <Img src="/images/blackCircle.svg" alt="greenCircle" />
            <Img src="/images/greenCircle.svg" alt="greenCircle" />
          </ImgDiv>
          <HeaderP>과목 정보</HeaderP>
          <ExplainDiv2>
            <ExplainP>
              <span>게시판의 첫 과목을 입력하세요.</span>
            </ExplainP>
            <ExplainP></ExplainP>
          </ExplainDiv2>
        </HeaderDiv>
        <InputsDiv>
          <NameAndCountDiv>
            <Span>과목</Span>
            <CountSpan>{subject.length}/15</CountSpan>
          </NameAndCountDiv>
          <InputWrapper>
            <NameSchoolInput
              placeholder="과목명을 입력하세요."
              value={subject}
              onChange={onInputChangeHandler}
              maxLength={14}
            />
          </InputWrapper>
          <ButtonWrapper>
            <ButtonsDiv>
              <BeforeButton onClick={onClickHandler}>이전</BeforeButton>
              {subject.length > 0 ? (
                <NextButton2 onClick={onClickHandler2}>완료</NextButton2>
              ) : (
                <NextButton>완료</NextButton>
              )}
            </ButtonsDiv>
          </ButtonWrapper>
        </InputsDiv>
      </ModalContent>
    </Wrapper>
  );
}
