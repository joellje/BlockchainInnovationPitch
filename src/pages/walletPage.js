import React from "react";
import classes from "./walletPage.module.css";
import logo from "../assets/nftuc.png";
import wallet from "../assets/wallet.png"
import background from "../assets/background.png";

export default function WalletPage() {
  return (
    <div className={classes.root}>
      {/* NFT logo*/}

      <img src={logo} className={classes.logo} />

      {/* Wallet button*/}

      <img src={wallet} className={classes.wallet} />
      <div className={classes.shadow} />

      {/*Footer */}
      <img src={background} className={classes.footer}></img>
    </div>
  );
}
