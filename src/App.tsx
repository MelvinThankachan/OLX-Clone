import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import NotFound404Page from "./pages/NotFound404Page";
import PostDetailsPage from "./pages/PostDetailsPage";
import CreatePostPage from "./pages/CreatePostPage";
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
  {
    path: "/create-post",
    element: <CreatePostPage />,
  },
];

const appRouter = createBrowserRouter(appRoutes);

const App = () => (
  <AuthProvider>
    <RouterProvider router={appRouter} />
  </AuthProvider>
);

export default App;
