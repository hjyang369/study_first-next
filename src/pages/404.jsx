import { Icon } from "semantic-ui-react";

const NotFound = () => {
  return (
    <div>
      <Icon name="warning circle" color="red" />
      <p>404 | error</p>
    </div>
  );
};

export default NotFound;

//정적분기? 를 하기 때문에 pages 폴더 안에 404.js 파일을 만들어주면됨
//스테틱으로 관리하는것이 더 좋다
