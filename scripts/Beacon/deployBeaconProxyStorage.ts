import { ethers, upgrades } from "hardhat";

async function main() {
  const StorageV1 = await ethers.getContractFactory("StorageV1");
  const instance = await upgrades.deployBeaconProxy(process.env.BEACON!, StorageV1, [100], {
    initializer: "initialize",
    verifySourceCode: true
  });

  await instance.waitForDeployment();
  console.log(await instance.getAddress())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
