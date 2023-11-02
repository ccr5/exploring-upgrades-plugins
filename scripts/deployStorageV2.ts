import { ethers, upgrades } from "hardhat";

const PROXY = "0xc2c83E10B6Fbb22958aa2cF7b5AcAA4fa5bB8395"

async function main() {
  const StorageV2 = await ethers.getContractFactory("StorageV2");
  await upgrades.upgradeProxy(PROXY, StorageV2);  
  console.log("Storage upgraded")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
