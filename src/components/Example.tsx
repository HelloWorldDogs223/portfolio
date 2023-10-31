import {
  ExampleDiv,
  ExampleHeaderDiv,
  ExampleHeaderSpan,
  ExampleHeaderSpanDiv,
  ExampleHeaderSpan2,
  ExampleHeaderSpan3,
  ExampleTopicDiv,
  ExampleTopicMaterial2,
  ExampleTopicNameAndImgDiv,
  ExampleTopicNameAndImgDiv2,
  ExampleTopicMaterialImg,
  StudentNameSpan,
  ThreeDots,
  ExampleTitleAndContentDiv,
  ExampleTopicTitle,
  ExampleTopicContentSpan,
  ExampleStudentDiv,
  ExampleStudentSpan,
  ExampleSortDiv,
  ExampleStudentSpan2,
  ExampleTopicMaterial,
  ExampleTopicMaterialImg2,
  ExampleTopicMaterialImg3,
  ArrowImg,
} from "../styles/MainPageStyle";

export default function Example() {
  return (
    <ExampleDiv>
      <ExampleHeaderDiv>
        <ExampleHeaderSpan>게시글 예시</ExampleHeaderSpan>
        <ExampleHeaderSpanDiv>
          <ExampleHeaderSpan2>지원 &#62; 사용 가이드</ExampleHeaderSpan2>
          <ExampleHeaderSpan3>에서 다시 확인할</ExampleHeaderSpan3>
        </ExampleHeaderSpanDiv>
        <ExampleHeaderSpan3>수 있어요.</ExampleHeaderSpan3>
      </ExampleHeaderDiv>
      <ExampleTopicDiv>
        <span>잊지 못할 소중한 추억을 그려보아요.</span>
      </ExampleTopicDiv>
      <ExampleTopicMaterial2>
        <ExampleTopicNameAndImgDiv>
          <ExampleTopicNameAndImgDiv2>
            <ExampleTopicMaterialImg>T</ExampleTopicMaterialImg>
            <StudentNameSpan>우영우</StudentNameSpan>
          </ExampleTopicNameAndImgDiv2>
          <ThreeDots src="/images/threeDots.svg" alt="more" />
        </ExampleTopicNameAndImgDiv>
        <ExampleTitleAndContentDiv>
          <ExampleTopicTitle>가족과 함께한 단풍여행</ExampleTopicTitle>
          <ExampleTopicContentSpan>
            주말에 단풍을 보러 차를 타고 가족과 함께 제천으로 1박2일 여행을
            갔다. 알록달록 이쁜 단풍을 보니 기분이 좋았다.
          </ExampleTopicContentSpan>
        </ExampleTitleAndContentDiv>
        <ExampleStudentDiv>
          <div>
            <ExampleStudentSpan>제출 2</ExampleStudentSpan>
            <ExampleStudentSpan>미제출 20</ExampleStudentSpan>
          </div>
          <ExampleSortDiv>
            <ExampleStudentSpan2>번호순</ExampleStudentSpan2>
            <ArrowImg src="/images/downArrow.svg" alt="arrow" />
          </ExampleSortDiv>
        </ExampleStudentDiv>
      </ExampleTopicMaterial2>
      <ExampleTopicMaterial>
        <ExampleTopicNameAndImgDiv>
          <ExampleTopicNameAndImgDiv2>
            <ExampleTopicMaterialImg2>2</ExampleTopicMaterialImg2>
            <StudentNameSpan>김아빈</StudentNameSpan>
          </ExampleTopicNameAndImgDiv2>
          <ThreeDots src="/images/threeDots.svg" alt="more" />
        </ExampleTopicNameAndImgDiv>
        <ExampleTitleAndContentDiv>
          <ExampleTopicTitle>친구들과 놀이동산에 가다!</ExampleTopicTitle>
          <ExampleTopicContentSpan>
            처음으로 부모님 없이 학교 친구들과 롯데월드에 갔다. 정아, 민서
            그리고 호란이와 함께 했는데 너무 설렜다.
          </ExampleTopicContentSpan>
        </ExampleTitleAndContentDiv>
      </ExampleTopicMaterial>
      <ExampleTopicMaterial>
        <ExampleTopicNameAndImgDiv>
          <ExampleTopicNameAndImgDiv2>
            <ExampleTopicMaterialImg3>16</ExampleTopicMaterialImg3>
            <StudentNameSpan>장하주</StudentNameSpan>
          </ExampleTopicNameAndImgDiv2>
          <ThreeDots src="/images/threeDots.svg" alt="more" />
        </ExampleTopicNameAndImgDiv>
        <ExampleTitleAndContentDiv>
          <ExampleTopicTitle>
            한글박물관에서 동생에게 한글을 가르쳐주다
          </ExampleTopicTitle>
          <ExampleTopicContentSpan>
            처음으로 부모님 없이 학교 친구들과 롯데월드에 갔다. 정아, 민서
            그리고 호란이와 함께 했는데 너무 설렜다.
          </ExampleTopicContentSpan>
        </ExampleTitleAndContentDiv>
      </ExampleTopicMaterial>
    </ExampleDiv>
  );
}
