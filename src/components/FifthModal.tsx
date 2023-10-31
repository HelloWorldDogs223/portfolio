import {
  ButtonDiv,
  CountDiv,
  DefaultImg,
  GetImgCircle,
  ImageInput,
  Img,
  ImgAndButtonDiv,
  ImgDiv,
  Input,
  InputDiv,
  ModalContent,
  NameAndEmailP,
  NextButton,
  NextButton2,
  NoButton,
  ProfileImg,
  YesButton,
} from "../styles/FifthModalStyle";
import {
  ExplainDiv,
  ExplainP,
  HeaderDiv,
  HeaderP,
  Span,
  Wrapper,
} from "./ThirdModal";
import { useEffect, useRef, useState } from "react";

interface PropsType {
  setModal2: (bool: boolean) => void;
  setModal3: (bool: boolean) => void;
}

export default function FifthModal({ setModal2, setModal3 }: PropsType) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imgFile, setImgFile] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // @TODO : 카카오 로그인해서 넘어온 기본 이메일을 설정
    setEmail("dldyddlwl1@naver.com");
  }, []);

  const inputHandler = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onChangeHandler = (e: any) => {
    e.target.value = e.target.value.replace(/[^ㄱ-힣a-zA-Z0-9]/gi, "");
    setName(e.target.value);
  };

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

  const nextButtonClickHandler = () => {
    setModal2(false);
    setModal3(true);
  };

  return (
    <Wrapper>
      <ModalContent>
        <HeaderDiv>
          <ImgDiv>
            <Img src="/images/greenCircle.svg" alt="greenCircle" />
            <Img src="/images/blackCircle.svg" alt="greenCircle" />
            <Img src="/images/blackCircle.svg" alt="greenCircle" />
          </ImgDiv>
          <HeaderP>내 정보</HeaderP>
          <ExplainDiv>
            <ExplainP>
              <Span>학급 페이지에 노출되는 내 정보를 설정하세요.</Span>
            </ExplainP>
          </ExplainDiv>
        </HeaderDiv>
        <ImgAndButtonDiv>
          {imgFile.length > 0 ? (
            <ProfileImg src={imgFile} alt="프로필 이미지" />
          ) : (
            <GetImgCircle>
              <DefaultImg>T</DefaultImg>
            </GetImgCircle>
          )}

          <ButtonDiv>
            <NoButton onClick={() => setImgFile("")}>삭제</NoButton>
            <YesButton onClick={inputHandler}>
              <span>변경</span>
              <ImageInput
                onChange={saveImgFile}
                ref={inputRef}
                type="file"
                accept="image/*"
                required
              />
            </YesButton>
          </ButtonDiv>
        </ImgAndButtonDiv>
        <div>
          <CountDiv>
            <NameAndEmailP>이름</NameAndEmailP>
            <NameAndEmailP>{name.length}/15</NameAndEmailP>
          </CountDiv>
          <InputDiv>
            <Input
              value={name}
              onChange={onChangeHandler}
              placeholder="이름을 입력하세요."
              maxLength={14}
            />
          </InputDiv>
        </div>
        <div>
          <CountDiv>
            <NameAndEmailP>이메일</NameAndEmailP>
          </CountDiv>
          <InputDiv>
            <Input
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              placeholder="이메일을 입력하세요."
            />
          </InputDiv>
        </div>
        <ButtonDiv>
          {name.length > 0 && email.length > 0 ? (
            <NextButton2 onClick={nextButtonClickHandler}>다음</NextButton2>
          ) : (
            <NextButton>다음</NextButton>
          )}
        </ButtonDiv>
      </ModalContent>
    </Wrapper>
  );
}
