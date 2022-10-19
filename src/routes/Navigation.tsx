import {
	BrowserRouter as Router,
	Route,
	NavLink,
	BrowserRouter,
  Routes,
} from "react-router-dom";

import logo from "../logo.svg";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

import {ShoppingPage} from "../02-component-pattern/pages/ShoppingPage"	

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React Logo" />
					<ul>
						<li>
							<NavLink
								to="/lazy1"
								className={({ isActive }) => (isActive ? "nav-active" : "") }
							>
								Shooping
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/lazy2"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/lazy3"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Users
							</NavLink>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Routes>
					<Route path="lazy1" element={<ShoppingPage />} />

					<Route path="lazy2" element={<LazyPage2 />} />

					<Route path="lazy3" element={<LazyPage3 />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
