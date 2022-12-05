const { ethers, upgrades } = require("hardhat");

const UPGRADEABLE_PROXY = "0xf8f5f73e36261e2078CDf80BC41F6a4b5380Ed71";

async function main() {
    const gas = await ethers.provider.getGasPrice()
    const V2Contract = await ethers.getContractFactory("V2");
    console.log("Upgrading V1Contract...");
    let upgrade = await upgrades.upgradeProxy(UPGRADEABLE_PROXY, V2Contract, {
        gasPrice: gas
    });
    console.log("V1 Upgraded to V2");
    console.log("V2 Contract Deployed To:", upgrade.address)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});