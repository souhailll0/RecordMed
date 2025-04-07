const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const MedicalRecord = await hre.ethers.getContractFactory("MedicalRecord");
  
  // Deploy the contract
  const medicalRecord = await MedicalRecord.deploy();
  
  // Wait for deployment to complete
  await medicalRecord.waitForDeployment();

  console.log(
    "MedicalRecord deployed to:",
    await medicalRecord.getAddress()
  );
}

// Execute deployment
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});