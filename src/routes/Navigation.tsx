import { Suspense } from "react";
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	BrowserRouter,
	Routes,
	Navigate,
} from "react-router-dom";

import logo from "../logo.svg";

import { routes } from "./routes";

export const Navigation = () => {
	return (
		<Suspense fallback={<span>Cargando</span>}>
			<BrowserRouter>
				<div className="main-layout">
					<nav>
						<img src={logo} alt="React Logo" />
						<ul>
							{routes.map((route) => (
								<li key={route.to}>
									<NavLink
										to={route.to}
										className={({ isActive }) => (isActive ? "nav-active" : "")}
									>
										{route.name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>

					<Routes>
						{routes.map(({ path, component: Component }) => (
							<Route key={path} path={path} element={<Component />} />
						))}
						<Route
							path="*"
							element={<Navigate replace to={routes[0].path} />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</Suspense>
	);
};

export default Navigation;
