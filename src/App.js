import "./App.css";
import React from "react";
import LandingPage from "../src/pages/landingPage";
import Wallet from "../src/pages/walletlanding";
import Voucher from "../src/pages/wallet";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/landing" element={<LandingPage />} />
        <Route exact path="/wallet" element={<Wallet />} />
        <Route exact path="/vouchers" element={<Voucher />} />
        <Route path="/*" element={<Navigate to="/landing" />} />
      </Routes>
    </Router>
  );
}

export default App;
