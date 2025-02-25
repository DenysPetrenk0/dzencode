import React from "react";
import {TopMenuStyled} from "./TopMenuStyled.js";

const TopMenu = () => {
	return(
		<TopMenuStyled className="d-flex py-3 px-5">
			<div>logo</div>
			<input type="text" placeholder="поиск"/>
			<div>time</div>
		</TopMenuStyled>
	)
};

export default TopMenu;