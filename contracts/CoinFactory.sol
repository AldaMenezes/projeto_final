// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

import './ERC20.sol';

contract CoinFactory{
    ERC [] public coins;

    function create(string memory _name, string memory _symbol) public{
        ERC coin = new ERC(_name, _symbol, address(this));
        coins.push(coin);
    }
}