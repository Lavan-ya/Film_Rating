import { Route, Routes } from "react-router-dom";
import Head from "../head";
import Addnewfilm from "../Addnewfilm";
import Filmlisting from "../Filmlisting";
import React from "react";

export default function Routing() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Head />}></Route>
        <Route path="/Addnewfilm" element={<Addnewfilm />} />
        <Route path="/Filmlisting" element={<Filmlisting />} />
      </Routes>
    </div>
  );
}
