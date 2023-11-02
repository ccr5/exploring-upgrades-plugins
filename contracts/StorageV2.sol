// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

/// @title Storage V2
/// @author CCR5
/// @notice This smart contract is used to store numbers.
contract StorageV2 {

    /// @notice Stored number
    uint256 public number;

    /// Update the stored number
    /// @param num new number to store
    function store(uint256 num) public {
        number = num;
    }

}