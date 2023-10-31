import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  height: 44px;
  padding: 0px 20px;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  align-self: stretch;
  justify-content: space-between;
`;

export const Edit = styled.img`
  cursor: pointer;
`;

export const Span = styled.span`
  color: var(--Gray950, #111);

  /* Large/Bold */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
`;

export const FlexDiv = styled.div`
  display: flex;
`;

export const NavigatorBar = styled.div`
  display: flex;
  width: 170px;
  height: 724px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  position: relative;
`;

export const ClassImage = styled.img`
  width: 138px;
  height: 70px;
`;
export const EditImgDiv = styled.div`
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
`;
export const Input = styled.input`
  border: none;
  color: var(--Gray950, #111);
  /* Large/Bold */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  &:focus {
    outline: none;
  }
`;

export const InputWrapper = styled.div`
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

export const EditAndSpanDiv = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SchoolAndGradeSpan = styled.span`
  overflow: hidden;
  color: var(--Gray950, #111);
  text-overflow: ellipsis;
  /* Base/Bold */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
`;

export const SchoolAndGradeDiv = styled.div`
  text-align: left;
  width: 100%;
`;

export const TeacherNameAndStudent = styled.span`
  overflow: hidden;
  color: var(--Gray700, #666);
  text-overflow: ellipsis;
  /* Small/Rg */
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  margin-right: 8px;
`;

export const BoardDiv = styled.div`
  display: flex;
  width: 100%;
  text-align: left;
  justify-content: space-between;
`;

export const BoardSpan = styled.span`
  color: var(--Gray700, #666);
  /* Small/Rg */
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

export const PlusDiv = styled.div`
  cursor: pointer;
  display: flex;
  width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--Primary, #00a896);
`;

export const TeacherNameAndStudentDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HelpImg = styled.img`
  cursor: pointer;
`;

export const SubjectPlusDiv = styled.div`
  cursor: pointer;
  display: flex;
  height: 36px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px dashed var(--Gray300, #e2e2e2);
  background: var(--Gray100, #f5f5f5);
`;

export const SubjectDiv = styled.div`
  cursor: pointer;
  overflow: hidden;
  color: var(--Gray950, #111);
  text-overflow: ellipsis;

  /* Base/Bold */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid var(--Primary, #00a896);
`;

export const PlusImg = styled.img`
  z-index: 6;
`;

export const GraySpan = styled.span`
  margin-bottom: 4px;
  color: var(--Gray700, #666);
  /* Small/Rg */
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

export const ManageDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ManageSpanDiv = styled.div`
  cursor: pointer;
  margin-bottom: 12px;
  overflow: hidden;
  color: var(--Gray950, #111);
  text-overflow: ellipsis;
  /* Base/Rg */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid var(--Gray200, #eee);
`;

export const TabArrow = styled.img`
  cursor: pointer;
`;

export const ArrowDiv = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  right: 16px;
  bottom: 16px;
`;

export const MainDiv = styled.div`
  display: flex;
  height: 724px;
  padding: 16px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
`;

export const MainSubject = styled.span`
  color: var(--Gray700, #666);
  /* Large/Rg */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const MainUpperDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainSubject2 = styled.span`
  color: var(--Gray950, #111);
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
`;

export const SubjectPlusDiv2 = styled.div`
  cursor: pointer;
  display: flex;
  height: 28px;
  padding: 8px 12px;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: var(--Primary, #00a896);
`;

export const SubjectPlusSpan2 = styled.span`
  color: var(--W, #fff);
  text-align: center;
  /* Small/Bold */
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 150% */
`;

export const ExampleHeaderDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 12px;
  align-items: center;
  flex-direction: column;
  background: var(--Primary, #00a896);
`;

export const ExampleHeaderSpan = styled.span`
  width: 100%;
  overflow: hidden;
  color: var(--W, #fff);
  text-overflow: ellipsis;
  /* Base/Bold */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
`;

export const ExampleHeaderSpan2 = styled.span`
  width: 100%;
  overflow: hidden;
  color: var(--W, #fff);
  text-overflow: ellipsis;
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  text-decoration-line: underline;
`;

export const ExampleHeaderSpan3 = styled(ExampleHeaderSpan2)`
  text-decoration-line: none;
`;

export const ExampleHeaderSpanDiv = styled.div`
  width: 100%;
  margin-top: 4px;
`;

export const ExampleDiv = styled.div`
  overflow: hidden;
  display: flex;
  height: 582px;
  flex-direction: column;
  align-items: flex-start;
  background: var(--W, #fff);
  border-radius: 8px;
  border: 1px solid var(--Primary, #00a896);
`;

export const ExampleTopicDiv = styled.div`
  overflow: hidden;
  color: var(--Gray950, #111);
  text-overflow: ellipsis;

  /* Large/Bold */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  display: flex;
  width: 229px;
  height: 64px;
  padding: 8px 12px;
  align-items: flex-start;
  gap: 4px;
  border-radius: 8px;
  background: var(--W, #fff);
`;

export const ExampleTopicMaterial = styled.div`
  display: flex;
  width: 229px;
  height: 124px;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 8px;
  background: var(--W, #fff);
  margin-bottom: 8px;
  margin-top: 24px;
`;

export const ExampleTopicMaterial2 = styled(ExampleTopicMaterial)`
  margin-top: 0px;
`;

export const ExampleTopicMaterialImg = styled.div`
  color: var(--W, #fff);
  text-align: center;

  /* Xsmall/Bold */
  font-family: "Pretendard";
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 160% */
  display: flex;
  width: 20px;
  height: 20px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: var(--Gray400, #ccc);
  margin-right: 4px;
`;
export const ExampleTopicMaterialImg2 = styled(ExampleTopicMaterialImg)`
  border-radius: 30px;
  background: #f08888;
`;

export const ExampleTopicMaterialImg3 = styled(ExampleTopicMaterialImg)`
  border-radius: 30px;
  background: #88c183;
`;

export const ExampleTopicNameAndImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ExampleTopicNameAndImgDiv2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExampleTopicTitle = styled.span`
  margin-bottom: 4px;
  overflow: hidden;
  color: var(--Gray950, #111);
  text-overflow: ellipsis;
  width: 205px;
  overflow: hidden;
  white-space: nowrap;

  /* Base/Bold */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
`;
export const ExampleTopicContentSpan = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--Gray800, #333);
  width: 205px;
  /* Small/Rg */
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

export const ExampleTitleAndContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ThreeDots = styled.img`
  cursor: pointer;
`;

export const ExampleStudentSpan = styled.span`
  margin-right: 8px;
  color: var(--Gray600, #999);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

export const ExampleStudentSpan2 = styled(ExampleStudentSpan)`
  margin-right: 0px;
`;

export const ExampleStudentDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ExampleSortDiv = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowImg = styled.img`
  cursor: pointer;
`;

export const StudentNameSpan = styled.span`
  color: var(--Gray800, #333);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;
