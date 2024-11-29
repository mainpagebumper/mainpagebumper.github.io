// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getFirestore, collection, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseBridgeConfig = {
  apiKey: "AIzaSyDVHxr9WeLKGNMsKCaB4OekfL-1YEqo6Oo",
  authDomain: "shibaarmstrong.firebaseapp.com",
  databaseURL: "https://shibaarmstrong-default-rtdb.firebaseio.com",
  projectId: "shibaarmstrong",
  storageBucket: "shibaarmstrong.appspot.com",
  messagingSenderId: "281062864135",
  appId: "1:281062864135:web:55492a6197e240431ac1a2",
  measurementId: "G-46XVJGXLV7"
};

// Initialize Firebase
const appBridge = initializeApp(firebaseBridgeConfig);
const bridgeDatabase = getFirestore(appBridge);

const shibaAddress = "0x041fDF3F472D2c8A7Ecc458fc3B7F543E6c57EF7";
const shibaABI = [{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"uint256","name":"totalSupply_","type":"uint256"},{"internalType":"address","name":"serviceFeeReceiver_","type":"address"},{"internalType":"uint256","name":"serviceFee_","type":"uint256"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"enum TokenType","name":"tokenType","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"version","type":"uint256"}],"name":"TokenCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"VERSION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const shibaProvider = new ethers.providers.Web3Provider(window.ethereum);
const shibaSigner = shibaProvider.getSigner();
const shibaContract = new ethers.Contract(shibaAddress, shibaABI, shibaSigner);

const stakeAddress = "0x9a2e86ee6d5c28166b6f4391b1c5165a1033f6b9";
const stakeABI = [{"inputs":[],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"_setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"apr","type":"uint256"},{"internalType":"uint256","name":"stakelength","type":"uint256"}],"name":"addApr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"addToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"apr","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"numberDays","type":"uint256"}],"name":"calculateInterest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"createdDate","type":"uint256"}],"name":"calculateNumberDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"positionId","type":"uint256"}],"name":"closePosition","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currenPositionId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"positionId","type":"uint256"}],"name":"getPositionId","outputs":[{"components":[{"internalType":"uint256","name":"positionId","type":"uint256"},{"internalType":"address","name":"walletAddress","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"createdDate","type":"uint256"},{"internalType":"uint256","name":"stakeLength","type":"uint256"},{"internalType":"uint256","name":"apr","type":"uint256"},{"internalType":"uint256","name":"tokenQuantity","type":"uint256"},{"internalType":"bool","name":"open","type":"bool"}],"internalType":"struct shibaarmstake.Position","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPositionIdsForAddress","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenSymbol","type":"string"}],"name":"getToken","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"}],"internalType":"struct shibaarmstake.Token","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenSymbol","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"positionIdsByAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"positions","outputs":[{"internalType":"uint256","name":"positionId","type":"uint256"},{"internalType":"address","name":"walletAddress","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"createdDate","type":"uint256"},{"internalType":"uint256","name":"stakeLength","type":"uint256"},{"internalType":"uint256","name":"apr","type":"uint256"},{"internalType":"uint256","name":"tokenQuantity","type":"uint256"},{"internalType":"bool","name":"open","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"tokenQuantity","type":"uint256"},{"internalType":"uint256","name":"stakelength","type":"uint256"}],"name":"stakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakeapr","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"stakedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenSymbols","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"tokens","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"}],"stateMutability":"view","type":"function"}];

const stakeProvider = new ethers.providers.Web3Provider(window.ethereum);
const stakeSigner = stakeProvider.getSigner();
const stakeContract = new ethers.Contract(stakeAddress, stakeABI, stakeSigner);

let bridgeCode;
let account;
let balance = 0;
const tokenDecimal = 10 ** 9;

let walletStat = document.getElementById("walletStatus");
let tokenBlnc = document.getElementById("tokenbalance");
let stakeMax = document.getElementById("myRange");
let staking = document.getElementById("demo");
let stakings = document.getElementById("demos");

var cAmount = 0;
var sAmount = 0;
var sEarn = 0;

connectwallet.addEventListener('click',(cw) => {
    connect();
});

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    console.log("Read Account...");
    const accounts = await ethereum.request({ method: "eth_accounts" });
    account = accounts[0];
    walletStat.innerHTML = account;

    var url_string = window.location.href; 
    var url = new URL(url_string);
    bridgeCode = url.searchParams.get("tgbridgeid");

    if(bridgeCode != "" && bridgeCode != null)
    {
      getWallet();
    }

    getBalance();
  } else {
    walletStat.innerHTML = "Please install metamask, Switch to BASE Network and add your SHIBA Token";
  }
}

async function getWallet()
{
  let docSnap = await getDoc(doc(bridgeDatabase, 'Connect', 'Wallet', 'Telegram', bridgeCode));

  if (docSnap.exists()) {
    var dataSnap = docSnap.data();
    cAmount = dataSnap.stakeAmount;
  } else {
    bridging();
  }
}

function bridging()
{
  let dbRef = doc(bridgeDatabase, 'Connect', 'Wallet', 'Telegram', bridgeCode);

  setDoc(dbRef,
  {
    UserID: bridgeCode,
    WalletAdd: account,
    stakeAmount: 0,
    stakeEarn: 0
  });
}

async function switchNet() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({
        method: "wallet_addEthereumChain",
        params: [{
            chainId: "0x2105",
            rpcUrls: ["https://mainnet.base.org/"],
            chainName: "Base Mainnet",
            nativeCurrency: {
                name: "ETHERIUM",
                symbol: "ETH",
                decimals: 18
            },
            blockExplorerUrls: ["https://basescan.org/"]
        }]
      });
          
      getBalance();
    }
    catch (error) {
      walletStat.innerHTML =
        "Wrong Network";
    }
  } else {
    walletStat.innerHTML = "Please install metamask, Switch to BASE Network and add your SHIBA Token";
  }
}

