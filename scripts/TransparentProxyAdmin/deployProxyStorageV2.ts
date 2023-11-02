import { ethers, upgrades } from "hardhat";

async function main() {
  const StorageV2 = await ethers.getContractFactory("StorageV2");
  await upgrades.upgradeProxy(process.env.PROXY!, StorageV2);  
  console.log("Storage upgraded")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
