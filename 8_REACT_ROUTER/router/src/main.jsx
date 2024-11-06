import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Contact } from "./routes/Contact.jsx";
// 2 - pagina de erro
import ErrorPage from "./routes/ErrorPage.jsx";
// 1 - Configurando o router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
// 3 - Componente base
import Home from "./routes/Home.jsx";
// 7 - rota dinâmica
import Product from "./routes/Product.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 - COmponente base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      //  7 - rota dinâmica
      {
        path: "products/:id",
        element: <Product />,
      },
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
