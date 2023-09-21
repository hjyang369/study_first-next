import ItemDetail from "@/components/ItemDetail";
import axios from "axios";
import Head from "next/head";

//서버사이드렌더링 라우팅방식 구현
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

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const data = res.data;
  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
};

// import ItemDetail from "@/components/ItemDetail";
// import axios from "axios";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { Loader } from "semantic-ui-react";

// //기본적인 라우팅방식 구현
// const Post = () => {
//   const router = useRouter();
//   const id = router.query.id;

//   const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

//   const [detailData, setDetailData] = useState();
//   const [isLoading, setIsLoading] = useState(true);

//   const getData = () => {
//     axios.get(API_URL).then((res) => setDetailData(res.data));
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     getData();
//   }, [id]);

//   return (
//     <div>
//       {isLoading ? (
//         <div style={{ padding: "300px 0" }}>
//           <Loader inline="centered" active>
//             Loading
//           </Loader>
//         </div>
//       ) : (
//         <>
//           <div>ID : {id}</div>
//           <ItemDetail detailData={detailData} />
//         </>
//       )}
//     </div>
//   );
// };

// export default Post;
