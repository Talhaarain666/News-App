import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DashboardPage from "../../pages/dashboard";
import Headlines from "../../pages/dashboard screens/Headlines";
import LoginPage from "../../pages/login";

export default function AppRouting() {
  return (
    <Router>

      <Routes>

        <Route path="/*" element={<DashboardPage />} >
          <Route path='headlines' element={<Headlines />} />
          <Route path='headlines/:id' element={<Headlines />} />
         
        </Route>

        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>

    </Router>
  );
}