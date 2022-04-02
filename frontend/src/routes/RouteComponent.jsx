import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../components/LandingPage";
import { LoginPage } from "../components/LoginPage";

export const RouteComponent = () => {
	return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<LandingPage />}></Route>
      </Routes>
    </div>
  );
};
