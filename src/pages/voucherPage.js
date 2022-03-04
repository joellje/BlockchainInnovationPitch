import React, { useState } from "react";
import classes from "./voucherPage.module.css";
import logo from "../assets/nftuc.png";
import Voucher from "../components/Voucher";
import Modal from "../components/modal";

export default function WalletPage() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(true);
    console.log("hi");
  };
  return (
    <div>
      <div className={classes.root}>
        {/* NFT logo*/}

        <img src={logo} className={classes.logo} />
        {modal ? <Modal modalHandler={setModal} /> : <></>}
        <div className={classes.vouchers} onClick={toggleModal}>
          <Voucher toggleModal={toggleModal} />
        </div>
      </div>
    </div>
  );
}
