import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/App.css";
import MainLayout from "./layouts/MainLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
