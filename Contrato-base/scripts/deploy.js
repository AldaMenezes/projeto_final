const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataURL = METADATA_URL;

  const CriptoSpaceContract = await ethers.getContractFactory("CriptoSpace");

  //
  const deployedCriptoSpaceContract = await CriptoSpaceContract.deploy(
    metadataURL,
    whitelistContract
  );

  // Imprime no terminal o endereço do contrato criado
  console.log(
    "Endereço do Contrato Cripto Space:",
    deployedCriptoSpaceContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
