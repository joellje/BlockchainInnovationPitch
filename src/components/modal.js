import React from "react";
import classes from "./modal.module.css";
import qr from "../assets/QR.png";

export default function Modal(props) {
    const switchModal = () =>{
        props.modalHandler((prev)=>(!prev))
    }
  return (
    <div className={classes.root}>
      <p className={classes.close} onClick={switchModal}>ⓧ</p>
      <img src={qr} className={classes.qr} />
    </div>
  );
}
