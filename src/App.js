import "./App.css";
import React from "react";
import LandingPage from "../src/pages/landingPage";
import WalletPage from "./pages/walletPage";
import VoucherPage from "../src/pages/voucherPage";

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
        <Route exact path="/wallet" element={<WalletPage />} />
        <Route exact path="/vouchers" element={<VoucherPage />} />
        <Route path="/*" element={<Navigate to="/landing" />} />
      </Routes>
    </Router>
  );
}

export default App;
