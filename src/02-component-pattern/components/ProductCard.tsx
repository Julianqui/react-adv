import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";

const ProductCard = () => {
	const { counter, increaseBy } = useProduct();

	return (
		<div className={styles?.productCard}>
			<img
				className={styles?.productImg}
				src="./coffee-mug.png"
				alt="Coffe Mug error"
			/>
			{/* <img className={styles.productImg} src={noImage} alt="Coffe Mug error" /> */}

			<span className={styles?.productDescription}>Coffe Mug</span>

			<div className={styles?.buttonsContainer}>
				<button className={styles?.buttonMinus} onClick={() => increaseBy(-1)}>
					-
				</button>

				<div className={styles?.countLabel}>{counter}</div>

				<button className={styles?.buttonAdd} onClick={() => increaseBy(+1)}>
					+
				</button>
			</div>
		</div>
	);
};

export default ProductCard;