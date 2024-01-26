import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Root from "./routes/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: "About /"
        },
        {
          path: "/products",
          element: "Products /"
        },
        {
          path: "/products:id",
          element: "ProductSingle /"
        },
        {
          path: "/cart",
          element: "Cart /"
        }
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
