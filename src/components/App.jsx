import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Layout from "./Layout/Layout.jsx";
import { refreshUser } from "../redux/auth/operations.js";
import { selectIsRefreshing } from "../redux/auth/selectors.js";
import RestrictedRoute from "./RestrictedRout.jsx";
import PrivateRoute from "./PrivateRoute.jsx"

import HomePage from "../pages/HomePage/HomePage.jsx";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import ContactsPage from "../pages/ContactsPage/ContactsPage.jsx";


function App() {

  // const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
  // const RegistrationPage = lazy(() => import("../pages/RegistrationPage/RegistrationPage.jsx"));
  // const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage.jsx"));
  // const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage.jsx"));

  const isRefreshing = useSelector(selectIsRefreshing);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  
  return isRefreshing ? (
    <div> Refreshiing user please wait...</div>
  ) : (
   (
    <>
      <Layout >
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Routes>
              <Route path="/" element={<HomePage />} />
                <Route path="/register"
                  element={<RestrictedRoute component={<RegistrationPage/>} redirectTo="/contacts"/>} />
                <Route path="/login"
                  element={<RestrictedRoute component={<LoginPage/>} redirectTo="/contacts"/>} />
                <Route path="/contacts"
                  element={<PrivateRoute component={ <ContactsPage />} redirectTo="/" />} />
            </Routes>
            <Toaster position='bottom-right'/>
        {/* </Suspense> */}
      </Layout> 
    </>  
  )
)}

export default App;
