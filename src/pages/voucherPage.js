import React from "react";
import classes from "./voucherPage.module.css";
import logo from "../assets/nftuc.png";
import wallet from "../assets/walletlogo.png";
import background from "../assets/background.png";
import Voucher from "../components/voucher";

export default function walletPage() {
  return (
    <div>
      <div className={classes.root}>
        {/* NFT logo*/}

        <img src={logo} className={classes.logo} />

        <Voucher />

        {/*Footer */}
        <img src={background} className={classes.footer}></img>
      </div>
    </div>
  );
}
