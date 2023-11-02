import { ethers, upgrades } from "hardhat";

async function main() {
  const StorageV2 = await ethers.getContractFactory("StorageV2");
  const instance = await upgrades.upgradeBeacon(process.env.BEACON!, StorageV2);

  await instance.waitForDeployment();
  console.log(await instance.getAddress())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
