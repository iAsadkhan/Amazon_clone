import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<div className="home__image">
					{/* src="https://pbs.twimg.com/media/ETXz2MiUwAAUF2k?format=jpg&name=medium"
					alt="notFound" /> */}
				</div>
				<div className="home__row">
					<Product />
					<Product />
				</div>
				<div className="home__row">
					<Product /> <Product /> <Product />
				</div>
				<div className="home__row">
					<Product />
				</div>
			</div>
		</div>
	);
}

export default Home;
