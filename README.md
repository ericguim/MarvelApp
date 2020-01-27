# MarvelApp
Marvel Character APIs


## Requerimentos para executar o projeto:

- #### Docker
> O docker foi utilizado para realizar o host do banco de dados de forma local.
- #### NodeJS
> NodeJS com Typescript foram as tecnologias escolhidas para a implementação do projeto.

#### O projeto está configurado para executar na porta 8080, mas sintam-se livres para fazer utilizar outra porta, apenas alterando a variável de ambiente 'PORT' no arquivo .env

#### Para executar o banco local pelo docker, apenas inicie o serviço através do comando:
>docker-compose up db

#### Para executar a aplicação, utilizar o comando:
>npm run start

#### As documentações necessárias para utilizar a aplicação foram disponibilizadas no swagger ui:
> Com a aplicação já rodando, acesse: 'localhost:8080/swagger'

#### Caso desejem utilizar a aplicação pelo POSTMan, importem a collection:
> https://www.getpostman.com/collections/69ecc853ee65392b740d

#### Para inserção de dados no banco, executem o script:
> src/db_starter.sql
