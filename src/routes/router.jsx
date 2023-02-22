import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Details from "../pages/Details.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  {
    path: "/details",
    element: <Details />,
  },
]);

export default router;
