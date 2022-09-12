// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IWhitelist.sol";

contract CriptoSpace is ERC721Enumerable, Ownable {
    string _baseTokenURI;
    uint256 public _price = 0.001 ether;
    bool public _paused;

    // o número máximo de Cripto Space NFT
    uint256 public maxTokenIds = 40;
    // número total de tokenIds que podem ser criados
    uint256 public tokenIds;
    IWhitelist whitelist;
// A função boolean para acompanhar se a pré-venda começou ou não
    bool public presaleStarted;

// timestamp para quando a pré-venda terminaria
    uint256 public presaleEnded;
    modifier onlyWhenNotPaused() {
        require(!_paused, "Contracto altualmente esta em pausa");
        _;
    }
    constructor(string memory baseURI, address whitelistContract)
        ERC721("Cripto Space", "CS")
    {
        _baseTokenURI = baseURI;
        whitelist = IWhitelist(whitelistContract);
    }

    /**
     * @dev startPresale starts a presale for the whitelisted addresses
     */
    function startPresale() public onlyOwner {
        presaleStarted = true;
        // Set presaleEnded time as current timestamp + 5 minutes
        // Solidity has cool syntax for timestamps (seconds, minutes, hours, days, years)
        presaleEnded = block.timestamp + 5 minutes;
    }

    /**
     * @dev presaleMint allows a user to mint one NFT per transaction during the presale.
     */
    function presaleMint() public payable onlyWhenNotPaused {
        require(
            presaleStarted && block.timestamp < presaleEnded,
            unicode"A pré-venda iniciou"
        );
        require(
            whitelist.whitelistedAddresses(msg.sender),
            unicode"Sinto muito você não está em nossa whitelisted"
        );
        require(
            tokenIds < maxTokenIds,
            "Exceeded maximum Cripto Space supply"
        );
        require(msg.value >= _price, unicode"você não possui ether suficiente");
        tokenIds += 1;
        _safeMint(msg.sender, tokenIds);
    }

    /**
     * @dev cada usuário pode mintar apenas um NFT por transação
     */
    function mint() public payable onlyWhenNotPaused {
        require(
            presaleStarted && block.timestamp >= presaleEnded,
            unicode"A pré-venda ainda não terminou"
        );
        require(tokenIds < maxTokenIds, "Exceed maximum Cripto Space supply");
        require(msg.value >= _price, unicode"O valor enviado é menor que o esperado");
        tokenIds += 1;
        _safeMint(msg.sender, tokenIds);
    }

    /**
     * @dev _baseURI substitui a implementação ERC721 do Openzeppelin que por padrão 
     * retornou uma string vazia para o baseURI
     */
    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    /**
     * @dev setPaused faz com que o contrato entre em modo de pausa ou não
     */
    function setPaused(bool val) public onlyOwner {
        _paused = val;
    }

  /** 
  * @dev withdraw envia todos ethers do contrato 
  * para o proprietário do contrato 
  */

    function withdraw() public onlyOwner {
        address _owner = owner();
        uint256 amount = address(this).balance;
        (bool sent, ) = _owner.call{value: amount}("");
        require(sent, "Falha ao enviar Ether");
    }

    // Função para receber Ether. o campo msg.data deve ser vazio
    receive() external payable {}

// A função Fallback é chamada quando o campo msg.data é diferente de vazio
    fallback() external payable {}
}
