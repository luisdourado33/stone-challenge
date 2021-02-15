# [Stone Challenge](https://gist.github.com/programa-elixir/1bd50a6d97909f2daa5809c7bb5b9a8a) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![npm version](https://img.shields.io/badge/npm-7.0.8-brightgreen)](https://www.npmjs.com/)

Programa de Formação em Elixir | Teste Técnico

### Itens necessários:

- [Node](https://nodejs.org/en/download/)

### Estrutura de pastas

```
│   main.js
|
│   helpers.js
│   listFactory.js
│   messages.js
│   colors.js
|
├───mock
│       items.json
│       emails.json
|
```

### Iniciando a aplicação
Para iniciar a aplicação, primeiramente você precisará definir quais serão os parâmetros de listagem, e para isso, é necessario acessar o arquivo <b>main.js</b> na raíz da aplicação.

#### Listas automáticas
Se você deseja que a aplicação gere listas aleatórias, acesse <b>./main.js</b> e define conforme o código abaixo:

```JavaScript
13 const parameters = {
14   generateRandomicLists: true, // Altere para TRUE
15   amountItems: 5, // Quantidade de items (valores maiores que 0)
16   amountEmails: 5  // Quantidade de e-mails (valores maiores que 0)
17 }
```

#### Listas manuais
Caso opte por criar as suas próprias listas, acesse os arquivos <b>emails.json e items.json</b> que estão localizados na pasta <b>mock</b>.

Os objetos foram definidos com os seguintes padrões de atributos:

<b>items.json</b>
```sh
{
  "items": [
    {
      "name"     : <type: String>,
      "price"    : <type: Integer>,
      "amount"   : <type: Integer>
    }
}
```

<b>emails.json</b>
```sh
{
  "emails": [
    {
      "address"  : <type: String>
    }
}
```
E o arquivo <b>main.js</b> deve estar dessa forma:
```JavaScript
13 const parameters = {
14   generateRandomicLists: false, // Altere para FALSE
15   amountItems: 5, 
16   amountEmails: 5 
17 }
```

Após ter assegurado que todos os parâmetros foram definidos corretamente, podemos iniciar a aplicação com o seguinte comando:

```sh
node main.js
```

### Licença

[MIT License](./LICENSE).
