import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

export default function Admin() {
  const [isLogin, setIsLogin] = useState(false);
  const route = useRouter();

  const checkLogin = () => {
    axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        //로그인
        setIsLogin(true);
      } else {
        route.push("/login");
      }
    });
  };

  const logout = () => {
    axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        route.push("/");
      }
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div>
      <p>admin</p>
      {isLogin && <Button onClick={logout}>로그아웃</Button>}
    </div>
  );
}
