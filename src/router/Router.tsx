import { createBrowserRouter } from "react-router-dom";

import Layout from "@/router/Layout";
import HomePage from "@/pages/HomePage";
import { ROUTES } from "./constant/routes";

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: ROUTES.HOME,
				element: <HomePage />,
			}, // Pages 추가
		],
	},
]);

export default router;