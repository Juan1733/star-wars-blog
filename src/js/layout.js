import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { CharacterInfo, CharacterProfile } from "./views/characterInfo";
import { Single } from "./views/single";

import { Demo } from "./views/demo";
import injectContext from "./store/appContext";

import { PlanetInfo } from "./views/planetInfo";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />	
					<Routes>
						<Route element={<Home />} path="/" />
						<Route element={<CharacterInfo />} path="/people/:id" />
						<Route element={<PlanetInfo />} path="/planets/:id" />
						<Route element={<Single />} path="/single/:theid" />
						<Route element={<h1>Not found!</h1>} />
                	</Routes>									
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
