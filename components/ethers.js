import { ethers } from "ethers";
import { notification } from "antd";

// abi of our contract (Should be inserted inline)
var abi = JSON.parse(
    '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"byfAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethAmount","type":"uint256"}],"name":"Bought","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"RateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Received","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"byfAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethAmount","type":"uint256"}],"name":"Sold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TaxDeducted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ethAmountInWei","type":"uint256"}],"name":"buyBYF","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isUnlocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockTimeBlocks","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWalletBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"byfAmount","type":"uint256"}],"name":"sellBYF","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tradingAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawEther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
);

// Address of our deployed Contract
const contractAddress = "0xbB6f6F1A22b3A5E93EbdF2Ad001ED740B12695bC";

var currentAccount = null;
var receiver = null;

if (process.browser) {
    const ethereum = window.ethereum;
}
    
const openNotificationWithIcon = (type, message, desc) => {
    notification[type]({
        message: message,
        description: desc,
        duration: 10,
    });
};

function isMobileDevice() {
    // Add your logic here to detect if the user is on a mobile device
    // This can be done by checking the user agent string or using libraries like Modernizr
    // For simplicity, I'll assume a basic check
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export const listenmetamaskchange = async () => {
    if (typeof ethereum != "undefined") {
        window.ethereum.on("accountsChanged", handleAccountsChanged);
    } else {
        openNotificationWithIcon(
            "error",
            "Error",
            "Web3 wallet not detected. Install Metamask or TrustWallet to use this website."

        );
    }
};

function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log("Please connect to MetaMask.");
        openNotificationWithIcon("error", "Error", "Please Connect to MetaMask.");
    } else if (accounts[0] != currentAccount) {
        currentAccount = accounts[0];
        console.log(currentAccount);
        openNotificationWithIcon("success", "Connected to Address", currentAccount);
    }
}


export const listenmetamaskchangenotif = async () => {
    if (typeof ethereum !== "undefined") {
        window.ethereum.on("accountsChanged", handleAccountsChangednotif);
    } else {
        openNotificationWithIcon(
            "error",
            "Error",
            "Web3 wallet not detected. Install Metamask or TrustWallet to use this website."
        );
    }
};

export const curracc = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    let accounts = await provider.listAccounts();
    currentAccount = accounts[0];
    //console.log(accounts);
    return currentAccount;
};

export const setreceiveracc = async (account) => {
    receiver = account;
    return receiver;
};

export const connect = async () => {
    if (typeof ethereum != "undefined") {
        await ethereum
            .request({ method: "eth_requestAccounts" })
            .then(handleAccountsChanged)
            .catch((err) => {
                if (err.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    // If this happens, the user rejected the connection request.
                    openNotificationWithIcon("error", "EIP-1193 userRejectedRequest");
                } else {
                    console.error(err);
                    if(isMobileDevice(true)){
                        var newPageLink = document.createElement('a');
                        newPageLink.href = 'help.js'; 
                        newPageLink.textContent = 'Visit New Page';
                        mainContainer.appendChild(newPageLink);
                    }
                }
            });
    } else console.log("Error", "Install Metamask to use this website");
};

export const requestAccount = async () => {
    if (typeof ethereum !== "undefined") {
        try {
            await ethereum.request({ method: "eth_requestAccounts" });
        } catch (err) {
            console.log("Error", err.error.message);
        }
    } else console.log("Error", "Install Metamask to use this website");
    //openNotificationWithIcon("error", "Metamask not detected. Install Metamask to use this website");
};

const getcontract = async () => {
    if (typeof ethereum !== "undefined") {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        return contract;
    }
};

export const statsGlobal = async () => {
    const contract = await getcontract();
    var rRate = await contract.rate();
    var data = { rRate };
    return data;
};

export const buyBYF = async (amounttoken) =>
{
    try{
        const contract = await getcontract();
        var rRate = await contract.rate();
        var amount_eth = (amounttoken/rRate).toString();
        var amount = parseFloat((amount_eth)).toString().slice(0,20);
        console.log("ETH",amount);
        const transaction = await contract.buyBYF(ethers.utils.parseEther(amount) ,{ value: ethers.utils.parseEther(amount) });
        await transaction.wait();
        console.log("Success", "BYF Bought");
        openNotificationWithIcon("success", "BYF Bought", currentAccount);
    }
    catch(err) {
        //alert(err.data.message);
        if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            openNotificationWithIcon("error", "EIP-1193 userRejectedRequest");
        }
        console.log("Error: ", err);
        openNotificationWithIcon("error", err.message);
    }
}

export const sellBYF = async (amounttoken) =>
{
    try{
        const contract = await getcontract();
        const transaction = await contract.sellBYF(ethers.utils.parseEther(amounttoken));
        await transaction.wait();
        console.log("Success", "BYF Sold");
        openNotificationWithIcon("success", "BYF Sold", currentAccount);
    }
    catch(err) {
        //alert(err.data.message);
        if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            openNotificationWithIcon("error", "EIP-1193 userRejectedRequest");
        }
        console.log("Error: ", err);
        openNotificationWithIcon("error", err.message);
    }
}

export const statsUser = async (account) => {
    const contract = await getcontract();
    var rClaim = await contract._tclaimed(account);
    var rClaimtimes = await contract._numclaims(account);
    var rWallet = await contract._rWallet(account);
    var _hasrWallet = await contract._hasrWallet(account);
    var lastClaim = await contract._lastClaim(account);
    var lasttrx = await contract._lastTxtime(account);

    if (_hasrWallet != true) {
        rWallet = "NO REWARDS WALLET";
    }

    var data = { rClaim, rClaimtimes, rWallet, lastClaim, lasttrx };
    return data;
};

export const setrwallet = async (wallet) => {
    const contract = await getcontract();
    try {
        const transaction = await contract.setrewardsWallet(wallet);
        await transaction.wait();
        console.log("Success", "Rewards Wallet Updated");
        openNotificationWithIcon("success", "Rewards Wallet Updated");
    } catch (err) {
        //alert(err.data.message);
        if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            openNotificationWithIcon("error", "EIP-1193 userRejectedRequest");
        }
        console.log("Error: ", err);
        openNotificationWithIcon("error", err.error.message);
    }
};

export const claim = async () => {
    const contract = await getcontract();
    try {
        const transaction = await contract.claimRewards();
        await transaction.wait();
        console.log(
            "Success",
            "Rewards Sent to Rewards Wallet with Trx Hash : ",
            transaction.hash
        );
        openNotificationWithIcon(
            "success",
            "Rewards Sent to Rewards Wallet with Trx Hash : ",
            transaction.hash
        );
    } catch (err) {
        //alert(err.error.message);
        if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            openNotificationWithIcon("error", "EIP-1193 userRejectedRequest");
        }
        console.log("Error: ", err.error.message);
        openNotificationWithIcon("error", err.error.message);
    }
};

export const donate = async (amount) => {
    try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const balance = await provider.getBalance(currentAccount);
        console.log("AMOUNT", amount);
        const tx = signer.sendTransaction({
            to: "0x43a4bec931E50A17F3D45AF74494569ccf1f08eF",
            value: ethers.utils.parseEther(amount.toString()),
        });
    } catch (err) {
        alert(err.error.message);
        if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            openNotificationWithIcon("error", "EIP-1193 userRejectedRequest");
        }
        console.log("Error: ", err);
        openNotificationWithIcon("error", err.error.message);
    }
};
