# Ciclo Seguro 
Trabalho de Conclusão do Curso de Sistemas de Informação da UNITINS

## Tecnologias utilizadas
* [Visual Studio Code 1.77.1](https://code.visualstudio.com/)
* Android Studio Electric Eel | 2022.1.1 Patch 2
* XCode 14.0
* Figma 
* JavaScript e React Native
* expo e yarn
* [@react-native-material](https://www.react-native-material.com/)

## Resumo
A violência doméstica é um problema enfrentado por mulheres em todo o mundo, e uma das principais barreiras para a resolução desse problema é a dificuldade que as 
vítimas enfrentam em pedir ajuda. Este trabalho apresenta uma solução para esse problema através da criação de um aplicativo mobile que dispara mensagens de socorro 
com a localização atual do dispositivo para contatos do ciclo seguro definido pela usuária. A ideia é que, ao sentir-se ameaçada, a mulher possa enviar um alerta 
para pessoas de sua confiança, como filhos, amigos e advogados, permitindo que eles a ajudem em tempo hábil. Para a implementação do aplicativo, foi escolhido o 
framework React Native com a linguagem JavaScript, que permite o desenvolvimento de aplicativos para os sistemas operacionais Android e iOS. Além disso, o 
aplicativo foi projetado para incluir um contato automatizado para o número 180, que é uma das linhas de apoio para mulheres em situação de violência. 
Contudo, o aplicativo foi desenvolvido para permitir que a mulher pré-selecione os contatos de sua agenda que receberão automaticamente uma mensagem de 
socorro com sua localização atual em caso de emergência. Isto posto, o intuito da criação deste aplicativo é facilitar o pedido de ajuda das mulheres vítimas de 
violência a partir da criação de um meio mais acessível e célere, que consequentemente irá contribuir para a redução da violência doméstica.

## Clonando e Rodando o Projeto

Para clonar:
```
$ git clone https://github.com/zhydani/CicloSeguro.git
```

Instalar pacotes:
```
$ yarn install
```

Rodar no emulador Expo Go:
```
$ yarn start
```

## Protótipo
Link para visualisar o protótipo completo: [Figma](https://www.figma.com/proto/dh0vO1TSyPmsgoo6NMnIGN/TCC?node-id=1-2&scaling=scale-down&page-id=0%3A1)

![image](https://user-images.githubusercontent.com/43278875/232869198-0768652c-7504-460a-b7f9-89bf2473fa8e.png)
![image](https://user-images.githubusercontent.com/43278875/232870442-06af99f7-310f-4df9-a47e-9d71ff135062.png)

## Objetivos Específicos
* Criar uma tela inicial com um botão central que, ao ser clicado, dispara uma mensagem automatizada com a localização atual do dispositivo para contatos pré-selecionados e o canal de denúncia 180.
* Implementar uma funcionalidade para gerenciar a lista de contatos dentro do aplicativo, permitindo que a usuária adicione contatos da agenda do telefone e remova contatos da lista.
* Desenvolver um modal com a lista de contatos do telefone e um campo de busca para facilitar a adição de contatos à lista do aplicativo.
* Implementar a funcionalidade de disparar uma ligação automatizada para o canal de denúncia 180, depois que as mensagens forem enviadas para os contatos pré-selecionados. 
* Garantir que o aplicativo seja fácil de usar e intuitivo para as usuárias, com uma interface amigável e acessível.
