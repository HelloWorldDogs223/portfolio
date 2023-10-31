import { useEffect, useState } from "react";
import {
  Img,
  InnerWrapper,
  OuterWrapper,
  Wrapper,
} from "../styles/LandingPageStyle";
import FourthModal from "../components/FourthModal";
import FifthModal from "../components/FifthModal";
import SixthModal from "../components/SixthModal";

export default function InitPage() {
  const [modal, setModal] = useState(true);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  useEffect(() => {
    //@TODO : 서버로부터 정보를 받아와서 초기 정보 입력을 전부 마쳤는지 확인해서, 안 마친 경우 처음부터 다시 진행
  }, []);

  return (
    <>
      <OuterWrapper>
        <Wrapper>
          <Img src="/images/landing.svg" alt="landing-img" />
          <InnerWrapper></InnerWrapper>
        </Wrapper>
      </OuterWrapper>
      {modal && <FourthModal setModal={setModal} setModal2={setModal2} />}
      {!modal && modal2 && (
        <FifthModal setModal2={setModal2} setModal3={setModal3} />
      )}
      {!modal && !modal2 && modal3 && <SixthModal />}
    </>
  );
}
