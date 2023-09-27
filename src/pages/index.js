import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "@/components/ItemList";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home({ list }) {
  // const [productListData, setProductListData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // const getData = async () => {
  //   await axios.get(API_URL).then((res) => {
  //     setProductListData(res.data);
  //     setIsLoading(false);
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Head>
        <title>NEXT | practise</title>
      </Head>

      <Header as="h3">베스트 상품</Header>
      <Divider />
      <ItemList productListData={list.slice(0, 9)} />
      <Header as="h3">신상품</Header>
      <Divider />
      <ItemList productListData={list.slice(9, 18)} />
      <Header as="h3">추천 상품</Header>
      <Divider />
      <ItemList productListData={list.slice(18)} />
    </div>
  );
}

//Head 는 next/head에서 import 해옴
//        title, metatag 넣어주면 됨
//ghkrdlswnd

export const getStaticProps = async () => {
  const API_URL = process.env.API_URL;
  const res = await axios.get(API_URL);
  const data = res.data;
  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
};

//프리렌더링 안했을때

// import Head from "next/head";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import ItemList from "@/components/ItemList";
// import { Divider, Header, Loader } from "semantic-ui-react";

// export default function Home() {
//   const [productListData, setProductListData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const API_URL = process.env.NEXT_PUBLIC_API_URL;

//   const getData = async () => {
//     await axios.get(API_URL).then((res) => {
//       setProductListData(res.data);
//       setIsLoading(false);
//     });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       <Head>
//         <title>NEXT | practise</title>
//       </Head>
//       {isLoading ? (
//         <div style={{ padding: "300px 0" }}>
//           <Loader inline="centered" active>
//             Loading
//           </Loader>
//         </div>
//       ) : (
//         <>
//           <Header as="h3">베스트 상품</Header>
//           <Divider />
//           <ItemList productListData={productListData.slice(0, 9)} />
//           <Header as="h3">신상품</Header>
//           <Divider />
//           <ItemList productListData={productListData.slice(9, 18)} />
//           <Header as="h3">추천 상품</Header>
//           <Divider />
//           <ItemList productListData={productListData.slice(18)} />
//         </>
//       )}
//     </div>
//   );
// }
