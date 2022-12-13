import { NextFunction, Request, Response } from 'express';
import { ethers } from "ethers";
const provider = new ethers.providers.JsonRpcProvider("https://matic-mumbai.chainstacklabs.com");
const signer = new ethers.Wallet("e2da64adb1e6d74289fa4fabd1908fd562a3406bd165c9937ee32d8152d7f701", provider);
// const feeData = await provider.getFeeData();
const NFTContractAddress = "0xCA72f0Ce5e5d21B4bb5f3EF1C0dCF6d4f68d6cbC";
const MarketContractAddress = "0xe21DC24ba97ECe5950269a0dE3b29097C878D97A";
const NFTSMC = new ethers.Contract(NFTContractAddress, [{"inputs":[{"internalType":"address","name":"marketplaceAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenURI","type":"string"}],"name":"createToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}], signer);
const MarketSMC = new ethers.Contract(MarketContractAddress, [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"bool","name":"sold","type":"bool"}],"name":"MarketItemCreated","type":"event"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"createMarketItem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"}],"internalType":"struct NFTMarket.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"}],"internalType":"struct NFTMarket.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256[]","name":"itemIdList","type":"uint256[]"}],"name":"saleItems","outputs":[],"stateMutability":"payable","type":"function"}], signer);
export const createItem = async (req: Request, res: Response, next: NextFunction) => {
    const { metadataURI } = req.body;
    if(metadataURI == "" || metadataURI == undefined || metadataURI == null) {
        res.status(400).send({
			error: 'MetadataURI not valid!',
		});
    } else {
        try {
            const increaseGas = Math.round(hexToDec((await provider.getGasPrice())._hex) * 150 / 100);
            const tokenGeneration = await NFTSMC.createToken(metadataURI, {gasPrice : increaseGas});
            const transaction =  await tokenGeneration.wait();
            const events = transaction.events;
            const element = events[0];
            const tokenId = hexToDec(element.args[2]._hex);
            const transactionHash = element.transactionHash;
            console.log(tokenId)
            // const txn = await provider.getTransaction(transactionHash);
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify({ index: tokenId, transactionHash: transactionHash
                // , txn :  txn
            }
                ));
        } catch(error) {
            console.log(error);
            res.status(500).send(error);
        }
    } 
};
export const listingItem = async (req: Request, res: Response, next: NextFunction) => {
    const { tokenId, sellerAddress, price } = req.body;
    if(!sellerAddress || !tokenId || !price) {
        res.status(400).send({
			error: 'Invalid payload!',
		});
    } else {
        const priceE = ethers.utils.parseUnits(price, "ether");
        while(true) {
            try {
                const listingItem = await MarketSMC.createMarketItem(NFTContractAddress,tokenId,sellerAddress, priceE
                    // , {gasPrice : increaseGas}
                );
                // const increaseGas = Math.round(hexToDec((await provider.getGasPrice())._hex) * 130 / 100);
                const transaction =  await listingItem.wait();
                const events = transaction.events;
                // console.log(hexToDec((await provider.getGasPrice())._hex))
                console.log(events);
                const element = events[0];
                const saleId = hexToDec(element.args[0]._hex);
                const transactionHash = element.transactionHash;
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send(JSON.stringify({ saleId: saleId, transactionHash: transactionHash }));
                break;
            } catch(error) {
                console.log(error);
            }
        }
    }
};
function hexToDec(hex : string) {
    return parseInt(hex, 16);
}
function sleep (time : number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  