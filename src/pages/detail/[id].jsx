import ItemDetail from "@/components/ItemDetail";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

//getStaticPath 라우팅방식 구현
const Post = ({ item, name }) => {
  const router = useRouter();
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
      { params: { id: "560" } },
      { params: { id: "559" } },
      { params: { id: "558" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const api_url = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(api_url);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
