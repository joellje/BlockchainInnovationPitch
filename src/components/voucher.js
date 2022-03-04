import React, {useState} from "react";
import classes from "./voucher.module.css";
import ntuc from "../assets/NTUC.png";
import nftuc from "../assets/nftuc.png";

export default function Voucher(props) {

  return (
    <div className={classes.root} onClick={props.toggleModal}>
      <div className={props.expired?classes.voucher1:classes.voucher}>
        <div className={classes.header}>
          <h1 className={classes.text}>Voucher {props.id}</h1>
          <img className={classes.logo1} src={nftuc} />

        </div>
        <img className={classes.logo2} src={ntuc} />
        {props.expired?<h1 style={{paddingLeft:"1rem"}}>Expired</h1>:<></>}
        <div className={classes.btm}>
          <p className={classes.subtext1}>{props.percent}%</p>
          <div>
            <p className={classes.subtext2}>Expiry</p>
            <p className={classes.subtext2}>03/06/22</p>
          </div>
         
        </div>
        <div className={classes.bar}/>
      </div>
    </div>
  );
}
