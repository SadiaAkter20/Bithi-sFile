import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import ListedBook from "./Components/ListedBook/ListedBook.jsx";
import BookDetails from "./Components/BookDetails/BookDetails.jsx";
import ReadPage from "./Components/ReadPage/ReadPage.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import Contacts from "./Components/Contacts/Contacts.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/listbook",
        element: <ListedBook></ListedBook>,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/read",
        element: <ReadPage></ReadPage>,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("../blogs.JSON"),
      },
      {
        path: "/contact",
        element: <Contacts></Contacts>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
