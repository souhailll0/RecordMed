// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicalRecord {
    struct Record {
        string patientId;
        string recordHash;
        uint256 timestamp;
        address doctor;
    }
    
    mapping(string => Record[]) private patientRecords;
    
    function addRecord(string memory patientId, string memory recordHash) public {
        patientRecords[patientId].push(Record({
            patientId: patientId,
            recordHash: recordHash,
            timestamp: block.timestamp,
            doctor: msg.sender
        }));
    }
    
    function getRecords(string memory patientId) public view returns (Record[] memory) {
        return patientRecords[patientId];
    }
}