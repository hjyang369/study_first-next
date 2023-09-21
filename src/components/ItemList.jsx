import { Grid } from "semantic-ui-react";
import styles from "./itemList.module.css";
import Link from "next/link";

const ItemList = ({ productListData }) => {
  return (
    <div className={styles.item_list}>
      <Grid columns={3} divided>
        <Grid.Row>
          {productListData?.map((product) => {
            return (
              <Grid.Column key={product.id}>
                <Link href="/detail/[id]" as={`/detail/${product.id}`}>
                  <div className={styles.product_data}>
                    <img
                      src={product.image_link}
                      alt="img"
                      className={styles.item_img}
                    />
                    <strong className={styles.item_name}>{product.name}</strong>
                    <p className={styles.item_brand}>{product.brand}</p>
                    <p className={styles.item_type}>{product.product_type}</p>
                    <strong className={styles.item_price}>
                      ${product.price}
                    </strong>
                  </div>
                </Link>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ItemList;
