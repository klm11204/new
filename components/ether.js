import { ethers } from "ethers";
import { notification } from "antd";

const ContractAddress1 = "";
const ContractAddress2 = "";
export var currentAccount = null;
const ethpernft = 80000000000000000;

if (process.browser) {
  const ethereum = window.ethereum;
}

const openNotificationWithIcon = (type, message, desc) => {
  notification[type]({
    message: message,
    description: desc,
  });
};

export const listenmetamaskchange = async () => {
  window.ethereum.on("accountsChanged", handleAccountsChanged);
};

function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    console.log("Please connect to MetaMask.");
    openNotificationWithIcon("error", "Error", "Please Connect to MetaMask.");
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
    console.log(currentAccount);
    openNotificationWithIcon("success", "Connected to Address", currentAccount);
  }
}

export const connect = async () => {
  await ethereum
    .request({ method: "eth_requestAccounts" })
    .then(handleAccountsChanged)
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log("Please connect to MetaMask.");
      } else {
        console.error(err);
      }
    });
};

const getcontract = async () => {
  if (typeof ethereum !== "undefined") {
    await connect();
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      ContractAddress1,
      contract1.abi,
      signer
    );
    return contract;
  }
};

const getbadgecontract = async () => {
  if (typeof ethereum !== "undefined") {
    await connect();
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      ContractAddress2,
      contract2.abi,
      signer
    );
    return contract;
  }
};

export const mintPresale = async (numnft) => {
  if (typeof ethereum !== "undefined") {
    if (numnft <= 2) {
      const contract = await getcontract();
      const ethpayable = "0x".concat((ethpernft * numnft).toString(16));
      try {
        const transaction = await contract.mintPresale(numnft, {
          value: ethpayable,
        });
        await transaction.wait();
        console("Success", "Presale Pass Minted!");
        openNotificationWithIcon(
          "success",
          "Minted",
          numnft,
          " Pumpkin Hedz Presale Pass"
        );
      } catch (err) {
        if (currentAccount !== null) {
          console.log("Error: ", err.error.message);
          openNotificationWithIcon("error", err.error.message);
        }
      }
    } else {
      openNotificationWithIcon(
        "error",
        "Only 2 Passes Allowed per Address in Presale."
      );
    }
  } else {
    console.log("Error", "Install Metamask to use this website");
    openNotificationWithIcon("error", "Install Metamask to use this website.");
  }
};

export const mintPass = async (numnft) => {
  if (typeof ethereum !== "undefined") {
    if (numnft <= 10) {
      const contract = await getcontract();
      const ethpayable = "0x".concat((ethpernft * numnft).toString(16));
      try {
        const transaction = await contract.mintPass(numnft, {
          value: ethpayable,
        });
        await transaction.wait();
        console("Success", "Pass Minted!");
        openNotificationWithIcon("success", "Minted", numnft);
      } catch (err) {
        if (currentAccount !== null) {
          console.log("Error: ", err.error.message);
          openNotificationWithIcon("error", err.error.message);
        }
      }
    } else {
      openNotificationWithIcon("error", "Only Number Allowed per transaction.");
    }
  } else {
    console.log("Error", "Install Metamask to use this website");
    openNotificationWithIcon("error", err.error.message);
  }
};

export const mintBadge = async () => {
  if (typeof ethereum !== "undefined") {
    const contract = await getbadgecontract();
    try {
      const transaction = await contract.mintBadge();
      await transaction.wait();
      console("Success", "og Badge Minted!");
      openNotificationWithIcon("success", "Minted ");
    } catch (err) {
      if (currentAccount !== null) {
        console.log("Error: ", err.error.message);
        openNotificationWithIcon("error", err.error.message, "Go to your MetaMask Wallet. Enter byfcoin.net in the MetaMask browser. Connect your wallet by clicking on the connect button.");
      }
    }
  } else {
    console.log("Error", "Install Metamask to use this website");
    openNotificationWithIcon("error", "Install Metamask to use this website.");
  }
};
