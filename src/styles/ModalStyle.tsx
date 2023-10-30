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
  height: 34px;
  display: flex;
  justify-content: space-between;
`;

export const StudentDiv = styled.div`
  display: flex;
  padding: 24px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 1px solid var(--Gray400, #ccc);
  margin-right: 12px;
  cursor: pointer;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const WhoP = styled.p`
  color: var(--Gray950, #111);
  text-align: center;
  /* Xlarge/Bold */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 144.444% */
`;

export const TeacherDiv = styled(StudentDiv)`
  border-radius: 8px;
  border: 1px solid var(--Gray400, #ccc);
`;

export const CloseImg = styled.img`
  cursor: pointer;
`;

export const ErrorP = styled.p`
  color: var(--Red, #eb5757);
  /* Small/Rg */
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

export const StudentContent = styled.div`
  display: flex;
`;

export const TeacherContent = styled(StudentContent)``;

export const ArrowImg = styled.img`
  cursor: pointer;
`;

export const ExplainP = styled.p`
  color: var(--Gray700, #666);
  /* Base/Medium */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;

export const CodeDiv = styled.div`
  display: flex;
  width: 336px;
  height: 56px;
  padding: 16px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--color-gray-gray-400, #ccc);
  background: var(--color-gray-w, #fff);
  padding: 16px;
`;

export const StudentCodeClick = styled.div`
  display: flex;
  height: 56px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Gray400, #ccc);
`;

export const StudentCodeClicked = styled(StudentCodeClick)`
  border-radius: 8px;
  background: var(--Primary, #00a896);
  cursor: pointer;
`;

export const StudentCodeClickedP = styled.p`
  color: var(--W, #fff);
  text-align: center;
  /* Xlarge/Bold */
  font-family: "Pretendard";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 144.444% */
`;

export const CodeInput = styled.input`
  overflow: hidden;
  width: 100%;
  color: var(--color-gray-gray-600, #999);
  text-overflow: ellipsis;
  /* Large/Rg */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  border: none;
  &:focus {
    outline: none;
  }
`;

export const StudentCodeClickP = styled.p`
  color: var(--Gray700, #666);
  text-align: center;
  /* Xlarge/Bold */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 144.444% */
`;

export const ExplainDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const KakaoDiv = styled.div`
  display: flex;
  padding: 14px 127px 14px 16px;
  align-items: flex-start;
  justify-content: center;
  gap: 93px;
  align-self: stretch;
  border-radius: 8px;
  background: #fee500;
  cursor: pointer;
`;

export const ErrorDiv = styled.div`
  display: flex;
  margin-top: 4px;
  width: 100%;
`;

export const KakaoP = styled.p`
  width: 100%;
  color: var(--kakao-text, rgba(0, 0, 0, 0.85));
  text-align: center;
  font-family: "AppleSDGothic";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 15px */
`;
