import { Button, Divider } from "semantic-ui-react";
import styles from "./itemList.module.css";

const ItemDetail = ({ detailData }) => {
  // console.log(detailData);
  return (
    <div className={styles.item_detail}>
      <img src={detailData?.image_link} alt="img" className={styles.item_img} />
      <strong className={styles.item_name}>{detailData?.name}</strong>
      <p className={styles.item_brand}>{detailData?.brand}</p>
      <p className={styles.item_type}>{detailData?.product_type}</p>
      <strong className={styles.item_price}>${detailData?.price}</strong>
      <Button>구매하기</Button>
      <p>description</p>
      <Divider />
      <p>{detailData?.description}</p>
    </div>
  );
};
export default ItemDetail;
