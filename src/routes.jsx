import ErrorPage from "./components/ErrorPage";
import App from "./App";
import Home from "./components/Home";
import Lessons from "./components/Lessons";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "lessons", element: <Lessons /> },
    ],
  },
];

export default routes;
