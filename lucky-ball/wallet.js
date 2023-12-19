//CONNECT WALLET
const MMSDK = new MetaMaskSDK.MetaMaskSDK()
let accounts;
let web3;
setTimeout(async () => {
    // Request MetaMask account access
    accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    web3 = new Web3(window.ethereum);
    console.log('Connected:', accounts[0]);

    document.querySelector("#walletAddressHeaderLbl").innerHTML = `${accounts[0].slice(0, 15)}...`;
}, 0)