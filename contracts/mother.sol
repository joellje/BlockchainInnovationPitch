// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.0;


contract Mother {


    //mapping of expired tokenIDs
    mapping (uint => bool) expired;

    

    //total size of the corresponding collection
    uint size;

    //constructor, init mapping and collection
    constructor (uint _size){
        for (uint i=1; i<=_size; i++){
            expired[i] = false;
        }
        size = _size;
    }

    //check if tokenID is valid
    function checkValidity(uint tokenID) public view returns(bool){
        
        require(tokenID<=size, "TOKEN DOES NOT EXIST");
        require(tokenID>0, "TOKEN DOES NOT EXIST");
        return !expired[tokenID];
    }

    //redeems voucher
    function setRedeemed(uint tokenID) public {
        require(tokenID<=size, "TOKEN DOES NOT EXIST");
        require(tokenID>0, "TOKEN DOES NOT EXIST");
        expired[tokenID] = true;
    }

    //marks the whole collection as expired at the end of the quarter
    function markExpiry() public {
        for (uint i=1; i<=size; i++){
            expired[i] = true;
        }
    }

}   