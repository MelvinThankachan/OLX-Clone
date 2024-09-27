import HomePage from "./pages/HomePage";
import NotFound404Page from "./pages/NotFound404Page";
import PostDetailsPage from "./pages/PostDetailsPage";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound404Page />,
  },
  {
    path: "/item/:postId/:postTitle",
    element: <PostDetailsPage />,
  },
];

const App = () => {
  const router = createBrowserRouter(appRoutes);
  return <RouterProvider router={router} />;
};

export default App;
