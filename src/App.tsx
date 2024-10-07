import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import NotFound404Page from "./pages/NotFound404Page";
import PostDetailsPage from "./pages/PostDetailsPage";
import CreatePostPage from "./pages/CreatePostPage";
import {
  createHashRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import PostsProvider from "./context/PostsContext.tsx";

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
  {
    path: "/NotFound404",
    element: <NotFound404Page />,
  },
];

const appRouter = createHashRouter(appRoutes);

const App = () => (
  <PostsProvider>
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>
  </PostsProvider>
);

export default App;
