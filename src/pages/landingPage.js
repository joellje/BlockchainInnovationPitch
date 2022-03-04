import React, { useState } from "react";
import "./landingPage.css";
import logo from "../assets/nftuc.png";
import gift from "../assets/giftEmoji.png"
import party from "../assets/party.png"
import {Button} from "react-bootstrap"
import twitter from "../assets/twitter.png"
import wallet from "../assets/wallet.png"
import ss from "../assets/Shengshiong.png"
import ntuc from "../assets/NTUC.png"
import kfc from "../assets/kfc.png"
import cs from "../assets/coldstorage.png"
export default function LandingPage() {
  const [selector, setSelector] = useState(0)
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
            <div className={selector == 1 ? "selected" : "box"} onClick={() => setSelector(1)}>
              <img className="small" src={ntuc}  />
            </div>
            <div className={selector == 2 ? "selected" : "box"} onClick={() => setSelector(2)}>
              <img className="small" src={cs}  />
            </div>
            <div className={selector == 3 ? "selected" : "box"} onClick={() => setSelector(3)}>
              <img className="small" src={ss} />
            </div>
            <div className={selector == 4 ? "selected-bottom" : "box-bottom"} onClick={() => setSelector(4)}>
              <img className="smallheight" src={kfc}/>
            </div>
          </div>
          <div className="mintholder">
            {
              selector == 1 ? <img className="centerlogo" src={ntuc}/> : null
            }
            {
              selector == 2 ? <img className="centerlogo" src={cs}/> : null
            }
            {
              selector == 3 ? <img className="centerlogo" src={ss}/> : null
            }
            {
              selector == 4 ? <img className="centerlogoheight" src={kfc}/> : null
            }
            <div className="mint" unselectable="on">
                Mint now!
            </div>
          </div>
          <img className="gift" src={gift}/>
        </div>
        <div className="party">
          <img className="partyimg" src={party}/>
        </div>
    </div>
  );
}
