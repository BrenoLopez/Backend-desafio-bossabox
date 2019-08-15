#  Desafio Backend Bossa Box 

Criação de simples API utilizando NODEJS + EXPRESS + MONGODB  (em especifico a hospedagem mongo atlas), VUTTR (Very Useful Tools to Remember), uma api para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.  

## Cadastro de ferramentas [POST /tools]

+ Content-Type: application/json

+ Response 201 Created 

    + Atributos
        - Tools 
                - title: titulo da ferramenta 
                - link: link relacionado aquela ferramenta
                - description: decrição da ferramenta 
                - tags: tags relacionadas à aquela ferramenta  

## Listagem de ferramentas [GET /tools]

+ Response 200 (application/json)

        + Atributos 
            - Tools
                - _id: identificador da ferramenta
                - title: titulo da ferramenta 
                - link: link relacionado aquela ferramenta
                - description: decrição da ferramenta 
                - tags: tags relacionadas à aquela ferramenta  

## Filtrar ferramentas  [GET /tools?tag=node]

+ Response 200 (application/json)

    + Atributos 
            - Tools
                - _id: identificador da ferramenta
                - title: titulo da ferramenta 
                - link: link relacionado aquela ferramenta
                - description: decrição da ferramenta 
                - tags: tags relacionadas à aquela ferramenta  


## Remove uma ferramenta por ID [DELETE /tools/{id}]

+ Paramêtro 
    + id: `1` - Identificador da ferramenta que deseja remover

+ Reponse 204 No Content

