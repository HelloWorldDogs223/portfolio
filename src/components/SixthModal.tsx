import { useRef, useState } from "react";
import {
  ButtonDiv,
  DefaultImg,
  GetImgCircle,
  ImageInput,
  Img,
  ImgAndButtonDiv,
  ImgDiv,
} from "../styles/FifthModalStyle";
import { ExplainDiv, ExplainP, HeaderDiv, HeaderP } from "./ThirdModal";
import styled from "styled-components";
import { imgData } from "../assets/imgData";

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
  display: flex;
  width: 384px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 16px;
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

export default function SixthModal() {
  const [imgFile, setImgFile] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const saveImgFile = (): void => {
    const file =
      inputRef.current && inputRef.current.files && inputRef.current.files[0];
    const reader = new FileReader();
    if (file !== null) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result as string);
      };
    }
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const inputHandler = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const randomImgGenerator = () => {
    setImgFile(imgData[Math.floor(Math.random() * 12)]);
  };

  return (
    <Wrapper>
      <ModalContent>
        <HeaderDiv>
          <ImgDiv>
            <Img src="/images/blackCircle.svg" alt="greenCircle" />
            <Img src="/images/greenCircle.svg" alt="greenCircle" />
            <Img src="/images/blackCircle.svg" alt="greenCircle" />
          </ImgDiv>
          <HeaderP>학급 페이지 정보</HeaderP>
          <ExplainDiv2>
            <ExplainP>
              <span>학급 페이지의 정보를 설정하세요.</span>
            </ExplainP>
            <ExplainP></ExplainP>
          </ExplainDiv2>
        </HeaderDiv>
        <ImgAndButtonDiv>
          <FirstDiv>
            <span>대표 이미지</span>
          </FirstDiv>
          <ProfileImgDiv>
            {imgFile.length > 0 ? (
              <ProfileImg src={imgFile} alt="프로필 이미지" />
            ) : (
              <GetImgCircle>
                <DefaultImg>T</DefaultImg>
              </GetImgCircle>
            )}
          </ProfileImgDiv>
          <ButtonDiv>
            <RandomButton onClick={randomImgGenerator}>랜덤이미지</RandomButton>
            <UploadButton onClick={inputHandler}>
              <span>업로드</span>
              <ImageInput
                onChange={saveImgFile}
                ref={inputRef}
                type="file"
                accept="image/*"
                required
              />
            </UploadButton>
          </ButtonDiv>
          <WarningDiv>
            <Guide>이미지 가이드</Guide>
            <Guide2>권장 비율 16 : 9, 최대 용량 000MB</Guide2>
          </WarningDiv>
        </ImgAndButtonDiv>
        <InputsDiv>
          <span>학급 페이지명</span>
          <InputWrapper>
            <NameSchoolInput placeholder="꿈꾸며 자라나는 3반" />
          </InputWrapper>
          <BottomInputDiv>
            <span>학교명</span>
            <InputWrapper>
              <NameSchoolInput placeholder="우정초등학교" />
            </InputWrapper>
          </BottomInputDiv>
        </InputsDiv>
      </ModalContent>
    </Wrapper>
  );
}
