import styled from "styled-components";

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

export const ModalContent = styled.div`
  display: flex;
  width: 384px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 16px;
  background: var(--color-gray-w, #fff);
  z-index: 6;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Img = styled.img`
  margin-right: 8px;
`;

export const ImgDiv = styled.div`
  margin-bottom: 24px;
`;

export const GetImgCircle = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 60px;
  background: var(--Gray400, #ccc);
  margin-bottom: 8px;
`;

export const ImgAndButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DefaultImg = styled.p`
  color: var(--W, #fff);
  text-align: center;
  /* Header 1/Bold */
  font-family: "Pretendard";
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px; /* 138.889% */
  z-index: 5;
  color: var(--Gray800, #333);
  text-align: center;
`;

export const NoButton = styled.div`
  color: var(--Gray800, #333);
  text-align: center;

  /* Small/Bold */
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 150% */
  cursor: pointer;
  display: flex;
  height: 28px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid var(--Gray400, #ccc);
  &:hover {
    color: var(--Primary, #00a896);
  }
  margin-right: 4px;
`;

export const YesButton = styled.div`
  cursor: pointer;
  display: flex;
  height: 28px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid var(--Gray400, #ccc);
  &:hover {
    color: var(--Primary, #00a896);
  }
`;

export const NameAndEmailP = styled.p`
  color: var(--Gray950, #111);

  /* Base/Bold */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  margin-bottom: 4px;
`;

export const InputDiv = styled.div`
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

export const Input = styled.input`
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--Gray950, #111);
  &::placeholder {
    overflow: hidden;
    color: var(--color-gray-gray-600, #999);
    text-overflow: ellipsis;
    font-family: "Pretendard";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  border: none;
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  &:focus {
    outline: none;
  }
`;

export const CountDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NextButton = styled.div`
  display: flex;
  height: 56px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 8px;
  background: var(--Gray400, #ccc);
  color: var(--Gray700, #666);
  text-align: center;
  font-family: "Pretendard";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;

  line-height: 26px; /* 144.444% */
`;

export const NextButton2 = styled(NextButton)`
  color: white;
  cursor: pointer;
  background: var(--Primary, #00a896);
`;

export const ImageInput = styled.input`
  display: none;
`;

export const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 60px;
  border: 1px solid var(--Gray400, #ccc);
  background: var(--W, #fff);
  margin-bottom: 4px;
`;
