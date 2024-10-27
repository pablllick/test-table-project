import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import Layout from "./components/Layout";
import { useAppDispatch } from "./components/redux/hooks";
import { setCompanies } from "./components/redux/company/companySlice";
import companies from "./mockData/companies";

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(setCompanies(companies));
  }, [dispatch]);
  const router = createBrowserRouter([
    { element: <Layout />, children: [{ path: "/", element: <MainPage /> }] },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
