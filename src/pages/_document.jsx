import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

//마크업정의를 건너띄기때문에 이게 있어야 html, head 등 고칠 수 있음
//여기는 css, 이벤트 등 못 쓰고 서버에서 작동만 됨
