// Como Utilizar

// Instalar truffle, truffle compile, truffle migrate (Truffle está configurado para a porta 8545)

Com o contrato criado você já poderá criar sua Moeda ERC20

// INTERAÇÕES //

- Truffle console
- let instance = await CoinFactory.deployed() --> Você cria uma instância do contrato para poder interagir com ela
- instance para entrar na instância --> Dando uma lidinha você já consegue ver os métodos da nossa instância!
- await instance.create("nome","symbol") --> Esse comando você consegue setar valores no método criado
- await instance.coins(0) --> Função para ver o address da moeda criada, o 0 representa a posição do array da moeda
- let instance2 = await ERC.at("Adress da moeda criada") --> Cria uma instância ERC20 da moeda que você criou

----------------------------- Daqui pra frente você pode intargir com a instance2 usando os methodos definidos

Ex; Para add um supply instance2.mint("valor")
Ex2; await instance2.name() vê o nome da moeda criada
Ex3; await instance2.owner() vê o criador dessa moeda

E assim por diante!