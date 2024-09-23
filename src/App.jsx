import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>   
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
