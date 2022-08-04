Links úteis
  - Link do [figma](https://www.figma.com/file/h2VIN7X7U5mwAklA3lhOrZ/atividade-cruid-context-api-atividade)
  - [Projeto de exemplo](https://kenzie-cruid-context-api.vercel.app/)

---

# 💪 Atividade - Context api + CRUD Simples: Criando minha própria pokédex.

## Sobre a atividade: 

Nessa atividade você irá usar a context api do React, que aprendeu nas atividades anteriores para criar a sua própria pokédex ! 
Podendo criar seus próprios pokémons, pegar os pokémons já existentes da api e deletar qualquer pokémon da lista !

## Resultado 

![image](https://user-images.githubusercontent.com/26152669/182768306-7bb32ee7-228f-412f-bd11-10794292a56b.png)

## Mão na massa !

  - Para começar, faça o clone do repositório …
  - Crie o projeto React usando o comando: `yarn create react-app <nome do projeto ou . >`
  - Após isso, entre na pasta criada e abra seu projeto no seu editor. Rode o comando `yarn start` para iniciar o servidor com seu app.
  - Crie um contexto chamado `PokemonContext`, nele você ira colocar os principais estados da aplicação
  - Dentro do contexto vamos criar um estado chamado `pokemonsLit`
  - Agora dentro do `index.js` importamos o provider do nosso contexto `PokemonContext`
  - E dentro do nosso `App.jsx` podemos começar a popular o nosso estado de pokemons 
  - Para isso faça uma requisição na api de pokemons com o seguinte endpoint
    ```
      https://pokeapi.co/api/v2/pokemon/?limit=151
    ```
  - Feito isso use os dados gerados pela requisição para popular o seu estado de pokemons dentro do contexto
  - Agora criaremos um outro componente chamado `ListPokemons` para exibir na tela os pokemons que foram puxados da api
    - Esse componente deve exibir os pokemons a partir do estado dentro do contexto
    - Lembre-se de adicionar também a opção de remover um pokemon da lista
  - Feito a exibição, criaremos agora um novo componente na aplicação, chamado de `CreatePokemons`, onde criaremos um novo pokemon a partir de um formulário
    - Assim como o anterior ele também deve manipular o estado do contexto, adicionando o novo pokemon no nosso estado de `pokemons`

---


E pronto, fizemos um CRUD completo usando context api;


---

```txt
  Dica: Crie as funções de deletar e criar, um pokemon, dentro do provider do próprio PokemonContext
```
