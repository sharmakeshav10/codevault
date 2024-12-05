import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import CreatePaste from "./pages/CreatePaste";
import AllPastes from "./pages/AllPastes";
import ViewPaste from "./pages/ViewPaste";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/create-paste",
        element: <CreatePaste />,
      },
      {
        path: "/pastes",
        element: <AllPastes />,
      },
      {
        path: "/pastes/:id",
        element: <ViewPaste />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
