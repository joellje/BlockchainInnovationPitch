import React, {useState} from "react";
import classes from "./voucher.module.css";
import ntuc from "../assets/NTUC.png";
import nftuc from "../assets/nftuc.png";

export default function Voucher(props) {
  
  return (
    <div className={classes.root} onClick={props.toggleModal}>
      <div className={classes.voucher}>
        <div className={classes.header}>
          <h1 className={classes.text}>Voucher #1355</h1>
          <img className={classes.logo1} src={nftuc} />
        </div>
        <img className={classes.logo2} src={ntuc} />
        <div className={classes.btm}>
          <p className={classes.subtext1}>30%</p>
          <div>
            <p className={classes.subtext2}>Expiry</p>
            <p className={classes.subtext2}>01/01/99</p>
          </div>
        </div>
        <div className={classes.bar}/>
      </div>
    </div>
  );
}
