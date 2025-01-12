import {
	ProductCard,
	ProductButtons,
	ProductImage,
	ProductTitle,
} from "../components";

const product = {
	id: "1",
	title: "Coffe Mug - Card",
	img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shooping page</h1>
			<hr />

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
				}}
			>
				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title title={""} />
					<ProductCard.Buttons />
				</ProductCard>

				<ProductCard product={product}>
					<ProductImage />
					<ProductTitle title={"Mundo"} />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	);
};

export default ShoppingPage;
