// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

/// @title Storage V1
/// @author CCR5
/// @notice This smart contract is used to store numbers
contract StorageV1 {

    /// @notice Stored number
    uint256 public number;

    /// Initialize function (ERC1967)
    /// @param startNumber Inital number
    function initialize(uint256 startNumber) external {
        number = startNumber;
    }

}