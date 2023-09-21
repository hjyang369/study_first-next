import { useRouter } from "next/router";
import { Menu, Segment } from "semantic-ui-react";

const Gnb = () => {
  let activeItem = "";
  const router = useRouter();

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname !== "/") {
    activeItem = "messages";
  }

  const goLink = (e, data) => {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "messages") {
      router.push("about");
    } else if (data.name === "friends") {
      router.push("asd");
    }
  };

  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={goLink}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={goLink}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={goLink}
        />
      </Menu>
    </Segment>
  );
};

export default Gnb;
