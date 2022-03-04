
   
import React, { useState } from "react";
import classes from "./walletPage.module.css";
import logo from "../assets/nftuc.png";
import wallet from "../assets/walletlogo.png"
import background from "../assets/background.png"
import { useNavigate } from "react-router-dom";

export default function WalletPage() {
  let navigate = useNavigate();
 
  const getAccount = async () => {
    //requests user to connect their metamask
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        console.log(accounts);
        localStorage.setItem('wid', accounts[0]);
        navigate(`/vouchers`);
      })
      .catch((err) => {
        console.log(err);
      });
      
  };


  return (
    <div className={classes.root}>

        {/* NFT logo*/}
          <img src = {logo} className = {classes.logo}/>
        

        {/* Wallet button*/}
          <img src = {wallet} className = {classes.wallet} onClick={getAccount}/>
        
        {/*Footer */}
          <img src = {background} className = {classes.footer}></img>
        
    </div>
  );
}