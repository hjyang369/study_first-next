import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";
import Image from "next/image";

const Top = () => {
  return (
    <div>
      <div style={{ display: "flex", gap: "1em" }}>
        <Image
          classname="logoImg"
          alt="logo"
          src="/images/이미지.jpg"
          width={100}
          height={100}
        />
        {/* <p>로고</p> */}
        <Header as="h1">this is top</Header>
      </div>
      <Gnb />
    </div>
  );
};

export default Top;
