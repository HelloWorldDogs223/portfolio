import styled from "styled-components";
import {
  ExplainDiv,
  ExplainP,
  HeaderDiv,
  HeaderP,
  Img,
  ModalContent,
  Span,
  Wrapper,
} from "./ThirdModal";

export const StartButtonDiv = styled.div`
  cursor: pointer;
  display: flex;
  height: 56px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 8px;
  text-align: center;
  /* Xlarge/Bold */
  font-family: "Pretendard";
  width: 274px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 144.444% */
  background: var(--Gray400, #ccc);
  &:hover {
    background: var(--Primary, #00a896);
    color: var(--W, #fff);
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

interface PropsType {
  setModal: (bool: boolean) => void;
  setModal2: (bool: boolean) => void;
}

export default function FourthModal({ setModal, setModal2 }: PropsType) {
  const onClickHandler = () => {
    setModal(false);
    setModal2(true);
  };
  return (
    <Wrapper>
      <ModalContent>
        <HeaderDiv>
          <Img src="images/logo.svg" alt="logo" />
          <HeaderP>가입을 환영해요!</HeaderP>
          <ExplainDiv>
            <ExplainP>
              <Span>첫 ‘학급 페이지 만들기’를 위해</Span>
            </ExplainP>
            <ExplainP>
              <Span>3가지의 정보가 필요해요.</Span>
            </ExplainP>
            <ExplainP>
              <Span>바로 시작해볼까요?</Span>
            </ExplainP>
          </ExplainDiv>
        </HeaderDiv>
        <ButtonDiv>
          <StartButtonDiv onClick={onClickHandler}>시작하기</StartButtonDiv>
        </ButtonDiv>
      </ModalContent>
    </Wrapper>
  );
}
