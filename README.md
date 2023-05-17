<h1 align="center"> Automação para o site KSK </h1>

<h1> Olá! Seja muito bem vindo!! </h1>

# Índice
* [Sobre o projeto](https://github.com/yohanlimapo/automation-ksk-site/blob/main/README.md#sobre-o-projeto)
* [Itens Tests](https://github.com/yohanlimapo/automation-ksk-site/blob/main/README.md#itens-tests)
* [Como rodar?](https://github.com/yohanlimapo/automation-ksk-site/blob/main/README.md#como-rodar)
* [Tecnologias Utilizadas](https://github.com/yohanlimapo/automation-ksk-site/blob/main/README.md#tecnologias-utilizadas)

# Sobre o projeto

Este projeto visa colocar a mão na massa sobre automação de testes web. Observação: no momento sou recrutador da empresa, atuando 20% do tempo como Quality Assurance.
A empresa fez uma alteração de layout e, para evitar erros em produção, fui chamado para dar uma olhada no site.
Após uma exploração livre no site, identifiquei alguns detalhes que precisavam ser alterados urgentemente, bem como alguns pontos de melhoria. Levei à tona ao time de desenvolvimento, que passou a implementar as sugestões.
No meio tempo, fiz este projeto para deixar rodando e nos facilitar na identificação de um possível erro quando posto em produção. Evitando refazer todos os testes manualmente.

# Itens Tests

Os casos de testes estão separados em 4 pastas, conforme suas funcionalidades:
* Página de carreiras versão Português e outra na versão Inglês
* Página de contato (com um teste faltando, para evitar mandar excesso de mensagens pro time)
* Caso de testes sobre redirecionamento com início na página inicial

# Como rodar?

1. Inicialize o arquivo com o comando:
        <code> $ npm init </code>
2. Agora é só rodar os testes use o comando:
        <code> $ npx cypress open </code>
    ou
        <code> $ npm run testes </code>
        <samp>//isso se você tiver as dependências instaladas!</samp>
3. Para rodar os testes, sem abrir a interface do Cypress, basta digitar o comando:
        <code> $ npx cypress run </code>
    Provavelmente vai ficar visualmente feio, para isso você pode utilizar uma biblioteca para deixar mais bonito. No caso utilizamos o mochawesome. Para tanto escreva o comando:
        <code> $ npx cypress run --reporter mochawesome </code>

# Tecnologias Utilizadas
- ``Cypress``
- ``HTML``