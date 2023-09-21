import ItemDetail from "@/components/ItemDetail";
import axios from "axios";
import Head from "next/head";

//getStaticPath 라우팅방식 구현
const Post = ({ item, name }) => {
  console.log(name);
  return (
    <div>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <mata name="description" content={item.description}></mata>
          </Head>
          <div>ID : {item.id}</div>
          <div>{name} 환경입니다.</div>
          <ItemDetail detailData={item} />
        </>
      )}
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "740" } },
      { params: { id: "730" } },
      { params: { id: "729" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
