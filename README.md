# automation-ksk-site
Automação para o site KSK

:construction: Em construção!!! :construction:

Olá! Seja muito bem vindo!!
Já já colocarei tudo aqui, mas em resumo, segue o que estou fazendo:

1. Automatizando testes manuais para o site da empresa, no qual fui responsável anteriormente para verificar erros e onde aperfeiçoar.

Beleza, Yohan, mas como faço para rodar aqui na minha máquina local?
1. Inicialize o arquivo com o comando:
        $ npm init
2. Agora é só rodar os testes use o comando:
        $ npx cypress open
    ou
        $ npm run testes //isso se você tiver as dependências instaladas!
        
3. Para rodar os testes, sem abrir a interface do Cypress, basta digitar o comando:
        $ npx cypress run
        
    Provavelmente vai ficar visualmente feio, para isso você pode utilizar uma biblioteca para deixar mais bonito. No caso utilizamos o mochawesome. Para tanto escreva o comando:
        $ npx cypress run --reporter mochawesome