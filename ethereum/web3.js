import Web3 from "web3";


// window.ethereum.request({ method: "eth_requestAccounts" });

// const web3 = new Web3(window.ethereum); // for future 

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    // We are in the browser and metamask is running
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
} else {
    // We are on server and/or user not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/ae6e78a9748b401d967556d1f516c3d9'
    );

    web3 = new Web3(provider);
}



export default web3;