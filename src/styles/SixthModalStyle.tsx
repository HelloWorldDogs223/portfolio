import styled from "styled-components";
import { ExplainDiv } from "../components/ThirdModal";

export const Wrapper = styled.div`
  z-index: 5;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0%;
  left: 0%;
  padding: 24px;
`;

export const ModalContent = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  height: 720px;
  display: flex;
  width: 396px;
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

export const RandomButton = styled.div`
  width: 142px;
  display: flex;
  height: 28px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 4px;
  border: 1px solid var(--Gray800, #333);
  &:hover {
    color: var(--Primary, #00a896);
    border-radius: 4px;
    border: 1px solid var(--Primary, #00a896);
  }
  color: var(--Gray950, #111);
  text-align: center;
  /* Small/Bold */
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 150% */
  margin-right: 4px;
  cursor: pointer;
`;
export const UploadButton = styled.div`
  cursor: pointer;
  width: 142px;
  color: var(--Gray950, #111);
  text-align: center;
  /* Small/Bold */
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 150% */
  display: flex;
  height: 28px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 4px;
  border: 1px solid var(--Gray800, #333);

  &:hover {
    color: var(--Primary, #00a896);
    border-radius: 4px;
    border: 1px solid var(--Primary, #00a896);
  }
`;

export const ProfileImgDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 336px;
  height: 190px;
  flex-shrink: 0;
  margin-bottom: 4px;
`;

export const ExplainDiv2 = styled(ExplainDiv)`
  margin-top: 4px;
`;

export const FirstDiv = styled.div`
  width: 100%;
  text-align: left;
  color: var(--Gray950, #111);

  /* Base/Bold */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
`;

export const WarningDiv = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--Gray800, #333);
  /* Small/Rg */
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  justify-content: start;
  align-items: start;
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
`;

export const InputWrapper = styled.div`
  margin-top: 4px;
  display: flex;
  width: 336px;
  height: 56px;
  padding: 16px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--color-gray-gray-400, #ccc);
  background: var(--color-gray-w, #fff);
`;

export const BottomInputDiv = styled.div`
  margin-top: 48px;
`;

export const NameSchoolInput = styled.input`
  overflow: hidden;
  color: var(--Gray950, #111);
  text-overflow: ellipsis;

  overflow: hidden;
  color: var(--Gray950, #111);
  text-overflow: ellipsis;
  /* Large/Rg */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  border: none;
  &::placeholder {
    font-family: "Pretendard";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }

  &:focus {
    outline: none;
  }
`;

export const Guide = styled.span`
  color: var(--Gray800, #333);
  /* Small/Bold */
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 150% */
`;

export const Guide2 = styled.span`
  color: var(--Gray800, #333);
  /* Small/Rg */
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

export const BeforeButton = styled.div`
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
  margin-right: 8px;
  cursor: pointer;
  color: var(--Primary, #00a896);
  text-align: center;
  /* Xlarge/Bold */
  font-family: "Pretendard";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 144.444% */
`;

export const NextButton = styled.div`
  cursor: pointer;
  width: 164px;
  display: flex;
  height: 56px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 8px;
  background: var(--Gray400, #ccc);
`;

export const NextButton2 = styled(NextButton)`
  border-radius: 8px;
  background: var(--Primary, #00a896);
  color: var(--W, #fff);
  text-align: center;

  /* Xlarge/Bold */
  font-family: "Pretendard";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 144.444% */
`;

export const ButtonDivWrapper = styled.div`
  padding-top: 24px;
  display: flex;
  position: sticky;
  bottom: 0%;
  z-index: 6;
  background-color: white;
  padding-bottom: 24px;
  width: 384px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  position: sticky;
  bottom: 0%;
  z-index: 6;
  background-color: white;
  padding-bottom: 0px;
`;

export const InputFlexDiv = styled.div`
  display: flex;
`;

export const GradeInputDiv = styled.div`
  margin-right: 8px;
  margin-top: 4px;
  display: flex;
  width: 164px;
  height: 56px;
  padding: 16px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--color-gray-gray-400, #ccc);
  background: var(--color-gray-w, #fff);
`;

export const CountSpan = styled.span`
  color: var(--Gray700, #666);
  text-align: right;
  /* Base/Rg */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

export const NameAndCountDiv = styled.div`
  display: flex;
  width: 336px;
  justify-content: space-between;
`;

export const PlusTopicDiv = styled.div`
  display: flex;
  width: 229px;
  height: 68px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px dashed var(--Gray400, #ccc);
  background: var(--Gray200, #eee);
  margin-top: 70px;
`;

export const MainHorizontalDiv = styled.div`
  display: flex;
  gap: 20px;
`;