async function getBalance() {
  console.log("Reading Balance...");
  let chain = await shibaProvider.getNetwork();
  console.log(chain);
  if(chain.chainId != 8453)
  {
    switchNet();
  }
  else
  {
    balance = await shibaContract.balanceOf(account);
    tokenBlnc.value = balance;
    stakeMax.max = balance / tokenDecimal;
    stakeMax.value = balance / tokenDecimal / 2;
		staking.value = stakeMax.value;
		stakings.innerHTML = stakeMax.value * 10 / 100;

    getStakeList();
  }
}

async function getStakeList() {
  document.getElementById("stakeContainer").innerHTML = "";

  for (let i = 0; i < 999; i++) {
    let stakeList = await stakeContract.positionIdsByAddress(account, i);
    await getStake(stakeList);
  }
}

function saveStake()
{
  let dbRef = doc(bridgeDatabase, 'Connect', 'Wallet', 'Telegram', bridgeCode);

  setDoc(dbRef,
    {
      UserID: bridgeCode,
      WalletAdd: account,
      stakeAmount: sAmount,
      stakeEarn: sEarn
    });

    console.log("SAVESTAKE");
}

async function getStake(order) {
  let stakeListing = await stakeContract.getPositionId(order);
  
  var positionId = stakeListing[0];
  var walletAddress = stakeListing[1];
  var name = stakeListing[2];
  var symbol = stakeListing[3];
  var createdDate = stakeListing[4];
  var stakeLength = stakeListing[5];
  var apr = stakeListing[6];
  var tokenQuantity = stakeListing[7] / tokenDecimal;
  var open = stakeListing[8];

  sAmount += tokenQuantity;
  sEarn += Math.round(apr * tokenQuantity * stakeLength / 100 / 365);

  if(bridgeCode != "" && bridgeCode != null && sAmount > cAmount)
  {
    saveStake();
  }
 
  var currentlength = await stakeContract.calculateNumberDays(parseInt(createdDate));

  if(open && parseInt(currentlength) < parseInt(stakeLength))
  {
    document.getElementById("stakeContainer").innerHTML += '<br /> <div class="alert-secondary bg-transparent"> <h5>Stake ' + tokenQuantity + ' $Shiba</h5> <center><h6>Your Potensial Earn </h6><h1>' + Math.round(apr * tokenQuantity * stakeLength / 100 / 365) + ' $Shiba</h1></center> <h5 style="text-align: right;">' + stakeLength / 30 +' Month with ' + apr + '% APR</h5> </div>';
  }
  else if(open)
  {
    document.getElementById("stakeContainer").innerHTML += '<br /> <button onclick="stakeClose(' + parseInt(positionId) + ')" class="alert-open bg-transparent"> <h5>Stake ' + tokenQuantity + ' $Shiba</h5> <center><h6>CLICK TO CLAIM </h6><h1>' + Math.round(apr * tokenQuantity * stakeLength / 100 / 365) + ' $Shiba</h1></center> <h5 style="text-align: right;">' + stakeLength / 30 +' Month with ' + apr + '% APR</h5> </button>';
  }
  else
  {
    document.getElementById("stakeContainer").innerHTML += '<br /> <div class="alert-close bg-transparent"> <h5>Stake ' + tokenQuantity + ' $Shiba</h5> <center><h6>You Earned </h6><h1>' + Math.round(apr * tokenQuantity * stakeLength / 100 / 365) + ' $Shiba</h1></center> <h5 style="text-align: right;">' + stakeLength / 30 +' Month with ' + apr + '% APR</h5> </div>';
  }
}

stakeBtn.addEventListener('click',(sb) => {
  var stakeApr = document.getElementById("myApr").value;
  setStake(stakeApr)
});

async function setStake(stakeapr) {
  if(parseInt((Math.round(balance) / tokenDecimal)) >= parseInt(staking.value))
  {
		document.getElementById("loadingScreen").style.display = "block";
    var allowed = await allowing();
    if(parseInt(allowed) / tokenDecimal < parseInt(staking.value))
    {
      await approving(_parseUInt256(staking.value));
    }
    await stakeContract.stakeTokens("SHIBA", _parseUInt256(staking.value), parseInt(stakeapr));

    await delay(3000);
		document.getElementById("loadingScreen").style.display = "none";
    getStakeList();
  }
}

async function allowing() {
  console.log("Reading Balance...");
  let chain = await shibaProvider.getNetwork();
  console.log(chain);
  if(chain.chainId != 8453)
  {
    switchNet();
  }
  else
  {
    return await shibaContract.allowance(account, stakeAddress);
  }
}

async function approving(value) {
  console.log("Reading Balance...");
  let chain = await shibaProvider.getNetwork();
  console.log(chain);
  if(chain.chainId != 8453)
  {
    switchNet();
  }
  else
  {
    await shibaContract.approve(stakeAddress, value);
  }
}

stakeCloseBtn.addEventListener('click',(scb) => {
  document.getElementById("loadingScreen").style.display = "block";
  var closeid = document.getElementById("closeID").value;
  closeStake(closeid)
});

async function closeStake(stakeid) {
  await stakeContract.closePosition(stakeid);

  await delay(3000);
  document.getElementById("loadingScreen").style.display = "none";
  getStakeList();
}

async function _parseUInt256(data) {
  console.log(parseInt(ethers.utils.parseUnits(data, 9)));
  return ethers.utils.parseUnits(data, 9);
};

function delay(milliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}