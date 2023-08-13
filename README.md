# Desafio NextJS Genesis Bank.

Projeto criado com NextJS 13 para integração com a API Google Books. <br>

Está hospedado na Vercel e pode ser acessado [CLICANDO AQUI](https://desafio-genesis.vercel.app/)! 

 Ou pode ser instalado para rodar localmente.
  
 ## Instalação e Execução
 
 Para instalação: 
  - clone esse repositório em um repositório local;
  - no terminal navegue até o repositório desafio-genesis e rode comando npm install para instalar todas as dependências necessárias;
```bash
npm install
```

Para execução:

   - abra o terminal e navegue para o repositório desafio-genesis;
   - execute o comando npm run dev;
   - aguarde até o projeto ser aberto; 
   - normalmente o projeto é executado no localhost3000 "http://localhost:3000";
   - entre no seu navegador padrão e acesse esse link;
   - Pronto! O projeto está rodando localmente;
```bash
npm run dev
``` 

## Fluxo do APP

   - Inicia na tela de busca onde é feita uma busca inicial com base em uma pequisa padrão configurada no projeto;
   - Após efetuar uma busca, ela é salva nos cookies do navegador e sempre que iniciar a página essa será a primeira pesquisa;
   - A tela inicial possui uma barra de pesquisa que ao digitar entrega uma lista com os 30 resultados;
   - O resultado da pesquisa é exibido em um grid com cards com as informações do livro: imagem da capa, título e autor; 
   - Ao clicar em um card o site é redirecionado para a página de detalhes, exibindo maiores detalhes sobre o livro;
   - No topo esquerdo da tela há um botão de seta que ao clicar volta para tela de busca;
   
## Bibliotecas e tecnologias

  - [NextJs](https://nextjs.org/)
  - [ReactJs](https://reactjs.org/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/docs/installation)
  - [Axios](https://axios-http.com/ptbr/docs/intro)
  - [React-icons](https://react-icons.github.io/react-icons/)
  - [Js-cookie](https://www.npmjs.com/package/js-cookie)
  - [Vercel](https://vercel.com/)
