import React from "react";
import {NavigationMenuStyled} from "./NavigationMenuStyled.js";

const NavigationMenu = () => {
	return(
		<NavigationMenuStyled>
			<div>
				<div>user logo</div>
			</div>
			<ul>
				<li>приход</li>
				<li>группы</li>
				<li>продукты</li>
				<li>пользователи</li>
				<li>настройки</li>
			</ul>
		</NavigationMenuStyled>
	);
};

export default NavigationMenu;