export default (req, res) => {
  if (req.method === "POST") {
    // header 만들어줌
    // 쿠키에 값 넣어주는 건데, a_name이 이름, Mike가 값임
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
    res.statusCode = 200;
    res.json({ message: "ok" });
  }
};
