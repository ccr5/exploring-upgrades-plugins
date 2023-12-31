import { ethers, upgrades } from "hardhat"

async function main() {
  const StorageV1 = await ethers.getContractFactory("StorageV1")
  const beacon = await upgrades.deployBeacon(StorageV1)
  await beacon.waitForDeployment()
  console.log(await beacon.getAddress())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
