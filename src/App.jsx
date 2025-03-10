import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          Mainlayout - --- <Outlet />
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
          index: true,
        },
        {
          path: "about",
          element: <div>About</div>,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
}

export default App;
