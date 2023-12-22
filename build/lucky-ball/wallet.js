
const ENDPOINT = 'https://api.christmas.lavenes.com';
const BALL = [
  'ce234857-4574-433c-b33a-fb3d17aa9ee5',
  '2267b2df-a372-4623-bd89-9064a1556226',
  '78335243-6d1a-4436-9615-92ad1a64ba05',
  '9ba8ca16-fbfc-489b-9346-7425d26d6210'
]

//CONNECT WALLET
let publicKey;
let walletAddress;
let web3;
let gifts = [];

const connectWallet = async () => {
  publicKey = (await window.solana.connect()).publicKey;
  walletAddress = publicKey.toBase58();

  document.querySelector("#walletAddressHeaderLbl").innerHTML = `${walletAddress.slice(0, 15)}...`;

  const res = await fetch(`${ENDPOINT}/wallet/connect`, { 
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      walletAddress
    })
  });
}

const getBalance = async () => {
  const res = await fetch(`${ENDPOINT}/wallet/${walletAddress}`, { 
    method: 'GET'
  });

  const data = await res.json();

  document.querySelector("#walletTokenBalanceLbl").innerHTML = `${data.balance || 0} XMS`;
  document.querySelector("#walletUsdtBalanceLbl").innerHTML = `${data.usdtBalance || 0} USDT`;
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
      'Content-Type': 'application/json',
      'fin': generateFin()
    },
    body: JSON.stringify(reqBOdy)
  });

  const data = await res.json();

  await getBalance();

  return data;
}

const fetchGift = async () => {
  const res = await fetch(`${ENDPOINT}/gift?walletAddress=${walletAddress}`, { 
    method: 'GET'
  });

  const data = await res.json();

  gifts = data;

  //INSERT HTML
  const rewardContent = document.querySelector("#rewardContent");

  data.forEach((gift, index) => {
    const card = gift.ingredient.map((i) => {
      return `
        <div class="wrapper_reward_group_content_row_text_item">
          <div class="wrapper_reward_group_content_row_text_item_img" style="filter:saturate(${
            i.claimedAmount >= i.amount ? 1 : 0
          })">
            <img src="./asset/img/khung.png" alt="" />
            <img src="${i.reward.banner}" alt="" />
          </div>
          <span>${i.claimedAmount}/${i.amount}</span>
        </div>
      `;
    });

    rewardContent.innerHTML += `
      <p class="wrapper_reward_group_content_title">${gift.name}</p>
      <div class="wrapper_reward_group_content_row">
        <div class="wrapper_reward_group_content_row_text">
          ${card.join("")}
        </div>
        <div class="wrapper_reward_group_content_row_revice">
          <p>Revice</p>
          <div class="wrapper_reward_group_content_row_revice_group">
            <div
              class="wrapper_reward_group_content_row_revice_group_img"
            >
              <img src="./asset/img/qua1.png" alt="" />
            </div>
          </div>
          <button id="btn_reward" ${gift.canClaim ? '' : 'disabled'} onClick="claimReward(${index})">Reward</button>
        </div>
      </div>
    `;
  });
}

const claimReward = async (giftIndex) => {
  const gift = gifts[giftIndex];
  const btn_reward_chirstmas = document.querySelector("#btn_reward");
  const btn_reward_happyNewYear = document.querySelector("#btn_happyNewYear");
  const btn_reward_chirstmas_newYear = document.querySelector(
    "#btn_newYearandChrismast"
  );

  const popup = document.querySelector(".popup");

  const popup_confirm = document.querySelector("#popup_confirm");
  const popyp_success = document.querySelector("#popup_success");
  const popup_title = document.querySelector(".popup_title");

  const btn_popup_cancel = document.querySelector("#btn_cancel_popup");
  const btn_popup_reward = document.querySelector("#btn_reward_popup");

  popup.classList.add("popup_active");

  popup_title.innerHTML = gift.name;

  // Cancel popup
  btn_popup_cancel.addEventListener("click", () => {
    popup.classList.remove("popup_active");
  });

  // Reward
  btn_popup_reward.addEventListener("click",  async() => {
    // display none
    popup_confirm.style.display = "none";

    // display block
    popyp_success.style.display = "flex";

    const res = await fetch(`${ENDPOINT}/gift/exchange`, { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "walletAddress": walletAddress,
        "gift": gift.id
      })
    });

    if(!window.location.pathname.includes('/open.html')) {
      await fetchGift();
    }

    await getBalance();
  });

}

const hidePopupSuccess = () => {
  document.querySelector("#popup_success").style.display = "none";
  document.querySelector(".popup").classList.remove("popup_active");
}

(async () => {
    await connectWallet();
    await getBalance();

    await fetchGift();
})();

if(window.location.pathname.includes('/open.html')) {
  setInterval(() => {
    const ballIndex = Number(
      document.querySelector(".swiper-slide-active").attributes["data-ballIndex"]
        .value
    );

    let price = 0;

    switch(ballIndex) {
      case 0:
        price = 0;
        break;
      case 1:
        price = 10;
        break;
      case 2:
        price = 50;
        break;
      case 3:
        price = 100;
        break;
      default:
        break;
    }

    document.querySelector("#ball-main-price span").innerHTML = `${price || 'Free'} ${price ? 'XMS' : ''}`;
  }, 300);
}

function generateFin() {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var txt = 'Canvas Fingerprint';

  ctx.textBaseline = 'top';
  ctx.font = '14px "Arial"';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#f60';
  ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle = '#069';
  ctx.fillText(txt, 2, 15);
  ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
  ctx.fillText(txt, 4, 17);

  var dataURI = canvas.toDataURL();

  var dataURI = canvas.toDataURL();
  var hash = CryptoJS.SHA256(dataURI).toString();

  return hash;
}