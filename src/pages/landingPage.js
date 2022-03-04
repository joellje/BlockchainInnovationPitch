import React from "react";
import "./landingPage.css";
import logo from "../assets/nftuc.png";
import gift from "../assets/giftEmoji.png"
import party from "../assets/party.png"
export default function landingPage() {
  return (
    <div className="mainpage">
        <div className="pseudobar">
          <span className="logoholder">
            <img src={logo} className="logo"/>
          </span>
            <div className="social">
              Social
            </div>
        </div>
        <div className="body">
          <img className="gift" src={gift}/>
        </div>
        <div className="party">
          <img className="partyimg" src={party}/>
        </div>
    </div>
  );
}
