const ENDPOINT = 'http://localhost';
const BALL = [
  'ce234857-4574-433c-b33a-fb3d17aa9ee5',
  '2267b2df-a372-4623-bd89-9064a1556226',
  '78335243-6d1a-4436-9615-92ad1a64ba05',
  '9ba8ca16-fbfc-489b-9346-7425d26d6210'
]

//CONNECT WALLET
const MMSDK = new MetaMaskSDK.MetaMaskSDK()
let accounts;
let walletAddress;
let web3;

const connectWallet = async () => {
  // Request MetaMask account access
  accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  web3 = new Web3(window.ethereum);
  console.log('Connected:', accounts[0]);

  walletAddress = accounts[0].toLowerCase();

  document.querySelector("#walletAddressHeaderLbl").innerHTML = `${walletAddress.slice(0, 15)}...`;

  const res = await fetch(`${ENDPOINT}/wallet/connect`, { 
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fingerprint: '',
      walletAddress
    })
  });
}

const getBalance = async () => {
  const res = await fetch(`${ENDPOINT}/wallet/${walletAddress}`, { 
    method: 'GET'
  });

  const data = await res.json();

  document.querySelector("#walletTokenBalanceLbl").innerHTML = `${data.balance} XMS`;
  document.querySelector("#walletUsdtBalanceLbl").innerHTML = `${data.usdtBalance} USDT`;
}

const openBall = async (index) => {
  const ballId = BALL[index];
  const reqBOdy = {
    walletAddress,
    ball: ballId
  }

  const res = await fetch(`${ENDPOINT}/ball/open`, { 
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reqBOdy)
  });

  const data = await res.json();

  await getBalance();

  console.log(data);

  return data;
}

setTimeout(async () => {
    await connectWallet();
    await getBalance();
}, 0);