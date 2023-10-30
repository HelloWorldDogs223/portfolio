import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import {
  Wrapper,
  ModalContent,
  HeaderDiv,
  HeaderP,
  CloseImg,
  StudentContent,
  ArrowImg,
  TeacherContent,
  ButtonDiv,
  StudentDiv,
  WhoP,
  TeacherDiv,
  ExplainDiv,
  ExplainP,
  CodeDiv,
  CodeInput,
  ErrorDiv,
  ErrorP,
  StudentCodeClick,
  StudentCodeClickP,
  StudentCodeClicked,
  StudentCodeClickedP,
  KakaoDiv,
  KakaoP,
} from "../styles/ModalStyle";
interface PropsType {
  setClick: (click: boolean) => void;
}

export default function Modal({ setClick }: PropsType) {
  const [student, setStudent] = useState(false);
  const [teacher, setTeacher] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const studentOnClickHandler = () => {
    setStudent(true);
    setTeacher(false);
  };

  const teacherOnClickHandler = () => {
    setStudent(false);
    setTeacher(true);
  };

  const codeInputOnChangeHandler = (e: any) => {
    setCode(e.target.value);
  };

  const loginOnClickHandler = () => {
    // @TODO : 일반 학생 로그인 과정
    setCodeError(true);
  };

  const kakaoLoginHandler = () => {
    // @TODO : 카카오 교사 로그인 과정
    dispatch(login({}));

    const userId = 0;
    const accessToken = "a";
    sessionStorage.setItem("id", JSON.stringify(userId));
    sessionStorage.setItem("token", JSON.stringify(accessToken));

    navigate("/login", {
      state: { teacher: true, userId: userId, token: accessToken },
    });
  };

  useEffect(() => {
    if (code.length === 0) setCodeError(false);
  }, [code.length]);

  return (
    <Wrapper>
      <ModalContent>
        <HeaderDiv>
          {!student && !teacher && (
            <>
              <HeaderP>로그인</HeaderP>
              <CloseImg
                src="/images/close.svg"
                alt="close"
                onClick={() => setClick(false)}
              />
            </>
          )}
          {student && (
            <>
              <StudentContent>
                <ArrowImg
                  src="/images/arrow.svg"
                  onClick={() => setStudent(false)}
                />
                <HeaderP>학생 로그인</HeaderP>
              </StudentContent>
              <CloseImg
                src="/images/close.svg"
                alt="close"
                onClick={() => setClick(false)}
              />
            </>
          )}
          {teacher && (
            <>
              <TeacherContent>
                <ArrowImg
                  src="/images/arrow.svg"
                  onClick={() => setTeacher(false)}
                />
                <HeaderP>교사 로그인</HeaderP>
              </TeacherContent>
              <CloseImg
                src="/images/close.svg"
                alt="close"
                onClick={() => setClick(false)}
              />
            </>
          )}
        </HeaderDiv>
        {!student && !teacher && (
          <>
            <ButtonDiv>
              <StudentDiv onClick={studentOnClickHandler}>
                <img src="/images/student.svg" alt="student" />
                <WhoP>학생</WhoP>
              </StudentDiv>
              <TeacherDiv onClick={teacherOnClickHandler}>
                <img src="/images/teacher.svg" alt="teacher" />
                <WhoP>교사</WhoP>
              </TeacherDiv>
            </ButtonDiv>
          </>
        )}
        {student && (
          <>
            <ExplainDiv>
              <ExplainP>
                담당 교사에게 발급받은 학생 개별 코드를 입력하세요.
              </ExplainP>
            </ExplainDiv>
            <div>
              <CodeDiv>
                <CodeInput
                  onChange={codeInputOnChangeHandler}
                  placeholder="학생코드를 입력하세요."
                  value={code}
                />
              </CodeDiv>
              {codeError && code.length > 0 && (
                <ErrorDiv>
                  <img src="/images/error.svg" alt="error" />
                  <ErrorP>
                    일치하는 학생 정보가 없습니다. 코드를 확인하세요.
                  </ErrorP>
                </ErrorDiv>
              )}
            </div>
            {code.length === 0 ? (
              <StudentCodeClick>
                <StudentCodeClickP>로그인</StudentCodeClickP>
              </StudentCodeClick>
            ) : (
              <StudentCodeClicked>
                <StudentCodeClickedP onClick={loginOnClickHandler}>
                  로그인
                </StudentCodeClickedP>
              </StudentCodeClicked>
            )}
          </>
        )}
        {teacher && (
          <>
            <ExplainDiv>
              <ExplainP>SNS 계정으로 빠르게 로그인 및 회원가입하세요.</ExplainP>
            </ExplainDiv>
            <KakaoDiv onClick={kakaoLoginHandler}>
              <img src="/images/kakao.svg" alt="kakao Logo" />
              <KakaoP>카카오 로그인</KakaoP>
            </KakaoDiv>
          </>
        )}
      </ModalContent>
    </Wrapper>
  );
}
