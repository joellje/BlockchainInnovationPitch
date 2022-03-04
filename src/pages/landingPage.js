import React from "react";
import "./landingPage.css";
import logo from "../assets/nftuc.png";
import gift from "../assets/giftEmoji.png"
import party from "../assets/party.png"
import {Button} from "react-bootstrap"
import twitter from "../assets/twitter.png"
import wallet from "../assets/wallet.png"
export default function landingPage() {
  return (
    <div className="mainpage">
        <div className="pseudobar">
          <span className="logoholder">
            <img src={logo} className="logo"/>
          </span>
          <div className="social">
            <img className="socialbutt" src={twitter}/>
          </div>
          <div className="wallet">
            <img className="walletbutt" src={wallet}/>
          </div>
        </div>
        <div className="body">
          <div className="panel">

          </div>
          <div className="mint" unselectable="on">
              Mint now!
          </div>
          <img className="gift" src={gift}/>
        </div>
        <div className="party">
          <img className="partyimg" src={party}/>
        </div>
    </div>
  );
}
