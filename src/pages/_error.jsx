function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
//npm run biled->npm start 후 확인 가능
//500.jsx로 파일을 만들어도 되지만 더 많은 에러 컨트롤 위해
//_error.js로 파일을 만드는 것이고 클라이언트, 서버 에러 둘다 확인 가능
//고로 404페이지도 필요가 없어진다~
