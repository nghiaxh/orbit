import { RouterProvider } from "react-router";
import router from "./router/index";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
