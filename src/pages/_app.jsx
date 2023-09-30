import Top from "../components/Top";
import Footer from "../components/Footer";
import "@/styles/globals.css";
import "semantic-ui-css/semantic.min.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

//페이지전환시 레이아웃, 상태값 유지
// componentDidCatch를 이용해 커스텀 에러 핸들링 가능
// 추가적인 데이터 페이지로 주입 가능
// 글로벌 css 여기에 적용
