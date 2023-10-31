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
import { ExplainP, HeaderDiv, HeaderP } from "./ThirdModal";
import { imgData } from "../assets/imgData";
import {
  BeforeButton,
  BottomInputDiv,
  ButtonDivWrapper,
  ButtonsDiv,
  CountSpan,
  ExplainDiv2,
  FirstDiv,
  GradeInputDiv,
  Guide,
  Guide2,
  InputFlexDiv,
  InputWrapper,
  InputsDiv,
  ModalContent,
  NameAndCountDiv,
  NameSchoolInput,
  NextButton,
  NextButton2,
  ProfileImg,
  ProfileImgDiv,
  RandomButton,
  UploadButton,
  WarningDiv,
  Wrapper,
} from "../styles/SixthModalStyle";

interface PropsType {
  setModal3: (bool: boolean) => void;
  setSubjectModal: (bool: boolean) => void;
  setModal2: (bool: boolean) => void;
}

export default function SixthModal({
  setModal3,
  setSubjectModal,
  setModal2,
}: PropsType) {
  const [imgFile, setImgFile] = useState("/images/thumbnail-01.png");
  const [schoolClass, setSchoolClass] = useState("");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [team, setTeam] = useState("");

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

  const onInputChangeHandler = (e: any) => {
    e.target.value = e.target.value.replace(/[^ㄱ-힣a-zA-Z0-9]/gi, "");
    setSchoolClass(e.target.value);
  };
  const onInputChangeHandler2 = (e: any) => {
    e.target.value = e.target.value.replace(/[^ㄱ-힣a-zA-Z0-9]/gi, "");
    setSchool(e.target.value);
  };
  const onInputChangeHandler3 = (e: any) => {
    e.target.value = e.target.value.replace(/[^ㄱ-힣a-zA-Z0-9]/gi, "");
    setGrade(e.target.value);
  };
  const onInputChangeHandler4 = (e: any) => {
    e.target.value = e.target.value.replace(/[^ㄱ-힣a-zA-Z0-9]/gi, "");
    setTeam(e.target.value);
  };

  const buttonOnClickHanlder = () => {
    setModal3(false);
    setModal2(true);
  };

  const buttonOnClickHanlder2 = () => {
    setModal3(false);
    setSubjectModal(true);
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
          <NameAndCountDiv>
            <span>학급 페이지명</span>
            <CountSpan>{schoolClass.length}/15</CountSpan>
          </NameAndCountDiv>
          <InputWrapper>
            <NameSchoolInput
              placeholder="꿈꾸며 자라나는 3반"
              value={schoolClass}
              onChange={onInputChangeHandler}
              maxLength={14}
            />
          </InputWrapper>
          <BottomInputDiv>
            <NameAndCountDiv>
              <span>학교명</span>
              <CountSpan>{school.length}/15</CountSpan>
            </NameAndCountDiv>
            <InputWrapper>
              <NameSchoolInput
                placeholder="우정초등학교"
                value={school}
                onChange={onInputChangeHandler2}
                maxLength={14}
              />
            </InputWrapper>
          </BottomInputDiv>
          <BottomInputDiv>
            <span>학년 / 반 </span>
            <InputFlexDiv>
              <GradeInputDiv>
                <NameSchoolInput
                  placeholder="0학년"
                  value={grade}
                  onChange={onInputChangeHandler3}
                />
              </GradeInputDiv>
              <GradeInputDiv>
                <NameSchoolInput
                  placeholder="00반"
                  value={team}
                  onChange={onInputChangeHandler4}
                />
              </GradeInputDiv>
            </InputFlexDiv>
          </BottomInputDiv>
          <ButtonDivWrapper>
            <ButtonsDiv>
              <BeforeButton onClick={buttonOnClickHanlder}>이전</BeforeButton>
              {schoolClass.length > 0 &&
              school.length > 0 &&
              grade.length > 0 &&
              team.length > 0 ? (
                <NextButton2 onClick={buttonOnClickHanlder2}>다음</NextButton2>
              ) : (
                <NextButton>다음</NextButton>
              )}
            </ButtonsDiv>
          </ButtonDivWrapper>
        </InputsDiv>
      </ModalContent>
    </Wrapper>
  );
}
