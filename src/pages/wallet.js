import React from "react";
import classes from "./wallet.module.css";
import Voucher from "../components/voucher";

export default function wallet() {
  return (
    <div>
      <div className={classes.root}>hELLo</div>
      <Voucher/>
    </div>
  );
}
