// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SpaceVending {
    string public nometradeEth;

    uint public quantidadeMoedas = 0;
   
    mapping(uint => Moedas) public moedas;

    struct Moedas {
        uint idMoedas;
        string nomeMoedas;
        uint valor;
        address payable owner; // dono
        bool vendida;
    }

    event MoedasEmitida(
        uint idMoedasEmitida,
        string nomeMoedasEmitida,
        uint valorMoedasEmitida,
        address payable owner,
        bool vendida

    );

    event MoedasVedida(
        uint idMoedasVendida,
        string  nomeMoedasVendida,
        uint valorMoedasVendida,
        address payable owner,
        bool vendida

    );

    constructor() {
      nometradeEth = "dAPP SPACE MACHINE"; 
    }

    function emitirMoedas(string memory _nome, uint _valor) public {
        require(bytes(_nome).length > 0); //Verificar se o produto tem nome válido

        require(_valor > 0); //verifica se o valor digitado é valido

        quantidadeMoedas ++; //contabiliza a quantidade de moedas

        moedas[quantidadeMoedas] = Moedas(quantidadeMoedas, _nome, _valor, payable(msg.sender), false); //Inserir moedas no meu estoque

        emit MoedasEmitida(quantidadeMoedas, _nome, _valor,  payable(msg.sender), false);//chamar evento
    }

    function comprarMoedas(uint _id) public payable {
        
        Moedas memory _moedas = moedas[_id];

        address payable _vendedor = _moedas.owner;

        require(_moedas.idMoedas > 0 && _moedas.idMoedas <= quantidadeMoedas); //verifica se o produto que vc quer comprar tem id válido

        require(msg.value >= _moedas.valor); //verificar se tem Ether suficiente na transação

        require(!_moedas.vendida); //verifica se a moeda já não foi vendida

        require(_vendedor != msg.sender); //verifica se o comprador não é o vendedor

        _moedas.owner =  payable(msg.sender);

        moedas[_id] = _moedas; //atualiza o estoque de moedas

        payable(_vendedor).transfer(msg.value); //enviar ao vendedor os Ether da venda de Moedas

        emit MoedasVedida(quantidadeMoedas, _moedas.nomeMoedas, _moedas.valor,  payable(msg.sender), true);
    }


}