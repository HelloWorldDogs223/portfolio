import { useEffect, useState } from "react";
import {
  ArrowDiv,
  BoardDiv,
  BoardSpan,
  ClassImage,
  Edit,
  EditAndSpanDiv,
  EditImgDiv,
  FlexDiv,
  GraySpan,
  Header,
  HelpImg,
  Input,
  InputWrapper,
  MainDiv,
  MainSubject,
  MainSubject2,
  MainUpperDiv,
  ManageDiv,
  ManageSpanDiv,
  NavigatorBar,
  PlusDiv,
  PlusImg,
  SchoolAndGradeDiv,
  SchoolAndGradeSpan,
  Span,
  SubjectDiv,
  SubjectPlusDiv,
  SubjectPlusDiv2,
  SubjectPlusSpan2,
  TabArrow,
  TeacherNameAndStudent,
  TeacherNameAndStudentDiv,
} from "../styles/MainPageStyle";
import Example from "../components/Example";
import { MainHorizontalDiv, PlusTopicDiv } from "../styles/SixthModalStyle";

export default function MainPage() {
  const [className, setClassName] = useState("꿈꾸며 자라나는 3반");
  const [classNameEdit, setClassNameEdit] = useState(false);

  useEffect(() => {
    // @TODO : 서버에서 선생님 이름, 학급명, 학년, 반 받아오기
    // setClassName()
  }, []);

  const onEditClickHandler = () => {
    setClassNameEdit(!classNameEdit);
  };

  const InputOnChangeHandler = (e: any) => {
    e.target.value = e.target.value.replace(/[^ㄱ-힣a-zA-Z0-9\s]/gi, "");
    setClassName(e.target.value);
  };

  return (
    <>
      <Header>
        <img src="/images/logo.svg" alt="logo" />
        <EditAndSpanDiv>
          {classNameEdit ? (
            <InputWrapper>
              <Input
                value={className}
                onChange={InputOnChangeHandler}
                placeholder="꿈꾸며 자라나는 3반"
                maxLength={14}
              />
            </InputWrapper>
          ) : (
            <Span>{className}</Span>
          )}
          <EditImgDiv>
            <Edit
              onClick={onEditClickHandler}
              src="/images/edit.svg"
              alt="edit"
            />
          </EditImgDiv>
        </EditAndSpanDiv>
        <img src="/images/defaultProfile.svg" alt="profile" />
      </Header>
      <MainHorizontalDiv>
        <FlexDiv>
          <NavigatorBar>
            <div>
              <ClassImage src="/images/thumbnail-01.png" alt="thumbnail" />
            </div>
            <SchoolAndGradeDiv>
              <SchoolAndGradeSpan>우정초등학교 4-3</SchoolAndGradeSpan>
              <TeacherNameAndStudentDiv>
                <div>
                  <TeacherNameAndStudent>우영우 </TeacherNameAndStudent>
                  <TeacherNameAndStudent>0명</TeacherNameAndStudent>
                </div>
                <HelpImg src="/images/help.svg" alt="help" />
              </TeacherNameAndStudentDiv>
            </SchoolAndGradeDiv>
            <BoardDiv>
              <BoardSpan>게시판</BoardSpan>
              <PlusDiv>
                <img src="/images/plus.svg" alt="plus" />
              </PlusDiv>
            </BoardDiv>
            <SubjectDiv>
              <span>국어</span>
            </SubjectDiv>
            <SubjectPlusDiv>
              <PlusImg src="/images/plusBlack.svg" alt="plus" />
            </SubjectPlusDiv>
            <ManageDiv>
              <GraySpan>관리</GraySpan>
              <ManageSpanDiv>
                <span>제출</span>
              </ManageSpanDiv>
              <ManageSpanDiv>
                <span>학생</span>
              </ManageSpanDiv>
            </ManageDiv>
            <ManageDiv>
              <GraySpan>지원</GraySpan>
              <ManageSpanDiv>
                <span>사용가이드</span>
              </ManageSpanDiv>
              <ManageSpanDiv>
                <span>문의하기</span>
              </ManageSpanDiv>
            </ManageDiv>
            <ArrowDiv>
              <TabArrow src="/images/tabArrow.svg" alt="arrow" />
            </ArrowDiv>
          </NavigatorBar>
          <MainDiv>
            <MainUpperDiv>
              <div>
                <MainSubject>게시판</MainSubject>
                <img src="/images/boardArrow.svg" alt="arrow" />
                <MainSubject2>국어</MainSubject2>
              </div>
              <SubjectPlusDiv2>
                <img src="/images/plus.svg" alt="plus" />
                <SubjectPlusSpan2>주제</SubjectPlusSpan2>
              </SubjectPlusDiv2>
            </MainUpperDiv>
            <Example />
          </MainDiv>
        </FlexDiv>
        <PlusTopicDiv>
          <img src="images/plusBlack.svg" alt="plus" />
        </PlusTopicDiv>
      </MainHorizontalDiv>
    </>
  );
}
