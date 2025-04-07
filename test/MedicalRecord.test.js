const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MedicalRecord", function () {
  let medicalRecord;
  let owner, doctor;

  before(async function () {
    [owner, doctor] = await ethers.getSigners();
    const MedicalRecord = await ethers.getContractFactory("MedicalRecord");
    medicalRecord = await MedicalRecord.deploy();
  });

  it("Should add and retrieve a medical record", async function () {
    // Add record as doctor
    await medicalRecord.connect(doctor).addRecord("patient1", "QmHashExample123");
    
    // Get records
    const records = await medicalRecord.getRecords("patient1");

    // Verify
    expect(records.length).to.equal(1);
    expect(records[0].patientId).to.equal("patient1");
    expect(records[0].recordHash).to.equal("QmHashExample123");
    expect(records[0].doctor).to.equal(doctor.address);
  });
});