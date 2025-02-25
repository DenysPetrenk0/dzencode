import React from "react";
import NavigationMenu from "../navigationMenu/NavigationMenu.jsx";
import Content from "../content/Content.jsx";

const Main = () => {
	return(
		<main className="d-flex vh-100">
			<NavigationMenu />
			<Content />
		</main>
	);
};

export default Main;