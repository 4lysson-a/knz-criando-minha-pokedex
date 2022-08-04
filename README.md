Links úteis
  - Link do [figma](https://www.figma.com/file/h2VIN7X7U5mwAklA3lhOrZ/atividade-cruid-context-api-atividade)
  - [Projeto de exemplo](https://kenzie-cruid-context-api.vercel.app/)

---

# 💪 Atividade - Context api + CRUD Simples: Criando minha própria pokédex.

## Sobre a atividade: 

Nessa atividade você irá usar a context api do React, que aprendeu nas atividades anteriores, para criar a sua própria pokédex ! 
Sendo possível listar os pokemons vindos da api e adicionar os pokemons selecionados a sua pokedex, excluir da pokedex e fazer uma busca por todos os pokemons 

## Resultado 

![Group 1](https://user-images.githubusercontent.com/26152669/182900699-d70c37a9-42a6-438e-8a66-cbdcb24b3150.png)

**OBS: A estilização é livre, o resultado apresentado acima é apenas um modelo de estilização**
## Mão na massa !

  - Para começar, faça o clone do repositório …
  - Crie o projeto React usando o comando: `yarn create react-app <nome do projeto ou . >`
  - Após isso, entre na pasta criada e abra seu projeto no seu editor. Rode o comando `yarn start` para iniciar o servidor com seu app.
  - Crie um contexto chamado `PokemonContext`, nele você ira colocar os principais estados da aplicação
  - Dentro do contexto vamos criar um estado para armazenar os pokemons vindos da api, `pokemon` e outro estado para armazenar os pokemons adicionados à nossa própria `pokedex`
  - Agora dentro do `index.js` importamos o provider do nosso contexto `PokemonContext`
  - Agora faremos uma requisição na api de pokemons com o seguinte endpoint
    ```
      https://pokeapi.co/api/v2/pokemon/?limit=151
    ```
  - Feito isso use os dados gerados pela requisição para popular o seu estado de pokemons dentro do contexto
  - Agora criaremos um outro componente chamado `ListPokemons` para exibir na tela os pokemons que foram puxados da api
    - Esse componente deve exibir os pokemons a partir do estado dentro do contexto
    - Lembre-se de incluir também a opção de adicionar um pokemon a nossa pokedex
  - Feito a exibição, criaremos agora um novo componente na aplicação, chamado de `SearchPokemons`, onde faremos um campo de busca para filtrar a lista de pokemons, parecido com a hamburgueria mas dessa vez usando os estados do nosso `PokemonContext`
  - Feito isso criaremos agora um componente responsável por exibir em uma lista os pokemons adicionados a nossa própria pokedex, ele deve consumir os dados do estado de `pokedex` criado no `PokemonContext`

---


E pronto, fizemos um CRUD completo usando context api e pokemons 


---

```txt
  Dica: Crie as funções de:  
  
    - deletar 
    - adicionar a pokedex
    - filtrar
    - requisição de get na api
  
  Dentro do próprio contexto de PokemonsContext;
```
